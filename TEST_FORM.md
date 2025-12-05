# How to Test the Contact Form

## Quick Test Methods

### Method 1: Use the Test Page (Easiest)

1. Open `test-email.html` in your browser:
   ```bash
   # If using a local server:
   open http://127.0.0.1:5500/test-email.html
   
   # Or just double-click the file
   ```

2. Fill out the pre-filled test form
3. Click "Send Test Email"
4. Check **Info.bigfishdarts@gmail.com** inbox
5. You should receive the email within seconds!

### Method 2: Test the Actual Form

1. **For Next.js:**
   ```bash
   npm run dev
   # Visit http://localhost:3000
   ```

2. **For Static HTML:**
   ```bash
   # Visit http://127.0.0.1:5500/index.html
   ```

3. Fill out the form with test data:
   - Name: Test User
   - Email: your-test-email@example.com
   - Interest: Any option
   - Message: "This is a test"

4. Submit the form
5. Check **Info.bigfishdarts@gmail.com** inbox

### Method 3: Direct Email Test (No Form)

Just send a test email directly to verify the email address works:

1. Open your email client
2. Send to: **Info.bigfishdarts@gmail.com**
3. Subject: "Test Email"
4. Body: "Testing if this email address is working"

## What to Expect

### ✅ Success Indicators:
- Form submits without errors
- Redirects to FormSubmit.co confirmation page
- Email arrives in Info.bigfishdarts@gmail.com within 1-2 minutes
- Email contains all form fields in a table format

### ❌ Troubleshooting:

**Email not received?**
1. Check **spam/junk folder** in Info.bigfishdarts@gmail.com
2. Wait 2-3 minutes (sometimes there's a slight delay)
3. Check FormSubmit.co status page: https://formsubmit.co/status
4. Verify the email address is correct: Info.bigfishdarts@gmail.com

**Form not submitting?**
1. Check browser console for errors (F12 → Console)
2. Verify internet connection
3. Check if FormSubmit.co is accessible: https://formsubmit.co
4. Try the test page (`test-email.html`) first

**Redirect not working?**
- The form should redirect to FormSubmit.co confirmation page
- Then redirect back to your site with `?submitted=true`
- If it doesn't redirect back, that's okay - the email still sends!

## Test Checklist

- [ ] Form submits without errors
- [ ] Redirects to FormSubmit.co page
- [ ] Email received in Info.bigfishdarts@gmail.com
- [ ] Email contains all form fields (name, email, interest, message)
- [ ] Email is formatted correctly (table format)
- [ ] Success message shows on page (if redirected back)

## Quick Test Script

You can also test via curl (command line):

```bash
curl -X POST https://formsubmit.co/Info.bigfishdarts@gmail.com \
  -d "name=Test User" \
  -d "email=test@example.com" \
  -d "interest=corporate" \
  -d "message=Test message" \
  -d "_subject=Test Email"
```

## Notes

- FormSubmit.co is free and works immediately
- No API keys or setup needed
- Emails typically arrive within 1-2 minutes
- First email might take slightly longer
- Check spam folder if email doesn't arrive




