// Pre-Loader function

window.onload = () => {
  setTimeout(() => {
    document.querySelector('.preloader').style.display = 'none';
    document.querySelector('.webpage').style.display = 'block';

  }, 1000)
};
