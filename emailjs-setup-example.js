// EmailJS Setup Example - For sending confirmation emails to guests
// This is OPTIONAL - only if you want automatic guest confirmation emails

// 1. Sign up at emailjs.com
// 2. Create an email service (Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Get your Public Key, Service ID, and Template ID

// 5. Add EmailJS SDK to index.html (before closing </body> tag):
// <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>

// 6. Replace the submitForm function in script.js with this:

function submitFormWithEmailJS(formData) {
    // Initialize EmailJS (do this once on page load)
    emailjs.init('YOUR_PUBLIC_KEY'); // Get from emailjs.com dashboard

    // Send email to couple (RSVP notification)
    const coupleTemplateParams = {
        guest_name: formData.get('name'),
        guest_email: formData.get('email'),
        attendance: formData.get('attendance'),
        num_guests: formData.get('guests'),
        dietary: formData.get('dietary'),
        message: formData.get('message')
    };

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', coupleTemplateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);

            // Send confirmation email to guest
            const guestTemplateParams = {
                to_email: formData.get('email'),
                guest_name: formData.get('name'),
                wedding_date: 'June 15, 2026',
                venue: 'St. Mary\'s Church'
            };

            return emailjs.send('YOUR_SERVICE_ID', 'GUEST_CONFIRMATION_TEMPLATE_ID', guestTemplateParams);
        })
        .then(function(response) {
            console.log('Guest confirmation sent!', response.status);
            showMessage('Thank you for your RSVP! Check your email for confirmation. 🎉', 'success');
            form.reset();
        })
        .catch(function(error) {
            console.error('FAILED...', error);
            showMessage('Oops! There was a problem. Please try again.', 'error');
        })
        .finally(function() {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Submit RSVP';
        });
}

// Example Email Template for EmailJS:
//
// Subject: RSVP Confirmation - Sarah & James Wedding
//
// Hi {{guest_name}},
//
// Thank you for your RSVP! We're so excited to celebrate with you.
//
// Wedding Details:
// Date: {{wedding_date}}
// Venue: {{venue}}
//
// We look forward to seeing you there!
//
// With love,
// Sarah & James
//
// ---
//
// This is an automated confirmation. Please do not reply to this email.

// Note: EmailJS free tier allows 200 emails/month
// Pricing: $10/month for 1,000 emails if you need more
