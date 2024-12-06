// Initialize EmailJS
emailjs.init("your_public_key"); // Replace "your_public_key" with your EmailJS public key

// Handle form submission
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    const name = document.querySelector('input[name="name"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

    // Validate inputs
    if (!name || !email || !message) {
        alert("Please fill out all fields before submitting.");
        return;
    }

    // Send the email
    emailjs.send("your_service_id", "your_template_id", {
        from_name: name,
        from_email: email,
        message: message,
    }).then(
        () => {
            alert("Message sent successfully!");
            document.querySelector('form').reset(); // Clear the form
        },
        (error) => {
            alert("Failed to send message. Please try again later.");
            console.error(error);
        }
    );
});
window.alert("enter your age")
if (age <18 ) {
    window.close()
}

else {
    confirm
}