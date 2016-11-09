$(document).ready(function(){
	

/*****CREATE GRID*****/

var wrap = $("sketch-box").html("");
for (var i=0; i<200; i++){
	for (var j=0; j<100; j++){
wrap.append($("<div></div>").addClass("square").appendTo("#sketch-box"))}
wrap.append($("<div></div>").css("clear", "both"));
}

/***BASIC DRAWING FEATURE****/

$('.square').mouseenter(function() {
		$(this).css('background-color', "#000");
	})

/***CLEAR BUTTON****/

$('#clear').click(function(){
	$("#main-container").effect('shake', {direction:"right", times: 5, distance: 20}, 200);
	$('.square').css('background-color', "#fff");

})



});
   