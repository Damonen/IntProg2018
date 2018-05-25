function parseObj(q) {
	var outStr = "<table id='outTable'>";
	for(var i = 0; i < q.length; i++) {
		outStr += "<tr>\n";
		outStr += "\t<td>" + q[i].id + "</td>";
		outStr += "\t<td>" + q[i].login + "</td>";
		outStr += "\t<td>" + q[i].name + "</td>";
		outStr += "\t<td>" + q[i].status + "</td>";
		outStr += "</tr>";
	}
	outStr += "</table>";
	return outStr;
}

function userDo() {
	$.ajax({
		type: "POST",
		url: "/pages/userGet.php",
		success: function(reS) {
			$("#userOut").html(reS);
		}
	});
	
	$("#userDo").click(function() {
		var data = {neW:$("#edNew").val(), old:$("#edOld").val()};
		
		$.ajax({
			type: "POST",
			url: "/pages/userDo.php",
			data: data,
			success: function(reS) {
				phpErr(reS);
			}
		});
	});
}

function sendReg() {
	$("#subU").click(function() {
		var login = document.getElementById("loginU").value,
			pass = document.getElementById("passU").value,
			pass2 = document.getElementById("pass2U").value,
			name = document.getElementById("nameU").value;
		
		$.ajax({
			type: "POST",
			url: "/pages/regWrite.php",
			data: {login:login, pass:pass, pass2:pass2, name:name, reg:1},
			success: function(res) {
				if(res == 1) {
					$.ajax({
						type: "POST",
						url: "/pages/logIn.php",
						data: {login:login, pass:pass, reg:0},
						success: function(res) {
							if(res == 1) {
								getPage();
							} else {
								phpErr(res);
							}
						}
					});
				} else {
					phpErr(res);
				}
			}
		});
	});
}
function phpErr(rEs) {
	$("#phpErr").toggle();
	$("#phpErr").html(rEs);
	$("#phpErr").fadeIn();
}
function logOut() {
	$("#logOut").click(function() {
		$.ajax({
			type: "POST",
			url: "/pages/logOut.php",
			data: {},
			success: function(res) {
				openPage("4");
			}
		});
	});
}
function adminDo() {
	$(".doButtonAd").click(function() {
		var data = {};
		switch(this.id.charAt(4)) {
			case "D":
				data = {loginD:$("#delLogin").val(), action:this.id.charAt(0)};
				break;
			case "A":
				data = {loginA:$("#adLog").val(), passwordA:$("#adPass").val(), nameA:$("#adName").val(),action:this.id.charAt(0)};
				break;
			case "C":
				data = {nameC:$("#edName").val(), idC:$("#edId").val(), action:this.id.charAt(0)};
				break;
			case "G":
				data = {action:this.id.charAt(0)};
				break;
		}
		
		$.ajax({
			type: "POST",
			url: "/pages/adminDo.php",
			data: data,
			success: function(reS) {
				if(data.action == "0"){
					$("#outTabl").html(parseObj(JSON.parse(reS)));
				} else {
					phpErr(reS);
				}
			}
		});
	});
}

function getPage() {
	$.ajax({
		type: "POST",
		url: "/pages/send.php",
		data: {idP:5},
		success: function(reS) {
			if(reS != 0) {
				$("#phpIn").html(reS);
				adminDo();
				userDo();
				$("#writeImg").click(function() {
					var formData = new FormData(document.getElementById("formImg"));
					$.ajax({
						type: "POST",
						url: "/pages/userDo.php",
						data: {formData},
						success: function(rEs) {
							phpErr(rEs);
						}
					});
				});
				logOut();
				$.ajax({
					type: "POST",
					url: "/pages/getImg.php",
					data: {},
					success: function(rEs) {
						$("img").attr("src",rEs);
					}
				});
			} else {
				logOut();
				openPage("4");
				phpErr("Залогинтесь");
			}
		}
	});
}
function sendLog() {
	$("#subV").click(function() {
		var login = document.getElementById("loginV").value,
			pass = document.getElementById("passV").value;
		
		$.ajax({
			type: "POST",
			url: "/pages/logIn.php",
			data: {login:login, pass:pass, reg:0},
			success: function(res) {
				if(res == 1) {
					getPage();
				} else {
					phpErr(res);
				}
			}
		});
	});
}
function openPage(blo) {
	$.ajax({
		type: "POST",
		url: "/pages/send.php",
		data: {idP:blo},
		success: function(res) {
			if(res == 2) {
				getPage();
			} else {
				$("#phpIn").html(res);
				switch(blo) {
					case "2" :
						const container = document.querySelector('#containerPreGall');
						const ps = new PerfectScrollbar(container, {});
						gallHover();
						break;
					case "4" :
						sendReg();
						sendLog();
						break;
				}
			}
		}
	});
}
function gallHover() {
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
}
$(".blockLink").click(function() {
	var block = this.id.charAt(0);
	openPage(block);
});





