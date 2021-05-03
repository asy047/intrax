$(function() {
	$('.btnMenu').on('click', function() {
		$('.sideMenu').stop().animate({
			right: 0
		})
	})
	//사이드메뉴 닫기
	$('.btnClose').on('click', function() {
		$('.sideMenu').stop().animate({
			right: '-300px'
		})
	})
	$(window).on('scroll', function() {
		var top = $(this).scrollTop();
//		alert(top);
		if (top > 820) {
			$('#header').addClass('on');
			$('#header .logo').find('img').attr({
				src: 'img/logo_color.png'
			})
			$('#header .btnMenu').find('img').attr({
				src: 'img/menu.png'
			})
		} else {
			$('#header').removeClass('on');
			$('#header .logo').find('img').attr({
				src: 'img/logo.png'
		})
		}
	})
	
	
	
})