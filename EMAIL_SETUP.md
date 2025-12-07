# Email Setup Guide for Sign-up Form

## Current Setup

The sign-up form is configured to send emails to: **Info.bigfishdarts@gmail.com**

### Static HTML Version (`index.html`)
- Currently uses `mailto:` links (opens user's email client)
- User needs to manually send the email
- Works immediately, no setup needed

### Next.js Version (`app/page.tsx`)
- Has API route at `/api/signup/route.ts`
- Currently just logs to console
- Needs email service integration

## Recommended: Set Up Automated Email Service

### Option 1: Resend (Recommended - Easiest)

1. Sign up at [resend.com](https://resend.com)
2. Get your API key
3. Install Resend:
   ```bash
   npm install resend
   ```
4. Update `app/api/signup/route.ts`:

```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const { name, email, interest, message } = data

    await resend.emails.send({
      from: 'BigFish Darts <onboarding@resend.dev>', // Update with your domain
      to: 'Info.bigfishdarts@gmail.com',
      subject: `New Sign-up: ${name}`,
      html: `
        <h2>New BigFish Darts Sign-up</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Interest:</strong> ${interest}</p>
        <p><strong>Message:</strong> ${message || 'N/A'}</p>
        <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
      `
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
```

5. Add to `.env.local`:
```
RESEND_API_KEY=your_api_key_here
```

### Option 2: SendGrid

1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Create API key
3. Install SendGrid:
   ```bash
   npm install @sendgrid/mail
   ```
4. Update API route with SendGrid code

### Option 3: Gmail SMTP (Nodemailer)

1. Enable "Less secure app access" or use OAuth2
2. Install nodemailer:
   ```bash
   npm install nodemailer
   ```
3. Configure with Gmail credentials

### Option 4: EmailJS (Client-side, No Backend)

1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Add to `app/page.tsx`:
```typescript
import emailjs from '@emailjs/browser'

// In handleSubmit:
await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  {
    to_email: 'Info.bigfishdarts@gmail.com',
    name: formData.name,
    email: formData.email,
    interest: formData.interest,
    message: formData.message
  },
  'YOUR_PUBLIC_KEY'
)
```

## Quick Setup (Recommended: Resend)

1. **Sign up for Resend** (free tier: 3,000 emails/month)
2. **Get API key** from dashboard
3. **Install package**: `npm install resend`
4. **Update API route** with code above
5. **Add environment variable**: Create `.env.local` with `RESEND_API_KEY=...`
6. **Test**: Submit the form and check Info.bigfishdarts@gmail.com

## Current Behavior

- **Static HTML**: Opens email client with pre-filled info (user sends manually)
- **Next.js**: Logs to console (needs email service setup)

## Next Steps

Choose an email service and follow the setup instructions above. Resend is recommended for simplicity and free tier.





