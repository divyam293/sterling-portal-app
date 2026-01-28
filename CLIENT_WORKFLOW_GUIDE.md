# Sterling Insurance Portal - Complete Workflow Guide

## Overview
This document explains how the Sterling Insurance Portal works from start to finish. It's designed to help you understand the complete process of how insurance applications are submitted, quotes are created, and policies are bound.

---

## 🎯 System Overview

The Sterling Insurance Portal is a web-based system that manages the entire insurance application and quote process. It has three main user types:

1. **Agency Users** - Insurance agencies that submit applications and manage quotes
2. **Admin Users** - System administrators who review applications and create quotes
3. **Clients** - End customers who receive quotes and sign documents

---

## 📋 Complete Workflow - Step by Step

### Phase 1: Application Submission

#### Step 1: Agency Logs In
- Agency user visits the portal website
- Logs in with their email and password
- Sees their agency dashboard

#### Step 2: Start New Application
- Agency clicks "New Application" or "Submit Application"
- Selects the insurance program (e.g., "Advantage Contractor GL")
- System loads the appropriate application form

#### Step 3: Fill Out Application Form
The agency fills out comprehensive information about their client:

**Company Information:**
- Company name, DBA (Doing Business As)
- Business entity type (LLC, Corporation, etc.)
- Federal Employer Identification Number (FEIN)
- Years in business

**Contact Information:**
- Primary contact name, email, phone
- Business address (with address autocomplete)
- Mailing address (if different)

**Business Details:**
- Industry type
- Class codes (type of work performed)
- Estimated annual revenue
- States where business operates
- Number of employees

**Insurance Requirements:**
- Desired coverage limits
- Deductible preferences
- Any special requirements or endorsements

**Additional Information:**
- Prior insurance history
- Claims history
- Any other relevant details

#### Step 4: Upload Supporting Documents
- Agency can upload relevant documents:
  - Certificates of insurance
  - Prior policies
  - Loss runs
  - Other supporting documents

#### Step 5: Submit Application
- Agency reviews all information
- Clicks "Submit Application"
- System saves the application
- Application status changes to "SUBMITTED"

**What Happens Next:**
- Application appears in the admin dashboard
- Admin receives notification (if email is configured)
- Application is ready for review

---

### Phase 2: Admin Review & Quote Creation

#### Step 6: Admin Reviews Application
- Admin user logs into the system
- Navigates to "Submissions" or "Applications"
- Views the submitted application
- Reviews all information and documents

#### Step 7: Admin Creates Quote
- Admin clicks "Create Quote" or "Enter Quote"
- System loads the quote entry form

#### Step 8: Admin Enters Quote Details

**Carrier Information:**
- Selects insurance carrier
- Enters carrier quote amount
- Adds carrier reference number

**Premium Breakdown:**
- Base premium (from carrier)
- Tax calculation (automatically calculated based on state)
- Policy fees
- Broker fees
- Final total amount

**Policy Details:**
- Effective date (when coverage starts)
- Expiration date (when coverage ends)
- Policy number
- Coverage limits:
  - General Liability
  - Aggregate Limit
  - Fire Legal
  - Medical Expense
  - Deductible

**Additional Information:**
- Selected endorsements (additional coverages)
- Special notes or conditions
- Any other relevant details

#### Step 9: Admin Saves Quote
- Admin reviews all quote information
- Clicks "Save Quote" or "Post Quote"
- System calculates final amounts
- Quote status changes to "POSTED"

**What Happens Next:**
- Quote appears in agency dashboard
- Agency receives notification (if email is configured)
- Quote is ready for agency review

---

### Phase 3: Agency Review & Approval

#### Step 10: Agency Reviews Quote
- Agency user logs in
- Sees new quote in their dashboard
- Clicks on the quote to view details
- Reviews:
  - Premium breakdown
  - Coverage details
  - Policy terms
  - All quote information

#### Step 11: Agency Approves Quote
- Agency reviews and confirms all details
- Clicks "Approve Quote"
- System updates quote status to "APPROVED"

**What Happens Next:**
- Quote is ready for client presentation
- Documents can be generated
- E-signature process can begin

---

### Phase 4: Document Generation

#### Step 12: Generate Documents
Once a quote is approved, the system can generate several documents:

