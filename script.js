const form = document.getElementById("my-form"); 
const hiddenDiv = document.getElementById("back-button")
document.getElementById("form-button").addEventListener("click", function(event) {
  event.preventDefault();
    // Get values from the form inputs
    var username = document.getElementById("username").value;
    var usermail = document.getElementById("usermail").value;
    var usermessage = document.getElementById("msg").value
  
    emailjs
    .send(
      "service_6nf6s8m", // paste your ServiceID here (you'll get one when your service is created).
      "template_xmq55qq", // paste your TemplateID here (you'll find it under email templates).
      {
        from_name: username,
        to_name: "Soledad", // put your name here.
        from_email: usermail,
        to_email: "soledadrc.it@gmail.com", //put your email here.
        message: usermessage,
      },
      "niHXOuT6X1WYKA3rA" //paste your Public Key here. You'll get it in your profile section.
    )
    .then(
      () => { 
        alert("Thank you. I will get back to you as soon as possible.");
      },
      (error) => {
        console.log(error);
        alert("Something went wrong. Please try again.");
      }
    );
  
  });

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

  window.addEventListener("scroll",checkScroll)
  
  hiddenDiv.addEventListener("click", scrollToTop)