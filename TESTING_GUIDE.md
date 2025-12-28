# Testing Guide - Agency Portal Features

## Overview
This guide covers testing for all recently implemented features:
- **Option B**: Dashboard design applied to all agency pages
- **Option C**: New features (Admin Notes, Enhanced Timeline, Edit Submission)
- **Latest Features**: Search & Filter, Admin Notes on Submissions, Activity Log

---

## Prerequisites
1. Ensure dev server is running: `npm run dev`
2. Log in as an agency user
3. Have test data available (submissions, quotes, tool requests)

---

## Option B: Dashboard Design Testing

### 1. Quotes List Page (`/agency/quotes`)
**Test Steps:**
1. Navigate to `/agency/quotes`
2. Verify:
   - ✅ Sidebar matches dashboard (Sterling logo, navigation)
   - ✅ Header has back button and sign out
   - ✅ Cyan color scheme (#00BCD4) for buttons
   - ✅ Premium card designs with hover effects
   - ✅ Filter dropdown works
   - ✅ Quote cards display correctly
   - ✅ Status badges have proper styling
   - ✅ "View Details" links work

**Expected:** All pages match the agency dashboard design

---

### 2. Submit Page (`/agency/submit`)
**Test Steps:**
1. Navigate to `/agency/submit`
2. Verify:
   - ✅ Sidebar matches dashboard
   - ✅ Header with back button
   - ✅ Form styling matches dashboard
   - ✅ CA Operations toggle styled correctly
   - ✅ Industry/Subtype dropdowns styled
   - ✅ Submit button uses cyan color
   - ✅ Help card styled properly

**Expected:** Form page matches dashboard design

---

### 3. Bound Policies Page (`/agency/bound-policies`)
**Test Steps:**
1. Navigate to `/agency/bound-policies`
2. Verify:
   - ✅ Sidebar matches dashboard
   - ✅ Header with back button
   - ✅ Policy cards styled with hover effects
   - ✅ Status badges styled correctly
   - ✅ Download buttons use cyan color
   - ✅ Empty state displays properly

**Expected:** Page matches dashboard design

---

### 4. Tools Page (`/agency/tools`)
**Test Steps:**
1. Navigate to `/agency/tools`
2. Verify:
   - ✅ Sidebar matches dashboard
   - ✅ Header with back button
   - ✅ Tool cards styled correctly
   - ✅ Hover effects work
   - ✅ Info section styled

**Expected:** Tools page matches dashboard design

---

### 5. Tool Sub-Pages

#### 5.1 Loss Runs (`/agency/tools/loss-runs`)
**Test Steps:**
1. Navigate to `/agency/tools/loss-runs`
2. Verify:
   - ✅ Sidebar matches dashboard
   - ✅ Header with back button
   - ✅ Form inputs styled with cyan focus rings
   - ✅ Submit button uses cyan color
   - ✅ Form submission works

#### 5.2 BOR (`/agency/tools/bor`)
**Test Steps:**
1. Navigate to `/agency/tools/bor`
2. Verify:
   - ✅ Sidebar matches dashboard
   - ✅ Form styled correctly
   - ✅ Info box styled
   - ✅ Submit button works

#### 5.3 Reports (`/agency/tools/reports`)
**Test Steps:**
1. Navigate to `/agency/tools/reports`
2. Verify:
   - ✅ Sidebar matches dashboard
   - ✅ Radio buttons styled
   - ✅ Form fields styled
   - ✅ Privacy notice styled
   - ✅ Submit button works

#### 5.4 History (`/agency/tools/history`)
**Test Steps:**
1. Navigate to `/agency/tools/history`
2. Verify:
   - ✅ Sidebar matches dashboard
   - ✅ Filter tabs styled (cyan for active)
   - ✅ Request cards styled
   - ✅ Status badges styled
   - ✅ Admin notes display (if present)
   - ✅ Download buttons styled

**Expected:** All tool sub-pages match dashboard design

---

### 6. Marketplace Page (`/agency/marketplace`)
**Test Steps:**
1. Navigate to `/agency/marketplace`
2. Verify:
   - ✅ Sidebar matches dashboard
   - ✅ Header with back button
   - ✅ Industry cards styled
   - ✅ Continue button styled
   - ✅ Selection works

**Expected:** Marketplace page matches dashboard design

---

## Option C: New Features Testing

### 1. Admin Notes Display

#### Test on Quote Detail Page
**Test Steps:**
1. Navigate to a quote detail page: `/agency/quotes/[quoteId]`
2. **If admin has added notes:**
   - ✅ Admin Notes section appears
   - ✅ Styled with cyan gradient background
   - ✅ Has document icon
   - ✅ Notes text displays correctly
   - ✅ Proper spacing and typography

3. **If no admin notes:**
   - ✅ Section does not appear (correct behavior)

**How to Add Test Admin Notes:**
- Admin can add notes via admin quote management
- Or directly in database: Update Quote document with `adminNotes` field

**Expected:** Admin notes display prominently when present

---

### 2. Enhanced Timeline Component

#### Test on Quote Detail Page
**Test Steps:**
1. Navigate to a quote detail page: `/agency/quotes/[quoteId]`
2. Find the "Status Timeline" section
3. Verify:
   - ✅ Timeline shows 6 steps:
     1. Quote Created
     2. Quote Approved/Pending
     3. Documents Generated
     4. E-Signature Status
     5. Payment Status
     6. Bind Request Status
   - ✅ Completed steps show green checkmark
   - ✅ Pending steps show clock icon
   - ✅ Each step has description text
   - ✅ Timestamps display for completed actions
   - ✅ Connector lines between steps
   - ✅ Color-coded backgrounds (green for done, gray for pending)
   - ✅ Payment method shows when payment is completed
   - ✅ Visual design matches dashboard

**Expected:** Timeline shows detailed progress with visual indicators

---

### 3. Edit Submission Capability

#### Test on Submission Detail Page
**Test Steps:**
1. Navigate to a submission detail page: `/agency/submissions/[submissionId]`
2. Check submission status:
   - ✅ If status is "ENTERED" or "DRAFT":
     - "Edit Submission" button appears in header
     - Button is cyan colored (#00BCD4)
     - Button links to edit form
   - ✅ If status is "ROUTED" or later:
     - Edit button does NOT appear (correct - cannot edit after routing)

3. **Test Edit Flow:**
   - Click "Edit Submission" button
   - Verify it navigates to edit form
   - (Note: Full edit form functionality may need additional implementation)

**Expected:** Edit button appears only when editing is allowed

---

## Submission Detail Page Testing

### Test Submission Detail Page (`/agency/submissions/[id]`)
**Test Steps:**
1. Navigate to `/agency/submissions/[submissionId]`
2. Verify:
   - ✅ Sidebar matches dashboard
   - ✅ Header with back button
   - ✅ Status badge displays correctly
   - ✅ Edit button appears (if status allows)
   - ✅ Overview section displays
   - ✅ Client information displays
   - ✅ Timeline shows routing logs
   - ✅ Quotes list displays
   - ✅ Application data viewer works
   - ✅ Uploaded files section works
   - ✅ All sections styled consistently

**Expected:** Submission detail page fully functional with dashboard design

---

## Quote Detail Page Testing

### Test Quote Detail Page (`/agency/quotes/[id]`)
**Test Steps:**
1. Navigate to `/agency/quotes/[quoteId]`
2. Verify:
   - ✅ Sidebar matches dashboard
   - ✅ Header with back button
   - ✅ Status badges display
   - ✅ **Enhanced Timeline** component displays
   - ✅ Quote breakdown section
   - ✅ **Admin Notes** section (if notes exist)
   - ✅ Document downloads section
   - ✅ Action buttons (Generate Proposal, E-sign, Payment, Bind)
   - ✅ All buttons styled with cyan color
   - ✅ Workflow sections display correctly

**Expected:** Quote detail page fully functional with all new features

---

## Cross-Browser Testing

### Test on Different Browsers:
- ✅ Chrome/Edge
- ✅ Firefox
- ✅ Safari (if on Mac)

**Verify:**
- ✅ All pages load correctly
- ✅ Sidebar displays properly
- ✅ Colors render correctly
- ✅ Hover effects work
- ✅ Forms submit correctly

---

## Responsive Design Testing

### Test on Different Screen Sizes:
1. **Desktop (1920x1080)**
   - ✅ All elements display correctly
   - ✅ Sidebar visible
   - ✅ Content properly spaced

2. **Tablet (768px)**
   - ✅ Layout adapts
   - ✅ Sidebar may collapse or adjust
   - ✅ Forms remain usable

3. **Mobile (375px)**
   - ✅ Layout stacks properly
   - ✅ Buttons remain accessible
   - ✅ Forms are usable

---

## Performance Testing

### Verify:
- ✅ Pages load quickly
- ✅ No console errors
- ✅ Smooth transitions
- ✅ No layout shifts
- ✅ Images/icons load properly

---

## Common Issues & Solutions

### Issue: Sidebar not showing
**Solution:** Check if sidebar component is included in page

### Issue: Colors not matching
**Solution:** Verify Tailwind classes use #00BCD4 for cyan

### Issue: Admin notes not showing
**Solution:** 
- Check if quote has `adminNotes` field in database
- Verify API returns `adminNotes` field
- Check conditional rendering in component

### Issue: Timeline not showing details
**Solution:**
- Verify submission data includes all required fields
- Check `timelineSubmissionData` useMemo includes all fields
- Verify StatusTimeline component receives correct props

### Issue: Edit button not showing
**Solution:**
- Check submission status (must be ENTERED or DRAFT)
- Verify conditional rendering logic

---

## Test Data Requirements

### For Complete Testing, You Need:
1. **Submissions:**
   - One with status "ENTERED" (for edit testing)
   - One with status "ROUTED" (to verify edit button hidden)
   - One with status "QUOTED"

2. **Quotes:**
   - One with status "APPROVED" (for workflow testing)
   - One with admin notes (for admin notes testing)
   - One with completed workflow (for timeline testing)

3. **Tool Requests:**
   - Various statuses (PENDING, COMPLETED, etc.)
   - Some with admin notes
   - Some with result documents

---

## Quick Test Checklist

- [ ] Quotes list page - design matches dashboard
- [ ] Submit page - design matches dashboard
- [ ] Bound policies page - design matches dashboard
- [ ] Tools page - design matches dashboard
- [ ] All 4 tool sub-pages - design matches dashboard
- [ ] Marketplace page - design matches dashboard
- [ ] Admin notes display on quote detail page
- [ ] Enhanced timeline shows on quote detail page
- [ ] Edit button appears on submission detail (when allowed)
- [ ] All pages have consistent sidebar
- [ ] All pages have consistent header
- [ ] All buttons use cyan color scheme
- [ ] Hover effects work on cards
- [ ] Forms submit correctly
- [ ] Navigation works between pages

---

## Latest Features Testing (Search, Admin Notes, Activity Log)

### 1. Search & Filter on Quotes Page

#### Test Search Functionality
**Test Steps:**
1. Navigate to `/agency/quotes`
2. **Test Search Bar:**
   - ✅ Type a client name in the search box
   - ✅ Verify quotes filter in real-time
   - ✅ Try searching by carrier name
   - ✅ Try searching by submission ID
   - ✅ Clear search and verify all quotes return

3. **Test Carrier Filter:**
   - ✅ Select a carrier from dropdown
   - ✅ Verify only quotes from that carrier show
   - ✅ Select "All Carriers" and verify all quotes return

4. **Test Combined Filters:**
   - ✅ Use search + carrier filter together
   - ✅ Use search + status filter together
   - ✅ Verify results count updates correctly
   - ✅ Click "Clear" button and verify all filters reset

**Expected:**
- Search works for client name, carrier, and submission ID
- Carrier filter shows unique carriers from available quotes
- Results count displays correctly
- Clear button resets all filters
- Filters work together (AND logic)

---

### 2. Admin Notes on Submissions

#### Test Admin Notes Display
**Test Steps:**
1. Navigate to a submission detail page: `/agency/submissions/[submissionId]`
2. **If admin has added notes:**
   - ✅ Admin Notes section appears (styled with cyan gradient)
   - ✅ Has document icon
   - ✅ Notes text displays correctly with proper formatting
   - ✅ Section is positioned prominently (after client info, before timeline)

3. **If no admin notes:**
   - ✅ Section does not appear (correct behavior)

**How to Add Test Admin Notes:**
- Admin can add notes via admin submission management
- Or directly in database: Update Submission document with `adminNotes` field:
  ```javascript
  db.submissions.updateOne(
    { _id: ObjectId("submissionId") },
    { $set: { adminNotes: "Test admin note for agency visibility" } }
  )
  ```

**Expected:** Admin notes display prominently when present, matching quote admin notes style

---

### 3. Activity Log

#### Test Activity Log on Submission Detail Page
**Test Steps:**
1. Navigate to `/agency/submissions/[submissionId]`
2. Scroll to "Activity Log" section
3. Verify:
   - ✅ Activity Log section appears
   - ✅ Shows "No activity recorded yet" if empty
   - ✅ If activities exist:
     - Each activity has a cyan icon
     - Description text displays
     - Performer name and role shown
     - Timestamp displays correctly
     - Additional details show if present
   - ✅ Activities are sorted newest first
   - ✅ Loading spinner shows while fetching

**How to Create Test Activity Logs:**
- Activity logs are created automatically when actions occur
- Or manually create in database:
  ```javascript
  db.activitylogs.insertOne({
    submissionId: ObjectId("submissionId"),
    activityType: "SUBMISSION_CREATED",
    description: "Submission was created",
    performedBy: {
      userId: ObjectId("userId"),
      userName: "Test User",
      userEmail: "test@example.com",
      userRole: "agency"
    },
    createdAt: new Date()
  })
  ```

#### Test Activity Log on Quote Detail Page
**Test Steps:**
1. Navigate to `/agency/quotes/[quoteId]`
2. Scroll to "Activity Log" section (after Admin Notes)
3. Verify:
   - ✅ Same functionality as submission activity log
   - ✅ Shows activities for both the quote and its submission
   - ✅ Activities display correctly

**Expected:** Activity log provides transparency into all actions taken

---

## Testing Checklist for Latest Features

- [ ] **Search & Filter:**
  - [ ] Search by client name works
  - [ ] Search by carrier name works
  - [ ] Search by submission ID works
  - [ ] Carrier filter dropdown works
  - [ ] Results count updates correctly
  - [ ] Clear button resets all filters
  - [ ] Multiple filters work together

- [ ] **Admin Notes on Submissions:**
  - [ ] Admin notes display when present
  - [ ] Styled correctly (cyan gradient)
  - [ ] Section hidden when no notes
  - [ ] Notes text formatting works

- [ ] **Activity Log:**
  - [ ] Activity log section appears on submission detail page
  - [ ] Activity log section appears on quote detail page
  - [ ] Empty state shows correctly
  - [ ] Activities display with all details
  - [ ] Loading state works
  - [ ] Activities sorted by date (newest first)

---

## Notes

- All pages should have consistent design matching the agency dashboard
- Cyan color (#00BCD4) is used for primary actions
- Sidebar is fixed and appears on all pages
- Headers are sticky for better UX
- All new features are optional (conditional rendering)
- Activity logs will populate automatically as actions occur (may need to add logging to specific API endpoints)

---

## Reporting Issues

If you find any issues during testing:
1. Note the page/feature
2. Describe the issue
3. Include browser/device info
4. Check browser console for errors
5. Report with screenshots if possible


