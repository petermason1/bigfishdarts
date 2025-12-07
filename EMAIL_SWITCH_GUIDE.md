# How to Switch Email Addresses in FormSubmit.co

## Strategy: Test with Your Email, Then Switch

### Step 1: Test with Your Email First

1. **Temporarily change the email in the form:**
   - In `app/page.tsx`: Change `Info.bigfishdarts@gmail.com` to `your-email@gmail.com`
   - In `index.html`: Change `Info.bigfishdarts@gmail.com` to `your-email@gmail.com`

2. **Submit a test form:**
   - Use `test-email.html` or your actual form
   - Check YOUR email inbox

3. **Verify YOUR email:**
   - You'll receive a verification email from FormSubmit.co
   - Click the verification link
   - Now YOUR email is verified and working

4. **Test that it works:**
   - Submit another test form
   - Check YOUR email - you should receive it!

### Step 2: Switch to Their Email

1. **Change the email back:**
   - In `app/page.tsx`: Change back to `Info.bigfishdarts@gmail.com`
   - In `index.html`: Change back to `Info.bigfishdarts@gmail.com`

2. **Important:** The OTHER person (Info.bigfishdarts@gmail.com) will need to:
   - Submit the form (or you submit a test)
   - Check THEIR email inbox
   - Click the verification link in the email from FormSubmit.co
   - Once verified, it will work for them

## Important Notes

⚠️ **Each email address needs its own verification:**
- Your email verification ≠ Their email verification
- When you switch to their email, THEY must verify it
- But at least you know the form works from your testing!

## Better Approach: Pre-Verify Their Email

Instead of switching back and forth, you could:

1. **Set it to their email from the start**
2. **Submit a test form yourself** (using `test-email.html`)
3. **Tell them:** "Check Info.bigfishdarts@gmail.com for a verification email and click the link"
4. **Once they verify, the form works for everyone!**

This way:
- ✅ Form is already set to their email
- ✅ They just need to verify once
- ✅ No code changes needed later
- ✅ Form works immediately after verification

## Quick Email Switch Commands

If you want to quickly test with your email:

```bash
# Find and replace in Next.js file
sed -i '' 's/Info.bigfishdarts@gmail.com/your-email@gmail.com/g' app/page.tsx

# Find and replace in HTML file  
sed -i '' 's/Info.bigfishdarts@gmail.com/your-email@gmail.com/g' index.html

# Then change back:
sed -i '' 's/your-email@gmail.com/Info.bigfishdarts@gmail.com/g' app/page.tsx
sed -i '' 's/your-email@gmail.com/Info.bigfishdarts@gmail.com/g' index.html
```

Or just edit the files manually - it's only 2 places to change!

## Recommendation

**Best approach:**
1. Set it to Info.bigfishdarts@gmail.com from the start
2. Submit a test form to trigger verification
3. Have them check their email and verify
4. Done! Form works for everyone

This avoids switching emails back and forth.