$("#navOpen").click(function() {
	$("#navbar").toggleClass("hei");
});









$(document).on({
    ajaxStart: function() { 
		$("#phpIn").children().addClass("hide");
		$("#loading").removeClass("hide");
	},
    ajaxStop: function() { 
		$("#loading").addClass("hide");
		setTimeout(
			function(){
				$("#phpIn").children().removeClass("hide");
			},420
		);
	}    
});

var eventt = "70";
window.onscroll = function stickNav() {
	if ((window.pageYOffset > 10) && !($("#socNavBlock").width() < 240)) {
		$("#navline").addClass("stickyLine");
		$("#navbar, .navbarBInn, .left").addClass("sticky");
		$(".navbarB").stop().animate({"line-height":"40px"}, 400);
		$(".soc").addClass("sticky3");
		$(".navbarBInnH").addClass("sticky");
		eventt = "40";
		$(".navbarBInnH").addClass("navbarBInnHH");
		$(".navbarBInnH").removeClass("navbarBInnH");
	} else if(pageYOffset <= 10) {
		$("#navline").removeClass("stickyLine");
		$("#navbar, .navbarBInn, .left").removeClass("sticky");
		$(".navbarB").stop().animate({"line-height":"70px"}, 400);
		$(".soc").removeClass("sticky3");
		$(".navbarBInnH").removeClass("sticky");
		eventt = "70";
		$(".navbarBInnHH").addClass("navbarBInnH");
		$(".navbarBInnHH").removeClass("navbarBInnHH");
	}	
};

$("#socNavBlock").resize(function() {
	$(".navbarB").stop().animate({"line-height":"70px"}, 400);
});

function hovernavB(navB, eventt){
	if(eventt == "out"){
		$(navB).children(".navbarBInn").removeClass("navbarBInnH");
		$(navB).children(".navbarBInn").removeClass("navbarBInnHH");
	} else if(eventt == "40"){
		$(navB).children(".navbarBInn").addClass("navbarBInnHH");
		$(navB).children(".navbarBInn").removeClass("navbarBInnH");
	} else if(eventt == "70"){
		$(navB).children(".navbarBInn").addClass("navbarBInnH");
		$(navB).children(".navbarBInn").removeClass("navbarBInnHH");

	}
}

$(".navbarB").hover(
	function(){
		hovernavB(this, eventt);
	}, function(){
		hovernavB(this, "out");
	}
);

jQuery.preloadImages = function(){
	for(var i = 0; i < arguments.length; i++){
		jQuery("<img>").attr("src", arguments[ i ]);
	}
};
$.preloadImages("/images/icons/vkLogo1.png","/images/icons/instLogo1.png","/images/bg2.jpg","/images/bg3.jpg","/images/bg4.jpg");

var currGallFold = "1";
var currGallPic = "1";

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
		$("#bgallcontain").addClass("hide");
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
		$("#containerGall").ready(function(){
			var q = $("#containerGall").width() / -2;
			document.getElementById("containerGall").style.marginLeft = q + "px";
		});
		currGallPic = "1";
		gallChange(document.getElementById(currGallPic + "im"));
		[].forEach.call(document.getElementsByClassName("prevPic"), function(item, i, arr){
			item.onload = function(){
				var q = $("#containerGall").width() / -2;
				document.getElementById("containerGall").style.marginLeft = q + "px";
			}
		});
		$("#bgallcontain").toggle();
		$("#bgallcontain").removeClass("hide");
	}
}

function gallChange(img) {
	if(1){
		$("#mainPicGall").fadeOut('fast', function () {
			document.getElementById("mainPicGall").src = "/images/gall/" + currGallFold + "/" + img.id.charAt(0) + ".jpg";
			changeMarg(img);
			document.getElementById("mainPicGall").onload = function() {
				$("#mainPicGall").fadeIn('fast');
			}
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