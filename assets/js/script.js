// Read more button on school page

const expandButtons = document.querySelectorAll('.expand-button');

document.addEventListener('DOMContentLoaded', function() {
  console.log('DOMContentLoaded event fired');
  const schoolIntros = document.querySelectorAll('.display-intro');
  schoolIntros.forEach(schoolIntro => {
    if (schoolIntro) {
      schoolIntro.classList.toggle('hidden');
    }
  });
});

const schoolCards = document.querySelectorAll('.display-card');

schoolCards.forEach(card => {
  card.addEventListener('click', (e) => {
    // Don't trigger if clicking directly on the button
    if (e.target.classList.contains('expand-button')) return;
    if (e.target.classList.contains('source')) return;
    
    const schoolContent = card.querySelector('.display-content');
    const schoolIntro = card.querySelector('.display-intro');
    schoolContent.classList.toggle('hidden');
    schoolIntro.classList.toggle('hidden');
  });
});

// Keep button functionality for accessibility
expandButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.stopPropagation();
    const schoolCard = button.closest('.display-card');
    const schoolContent = schoolCard.querySelector('.display-content');
    const schoolIntro = schoolCard.querySelector('.display-intro');
    schoolContent.classList.toggle('hidden');
    schoolIntro.classList.toggle('hidden');
  });
});

// Filtering on projects page


  // Function to get query parameters from the URL
  function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  // Get the theme from the query parameter
  const initialTheme = getQueryParam('theme');

  const tagButtons = document.querySelectorAll('.tag-button');
  const projectCards = document.querySelectorAll('.display-card');
  let selectedTheme = null;

  // Function to filter projects by theme
  function filterProjects(theme) {
    projectCards.forEach(card => {
      const cardThemes = card.dataset.themes.split(' ');
      if (theme === null || cardThemes.includes(theme)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }

  // Add click event listener to each tag button
  tagButtons.forEach(button => {
    button.addEventListener('click', () => {
      const theme = button.dataset.theme;

      if (selectedTheme === theme) {
        // Deselect the button and show all projects
        selectedTheme = null;
        tagButtons.forEach(btn => btn.classList.remove('selected'));
        filterProjects(null);
      } else {
        // Select the button and filter projects
        selectedTheme = theme;
        tagButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        filterProjects(theme);
      }
    });
  });

    // If there is an initial theme in the query parameter, activate the corresponding tag button
    if (initialTheme) {
      const encodedTheme = encodeURIComponent(initialTheme);
      const initialButton = document.querySelector(`.tag-button[data-theme="${encodedTheme}"]`);
      if (initialButton) {
        initialButton.classList.add('selected');
        selectedTheme = initialTheme;
        filterProjects(initialTheme);
      }
    }
