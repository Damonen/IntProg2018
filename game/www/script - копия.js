var bgSound = new Audio(),
	winSound = new Audio(),
	loseSound = new Audio(),
	eneDestSound = new Audio(),
	destrSound = new Audio(),
	nonMoveSound = new Audio(),
	moveSound = new Audio(),
	objDestrSound = new Audio(),
	ene1MoveSound = new Audio(),
	soundd = true,
	bgVolume = 0.3;
				
bgSound.loop = true;
bgSound.autoplay = true;
bgSound.volume = bgVolume;
bgSound.src = "/sounds/bgSong.mp3";
winSound.src = "/sounds/Win.mp3";
loseSound.src = "/sounds/Lose.mp3";
eneDestSound.src = "/sounds/Pschschsch.mp3";
objDestrSound.src = "/sounds/tbIgin.mp3";
moveSound.src = "/sounds/zsch.mp3";
nonMoveSound.src = "/sounds/tum.mp3";
ene1MoveSound.src = "/sounds/quei.mp3";

jQuery.preloadImages = function(){
	for(var i = 0; i < arguments.length; i++){
		jQuery("<img>").attr("src", arguments[ i ]);
	}
};
$.preloadImages("/images/soundOff.png","/images/soundOn.png","/images/musicOff.png","/images/musicOn.png");




var	lvl1 = new Array();
var mouseDownX = 0,
	mouseDownY = 0,
	click = true,
	player = {x:-1, y:-1},
	turnCount = 0,
	arr = new Array(),
	currLvl = 0;
function scan() {
	$.getJSON('/lvl' + currLvl + '.json', function(data) {         
		lvl1 = Object.create(data);
		build();
		click = true;
	});
}

function buildBG(xx, yy) {
	$("#maincontain").css('width', (xx * 50) + 'px');
	$("#maincontain").css('height', (yy * 50) + 'px');
	for(var y = 0; y < yy; y++) {
		for(var x = 0; x < xx; x++) {
			var num = ((xx + 1) * y) + (x + 1);
			if(num % 2 == 1) {
				$("#maincontain").append("<div class='block bg uneven' id='" + x + "x" + y + "bgBlock'></div>\n");
			} else {
				$("#maincontain").append("<div class='block bg even' id='" + x + "x" + y + "bgBlock'></div>\n");
			}
		}
	}
}
function buildObstacles(obstacle, dObstacle, finish) {
	//**************obstacle
	for(var i = 0; i < obstacle.length; i++) {
		var str = "#" + obstacle[i].x + "x" + obstacle[i].y + "bgBlock";
		$(str).append("\n<div class='block obstacle'></div>\n");
		arr[obstacle[i].y][obstacle[i].x] = 'ob';
	}
	//**************dObstacle
	for(var i = 0; i < dObstacle.length; i++) {
		var str = "#" + dObstacle[i].x + "x" + dObstacle[i].y + "bgBlock";
		$(str).append("\n<div class='block dObstacle'></div>\n");
		arr[dObstacle[i].y][dObstacle[i].x] = 'dOb';
	}
	//**************finish
	$("#" + finish.x + "x" + finish.y + "bgBlock").append("\n<div class='block finish'></div>\n");
	arr[finish.y][finish.x] = 'fin';
}
function buildPlayer(x, y) {
	$("#maincontain").prepend("\n\t<div id='player' class='block'></div>\n");
	moveCss(player, "#player", 0, 0);
}
function buildEnemy(enemy1) {
	for(var i = 0; i < enemy1.length; i++) {
		$("#maincontain").prepend("\n<div id='" + i + "en1' class='block enemy1'></div>\n");
		moveCss(enemy1[i], "#" + i + "en1", 0, 0);
		$("#" + i + "en1").css({ WebkitTransform: 'rotate(' + turnTo({x:-1,y:0}, enemy1[i].dir) + 'deg)'});
		arr[enemy1[i].y][enemy1[i].x] = i + 'en1';
	}
}