**Proposal Document:**
- Professional proposal PDF
- Includes all quote details
- Premium breakdown
- Coverage information
- Terms and conditions

**Carrier Forms:**
- Required carrier application forms
- Pre-filled with client information
- Ready for signature

**Finance Agreement (if applicable):**
- Payment plan details
- Installment schedule
- Terms and conditions

**Binder (after payment):**
- Proof of insurance
- Policy details
- Effective dates

#### Step 13: Documents Available
- All generated documents are stored in the system
- Agency can download PDFs
- Documents can be emailed to clients
- Documents are ready for e-signature

---

### Phase 5: E-Signature Process

#### Step 14: Send Documents for Signature
- Agency clicks "Send for E-Signature"
- System prepares documents
- E-signature request is sent

**What Happens:**
- Client receives email with signing link (when e-signature is integrated)
- Or agency can share the signing link directly
- Client clicks the link to access signing page

#### Step 15: Client Signs Documents
- Client opens the signing link
- Reviews the documents
- Fills in required information:
  - Name
  - Title
  - Email
  - Phone
- Signs the documents electronically
- Submits the signature

**What Happens Next:**
- System receives signature confirmation
- Documents are marked as "SIGNED"
- Signed documents are stored
- Status updates to "E_SIGN_COMPLETED"

---

### Phase 6: Payment Processing

#### Step 16: Process Payment
- Agency navigates to payment section
- Views the quote amount and breakdown
- Clicks "Process Payment"

#### Step 17: Enter Payment Details
- Agency or client enters payment information:
  - Payment method (credit card, bank transfer)
  - Payment amount
  - Payment details
- Reviews payment summary

#### Step 18: Complete Payment
- Payment is processed securely (when payment integration is active)
- System receives payment confirmation
- Payment receipt is generated
- Status updates to "PAYMENT_COMPLETED"

**What Happens Next:**
- Payment receipt is available for download
- Receipt can be emailed
- System is ready for policy binding

---

### Phase 7: Policy Binding

#### Step 19: Bind Policy
- After payment is received, admin can bind the policy
- Admin clicks "Bind Policy"
- System generates binder document
- Policy is officially bound

#### Step 20: Policy Active
- Policy is now active and in force
- Coverage begins on effective date
- Client is fully insured
- All documents are stored in the system

---

## 🔄 Status Flow

Here's how an application moves through the system:

```
SUBMITTED → POSTED → APPROVED → E_SIGN_COMPLETED → PAYMENT_COMPLETED → BOUND
```

**Status Meanings:**
- **SUBMITTED**: Application has been submitted by agency
- **POSTED**: Admin has created and posted a quote
- **APPROVED**: Agency has approved the quote
- **E_SIGN_COMPLETED**: Documents have been signed
- **PAYMENT_COMPLETED**: Payment has been received
- **BOUND**: Policy is officially bound and active

---

## 👥 User Roles & Permissions

### Agency Users
**Can Do:**
- Submit new applications
- View their applications and quotes
- Approve or reject quotes
- Generate and download documents
- Send documents for e-signature
- Process payments
- View payment history
- Access their dashboard

**Cannot Do:**
- Create quotes (admin only)
- Access other agencies' data
- Modify system settings

### Admin Users
**Can Do:**
- View all applications from all agencies
- Create and edit quotes
- Bind policies
- Generate all documents
- Access admin dashboard
- View system-wide reports
- Manage carriers
- Access all features

**Cannot Do:**
- Submit applications (agencies do this)
- Approve quotes (agencies do this)

---

## 📧 Notifications & Communication

### Email Notifications (When Configured)
The system can send emails for:

**To Agencies:**
- New quote available
- Quote approved confirmation
- Document ready notifications
- Payment received confirmations
- Policy bound notifications

**To Clients:**
- Quote available
- E-signature request
- Payment receipt
- Policy documents

**To Admins:**
- New application submitted
- Quote approval notifications
- Payment received notifications

---

## 📄 Document Types

### Application Documents
- Application form (filled out by agency)
- Supporting documents (uploaded files)

### Quote Documents
- Proposal PDF
- Quote summary
- Premium breakdown

### Signature Documents
- Signed proposal
- Signed carrier forms
- Signed finance agreement (if applicable)

