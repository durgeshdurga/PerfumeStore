import Slider from "react-slick";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Hides navigation arrows
  };

  const bannerImages = [
    "https://img.freepik.com/free-vector/perfume-bottle-swirl-velvet-silk-fabric_33099-1547.jpg",
    "https://img.freepik.com/free-vector/beauty-product-cosmetics-bottles-banner_107791-1041.jpg?t=st=1737823470~exp=1737827070~hmac=431aeabb5bc678600507270bd97dd959af9b72779418e98563721fd8bbe9c0a7&w=900",
    "https://img.freepik.com/free-vector/perfume-glass-bottle-golden-silk-folded-fabric_33099-2052.jpg?t=st=1737823704~exp=1737827304~hmac=d4ce1e541099a1029a2efcb8696aac5f25980c81e1bda1a751c28ade4d7d5226&w=900",
  ];

  return (
    <div className="bg-gray-800 shadow-2xl">
      <Slider {...settings}>
        {bannerImages.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Banner ${index + 1}`}
              className="w-full h-[60vh] object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
