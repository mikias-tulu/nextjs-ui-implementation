'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface FooterData {
  footer: {
    company: {
      name: string;
      englishName: string;
      ceo: {
        korean: string;
        english: string;
      };
      registrationNumber: string;
      cinNumber: string;
      addressKorea: string;
      addressIndia: string;
    };
    contact: {
      phone: string;
      email: string;
      copyright: string;
      services: { title: string; icon: string; link: string }[];
    };
  };
}

const FooterSection: React.FC = () => {
  const [footerData, setFooterData] = useState<FooterData | null>(null);

  useEffect(() => {
    const fetchFooterData = async () => {
      const response = await fetch('/api/data');
      const data = await response.json();
      setFooterData(data);
    };

    fetchFooterData();
  }, []);

  if (!footerData) {
    return <div></div>;
  }

  return (
    <footer className="pt-16 md:pt-24 px-5 pb-[60px] md:pb-16 bg-[#FBFBFB]">
      <div className="container m-auto block md:grid justify-center">
        <div className="grid md:flex gap-5 md:gap-44">
          <div className=" gap-2 grid">
            <div className="flex justify-between items-center">
              <Link href="/" legacyBehavior>
                <Image src="/footerLogo.webp" alt="HyperHire" width={187} height={34} />
              </Link>
            </div>
            <p className="font-black text-sm text-[#343741] pt-4 pb-4">
              우리는 국가의 장벽을 넘어 최고의 인재를 매<br />
              칭해드립니다.
            </p>
            <p className="font-black text-[13px] text-[#5E626F]">{footerData.footer.contact.phone}</p>
            <p className="font-black text-[13px] text-[#5E626F]">{footerData.footer.contact.email}</p>
          </div>
          <div className="grid md:flex grid-cols-2 gap-3 md:gap-6">
            {footerData.footer.contact.services.map((service, index) => (
              <div key={index} className="gap-0 grid bg-[#fff] w-full md:w-[187px] p-4 rounded-xl">
                <Image src={service.icon} alt={service.title} width={40} height={40} />
                <p className="font-black text-sm text-[#343741] pt-2 md:pt-0">{service.title}</p>
                <p className="font-black text-xs text-gray-700 flex gap-2 items-center pt-4 md:pt-0">
                  바로가기
                  <Image src="/iconArrow.webp" alt="iconArrow" width={20} height={20} />
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid md:flex gap-10 md:gap-28 pt-[60px] md:pt-14">
          <div className="flex gap-3">
            <div className="gap-2 grid">
              <p className="font-black text-xs text-[#343741]">상호명</p>
              <p className="font-black text-[13px] text-[#5E626F]">{footerData.footer.company.name}</p>
              <p className="font-black text-[13px] text-[#5E626F]">{footerData.footer.company.englishName}</p>
            </div>
            <div className="gap-2 grid">
              <p className="font-black text-xs text-[#343741]">대표 CEO</p>
              <p className="font-black text-[13px] text-[#5E626F]">{footerData.footer.company.ceo.korean}</p>
              <p className="font-black text-[13px] text-[#5E626F]">{footerData.footer.company.ceo.english}</p>
            </div>
          </div>
          <div className="grid md:flex gap-9 md:gap-14">
            <div className="gap-2 grid">
              <p className="font-black text-xs text-[#343741]">사업자등록번호 CIN</p>
              <p className="font-black text-[13px] text-[#5E626F]">{footerData.footer.company.registrationNumber}</p>
              <p className="font-black text-[13px] text-[#5E626F]">{footerData.footer.company.cinNumber}</p>
            </div>
            <div className="gap-2 grid">
              <p className="font-black text-xs text-[#343741]">주소 ADDRESS</p>
              <p className="font-black text-[13px] text-[#5E626F]">{footerData.footer.company.addressKorea}</p>
              <p className="font-black text-[13px] text-[#5E626F]">{footerData.footer.company.addressIndia}</p>
            </div>
          </div>
        </div>
        <p className="font-black text-[13px] text-[#5E626F] pt-9 md:pt-14">{footerData.footer.contact.copyright}</p>
      </div>
    </footer>
  );
};

export default FooterSection;
