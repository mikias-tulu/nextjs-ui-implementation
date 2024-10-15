'use client';

import { useState, useEffect } from 'react';
import SwiperSection from './SwiperSection';
import BottomSlider from './BottomSlider';
import SvgQuoteIcon from './svgs/svgQuoteIcon';

interface CandidateDetails {
  jobType: string;
  headingMain: string;
  subHeading1: string;
  subHeading2: string;
  hiringHighlight: string;
  hiringCTA: string;
  hiringDesc: string;
  hiringQuestion: string;
}

interface ContentItem {
  title: string;
  desc: string;
}

const HeroSection: React.FC = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [showSubHeading, setShowSubHeading] = useState(false);
  const [fadeInJobType, setFadeInJobType] = useState(false);
  const [candidateDetails, setCandidateDetails] = useState<CandidateDetails | null>(null);
  const [contentData, setContentData] = useState<ContentItem[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
      setShowSubHeading(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeInJobType(true);
    }, 800);
    return () => clearTimeout(timer);
  }, [fadeIn, showSubHeading]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('/api/data');
      const data = await res.json();
      setCandidateDetails(data.candidateDetails);
      setContentData(data.hero.content);
    };
    fetchData();
  }, []);

  return (
    <section className="relative pb-[60px] md:pb-20 w-auto md:mx-40">
      <div className="relative pt-16 md:pt-20 container block md:grid m-auto my-auto grid-cols-2 grid-flow-col gap-4 items-center justify-center">
        <div className="text-white space-y-4">
          {candidateDetails ? (
            <>
              <div className={`mb-4 transition-opacity duration-500 ${fadeInJobType ? 'opacity-100' : 'opacity-0'}`}>
                <span className="text-[#fff] md:text-[#40E2E8] mx-5 md:mx-0 font-black md:font-bold bg-[#8BC4FF] md:bg-white px-3 py-[6px] rounded-lg w-fit text-lg">
                  {candidateDetails.jobType}
                </span>
                <SvgQuoteIcon />
              </div>
              <h1
                className={`text-[36px] mx-5 sm:mx-0 md:text-4xl leading-tight font-black animate-fadeInUp ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
                {candidateDetails.headingMain}
                <span className={`text-[#FFFFFFE5] ${showSubHeading ? 'animate-fadeInUp' : 'opacity-0'}`}>
                  {candidateDetails.subHeading1}
                </span>
                <br />
                <span className={`text-[#FFFFFFE5] ${fadeIn ? 'animate-fadeInUp' : 'opacity-0'}`}>
                  {candidateDetails.subHeading2}
                </span>
              </h1>
              <p className="hidden md:block text-lg md:text-2xl font-black text-[#FFFFFFE5] animate-fadeInUp">
                {candidateDetails.hiringHighlight} <br /> {candidateDetails.hiringCTA}
              </p>
              <p className="mx-5 sm:mx-0 block md:hidden text-lg md:text-2xl font-black text-[#FFFFFFE5] animate-fadeInUp">
                {candidateDetails.hiringDesc}
              </p>
              <p className="text-lg underline underline-offset-2 pt-3 font-black hidden md:block">
                {candidateDetails.hiringQuestion}
              </p>
              <div className="gap-12 pt-11 hidden md:flex">
                {contentData.map((item, index) => (
                  <div
                    key={index}
                    className={`flex flex-col gap-2 transition-opacity duration-500 ${
                      fadeIn ? 'opacity-100' : 'opacity-0'
                    }`}>
                    <span className="w-[129px] border-t-2 h-1 block"></span>
                    <p className="font-black text-lg">{item.title}</p>
                    <p className="font-black text-[#FFFFFFCC]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <p className="text-lg text-white"></p>
          )}
        </div>
        <div className="mt-10 md:m-auto w-full animate-fadeInUp">
          <SwiperSection />
        </div>
      </div>
      <div className="m-auto mt-24 ml-32 hidden md:block">
        <BottomSlider />
      </div>
    </section>
  );
};

export default HeroSection;
