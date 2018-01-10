$(document).ready(function() {

				$(".centerk").slick({
					dots: true,
					infinite: false,
					arrows: false,
					slidesToShow: 3,
					autoplay:true

				});

				$('.cross').click(function() {
					$('.carousel-caption')
					.css('display','none');



				});

			});