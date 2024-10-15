import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface SliderItem {
  id: number;
  imageSrc: string;
  title: string;
}

const BottomSlider: React.FC = () => {
  const [sliderData, setSliderData] = useState<SliderItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/data');
      const data = await response.json();
      setSliderData(data.slider);
    };

    fetchData();
  }, []);

  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={4.4}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className={`mySwiper animate-fadeInUp`}
        modules={[Autoplay]}>
        {sliderData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="p-4 rounded-lg bg-opacity-10 bg-white flex gap-6 items-center justify-center w-full">
              <Image src={item.imageSrc} alt={item.title} objectFit="contain" quality={100} width={45} height={45} />
              <p className="text-lg text-center flex-grow font-medium">{item.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BottomSlider;
