import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SvgDollarIcon from './svgs/svgDollarIcon';
import SvgArrowDown from './svgs/svgArrowDown';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import { Navigation, EffectCards } from 'swiper/modules';
import { useState, useEffect } from 'react';
import SvgTickIcon from './svgs/svgTickIcon';

interface SwiperItem {
  id: number;
  proImage: string;
  topSpan: string;
  name: string;
  experience: string;
  skills: string[];
}

const SwiperSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [swiperData, setSwiperData] = useState<SwiperItem[]>([]);

  useEffect(() => {
    const fetchSwiperData = async () => {
      try {
        const res = await fetch('/api/data');
        const data = await res.json();
        setSwiperData(data.swiper);
      } catch (error) {
        console.error('Error fetching swiper data:', error);
      }
    };

    fetchSwiperData();
  }, []);

  return (
    <>
      <div className="w-full max-w-screen overflow-hidden">
        <Swiper
          modules={[Navigation, EffectCards]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={50}
          effect={'cards'}
          grabCursor={true}
          cardsEffect={{
            perSlideOffset: 22,
            perSlideRotate: 0,
          }}
          initialSlide={1}
          className="mySwiper"
          slidesPerView={1}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}>
          {swiperData.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div className={activeIndex === index ? '' : 'mt-20'}>
                <div className="flex flex-col items-center">
                  {activeIndex === index && (
                    <div className="animate-fadeInUp text-[#00C696] font-bold text-lg bg-[#E9F7EF] flex items-center m-auto px-4 rounded-lg py-2">
                      <SvgDollarIcon />
                      <span>{item.topSpan}</span>
                    </div>
                  )}
                  {activeIndex === index && (
                    <div className="animate-fadeInUp">
                      <SvgArrowDown />
                    </div>
                  )}
                  <div
                    className={`px-3 py-9 md:p-9 w-[250px] md:w-[300px] flex flex-col items-center rounded-xl shadow-lg ${
                      activeIndex === index ? 'bg-white' : 'bg-[#EDFCFF]'
                    }`}>
                    <Image
                      src={item.proImage}
                      alt={`${item.name}'s profile image`}
                      objectFit="contain"
                      quality={100}
                      width={120}
                      height={120}
                    />
                    <h3 className="text-[#24252F] font-black text-2xl mt-4">{item.name}</h3>
                    <p className="font-black text-[#4A77FF] text-base">{item.experience}</p>
                    <div className="mt-9 flex gap-1 items-center justify-center flex-wrap">
                      <div className="mt-9 flex gap-1 items-center justify-center flex-wrap">
                        {item.skills.map((skill, skillIndex) => (
                          <p
                            key={skillIndex}
                            className={`border rounded-md text-sm w-fit px-3 py-1 flex items-center font-black ${
                              activeIndex === swiperData.findIndex((data) => data.id === item.id)
                                ? 'border-[#C1C5CF]'
                                : 'border-[#82BFD4]'
                            } text-[#5E626F]`}>
                            {skill}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="md:hidden mx-5 mt-8 gap-2 grid grid-cols-[110px_130px]">
        <div className="flex md:hidden gap-2">
          <SvgTickIcon />
          <span>한국어 능력</span>
        </div>
        <div className="flex md:hidden  gap-2">
          <SvgTickIcon />
          <span>업무 수행 능력</span>
        </div>
        <div className="flex md:hidden  gap-2">
          <SvgTickIcon />
          <span>겸업 여부</span>
        </div>
        <div className="flex md:hidden  gap-2">
          <SvgTickIcon />
          <span>평판 조회</span>
        </div>
      </div>
      <p className="md:hidden mx-5 pt-6 text-[#FBFF23] font-black underline underline-offset-2">
        개발자가 필요하신가요?
      </p>
    </>
  );
};

export default SwiperSection;
