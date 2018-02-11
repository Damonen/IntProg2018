<!DOCTYPE html>
<html>
	<head>
		<title>Я - Гусь</title>
		<script type="text/javascript" src="/assets/js/jquery.js"></script>
		<script type="text/javascript" src="/assets/js/jquery.easing.1.3.js"></script>
		<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
		<link rel="stylesheet" href="/assets/css/style.css">
		<link rel="stylesheet" href="/assets/css/styleNav.css">
		<link rel="shortcut icon" href="/images/icon.png" type="image/png">
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
	</head>
	
	<body>
	
		<div id="navbar" class="navbar" onload="stickNav()">
			<div class="navbarB" id="homeNav">Home</div>
			<div class="navbarB" id="aboutNav">About</div>
			<div class="navbarB" id="galleryNav">Gallery</div>
			<div class="navbarB" id="contactsNav">Contacts</div>
			<div class="navbarB link left">
				<div id="vkSoc">
					<a id="vkNav" href="https://vk.com" target="_blank">
						<div class="iconNav vk"></div>
					</a>
				</div>
				<div id="instSoc">
					<a href="https://instagram.com" target="_blank">
						<div class="iconNav inst"></div>
					</a>
				</div>
				<div id="ddSoc">
					<a href="https://img-9gag-fun.9cache.com/photo/abMXD3O_460s.jpg" target="_blank">
						<div class="iconNav dd"></div>
					</a>
				</div>
			</div>
		</div>
		<div class="navline" id="navline"></div>
		
		
		<div id="header" class="header">
			
			<div class="picheader" id="picheader2" ></div>
			<div class="picheader" id="picheader1" style="background-image: url(images/bg1.jpg);"></div>

			<div class="circle1">
				<div class="circle2">
					<div class="circle3">
						<div class="circletext">
							<div style="text-align: center; vertical-align: center">
								<span style="color:#c5e2ed; font: 100 72px/66px 'Open Sans', Helvetica Neue, Helvetica, Arial, sans-serif">DIMITRI</span>
								<br>
								<span style="color:#ffffff; font: 500 80px/66px 'Open Sans', Helvetica Neue, Helvetica, Arial, sans-serif">SMOLKIN</span>
								<br>
								<span style="color:#ffffff; font: 100 14px/30px 'Open Sans', Helvetica Neue, Helvetica, Arial, sans-serif">FASHION GOOSE</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			
			<p>
				<a onclick="changeP();" id="HL" class="rollover L"></a>
				<a onclick="changeN();" id="HR" class="rollover R"></a>
			</p>
			
		</div>
		
		<div id="about" class="block"></div>
		
		<div class="divider block"></div>
		
		<div id="gallery" class="block">
			<div id="lPreGall" class="btnPreGall L"></div>
			<div id="rPreGall" class="btnPreGall R"></div>
			<div id="containerPreGall">
				<div id="pg1" class="preGall" style="background-image: url(/images/gall/p1.jpg);" onclick="bgallHide(this)">
					<div id="pg1i" class="preGallIn">
						<div id="pg1c" class="circle preGallC">
							<span id="pg1t" class="hide">две<br>девки</span>
						</div>
					</div>
				</div>
				<div id="pg2" class="preGall" style="background-image: url(/images/gall/p2.jpg);" onclick="bgallHide(this)">
					<div id="pg2i" class="preGallIn">
						<div id="pg2c" class="circle preGallC">
							<span id="pg2t" class="hide">спутал<br>с димой</span>
						</div>
					</div>
				</div>
				<div id="pg3" class="preGall" style="background-image: url(/images/gall/p3.jpg);" onclick="bgallHide(this)">
					<div id="pg3i" class="preGallIn">
						<div id="pg3c" class="circle preGallC">
							<span id="pg3t" class="hide">говно<br>фотосет</span>
						</div>
					</div>
				</div>
				<div id="pg4" class="preGall" style="background-image: url(/images/gall/p4.jpg);" onclick="bgallHide(this)">
					<div id="pg4i" class="preGallIn">
						<div id="pg4c" class="circle preGallC">
							<span id="pg4t" class="hide">дима<br>с ирой</span>
						</div>
					</div>
				</div>
				<div id="pg5" class="preGall" style="background-image: url(/images/gall/p1.jpg);" onclick="bgallHide(this)">
					<div id="pg5i" class="preGallIn">
						<div id="pg5c" class="circle preGallC">
							<span id="pg5t" class="hide">Name<br>NNs</span>
						</div>
					</div>
				</div>
			</div>	
		</div>
		
		<div class="divider block"></div>
		
		<div id="contacts" class="block">
			<div class="circle foto"></div>
			<div class="circle one"></div>
			<div class="circle two"></div>
			<div class="circle three">
				<p id="contactsT">
					<span id="contactsC">CONTACT ME</span><br><br>
					8901 Marmora Road,<br>
					Glasgow, D04 89GR.<br>
					<span id="space1">Freephone:</span>+1 800 559 6580<br>
					<span id="space1">Telephone:</span>+1 800 603 6035<br>
					<span id="space1">FAX:</span>+1 800 889 9898<br>
					E-mail: mail@demolink.org
				</p>
			</div>
		</div>
		
		<div class="divider block"></div>
		
		<div class="footer block">
			<p>DIMITRI SMOLKIN©2018</p>
		</div>
		
		<div id="bgallcontain" style="display:none;" class="hide">
			<div id="bgallClose" onclick="bgallHide(this)"></div>
			<img id="mainPicGall" class="bigPic"></img>
			<div id="containerGall">
				<img id="1im" src="/images/gall/1/1s.jpg" name="/images/gall/1/1.jpg" class="prevPic" onclick="gallChange(this);"></img>
				<img id="2im" src="/images/gall/1/2s.jpg" name="/images/gall/1/2.jpg" class="prevPic" onclick="gallChange(this);"></img>
				<img id="3im" src="/images/gall/1/3s.jpg" name="/images/gall/1/3.jpg" class="prevPic" onclick="gallChange(this);"></img>
				<img id="4im" src="/images/gall/1/4s.jpg" name="/images/gall/1/4.jpg" class="prevPic" onclick="gallChange(this);"></img>
				<img id="5im" src="/images/gall/1/5s.jpg" name="/images/gall/1/5.jpg" class="prevPic" onclick="gallChange(this);"></img>
				<img id="6im" src="/images/gall/1/6s.jpg" name="/images/gall/1/6.jpg" class="prevPic" onclick="gallChange(this);"></img>
			</div>
		</div>
		<script src="/assets/js/scripts.js"></script>
		<script src="/assets/js/headerPic.js"></script>
	</body>
</html>