# Contact Form Database Integration

## Overview
The contact form has been updated to store all submissions in MongoDB, including the purpose field that was previously only sent via email.

## Changes Made

### 1. Database Model (`src/lib/models/Contact.ts`)
- Created a new Mongoose model for contact submissions
- Includes all form fields: firstName, lastName, email, company, country, phoneCode, phoneNumber, purpose, message
- Added validation for email format and phone number length
- Includes status tracking (new, contacted, resolved, archived)
- Proper indexing for performance

### 2. API Endpoint (`src/app/api/contact/route.ts`)
- Updated POST endpoint to save data to MongoDB
- Added GET endpoint to retrieve contact submissions with filtering
- Maintains backward compatibility by still forwarding to admin panel API
- Comprehensive validation of all required fields
- Proper error handling and response formatting

### 3. Contact Form (`src/app/contact/page.tsx`)
- Updated form submission to use the new API endpoint
- Added company field to the form
- Maintains EmailJS as backup notification system
- Improved error handling and user feedback
- All form data now properly validated before submission

### 4. Admin Interface (`src/app/admin/contacts/page.tsx`)
- New admin page to view and manage contact submissions
- Filtering by status and purpose
- Pagination support
- Responsive table design
- Real-time data from MongoDB

## Database Schema

```typescript
interface IContact {
  firstName: string;
  lastName: string;
  email: string;
  company?: string;
  country: string;
  phoneCode: string;
  phoneNumber: string;
  purpose: 'general' | 'sales' | 'support' | 'partnership' | 'feedback' | 'career' | 'other';
  message: string;
  status: 'new' | 'contacted' | 'resolved' | 'archived';
  createdAt: Date;
  updatedAt: Date;
}
```

## Purpose Field Options
- **general**: General Inquiry
- **sales**: Project Discussion
- **support**: Technical Support
- **partnership**: Partnership Opportunity
- **feedback**: Feedback & Suggestions
- **career**: Career Inquiries
- **other**: Other

## API Endpoints

### POST /api/contact
Submit a new contact form
```json
{
  "firstName": "John",
  "lastName": "Doe", 
  "email": "john@example.com",
  "company": "Example Corp",
  "country": "United States",
  "phoneCode": "+1",
  "phoneNumber": "1234567890",
  "purpose": "sales",
  "message": "I'm interested in your services"
}
```

### GET /api/contact
Retrieve contact submissions with optional filtering
- Query parameters: `status`, `purpose`, `page`, `limit`
- Returns paginated results with metadata

## Admin Access
Visit `/admin/contacts` to view and manage contact submissions.

## Environment Variables Required
- `MONGODB_URI`: MongoDB connection string (already configured)

## Benefits
1. **Data Persistence**: All contact submissions are now permanently stored
2. **Purpose Tracking**: The purpose field is captured and can be analyzed
3. **Status Management**: Track the progress of each inquiry
4. **Reporting**: Easy to generate reports on inquiry types and volumes
5. **Backup**: EmailJS still works as a notification backup
6. **Admin Interface**: Easy management of submissions without database access

## Testing
1. Submit a contact form with different purpose options
2. Check `/admin/contacts` to see the submissions
3. Test filtering by status and purpose
4. Verify email notifications still work via EmailJS