function build() {
	$(".changeLvl").removeClass('currLvl');
	$("#" + currLvl).addClass('currLvl');
	$("#maincontain").html("");
	turnCount = 0;
	$("#turnCount").html("Количество ходов : " + turnCount);
	for(var i = 0; i < lvl1.count.x; i++) {
		arr[i] = new Array();
		for(var ii = 0; ii < lvl1.count.y; ii++) {
			arr[i][ii] = "0";
		}
	}
	player.x = lvl1.playerStart.x;
	player.y = lvl1.playerStart.y;
	arr[lvl1.playerStart.y][lvl1.playerStart.x] = 'p';
	buildBG(lvl1.count.x, lvl1.count.y);
	buildObstacles(lvl1.obstacle, lvl1.dObstacle, lvl1.finish);
	buildPlayer(player.x, player.y);
	buildEnemy(lvl1.enemy1);
	$("#maincontain").append("\n<div id='destruction' class='block destruction' ></div>\n");

	
	
	$(".block").click(function(){
		$(this).append("<div class='obstacle block'></div>");
		$('body').append("{x:" + this.id.charAt(0) + ", y:" + this.id.charAt(2) + "},");
	});
}

function destructMove(moveX, moveY, str) {
	$("#destruction").css('left', (50 * (moveX + player.x)) + "px");
	$("#destruction").css('top', (50 * (moveY + player.y)) + "px");
	setTimeout(function() {
		$("#destruction").toggle();
		if(moveX == -1){
			$("#maincontain").effect( "shake", "left", 4, 1);
		} else if(moveX == 1) {
			$("#maincontain").effect( "shake", "right", 4, 1);
		} else if(moveY == 1) {
			$("#maincontain").effect( "shake", "up", 4, 1);
		} else if(moveY == -1) {
			$("#maincontain").effect( "shake", "down", 4, 1);
		}
		setTimeout(function() {
			if(!str.endsWith("bgBlock")) {
				$(str).toggle("explode");
			} else {
				$("#" + (player.x + moveX) + "x" + (player.y + moveY) + "bgBlock").children().toggle("explode");
			}
			$("#destruction").toggle();
			setTimeout(function() {
				if(!str.endsWith("bgBlock")) {
					$(str).remove();
				} else {
					$(str).html("");
				}
			}, 420);
		}, 400);
	}, 200);
}
function moveCss(target, targetId, moveX, moveY, moved) {
	var l = target.x * 50,
		t = target.y * 50;
	if(moved != false) {
		$(targetId).css('left', (l + 50 * moveX) + "px");
		$(targetId).css('top', (t + 50 * moveY) + "px");
	} else {
		$(targetId).css('left', (l + 25 * moveX) + "px");
		$(targetId).css('top', (t + 25 * moveY) + "px");
		setTimeout(function() { 
			$(targetId).css('left', (l) + "px");
			$(targetId).css('top', (t) + "px"); 
		}, 400);

	}
}

function movePlayer(moveDir) {
	if(soundd) {
		moveSound.currentTime = 0;
		moveSound.play();
	}
	var moved = false,
		next = arr[player.y + moveDir.y][player.x + moveDir.x];
		
	if(next.endsWith("en1")){ //******************************en1
		var str = "#" + arr[player.y + moveDir.y][player.x + moveDir.x].charAt(0) + "en1";
		lvl1.enemy1[arr[player.y + moveDir.y][player.x + moveDir.x].charAt(0)].x = -1;
		moveCss(player, "#player", moveDir.x, moveDir.y, false);
		arr[player.y + moveDir.y][player.x + moveDir.x] = "0";
		moveCss(player, "#player", moveDir.x, moveDir.y, false);
		destructMove(moveDir.x, moveDir.y, str);
		if(soundd) {
			eneDestSound.currentTime = 0;
			eneDestSound.play();
		}
		moved = true;
		
	} else if(next == "0") { //******************************0
		moveCss(player, "#player", moveDir.x, moveDir.y);
		arr[player.y][player.x] = "0";
		arr[player.y + moveDir.y][player.x + moveDir.x] = "p";
		player.y += moveDir.y;
		player.x += moveDir.x;
		moved = true;
		
	} else if(next.endsWith("dOb")) { //******************************dObject
		arr[player.y + moveDir.y][player.x + moveDir.x] = "0";
		moveCss(player, "#player", moveDir.x, moveDir.y, false);
		if(soundd) {
			objDestrSound.currentTime = 0;
			objDestrSound.play();
		}
		destructMove(moveDir.x, moveDir.y, "#" + (player.x + moveDir.x) + "x" + (player.y + moveDir.y) + "bgBlock");
		moved = true;
		
	} else if(next == "fin") { //******************************fin
		moveCss(player, "#player", moveDir.x, moveDir.y, false);
		win();
	} else if(next == "ob") { //******************************object
		moveCss(player, "#player", moveDir.x, moveDir.y, false);
		if(soundd) {
			nonMoveSound.currentTime = 0;
			nonMoveSound.play();
		}
	}
	return moved;
}



