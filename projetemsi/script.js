document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "") {
        alert("Veuillez entrer votre nom.");
    }else if (message === "") {
        alert("Veuillez entrer votre message.");
    } else if (!validateEmail(email)) {
        alert("Veuillez entrer une adresse email valide.");
    } else {
        alert("Formulaire soumis avec succès!");
        // Ici, vous pouvez envoyer le formulaire avec fetch ou un autre moyen
    }
});

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}