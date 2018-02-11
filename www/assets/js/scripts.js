window.onscroll = function stickNav() {
	if (window.pageYOffset > 10) {
		document.getElementById("navbar").classList.add('sticky');
		document.getElementById("navline").classList.add('sticky1');
		document.getElementById("homeNav").classList.add('sticky2');
		$("#homeNav").stop().animate({"line-height":"40px"}, 400);
		$("#aboutNav").stop().animate({"line-height":"40px"}, 400);
		$("#galleryNav").stop().animate({"line-height":"40px"}, 400);
		$("#contactsNav").stop().animate({"line-height":"40px"}, 400);
		document.getElementById("galleryNav").classList.add('sticky2');
		document.getElementById("contactsNav").classList.add('sticky2');
		$("#vkSoc").stop().animate({"marginTop":"2px"}, 400);;
		$("#instSoc").stop().animate({"marginTop":"2px"}, 400);;
		$("#ddSoc").stop().animate({"marginTop":"2px"}, 400);;
		document.styleSheets[1].addRule('#homeNav:hover:before','height: 40px;');
		document.styleSheets[1].addRule('#aboutNav:hover:before','height: 40px;');
		document.styleSheets[1].addRule('#galleryNav:hover:before','height: 40px;');
		document.styleSheets[1].addRule('#contactsNav:hover:before','height: 40px;');
		
	} 
	else if(pageYOffset <= 10) {
		document.getElementById("navbar").classList.remove('sticky');
		document.getElementById("navline").classList.remove('sticky1');
		document.styleSheets[1].addRule('#homeNav:hover:before','height: 70px;');
		document.styleSheets[1].addRule('#aboutNav:hover:before','height: 70px;');
		document.styleSheets[1].addRule('#galleryNav:hover:before','height: 70px;');
		document.styleSheets[1].addRule('#contactsNav:hover:before','height: 70px;');
		document.getElementById("homeNav").classList.remove('sticky2');
		document.getElementById("galleryNav").classList.remove('sticky2');
		document.getElementById("contactsNav").classList.remove('sticky2');
		$("#homeNav").stop().animate({"line-height":"70px"}, 400);
		$("#aboutNav").stop().animate({"line-height":"70px"}, 400);
		$("#galleryNav").stop().animate({"line-height":"70px"}, 400);
		$("#contactsNav").stop().animate({"line-height":"70px"}, 400);
		$("#vkSoc").stop().animate({"marginTop":"17px"}, 400);;
		$("#instSoc").stop().animate({"marginTop":"17px"}, 400);;
		$("#ddSoc").stop().animate({"marginTop":"17px"}, 400);;
	}	
};


jQuery.preloadImages = function(){
	for(var i = 0; i < arguments.length; i++){
		jQuery("<img>").attr("src", arguments[ i ]);
	}
};
$.preloadImages("/images/icons/dickLogo1.png","/images/icons/vkLogo1.png","/images/icons/instLogo1.png","/images/bg2.jpg","/images/bg3.jpg","/images/bg4.jpg");


var scrollSpd = 600;
$("#homeNav").click(function() {
    $('html, body').animate({
        scrollTop: (0)
    }, scrollSpd);
});
$("#aboutNav").click(function() {
    $('html, body').animate({
        scrollTop: ($("#about").offset().top - 150)
    }, scrollSpd);
});
$("#galleryNav").click(function() {
    $('html, body').animate({
        scrollTop: ($("#gallery").offset().top - 40)
    }, scrollSpd);
});
$("#contactsNav").click(function() {
    $('html, body').animate({
        scrollTop: ($("#contacts").offset().top - 40)
    }, scrollSpd);
});



