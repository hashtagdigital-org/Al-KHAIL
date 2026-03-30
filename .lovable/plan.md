

## Certificate Dashboard Implementation Plan

### Phase 1: Authentication & Authorization System

**1.1 Admin Login Page (`/admin/login`)**
- Create a professional login page with Alkhail branding
- Email/password authentication with Supabase Auth
- Auto-redirect logged-in admins to dashboard
- Error handling with user-friendly messages

**1.2 Auth Context & Protected Routes**
- Create `AuthContext` to manage authentication state
- Implement `useAuth` hook for accessing user/session
- Create `ProtectedRoute` component that:
  - Checks if user is authenticated
  - Verifies user has admin role via `is_admin()` function
  - Redirects unauthorized users to login

### Phase 2: Admin Dashboard Layout

**2.1 Dashboard Shell (`/admin`)**
- Professional sidebar navigation with:
  - Dashboard overview
  - Exams management
  - Candidates management
  - Certificates management
  - Settings (for Super Admin)
- Top header with user info, role badge, and logout
- Collapsible sidebar for mobile responsiveness

**2.2 Dashboard Overview Page**
- Statistics cards: Total Exams, Total Candidates, Certificates Issued, Pass Rate
- Recent activity feed
- Quick actions (Create Exam, Add Candidate)

### Phase 3: Exam Management Module

**3.1 Exams List Page (`/admin/exams`)**
- Data table with columns: Title, Course Name, Date, Passing Score, Status, Actions
- Filters by course, date, status (active/inactive)
- Search functionality
- Pagination

**3.2 Create/Edit Exam Dialog**
- Form fields:
  - Exam Title (required)
  - Course Name (required)
  - Passing Score (required, default 60)
  - Exam Date (required)
  - Description (optional)
  - Is Active (toggle)
- Form validation with Zod
- Success/error toasts

### Phase 4: Candidate Management Module

**4.1 Candidates List Page (`/admin/candidates`)**
- Data table with columns: Name, Passport ID, Email, Exam, Score, Status, Actions
- Status badges (Passed/Failed/Pending)
- Filters by exam, status
- Search by name or passport ID
- Pagination

**4.2 Add Single Candidate Dialog**
- Form fields:
  - Full Name (required)
  - Passport/ID Number (required)
  - Email (optional)
  - Exam (select from active exams)
  - Score (number input)
- Auto-calculate status based on score vs passing score

**4.3 Bulk Import Feature**
- CSV/Excel file upload
- Preview imported data before confirming
- Validation with error reporting
- Use Papa Parse for CSV parsing

### Phase 5: Certificate Generation Engine

**5.1 Certificate Management Page (`/admin/certificates`)**
- Data table with columns: Certificate ID, Candidate, Exam, Issue Date, Status, Actions
- Filter by validity, exam, date range
- Actions: View, Download PDF, Revoke

**5.2 Generate Certificate Function**
- Auto-generate certificates for passed candidates
- Certificate ID format: AKRA-YYYY-XXXXX (already in DB)
- Store issuing admin's ID

**5.3 PDF Generation**
- Use `jspdf` library for PDF creation
- A4 size (210x297mm), high resolution
- Certificate design elements:
  - **Header**: Academy logo placeholder, "Certificate of Completion" title
  - **Body**: Candidate name, course name, exam title, issue date
  - **Certificate ID**: Unique identifier prominently displayed
  - **QR Code**: Using `qrcode` library linking to verification URL
  - **Footer**: Academy name, authorized signature placeholder, disclaimer
- Brand colors: Gold (#C4A052), Dark (#2C2C2C), Red accent (#B33030)
- Professional serif typography

### Phase 6: Certificate Verification Page

**6.1 Public Verification Page (`/verify/:certificateId`)**
- Clean, public-facing page (no auth required)
- Input field to enter certificate ID
- Display certificate details if valid
- Show "Invalid Certificate" if not found or revoked
- Shareable URL for QR code

### Phase 7: Routes & Navigation Updates

**7.1 Add New Routes to App.tsx**
```
/admin/login - Admin login page
/admin - Dashboard (protected)
/admin/exams - Exam management (protected)
/admin/candidates - Candidate management (protected)
/admin/certificates - Certificate management (protected)
/verify/:certificateId - Public verification
```

### Files to Create

1. **Pages**:
   - `src/pages/admin/AdminLogin.tsx`
   - `src/pages/admin/AdminDashboard.tsx`
   - `src/pages/admin/ExamsPage.tsx`
   - `src/pages/admin/CandidatesPage.tsx`
   - `src/pages/admin/CertificatesPage.tsx`
   - `src/pages/VerifyCertificate.tsx`

2. **Components**:
   - `src/components/admin/AdminSidebar.tsx`
   - `src/components/admin/AdminHeader.tsx`
   - `src/components/admin/AdminLayout.tsx`
   - `src/components/admin/ProtectedRoute.tsx`
   - `src/components/admin/StatsCard.tsx`
   - `src/components/admin/ExamForm.tsx`
   - `src/components/admin/CandidateForm.tsx`
   - `src/components/admin/BulkImportDialog.tsx`
   - `src/components/admin/CertificatePreview.tsx`
   - `src/components/admin/CertificatePDF.tsx`

3. **Hooks & Context**:
   - `src/hooks/useAuth.tsx` - Auth context and hook
   - `src/hooks/useAdminRole.tsx` - Role checking hook

4. **Dependencies to Add**:
   - `jspdf` - PDF generation
   - `qrcode` - QR code generation
   - `papaparse` - CSV parsing for bulk import

### Security Considerations
- All admin routes protected by authentication + role check
- RLS policies already in place on all tables
- Role verification uses server-side `is_admin()` function
- Certificate verification is public but read-only

### Visual Flow

