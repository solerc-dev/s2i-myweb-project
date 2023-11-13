const hiddenDiv = document.getElementById("back-button");
function checkScroll() {

  const scrollPosition = window.scrollY;
  let offset = 200;

  if (scrollPosition > offset) {
 
    hiddenDiv.style.display = 'block';
  } else {
 
    hiddenDiv.style.display = 'none';
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

window.addEventListener("scroll",checkScroll);

hiddenDiv.addEventListener("click", scrollToTop);