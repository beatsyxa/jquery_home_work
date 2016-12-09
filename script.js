$("document").ready(function () {
	/*1*/
	// $("p").css("display", "none");
	
	/*2*/
	$(".hide").on("click", hideTest);
	
	/*3*/
	$(".hide_even").on("click", hideEven);
	$(".hide_odd").on("click", hideOdd);
	
	/*4*/
	// $("p").on("click", hideP);
	
	/*5*/
	$("p").on("dblclick", hideP);
	
	/*6*/
	$("span").on("mouseover", hideSpan);
	
	/*7*/
	$(".red").on("focusout", inputRed);
	
	/*8*/
	$(".focus").on("focus", inputBlue);
	
	/*9*/
	$(".block").css({
		"width": "50px",
		"height": "50px",
		"float": "left",
		"margin": "20px",
		"background": "silver"
	});
	$(".block").on("mouseover", bgDiv);

});

function hideTest() {
	$("#test").css("display", "none");
}
function hideEven() {
	$("h2:even").css("display", "none");
}
function hideOdd() {
	$("h2:odd").css("display", "none");
}
function hideP() {
	$(this).css("display", "none");
}
function hideSpan() {
	$(this).css("display", "none");
}
function inputRed() {
	$(this).css("background", "red");
}
function inputBlue() {
	$(this).css("background", "blue");
}
function bgDiv() {
	$(this).css("background", "green");
}