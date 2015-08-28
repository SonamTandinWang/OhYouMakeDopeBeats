// ------------CLICK EVENT TO CHANGE CLASS OF DIV--------------
$('.columns').on('click', '.unclicked', function() {
	if ($(this).attr('class') === 'unclicked') {
		$(this).attr('class', 'clicked')
	}
});

$('.columns').on('click', '.clicked', function() {
	if ($(this).attr('class') === 'clicked') {
		$(this).attr('class', 'unclicked')
	};
});

// -----------------------ALL THE SOUNDS-----------------------
var hats1 = new Audio('../assets/sounds/kit_one/hats.wav');
var cymbals1 = new Audio('../assets/sounds/kit_one/cymbal.wav');
var snare1 = new Audio('../assets/sounds/kit_one/clap.wav');
var kick1 = new Audio('../assets/sounds/kit_one/kick.wav');
var rim1 = new Audio('../assets/sounds/kit_one/rim.wav');
var perc1 = new Audio('../assets/sounds/kit_one/perc.wav');

// -------------------STORING INTO THE MATRIX-------------------
var matrix = [];
for (var column = 0; column < 64; column++) {
	matrix.push([]);
	for(var row = 0; row < 5; row++) {
		matrix[column].push([]);
	}
};
// ------------------PUNCHING IN THE SEQUENCE------------------
$('#container-for-app').on('click', 'div', function() {
	var regexHats = /[a-z]+0/;
	var regexCymbal = /[a-z]+1/;
	var regexSnare = /[a-z]+2/;
	var regexKick = /[a-z]+3/;
	var regexRim = /[a-z]+4/;
	var regexPerc = /[a-z]+5/;

	//SO GHETTO FABUUUULOUZ
	var column = $($(this).parents()[0]).attr('id').split('-')[1],
		row = $(this).attr('id').split('').pop();

	if (regexHats.test($(this).attr('id'))) {
		hats1.play();
		// console.log('row ', row);
		// console.log('column', column);
		matrix[column][row].push(hats1);
	}
	else if (regexCymbal.test($(this).attr('id'))) {
		cymbals1.play();
		matrix[column][row].push(cymbals1);
	}
	else if ($(this).attr('id').search(regexSnare) > -1) {
		snare1.play()
		matrix[column][row].push(snare1);
	}
	else if ($(this).attr('id').search(regexKick) > -1) {
		kick1.play()
		matrix[column][row].push(kick1);
	}
	else if ($(this).attr('id').search(regexRim) > -1) {
		rim1.play()
		matrix[column][row].push(rim1);
	}
	else if ($(this).attr('id').search(regexPerc) > -1) {
		perc1.play()
		matrix[column][row].push(perc1);
	};
});

// -------------------PLAYING THE SEQUENCE -------------------

$('#play-button').on('click', function () {

	for (var i = 0; i < 64; i++ ) {
		for (var j = 0; j < 5; j++) {
		 	if (matrix[i][j].length > 0) {
		 		// BELOW LINE IS NESTED INSIDE A SET TIMEOUT FUNCTION WHICH MAY REQUIRE CLOSURE
		 		matrix[i][j][0].play();
		 	}
	 	}
	}
});

// PLAY BACK 