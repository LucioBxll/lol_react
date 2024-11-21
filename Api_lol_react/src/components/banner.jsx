import PropTypes from 'prop-types';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export function Banner({ slides }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className={`banner banner-${slide.type}`} style={{ position: 'relative', overflow: 'hidden' }}>
            {slide.image && <img src={slide.image} alt="Banner" style={{ width: '100%', height: 'auto', maxWidth: '100%' }} />}
            <p style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontWeight: 'bold' }}>
              {slide.message}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

Banner.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      image: PropTypes.string,
    })
  ).isRequired,
};
