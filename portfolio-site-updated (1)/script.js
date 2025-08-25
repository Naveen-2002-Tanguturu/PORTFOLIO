(function(){
  emailjs.init("IFTrmGCkWe_4J96mU"); // Public Key
})();

document.getElementById("contact-form").addEventListener("submit", function(e){
  e.preventDefault();

  const params = {
    from_name: document.getElementById("name").value,
    reply_to: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value
  };

  document.getElementById("status").textContent = "Sending...";

  emailjs.send("service_7iwffmb", "template_f84oxyp", params)
    .then(() => {
      document.getElementById("status").textContent = "✅ Email sent successfully!";
      document.getElementById("contact-form").reset();
    })
    .catch((err) => {
      console.error("EmailJS Error:", err);
      document.getElementById("status").textContent = "❌ Failed to send. Try again.";
    });
});
