# How to Check if Contact Form Sent Email

## Current Status

### Static HTML Version (`index.html`)
- **Current behavior**: Opens user's email client with pre-filled information
- **How to check**: User must manually send the email from their email client
- **Email goes to**: Info.bigfishdarts@gmail.com

### Next.js Version (`app/page.tsx`)
- **Current behavior**: Logs to console, doesn't actually send emails yet
- **How to check**: Check browser console or server logs
- **Next step**: Needs email service integration (see below)

## How to Check Current Setup

### 1. Static HTML Version

**Test it:**
1. Open `http://127.0.0.1:5500/index.html` (or your static server)
2. Fill out the sign-up form
3. Click "Join the Waitlist"
4. Your email client should open with pre-filled info
5. Check if email was sent from your email client's "Sent" folder

**Check your email:**
- Go to Info.bigfishdarts@gmail.com
- Check inbox for new sign-ups

### 2. Next.js Version (Current - Console Only)

**Check browser console:**
1. Open `http://localhost:3000`
2. Open browser DevTools (F12 or right-click → Inspect)
3. Go to Console tab
4. Fill out and submit the form
5. You should see: `New sign-up: { name, email, interest, message }`

**Check server logs:**
```bash
# In the terminal where you ran `npm run dev`
# You should see the sign-up data logged
```

**Note**: Currently it only logs - doesn't actually send emails!

## Set Up Automated Email Sending

To actually receive emails automatically, you need to integrate an email service.

### Quick Setup with Resend (Recommended)

1. **Sign up for Resend** (free): https://resend.com
   - Free tier: 3,000 emails/month

2. **Get your API key:**
   - Go to Resend dashboard
   - API Keys → Create API Key
   - Copy the key

3. **Install Resend:**
   ```bash
   npm install resend
   ```

4. **Update the API route** (`app/api/signup/route.ts`):

```typescript
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    const { name, email, interest, message } = data

    // Send email via Resend
    await resend.emails.send({
      from: 'BigFish Darts <onboarding@resend.dev>', // Update with your verified domain
      to: 'Info.bigfishdarts@gmail.com',
      subject: `New BigFish Darts Sign-up: ${name}`,
      html: `
        <h2>New Sign-up from BigFish Darts</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Interest:</strong> ${interest}</p>
        <p><strong>Message:</strong> ${message || 'N/A'}</p>
        <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
      `
    })

    return NextResponse.json({ 
      success: true,
      message: 'Thank you! We\'ll be in touch soon.'
    })
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to send email' },
      { status: 500 }
    )
  }
}
```

5. **Create `.env.local` file** (in project root):
```
RESEND_API_KEY=re_your_api_key_here
```

6. **Restart dev server:**
   ```bash
   # Stop current server (Ctrl+C)
   npm run dev
   ```

7. **Test it:**
   - Fill out the form on `http://localhost:3000`
   - Submit
   - Check Info.bigfishdarts@gmail.com inbox
   - You should receive the email within seconds!

## How to Verify Emails Are Working

### Method 1: Test Form Submission
1. Fill out the sign-up form
2. Submit
3. Check Info.bigfishdarts@gmail.com inbox
4. Look for email with subject: "New BigFish Darts Sign-up: [Name]"

### Method 2: Check Resend Dashboard
1. Go to resend.com dashboard
2. Click "Emails" tab
3. See all sent emails with status (delivered, failed, etc.)

### Method 3: Check Server Logs
```bash
# In terminal running npm run dev
# Look for success messages or errors
```

### Method 4: Check Browser Console
- Open DevTools → Console
- Look for any error messages
- Should see success response from API

## Troubleshooting

### Email not received?
1. **Check spam folder** in Info.bigfishdarts@gmail.com
2. **Check Resend dashboard** - see if email was sent
3. **Check server logs** - look for errors
4. **Verify API key** is correct in `.env.local`
5. **Check Resend domain** - may need to verify your domain

### API route not working?
1. Check if server is running: `npm run dev`
2. Check browser console for errors
3. Check Network tab in DevTools - see if `/api/signup` request succeeded
4. Verify `.env.local` file exists and has correct API key

### Still having issues?
- Check `EMAIL_SETUP.md` for more detailed setup instructions
- Resend has great documentation: https://resend.com/docs

## Quick Test Checklist

- [ ] Resend account created
- [ ] API key obtained
- [ ] `npm install resend` completed
- [ ] API route updated with Resend code
- [ ] `.env.local` file created with API key
- [ ] Dev server restarted
- [ ] Form submitted
- [ ] Email received in Info.bigfishdarts@gmail.com


