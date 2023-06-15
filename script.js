document.addEventListener("DOMContentLoaded", function() {
	var block = document.getElementById("block");
	var animatedText = document.querySelector(".animate-slide");
 
	function checkScroll() {
	  if (block) {
		 var blockPosition = block.getBoundingClientRect().top;
		 var screenPosition = window.innerHeight;
 
		 if (blockPosition < screenPosition) {
			animatedText.classList.add("active");
			window.removeEventListener("scroll", checkScroll);
		 }
	  }
	}
 
	window.addEventListener("scroll", checkScroll);
 });
 

 /* Карточки  */

 function redirectToContacts() {
	window.location.href = "contacti.html";
 }


 /*  Плавный переход 
 
 
  window.addEventListener('DOMContentLoaded', function() {
    var targetBlock = document.querySelector('#target-block');
    if (targetBlock) {
      window.scrollTo({
        top: targetBlock.offsetTop,
        behavior: 'smooth'
      });
    }
  });
*/

 

