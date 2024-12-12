document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      // Retirer la classe active de tous les boutons
      filterButtons.forEach((btn) =>
        btn.classList.remove('bg-blue-600', 'text-white')
      );
      button.classList.add('bg-blue-600', 'text-white');

      const category = button.getAttribute('data-category');

      projectCards.forEach((card) => {
        if (
          category === 'all' ||
          card.getAttribute('data-category') === category
        ) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
