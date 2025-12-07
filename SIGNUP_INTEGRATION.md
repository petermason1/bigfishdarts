# Sign-up Form Integration Guide

The sign-up form in `signup.html` currently logs data to the console. Here are options to collect and store sign-ups:

## Option 1: Email Service Integration

### Mailchimp
```javascript
// Add to signup.html script section
async function handleSignup(event) {
    event.preventDefault();
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        interest: document.getElementById('interest').value,
        message: document.getElementById('message').value
    };
    
    // Mailchimp API
    const response = await fetch('https://YOUR_API_KEY@YOUR_SERVER.api.mailchimp.com/3.0/lists/YOUR_LIST_ID/members', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email_address: formData.email,
            status: 'subscribed',
            merge_fields: {
                FNAME: formData.name,
                INTEREST: formData.interest,
                MESSAGE: formData.message
            }
        })
    });
    
    // Handle response...
}
```

### SendGrid
```javascript
// SendGrid API
const response = await fetch('https://api.sendgrid.com/v3/contactdb/recipients', {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify([{
        email: formData.email,
        first_name: formData.name,
        custom_fields: {
            interest: formData.interest,
            message: formData.message
        }
    }])
});
```

## Option 2: Backend API

Create a simple Node.js/Express endpoint:

```javascript
// server.js
const express = require('express');
const app = express();
app.use(express.json());

app.post('/api/signup', async (req, res) => {
    const { name, email, interest, message } = req.body;
    
    // Save to database (MongoDB, PostgreSQL, etc.)
    // Or send email notification
    // Or save to file/Google Sheets
    
    res.json({ success: true });
});

app.listen(3000);
```

Then update the form:
```javascript
const response = await fetch('https://yourdomain.com/api/signup', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
});
```

## Option 3: Google Sheets API

Use Google Sheets as a simple database:

```javascript
// Requires Google Sheets API setup
const response = await fetch('https://sheets.googleapis.com/v4/spreadsheets/YOUR_SHEET_ID/values/A1:append?valueInputOption=RAW', {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        values: [[
            new Date().toISOString(),
            formData.name,
            formData.email,
            formData.interest,
            formData.message
        ]]
    })
});
```

## Option 4: Simple Email Notification

Send email directly using a service like EmailJS:

```html
<!-- Add to head -->
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
<script>
    emailjs.init('YOUR_PUBLIC_KEY');
</script>
```

```javascript
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
    name: formData.name,
    email: formData.email,
    interest: formData.interest,
    message: formData.message
});
```

## Option 5: Static File (Simple Testing)

For quick testing, save to a JSON file (requires backend):

```javascript
// Backend endpoint
const fs = require('fs');
app.post('/api/signup', (req, res) => {
    const signups = JSON.parse(fs.readFileSync('signups.json', 'utf8') || '[]');
    signups.push({ ...req.body, timestamp: new Date().toISOString() });
    fs.writeFileSync('signups.json', JSON.stringify(signups, null, 2));
    res.json({ success: true });
});
```

## Quick Setup Recommendation

For fastest setup, use **EmailJS** or **Google Forms**:

1. **EmailJS** - Free tier, no backend needed
2. **Google Forms** - Embed a Google Form instead
3. **Mailchimp** - Free tier, good for email marketing

## Update Contact Email

To update the contact email in the signup page:

```javascript
// In signup.html, update this function:
function updateContactEmail(email) {
    const contactElement = document.getElementById('contactEmail');
    if (contactElement && email) {
        contactElement.textContent = email;
        contactElement.innerHTML = `<a href="mailto:${email}" style="color: var(--union-red);">${email}</a>`;
    }
}

// Call it when page loads:
updateContactEmail('your-email@example.com');
```

Or simply edit the HTML:
```html
<span id="contactEmail">your-email@example.com</span>
```





