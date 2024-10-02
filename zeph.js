document.getElementById("subscriptionForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const responseMessage = document.getElementById("responseMessage");

    if (validateEmail(email)) {
        const templateParams = {
            user_email: email,
        };
    
        emailjs.send('service_xobv2nh', 'template_eufmi7q', templateParams).then(
            (response) => {
                responseMessage.textContent = "Thank you for subscribing!";
                responseMessage.style.color = "green";
                document.getElementById("subscriptionForm").reset();
            },
            (error) => {
                responseMessage.textContent = "Oops! Something went wrong. Please try again.";
                responseMessage.style.color = "red";
            }
        );
    
    } else {
        responseMessage.textContent = "Please enter a valid email address.";
        responseMessage.style.color = "red";
    }    


function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
