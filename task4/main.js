// Initialize EmailJS
(function() {
    emailjs.init("uSJC1Mw0Z-PGxloop"); // Replace with your EmailJS User ID
})();

// Handle form submission
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Clear previous messages
        const messageDiv = document.getElementById('form-message');
        messageDiv.textContent = '';

        // Send form data using EmailJS
        emailjs.sendForm('service_dp5ye71', 'template_6w0rv0c', this)
          .then(response => {
            // Display success message
            messageDiv.textContent = 'Message sent successfully!';
            messageDiv.style.color = 'green';
            // Reset form after successful submission
            document.getElementById('contact-form').reset();
          })
          .catch(error => {
            // Display error message
            messageDiv.textContent = 'Failed to send message. Please try again.';
            messageDiv.style.color = 'red';
            console.error('Failed to send email:', error);
          });
    });
});
