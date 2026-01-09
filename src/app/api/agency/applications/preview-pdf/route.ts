import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/authOptions";
import connectDB from "@/lib/mongodb";
import Agency from "@/models/Agency";
import { generateApplicationPacketHTML, mapFormDataToPacketData } from "@/lib/services/pdf/ApplicationPacketPDF";

/**
 * POST /api/agency/applications/preview-pdf
 * Generate PDF from form data (preview/download before submission)
 */
export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = session.user as any;
    const { programId, programName, formData, agencyInfo } = await req.json();

    if (!formData) {
      return NextResponse.json(
        { error: "Missing form data" },
        { status: 400 }
      );
    }

    // Try to get agency details from MongoDB, but use defaults if connection fails
    let agency: any = null;
    try {
      await connectDB();
      agency = await Agency.findById(user.agencyId);
    } catch (dbError: any) {
      console.warn("MongoDB connection failed for preview, using default agency info:", dbError.message);
      // Use default agency info or info from request
      agency = agencyInfo || {
        name: "Gamaty Insurance Agency LLC DBA Capital & Co Insurance Services",
        email: "eidan@capcoinsurance.com",
        phone: "(310) 284-2136",
        address: {
          street: "5455 Wilshire Blvd. Suite 1816",
          city: "Los Angeles",
          state: "CA",
          zip: "90036",
        },
      };
    }

    // If agency is still null, use defaults
    if (!agency) {
      agency = {
        name: "Gamaty Insurance Agency LLC DBA Capital & Co Insurance Services",
        email: "eidan@capcoinsurance.com",
        phone: "(310) 284-2136",
        address: {
          street: "5455 Wilshire Blvd. Suite 1816",
          city: "Los Angeles",
          state: "CA",
          zip: "90036",
        },
      };
    }

    // Create a temporary submission ID for preview
    const tempSubmissionId = `preview-${Date.now()}`;

    // Map form data to packet data format
    const packetData = mapFormDataToPacketData(
      formData,
      tempSubmissionId,
      agency,
      undefined, // No quote for preview
      { programName: programName || "Advantage Contractor GL" } as any
    );

    // Generate 12-page application packet HTML
    const htmlContent = generateApplicationPacketHTML(packetData);

    // Generate PDF using production service (PDFShift)
    const { generatePDFFromHTML } = await import('@/lib/services/pdf/PDFService');
    const pdfBuffer = await generatePDFFromHTML({
      html: htmlContent,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '20px',
        right: '20px',
        bottom: '20px',
        left: '20px',
      },
    });

    // Return PDF as response
    return new NextResponse(new Uint8Array(pdfBuffer), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="application-preview-${Date.now()}.pdf"`,
      },
    });
  } catch (error: any) {
    console.error("PDF preview generation error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to generate PDF" },
      { status: 500 }
    );
  }
}








