console.log ('loaded');

$('.box').on('click', function(){
	console.log ('clicked'); 
	var hex = $(this).data('hex');
	console.log('hex: ', hex);
	$('.hex-code').text(hex);
	$('.hex-code-input').val(hex);
	$('#canvas').css( 'background', hex );

	var rgb = $(this).data('rgb');
	console.log('rgb: ', rgb);
	$('.rgb-code').text(rgb);
	$('.rgb-code-input').val(rgb);

	var hsl = $(this).data('hsl');
	console.log('hsl: ', hsl);
	$('.hsl-code').text(hsl);
	$('.hsl-code-input').val(hsl);

	var cymk = $(this).data('cymk');
	console.log('cymk: ', cymk);
	$('.cymk-code').text(cymk);
	$('.cymk-code-input').val(cymk);


});
