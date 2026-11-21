
// Profile Picture Upload

const imageUpload = document.getElementById("imageUpload");
const profileImage = document.getElementById("profileImage");

imageUpload.addEventListener("change", function(event) {

    const file = event.target.files[0];

    if (file) {

        if (!file.type.startsWith("image/")) {
            alert("Please select a valid image!");
            return;
        }

        const reader = new FileReader();

        reader.onload = function(e) {
            profileImage.src = e.target.result;
        };

        reader.readAsDataURL(file);
    }

});


// Contact Form

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    alert(
        "Thank you, " + name +
        "! Your message has been received."
    );

    contactForm.reset();

});