function getRotationDegrees(obj) {
    var matrix = obj.css("-webkit-transform") ||
    obj.css("-moz-transform")    ||
    obj.css("-ms-transform")     ||
    obj.css("-o-transform")      ||
    obj.css("transform");
    if(matrix !== 'none') {
        var values = matrix.split('(')[1].split(')')[0].split(',');
        var a = values[0];
        var b = values[1];
        var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
    } else { var angle = 0; }
    return (angle < 0) ? angle + 360 : angle;
}
function turnTo(fromD, toD) {
	var degree;
	if(fromD.x == toD.x && fromD.y == toD.y) {
		degree = 0;
	} else if((Math.abs(fromD.x) == Math.abs(toD.x)) && (Math.abs(toD.y) == Math.abs(toD.y))) {
		degree = 180;
	} else if(toD.x == 0 && toD.y == 0) {
		degree = 0;
	} else {
		if(fromD.y == 1) {
			if(toD.x == 1) {
				degree = -90;
			} else {
				degree = 90;
			}
		} else if(fromD.y == -1) {
			if(toD.x == 1) {
				degree = 90;
			} else {
				degree = -90;
			}
		} else if(fromD.x == 1) {
			if(toD.y == 1) {
				degree = 90;
			} else {
				degree = -90;
			}
		} else if(fromD.x == -1) {
			if(toD.y == 1) {
				degree = -90;
			} else {
				degree = 90;
			}
		}
	}
	return degree;
}
function makeEneDir(i) {
	var matrix = new Array();
	for(var a = 0; a < arr.length; a++) {
		matrix[a] = new Array();
		for(var aa = 0; aa < arr[a].length; aa++) {
			if(arr[a][aa] == "0") {
				matrix[a][aa] = 0;
			} else if(arr[a][aa] == "p") {
				matrix[a][aa] = 0;
			} else {
				matrix[a][aa] = 1;
			}
		}
	}
	matrix[lvl1.enemy1[i].y][lvl1.enemy1[i].x] = 0;
	
	var grid = new PF.Grid(matrix),
		finder = new PF.BestFirstFinder({allowDiagonal: false}),
		path = finder.findPath(lvl1.enemy1[i].x, lvl1.enemy1[i].y, player.x, player.y, grid);
	
	if(path.length != 0) {	
		var x = path[1][0] - lvl1.enemy1[i].x,
			y = path[1][1] - lvl1.enemy1[i].y;
	} else {
		var x = 0,
			y = 0;
	}
	var t = {x:x , y:y};
	
	return t;
}
function moveEnemy1() {
	for(var i = 0; i < lvl1.enemy1.length; i++) {
		if(lvl1.enemy1[i].x != -1) {
			var t = makeEneDir(i),
			str = "#" + arr[lvl1.enemy1[i].y][lvl1.enemy1[i].x].charAt(0) + "en1",
			degr = turnTo(lvl1.enemy1[i].dir, t);
			if(degr == 0) {
				if(arr[lvl1.enemy1[i].y + t.y][lvl1.enemy1[i].x + t.x] == "0") { 
					if(soundd) {
						ene1MoveSound.play();
					}
					moveCss(lvl1.enemy1[i], str, t.x, t.y);
					arr[lvl1.enemy1[i].y + t.y][lvl1.enemy1[i].x + t.x] = arr[lvl1.enemy1[i].y][lvl1.enemy1[i].x];
					arr[lvl1.enemy1[i].y][lvl1.enemy1[i].x] = "0";
					lvl1.enemy1[i].x += t.x;
					lvl1.enemy1[i].y += t.y;
				} else if(arr[lvl1.enemy1[i].y + t.y][lvl1.enemy1[i].x + t.x] == "p") {
					moveCss(lvl1.enemy1[i], str, t.x, t.y);
					death();
				} else {
					moveCss(lvl1.enemy1[i], str, t.x, t.y, false);
				}
			} else {
				if(soundd) {
					ene1MoveSound.play();
				}
				lvl1.enemy1[i].dir = t;
				var w = getRotationDegrees($(str)),
				q = w + degr;
				$(str).css({ WebkitTransform: 'rotate(' + q + 'deg)'});
			}
		}
	}
}

