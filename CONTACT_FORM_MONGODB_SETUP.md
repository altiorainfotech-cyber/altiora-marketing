# Contact Form MongoDB Integration

This document describes the MongoDB integration for the Altiora website contact form.

## Overview

The contact form now saves all submissions to a MongoDB database in the "contactmessages" collection while also sending email notifications via EmailJS.

## Database Schema

### Contact Model (`src/lib/models/Contact.ts`)

```typescript
{
  firstName: string (required, max 50 chars)
  lastName: string (required, max 50 chars)
  email: string (required, validated format)
  company?: string (optional, max 100 chars)
  country: string (required)
  phoneCode: string (required)
  phoneNumber: string (required, 10-15 digits)
  purpose: enum ['general', 'sales', 'support', 'partnership', 'feedback', 'career', 'other']
  message: string (required, max 1000 chars)
  createdAt: Date (auto-generated)
  updatedAt: Date (auto-generated)
}
```

## API Endpoints

### POST `/api/contact`
Saves a new contact form submission to the database.

**Request Body:**
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
  "message": "I'm interested in your services..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Contact message saved successfully",
  "id": "contact_id"
}
```

### GET `/api/contact`
Retrieves contact submissions with pagination and filtering.

**Query Parameters:**
- `page`: Page number (default: 1)
- `limit`: Items per page (default: 10)
- `purpose`: Filter by purpose (optional)

## Form Flow

1. User fills out the contact form on `/contact`
2. Form validates all required fields client-side
3. On submission:
   - Data is sent to `/api/contact` and saved to MongoDB
   - Email notification is sent via EmailJS
   - Success message is displayed to user

## Admin Panel

Access contact submissions at `/admin/contacts`:
- View all contact submissions
- Filter by purpose
- Paginated results
- Responsive design

## Environment Variables

Required in `.env.local`:
```
MONGODB_URI=your_mongodb_connection_string
```

## Database Collection

Data is stored in the **"contactmessages"** collection in MongoDB.

## Database Indexes

The Contact model includes indexes for:
- `email` (for quick lookups)
- `createdAt` (for sorting)
- `purpose` (for filtering)

## Security Features

- Input validation and sanitization
- Email format validation
- Phone number length validation
- Purpose enum validation
- XSS protection via data sanitization
- Rate limiting (recommended for production)

## Error Handling

The API handles:
- Validation errors (400 status)
- Duplicate entries (409 status)
- Database connection errors (500 status)
- Missing required fields (400 status)

## Future Enhancements

- Email notifications to admins for new submissions
- Export functionality for contact data
- Advanced filtering and search
- Contact status management (new, contacted, resolved)
- Integration with CRM systems