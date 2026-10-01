// Mobile navigation
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Automatic copyright year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact form to WhatsApp
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const category = document.getElementById("category").value;
    const message = document.getElementById("message").value.trim();

    const whatsappNumber = "918092607216";

    const enquiry =
        "Hello Toplink International Services!\n\n" +
        "Name: " + name + "\n" +
        "Phone: " + phone + "\n" +
        "Email: " + (email || "Not provided") + "\n" +
        "Job Category: " + category + "\n" +
        "Message: " + message;

    const url =
        "https://wa.me/" + whatsappNumber +
        "?text=" + encodeURIComponent(enquiry);

    window.open(url, "_blank");
});