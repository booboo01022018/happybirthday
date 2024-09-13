document.addEventListener('DOMContentLoaded', function() {
  const frontPage = document.getElementById('frontPage');
  const messagePage = document.getElementById('messagePage');
  const cardImage = document.getElementById('cardImage');
  const backButton = document.getElementById('backButton');

  function showMessage() {
      frontPage.style.display = 'none';
      messagePage.style.display = 'block';
      setTimeout(() => {
          messagePage.classList.add('show');
      }, 10); // Allow the display change to take effect before starting fade-in
  }

  function showFrontPage() {
      messagePage.classList.remove('show');
      setTimeout(() => {
          messagePage.style.display = 'none';
          frontPage.style.display = 'block';
      }, 500); // Match with CSS transition duration
  }

  cardImage.addEventListener('click', showMessage);
  backButton.addEventListener('click', showFrontPage);
});