function turn(moveDir) {
	click = false;
	if(movePlayer(moveDir)) {
		turnCount += 1;
		$("#turnCount").html("Количество ходов : " + turnCount);
		
		setTimeout(function() {moveEnemy1();}, 600);
	}
	setTimeout(function() {click = true;}, 700);
}

function win() {
	click = false;
	if(soundd) {
		bgSound.volume = 0;
		winSound.play();
		setTimeout(function() {
			$(bgSound).animate({volume:bgVolume}, 800);
		}, 1900);
	}
	if(currLvl == 2) {
		$("#" + currLvl).css("color", "green");
		currLvl = 0;
		$("#maincontain").toggle("explode", {pieces: 36 }, 1500);
		setTimeout(function() {
			scan();
			$("#maincontain").toggle();
			scan();
		}, 2000);
	} else {
		$("#" + currLvl).css("color", "green");
		currLvl++;
		$("#maincontain").toggle("explode", {pieces: 36 }, 1500);
		setTimeout(function() {
			scan();
			$("#maincontain").toggle();
			scan();
		}, 2000);
	}
}
function death() {
	if(soundd) {
		bgSound.volume = 0;
		loseSound.play();
		setTimeout(function() {
			$(bgSound).animate({volume:bgVolume}, 800);
		}, 2900);
	}
	click = false;
	$("#maincontain").toggle("explode", {pieces: 36 }, 1500);
	setTimeout(function() {
		scan();
		click = true;
		player = {x:-1, y:-1};
		turnCount = 0;
		arr = new Array();
		scan();
		$("#maincontain").fadeIn();
	}, 1800);
	
}

/*
*Ф-я обработчик отпускания мыши
*@param e - event
*@return null
*/
function mUp(e) {
	if(click) {
		moveDir = {x:0, y:0};
		switch(e.keyCode) {
			
			case 38 :
				moveDir.y = -1;
				break;
			case 40 :
				moveDir.y = 1;
				break;
			case 39 :
				moveDir.x = 1;
				break;
			case 37 :
				moveDir.x = -1;
				break;
		}
		if((moveDir.x != 0) || (moveDir.y != 0)) {
				turn(moveDir);
		}
	}
	
}


scan();

$("html").keydown(function(e){mUp(e);});

$(".changeLvl").click(function() {
	currLvl = this.id;
	$("#maincontain").fadeOut('explode');
	scan();
	setTimeout(function() {
		$("#maincontain").fadeIn('explode');
	}, 1000);
});

$("#music").click(function() {
	if(bgSound.paused) {
		bgSound.play();
		$(this).toggleClass('mOff');
	} else {
		bgSound.pause();
		$(this).toggleClass('mOff');
	}
});
$("#sound").click(function() {
	if(soundd) {
		soundd = false;
		$(this).toggleClass('sOff');
	} else {
		soundd = true;
		$(this).toggleClass('sOff');
	}
});





































