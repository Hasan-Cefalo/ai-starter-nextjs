# Technical Plan: Login Page UI Implementation

## Brief Description

This plan outlines the implementation of the `/login` page UI based on the Figma design (node-id: 8775:5326). The design features a split-card layout with an ocean waves image on the left and a white login form on the right, including decorative background elements, logo, welcome message, email input field, and Microsoft sign-in button.

## Design Analysis

From the Figma design, the login page includes:

1. **Background Elements**:
   - Decorative rotated vector graphics (left and right sides)
   - Backdrop blur overlay (white with 70% opacity, 300px blur)
   - Full-screen white background

2. **Main Login Card** (918px × 542px, centered):
   - **Left Section** (418px width): Ocean waves image with rounded corners
   - **Right Section** (500px width): White panel containing:
     - Logo (107px × 130px) - "Sensa" with "Trusted data" tagline
     - Welcome heading: "Welcome to Sensa Unity Portal" (20px, SemiBold, dark text)
     - Email input field (340px width):
       - Rounded corners (20px border radius)
       - Light gray background (#f1f1f1)
       - Gray border (#777777)
       - Envelope icon (20px × 20px) on the left
       - Placeholder: "Enter your organisation mail" (14px, light gray text)
     - Microsoft sign-in button:
       - Rounded corners (20px border radius)
       - Light gray background (rgba(197,195,201,0.46))
       - Microsoft logo icon (16px × 16px) on the left
       - Text: "Sign in with Microsoft" (14px, SemiBold, dark gray)

## Files to Create

### 1. Login Page Route
**File**: `src/app/login/page.tsx`
- Server Component (default)
- Renders the main login page layout
- Imports and uses login form components
- Handles page-level metadata
- Implements background decorative elements
- Uses Next.js Image component for the ocean waves image

### 2. Login Form Component (Client Component)
**File**: `src/components/login/login-form.tsx`
- Client Component (`'use client'` directive)
- Contains the right panel of the login card (white form area)
- Manages form state using React Hook Form
- Integrates Zod validation schema
- Handles form submission
- Displays validation errors
- Includes:
  - Logo display
  - Welcome heading
  - Email input field component
  - Microsoft sign-in button component

### 3. Email Input Component
**File**: `src/components/login/email-input.tsx`
- Client Component (uses React Hook Form)
- Reusable input field component
- Includes envelope icon
- Integrates with React Hook Form's register function
- Displays validation errors
- Accessible (proper labels, ARIA attributes)

### 4. Microsoft Sign-In Button Component
**File**: `src/components/login/microsoft-sign-in-button.tsx`
- Client Component
- Button with Microsoft logo icon
- Handles click event for Microsoft authentication
- Accessible button with proper ARIA labels
- Loading state support (for future API integration)

### 5. Login Validation Schema
**File**: `src/lib/validations/login.ts`
- Zod schema for email validation
- Validates organization email format
- Exports TypeScript type inferred from schema
- Error messages matching design requirements

### 6. Login Page Metadata
**File**: `src/app/login/layout.tsx` (optional)
- Can be added if login-specific metadata is needed
- Otherwise, metadata can be added directly to page.tsx

## Files to Modify

### 1. Tailwind Configuration
**File**: `tailwind.config.js`
- Add custom colors matching Figma design:
  - Input background: `#f1f1f1`
  - Input border: `#777777`
  - Button background: `rgba(197,195,201,0.46)`
  - Text colors for placeholders and buttons
- Add custom border radius values (20px)
- Add backdrop blur utilities if needed

### 2. Global Styles (if needed)
**File**: `src/app/globals.css`
- Add any custom CSS variables for login-specific colors
- Ensure backdrop-filter utilities are available

## Image Assets

### Images to Handle
1. **Ocean Waves Image** (left panel):
   - Source: `http://localhost:3845/assets/0c609d47911a99ae4c1d904f6aeed32df7b53ad3.png` (from Figma)
   - Should be stored in `public/images/login/` directory
   - Use Next.js Image component for optimization

2. **Logo Assets** (SVG groups):
   - Multiple SVG groups for logo composition
   - Store in `public/images/login/` or use inline SVG
   - Consider creating a Logo component

3. **Icons**:
   - Envelope icon (email input)
   - Microsoft logo icon (sign-in button)
   - Can use SVG or icon library (consider react-icons or similar)

4. **Decorative Vector Graphics**:
   - Background vector elements (rotated)
   - Can be implemented as SVG components or background images

## Implementation Details

### Component Structure
```
src/app/login/
  └── page.tsx (Server Component - main page)

src/components/login/
  ├── login-form.tsx (Client Component - form logic)
  ├── email-input.tsx (Client Component - input field)
  ├── microsoft-sign-in-button.tsx (Client Component - button)
  └── login-card.tsx (optional - wrapper for card layout)

src/lib/validations/
  └── login.ts (Zod schema)
```

### Styling Approach
- Use Tailwind CSS utility classes
- Match exact colors from Figma design
- Implement responsive design (mobile-first)
- Ensure proper spacing and alignment
- Use CSS variables for theme consistency
- Implement backdrop blur for overlay effect

### Form Validation Flow
1. User enters email in input field
2. Real-time validation using Zod schema
3. Display inline error messages if validation fails
4. On submit, validate again before proceeding
5. Handle Microsoft authentication flow (future implementation)

### Accessibility Requirements
- Proper semantic HTML structure
- ARIA labels for all interactive elements
- Keyboard navigation support
- Focus management
- Color contrast ratios (WCAG AA minimum)
- Screen reader friendly labels and descriptions

### Responsive Design Considerations
- Desktop: Full design as shown in Figma
- Tablet: Adjust card width, maintain proportions
- Mobile: Stack layout (image on top, form below) or hide image

## Algorithms and Logic

### Email Validation
- Use Zod's email validator
- Optionally add custom validation for organization email domains
- Provide clear error messages

### Form State Management
- Use React Hook Form for form state
- Integrate Zod resolver for validation
- Handle loading states during submission
- Manage error states and display

### Background Decorative Elements
- Position absolute elements for vectors
- Apply rotation transforms (7.022deg and 255.088deg)
- Implement backdrop blur overlay
- Ensure proper z-index layering

## Dependencies

### Existing Dependencies (Already Installed)
- `react-hook-form` - Form management
- `zod` - Schema validation
- `next` - Framework and Image component
- `tailwindcss` - Styling

### Potential New Dependencies (if needed)
- `@hookform/resolvers` - For Zod resolver integration
- Icon library (if not using inline SVG) - e.g., `react-icons` or `lucide-react`

## Testing Considerations

### Unit Tests
- Email input validation
- Form submission handling
- Component rendering
- Error message display

### Integration Tests
- Complete login flow
- Form validation flow
- Microsoft sign-in button interaction

### Accessibility Tests
- Keyboard navigation
- Screen reader compatibility
- Color contrast verification

## Future Enhancements (Not in Current Scope)
- Microsoft authentication integration
- Loading states during authentication
- Error handling for authentication failures
- Redirect logic after successful login
- Remember me functionality
- Forgot password link