$( "#pg1" ).hover(
	function() {
		$( "#pg1i" ).toggleClass( "topPreGall" );
		setTimeout(
			function(){
				$( "#pg1c" ).toggleClass( "ccPreGall" );
			},250
		);
		setTimeout(
			function(){
				$( "#pg1t" ).toggleClass("hide");
			},420
		);
	}, function() {
		$( "#pg1i" ).toggleClass( "topPreGall" );
		$( "#pg1c" ).toggleClass( "ccPreGall" );
		$( "#pg1t" ).toggleClass( "hide" );
	}
);
$( "#pg2" ).hover(
	function() {
		$( "#pg2i" ).toggleClass( "topPreGall" );
		setTimeout(
			function(){
				$( "#pg2c" ).toggleClass( "ccPreGall" )
			},250
		);
		setTimeout(
			function(){
				$( "#pg2t" ).toggleClass("hide");
			},420
		);
	}, function() {
		$( "#pg2i" ).toggleClass( "topPreGall" );
		$( "#pg2c" ).toggleClass( "ccPreGall" );
		$( "#pg2t" ).toggleClass( "hide" );
	}
);
$( "#pg3" ).hover(
  function() {
    $( "#pg3i" ).toggleClass( "topPreGall" );
		setTimeout(
			function(){
				$( "#pg3c" ).delay( 1350 ).toggleClass( "ccPreGall" );
			},250
		);
		setTimeout(
			function(){
				$( "#pg3t" ).toggleClass("hide");
			},420
		);
  }, function() {
    $( "#pg3i" ).toggleClass( "topPreGall" );
	$( "#pg3c" ).toggleClass( "ccPreGall" );
	$( "#pg3t" ).toggleClass( "hide" );
  }
);
$( "#pg4" ).hover(
  function() {
    $( "#pg4i" ).toggleClass( "topPreGall" );
		setTimeout(
			function(){
				$( "#pg4c" ).delay( 1350 ).toggleClass( "ccPreGall" );
			},250
		);
		setTimeout(
			function(){
				$( "#pg4t" ).toggleClass("hide");
			},420
		);
  }, function() {
    $( "#pg4i" ).toggleClass( "topPreGall" );
	$( "#pg4c" ).toggleClass( "ccPreGall" );
	$( "#pg4t" ).toggleClass( "hide" );
  }
);
$( "#pg5" ).hover(
  function() {
    $( "#pg5i" ).toggleClass( "topPreGall" );
		setTimeout(
			function(){
				$( "#pg5c" ).delay( 1350 ).toggleClass( "ccPreGall" );
			},250
		);
		setTimeout(
			function(){
				$( "#pg5t" ).toggleClass("hide");
			},420
		);
  }, function() {
    $( "#pg5i" ).toggleClass( "topPreGall" );
	$( "#pg5c" ).toggleClass( "ccPreGall" );
	$( "#pg5t" ).toggleClass( "hide" );
  }
);

var currGallFold = "1";
var currGallPic = "1";

function changeGallFold(item){
	item.src = "/images/gall/" + currGallFold + "/" + item.id.charAt(0) + "s.jpg";
}

function changeMarg(tag) {
	var img = new Image;
	img.src = "/images/gall/" + currGallFold + "/" + tag.id.charAt(0) + ".jpg";
	img.onload = function() {
		var q = Math.round(-img.width * 500 / img.height / 2);
		document.getElementById("mainPicGall").style.marginLeft = q + "px";
	};
}

function bgallHide(num) {
	if(num.id == "bgallClose"){
		$("#bgallcontain").toggleClass("hide");
		setTimeout(
			function(){
				$("#bgallcontain").toggle();
			},420
		);
		enableScroll();
	} else {
		currGallFold = num.id.charAt(2);
		disableScroll();
		[].forEach.call(document.getElementsByClassName("prevPic"), function(item, i, arr){
			item.src = "/images/gall/" + currGallFold + "/" + item.id.charAt(0) + "s.jpg";
		});
		currGallPic = "1";
		gallChange(document.getElementById(currGallPic + "im"));
		$("#bgallcontain").toggle();
		$("#bgallcontain").toggleClass("hide");
	}
}

function gallChange(img) {
	/*var w = document.getElementById("mainPicGall").src;
	var e = "http://goos.ru/images/gall/" + currGallFold + "/" + currGallPic + ".jpg";
	var q =  (w == e) ;*/
	if(1){
		$("#mainPicGall").fadeOut('fast', function () {
			document.getElementById("mainPicGall").src = "/images/gall/" + currGallFold + "/" + img.id.charAt(0) + ".jpg";
			changeMarg(img);
			$("#mainPicGall").fadeIn('fast');
		});
		currGallPic = img.id.charAt(0);
	}
}







// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36

var keys = {37: 1, 38: 1, 39: 1, 40: 1, 32: 1, 33: 1, 34: 1, 35: 1, 36: 1};
function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}
function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}
function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}
function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null; 
    window.onwheel = null; 
    window.ontouchmove = null;  
    document.onkeydown = null;  
}