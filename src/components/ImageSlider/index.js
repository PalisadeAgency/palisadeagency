import React, {PropTypes} from 'react'
import Slider from 'react-slick';
require('slick-carousel/slick/slick.css')
require('slick-carousel/slick/slick-theme.css')
import './index.css'


const ImageSlider = (props) => {
	const {images} = props
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
									src={image}
									role="presentation"/>
							 </div>)
						})
					}
			</Slider>
		</div>
	)
}

ImageSlider.propTypes = {
	images: PropTypes.array.isRequired
}

export default ImageSlider