### Policy Documents
- Binder (proof of insurance)
- Policy documents
- Certificates of insurance

### Payment Documents
- Payment receipt
- Invoice
- Payment confirmation

---

## 🔍 Search & Filtering

### Agencies Can:
- Search their applications by:
  - Client name
  - Application number
  - Status
  - Date range
- Filter quotes by:
  - Status (Posted, Approved, etc.)
  - Carrier
  - Date range

### Admins Can:
- Search all applications
- Filter by:
  - Agency
  - Status
  - Carrier
  - Date range
  - Program type

---

## 📊 Dashboard Overview

### Agency Dashboard Shows:
- Total applications
- Pending quotes
- Approved quotes
- Recent activity
- Quick actions
- Status overview

### Admin Dashboard Shows:
- Total applications
- Pending reviews
- Posted quotes
- Bound policies
- System statistics
- Recent activity

---

## 🔐 Security Features

- **User Authentication**: Secure login system
- **Role-Based Access**: Users only see what they're allowed to
- **Data Encryption**: All data is securely stored
- **Secure Payments**: Payment processing is PCI-compliant (when integrated)
- **Document Security**: All documents are securely stored
- **Activity Logging**: All actions are logged for audit purposes

---

## 💡 Key Features

### 1. Address Autocomplete
- When entering addresses, the system suggests addresses as you type
- Automatically fills in street, city, state, and ZIP code
- Improves accuracy and saves time

### 2. Automatic Tax Calculation
- System automatically calculates state tax based on the business location
- Tax rates are up-to-date for all US states
- No manual calculation needed

### 3. Document Generation
- All documents are automatically generated as PDFs
- Professional formatting
- Includes all relevant information
- Ready for printing or emailing

### 4. Real-Time Status Updates
- Status updates immediately when actions are taken
- No page refresh needed
- Clear status indicators

### 5. Activity Logging
- Every action is logged
- Complete audit trail
- Easy to track what happened and when

---

## 🎯 Common Workflows

### Workflow 1: Standard Application to Binding
1. Agency submits application
2. Admin creates quote
3. Agency approves quote
4. Documents generated
5. Documents signed
6. Payment processed
7. Policy bound

**Time Estimate:** Typically 1-3 business days

### Workflow 2: Quick Quote (No Application)
1. Admin creates quote directly
2. Agency reviews and approves
3. Documents generated
4. Continue with signature and payment

**Time Estimate:** Same day possible

### Workflow 3: Application with Financing
1. Standard application process
2. Quote includes financing option
3. Client selects payment plan
4. Finance agreement generated
5. Finance agreement signed
6. Payment plan activated
7. Policy bound

---

## ❓ Frequently Asked Questions

### Q: How long does the process take?
**A:** Typically 1-3 business days from application to bound policy, depending on how quickly each step is completed.

### Q: Can I save an application and finish it later?
**A:** Yes, the system auto-saves as you work. You can come back and complete it later.

### Q: Can I edit a quote after it's posted?
**A:** Admins can edit quotes before they're approved. Once approved, changes may require creating a new quote.

### Q: What if a client doesn't sign the documents?
**A:** The agency can resend the e-signature request or contact the client directly.

### Q: Can I download all documents?
**A:** Yes, all documents can be downloaded as PDFs at any time.

### Q: Is my data secure?
**A:** Yes, the system uses industry-standard security measures to protect all data.

### Q: Can I see the history of an application?
**A:** Yes, the activity log shows the complete history of every action taken.

---

## 🚀 Getting Started

### For Agencies:
1. Log in to the portal
2. Click "New Application"
3. Fill out the form
4. Submit when ready

### For Admins:
1. Log in to the portal
2. Go to "Submissions"
3. Review applications
4. Create quotes as needed

---

## 📞 Support

If you need help or have questions:
- Check the help documentation
- Contact your system administrator
- Review the activity logs for troubleshooting

---

## ✅ System Checklist

Before going live, ensure:
- [ ] All user accounts are created
- [ ] Agencies have access
- [ ] Admins have access
- [ ] Email notifications are configured
- [ ] Payment processing is set up
- [ ] E-signature is configured
- [ ] All integrations are working
- [ ] Test run completed successfully

---

**Document Version:** 1.0  
**Last Updated:** January 2025  
**Status:** Complete Workflow Guide



