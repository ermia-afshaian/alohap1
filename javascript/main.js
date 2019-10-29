const sub=document.getElementById('btn');
const inEl = document.getElementById('email');
const formEl = document.getElementsByClassName('subs');
formEl[0].addEventListener ('submit' ,function(event) {

   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inEl.value)) {    event.preventDefault();
     alert(inEl.value + " thanks for subscribing!");
   } else {    event.preventDefault();
     alert("You have entered an invalid email address!" );
   };
    

  });

  // const navLinks = document.querySelectorAll('nav ul>li>a');

  // for(i=0; i<5; i++){
  //     navLinks[i].addEventListener('click', function(){
  //       document.getElementById(navLinks.getAttribute(attribute)).scrollIntoView({ 
  //           behavior: 'smooth' 
  //         });


  //     })
  //   // add click listener for the element in this iteration of the loop
  //   // how can you get the "href" attribute value of the clicked element to create a string that corresponds the id of the correct section?
  //   // get the section by its id using the string from the last step
  //   // scroll to that section with .scrollIntoView()
  // };

  function clickCounter() {
      const Num= parseFloat(document.getElementById("result").innerHTML);
    document.getElementById("result").innerHTML= Num + 1 
  };