/**
 * Production-ready PDF generation service
 * Uses external service for HTML-to-PDF conversion
 */

interface PDFGenerationOptions {
  html: string;
  format?: 'A4' | 'Letter';
  margin?: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
  printBackground?: boolean;
}

/**
 * Generate PDF using PDFShift (Primary - Cost-effective)
 * Fallback: Browserless.io or local Puppeteer for development
 */
export async function generatePDFFromHTML(options: PDFGenerationOptions): Promise<Buffer> {
  const { html, format = 'A4', margin, printBackground = true } = options;

  // Option 1: PDFShift (Primary - Cost-effective)
  // Get API key from: https://pdfshift.io/
  const PDFSHIFT_API_KEY = process.env.PDFSHIFT_API_KEY;
  if (PDFSHIFT_API_KEY) {
    try {
      console.log('[PDF Service] Using PDFShift for PDF generation');
      
      // Convert margin object to string format for PDFShift
      const marginValue = margin 
        ? typeof margin === 'string' 
          ? margin 
          : `${margin.top || '20px'} ${margin.right || '20px'} ${margin.bottom || '20px'} ${margin.left || '20px'}`
        : '20px';
      
      const response = await fetch('https://api.pdfshift.io/v3/convert/pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': PDFSHIFT_API_KEY,
        },
        body: JSON.stringify({
          source: html,
          format: format.toLowerCase(),
          margin: marginValue,
          print_background: printBackground,
        }),
      });

      if (!response.ok) {
        throw new Error(`PDFShift API error: ${response.statusText}`);
      }

      const pdfBuffer = Buffer.from(await response.arrayBuffer());
      return pdfBuffer;
    } catch (error: any) {
      console.error('[PDF Service] PDFShift failed:', error.message);
      throw error;
    }
  }

  // Option 2: Browserless.io (Fallback)
  // Get API key from: https://www.browserless.io/
  const BROWSERLESS_API_KEY = process.env.BROWSERLESS_API_KEY;
  const BROWSERLESS_URL = process.env.BROWSERLESS_URL || 'https://chrome.browserless.io/pdf';

  if (BROWSERLESS_API_KEY) {
    try {
      const response = await fetch(BROWSERLESS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${BROWSERLESS_API_KEY}`,
        },
        body: JSON.stringify({
          html,
          options: {
            format,
            margin: margin || { top: '20px', right: '20px', bottom: '20px', left: '20px' },
            printBackground,
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`Browserless API error: ${response.statusText}`);
      }

      const pdfBuffer = Buffer.from(await response.arrayBuffer());
      return pdfBuffer;
    } catch (error: any) {
      console.error('[PDF Service] Browserless failed:', error.message);
      throw error;
    }
  }

  // Fallback: Try local Puppeteer (for development only)
  if (process.env.NODE_ENV === 'development') {
    try {
      const { getPuppeteerBrowser } = await import('@/lib/utils/puppeteer');
      const browser = await getPuppeteerBrowser();
      const page = await browser.newPage();
      await page.setContent(html, { waitUntil: 'networkidle0' });
      const pdfUint8Array = await page.pdf({
        format,
        printBackground,
        margin: margin || {
          top: '20px',
          right: '20px',
          bottom: '20px',
          left: '20px',
        },
      });
      await browser.close();
      return Buffer.from(pdfUint8Array);
    } catch (error: any) {
      console.error('[PDF Service] Local Puppeteer failed:', error.message);
    }
  }

  throw new Error(
    'PDF generation failed. Please configure PDFSHIFT_API_KEY (or BROWSERLESS_API_KEY) in environment variables.'
  );
}

/**
 * Check if PDF service is configured
 */
export function isPDFServiceConfigured(): boolean {
  return !!(process.env.BROWSERLESS_API_KEY || process.env.PDFSHIFT_API_KEY);
}
