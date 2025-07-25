document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Basic validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        document.getElementById('formResponse').textContent = "Please fill out all fields.";
        document.getElementById('formResponse').style.color = "red";
        return;
    }

    // Simulate form submission
    document.getElementById('formResponse').textContent = `Thank you, ${name}. We will contact you soon!`;
    document.getElementById('formResponse').style.color = "green";

    // Clear form
    document.getElementById('contactForm').reset();
});