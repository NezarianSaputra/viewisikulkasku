//Js memunculkan sidebar pada layar yang berukuran kecil
$(".nav-toggler").click(function () {
    $(".sidebar-area").toggleClass("sb-on");
});

$(".nav-close").click(function() {
	$(".sidebar-area").removeClass("sb-on");
});				

//Js fungsi qty
$('.qty-plus').click(function () {   
  var th = $(this).closest('.quantity').find('.qty-total');     
  th.val(+th.val() + 1);
});
$('.qty-min').click(function () {
  var th = $(this).closest('.quantity').find('.qty-total');     
      if (th.val() > 1) th.val(+th.val() - 1);
});


//Js carousel slider

var slideIndex = 1;
showSlides(slideIndex);


function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("carousel-item");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

//Js zoom gambar 
 if ($.fn.magnificPopup) {
        $('.gallery').magnificPopup({
            type: 'image'
        });
    }

//Js slider harga

function findOutputForSlider(el) {
   var idVal = el.id;
   outputs = document.getElementsByTagName('output');
   for( var i = 0; i < outputs.length; i++ ) {
     if (outputs[i].htmlFor == idVal)
       return outputs[i];
   }
}

	var sliders = document.querySelectorAll( 'input[type="range"].slider' );
	[].forEach.call( sliders, function ( slider ) {
  		var output = findOutputForSlider( slider );
  		if ( output ) {
    		slider.addEventListener( 'input', function( event ) {
      			output.value = event.target.value;
    		} );
  		}
	} );
