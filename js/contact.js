document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contact-form');

  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Récupération des données du formulaire
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);

    // Simulation d'envoi (à remplacer par votre logique d'envoi réelle)
    console.log('Données du formulaire :', data);

    // Affichage d'une confirmation
    alert(
      'Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.'
    );
    contactForm.reset();
  });
});
