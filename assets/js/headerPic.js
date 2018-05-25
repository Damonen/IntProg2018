function Node(value, value2) {
	this.data = value;
	this.adress = value2;
	this.previous = null;
	this.next = null;
}
 
function DoublyList() {
	this._length = 0;
	this.head = null;
	this.tail = null;
}
 
DoublyList.prototype.add = function(value,value2) {
	var node = new Node(value,value2);
 
	if (this._length) {
		this.tail.next = node;
		node.previous = this.tail;
		this.tail = node;
		this.tail.next = this.head;
	} else {
		this.head = node;
		this.tail = node;
	}
 
	this._length++;
 
	return node;
};


document.getElementById("picheader2").style.display = "none";

var headerBack = new DoublyList();
headerBack.add(document.getElementById("picheader1"), 'url(/images/bg1.jpg)');
headerBack.add(document.getElementById("picheader2"), 'url(/images/bg2.jpg)');
headerBack.add(document.getElementById("picheader1"), 'url(/images/bg3.jpg)');
headerBack.add(document.getElementById("picheader2"), 'url(/images/bg4.jpg)');
var nn = headerBack.head;
nn.previous = headerBack.tail;
var changeTime = 5200;

function changeP(){
	clearInterval(autoNext);
	nn = nn.previous;
	
	$(nn.data).css('background-image', nn.adress);
	
	$(nn.data).fadeToggle("fast", "linear");
	$(nn.next.data).fadeToggle("slow", "linear");
	
	autoNext = setInterval (
		function() {
			changeN();
		}, changeTime
	);
}

function changeN(){
	clearInterval(autoNext);
	nn = nn.next

	$(nn.data).css('background-image', nn.adress);
	
	$(nn.data).fadeToggle("fast", "linear");
	$(nn.previous.data).fadeToggle("slow", "linear");
	
	autoNext = setInterval (
		function() {
			changeN();
		}, changeTime
	);
}

var autoNext = setInterval (
	function() {
		changeN();
	}, changeTime
);

$(window).blur(function(){
  clearInterval(autoNext);
});

$(window).focus(function(){
  autoNext = setInterval (
	function() {
		changeN();
	}, changeTime
);
});
