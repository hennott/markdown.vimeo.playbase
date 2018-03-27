console.log('vimeoPlayBase v0.0.3'); 
if($('vimeo.PlayBase').length > 0) { 
	$('vimeo.PlayBase').each(function() { 
		var href = $(this).next('ul').find('a[href*="vimeo.com"]').first().attr('href');
		var vid = href.replace('https://vimeo.com/','');
		$(this).html('<iframe class="vimeoPlayer" src="https://player.vimeo.com/video/'+vid+'?autoplay=0&title=0&byline=0&portrait=0" style="" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
		$(this).next('ul').find('a[href*="vimeo.com"]').each(function() {
			$(this).on('click',function(event) {
				event.preventDefault()
				var href = $(this).attr('href');
				var vid = href.replace('https://vimeo.com/','');
				$(this).closest('ul').prev('vimeo').html('<iframe class="vimeoPlayer" src="https://player.vimeo.com/video/'+vid+'?autoplay=0&title=0&byline=0&portrait=0" style="" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
			});
		});
	}); 
} else if($('a[href*="vimeo.com"]').length > '0') {
	$('a[href*="vimeo.com"]').each(function() {
		var href = $(this).attr('href');
		var vid = href.replace('https://vimeo.com/','');
		var width = $('#body-inner').width();
		var height = 9*width/16;
		$(this).html('<iframe class="vimeoPlayer" src="https://player.vimeo.com/video/'+vid+'?autoplay=0&title=0&byline=0&portrait=0" style="width: '+width+'px; height: '+height+'px" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
	});
}