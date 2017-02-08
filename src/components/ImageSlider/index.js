import React from 'react'
import Slider from 'react-slick';
require('slick-carousel/slick/slick.css')
require('slick-carousel/slick/slick-theme.css')
import './index.css'

import img_1 from '../../../public/img/artists/Untitled-2.jpg'
import img_2 from '../../../public/img/artists/Untitled-4.png'
const images = [
	img_2,
	img_1,
]
const ImageSlider = (props) => {
	const settings = {
		dots: false,
		arrows: false,
		infinite: true,
		autoplay: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1
	}

	return (
		<div className='slider'>
			<Slider {...settings}>
					{
						images.map((image) => {
						return (<div key={Math.random()} style={{backgroundImage:`url(${image})`}}
							 	className='slider__image'>
								<img style={{
										display: 'none'
									}}
									alt={'missingo'}
									src={img_1}
									role="presentation"/>
							 </div>)
						})
					}
			</Slider>
		</div>
	)
}

export default ImageSlider
