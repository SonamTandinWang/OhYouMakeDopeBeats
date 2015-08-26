// CLICK EVENT TO CHANGE CLASS OF DIV.
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

