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

expandButtons.forEach(button => {
  button.addEventListener('click', () => {
    const schoolCard = button.closest('.display-card');
    const schoolContent = schoolCard.querySelector('.display-content');
    const schoolIntro = schoolCard.querySelector('.display-intro');
    schoolContent.classList.toggle('hidden');
    schoolIntro.classList.toggle('hidden');
  });
});
