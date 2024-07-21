
(function() {
    emailjs.init("user-id"); 


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        
        const messageDiv = document.getElementById('form-message');
        messageDiv.textContent = '';

        
        emailjs.sendForm('service-id', 'template-id', this)
          .then(response => {
            
            messageDiv.textContent = 'Message sent successfully!';
            messageDiv.style.color = 'green';
           
            document.getElementById('contact-form').reset();
          })
          .catch(error => {
            
            messageDiv.textContent = 'Failed to send message. Please try again.';
            messageDiv.style.color = 'red';
            console.error('Failed to send email:', error);
          });
    });
});
