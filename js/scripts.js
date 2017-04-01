// Zadanie 9.3

$(document).ready(function(){

	//setInterval(changeSlide, 3000);

	var carouselList = $('#carousel ul');
	carouselList.css({marginLeft:-400});

	function changeSlide() {
		carouselList.animate({marginLeft: '-=400px'}, 500, moveFirstSlide);
	};

	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		lastItem.after(firstItem);
		carouselList.css({marginLeft:-400});
	};

	$('.btn-left').click(function() {
		changeSlide();
	});

	$('.btn-right').click(function() {
		changeSlideRight();
	});

	function changeSlideRight() {
		carouselList.animate({marginLeft: '+=400px'}, 500, moveLastSlide);
	};
	
	function moveLastSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");
		firstItem.before(lastItem);
		carouselList.css({marginLeft:-400});
	};

	var indicNo = $('#indic-3');
	console.log(indicNo.index());

});