import { NextResponse } from 'next/server';

const staticData = {
  navbar: {
    items: [
      {
        title: '채용',
        dropdown: [
          '채용',
          '해외 개발자 원격 채용',
          '외국인 원격 채용 (비개발 직군)',
          '한국어 가능 외국인 채용',
        ],
      },
    ],
    "menu1": '해외 개발자 활용 서비스', 
    "buttonText": '문의하기',
  },
  hero: {
    heading: '최고의 실력을 가진 외국인 인재를 찾고 계신가요?',
    subheading: '법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.',
    span: '개발자가 필요하신가요?',
    content: [
      {
        title: '평균 월 120만원',
        desc: '임금을 해당 국가를 기준으로 계산합니다.',
      },
      {
        title: '최대 3회 인력교체',
        desc: '막상 채용해보니 맞지 않아도 걱정하지 마세요.',
      },
      {
        title: '평균 3일, 최대 10일',
        desc: '급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.',
      },
    ],
  },
  slider: [
    '해외 마케팅',
    '퍼블리셔',
    '캐드원(제도사)',
    '해외 세일즈',
    '해외 CS',
    '해외 마케팅',
  ],
  swiper: [
    {
      id: 1,
      proImage: '/profileImg.webp',
      topSpan: '월 100만원',
      name: 'Abhishek Gupta',
      experience: '마케팅 · 2y+',
      skills: [
        '마케팅 콘텐츠 제작',
        '인스타그램 관리',
        '트위터 관리',
        '블로그 글 작성',
      ],
    },
    {
      id: 2,
      proImage: '/profileImg.webp',
      topSpan: '월 100만원',
      name: 'Abhishek Gupta',
      experience: '마케팅 · 2y+',
      skills: [
        '마케팅 콘텐츠 제작',
        '인스타그램 관리',
        '트위터 관리',
        '블로그 글 작성',
      ],
    },
    {
      id: 3,
      proImage: '/profileImg.webp',
      topSpan: '월 100만원',
      name: 'Abhishek Gupta',
      experience: '마케팅 · 2y+',
      skills: [
        '마케팅 콘텐츠 제작',
        '인스타그램 관리',
        '트위터 관리',
        '블로그 글 작성',
      ],
    },
  ],
  profile: {
    span: '풀타임, 파트타임',
    description: '법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.',
    h1: '최고의 실력',
    h2: '을 가진',
    h3: '외국인 인재를 찾고 계신가요?',
    mDesc1: '법률 및 인사관리 부담없이',
    mDesc2: '1주일 이내에 원격으로 채용해보세요.',
    underlineCont: '개발자가 필요하신가요?',
  },
  footer: {
    company: {
      name: '하이퍼하이어',
      englishName: 'Hyperhire India Private Limited',
      ceo: {
        korean: '김주현',
        english: 'Juhyun Kim',
      },
      registrationNumber: '427-86-01187',
      cinNumber: 'U74110DL2016PTC290812',
      addressKorea: '서울특별시 강남대로 479, 지하 1층 238호',
      addressIndia: 'D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India',
    },
    contact: {
      phone: '010-0000-0000',
      email: 'aaaaa@naver.com',
      copyright: 'ⓒ 2023 Hyperhire',
      services: [
        { title: '해외 개발자 원격 채용', icon: '/iconCode.webp', link: '/remote-developers' },
        { title: '외국인 원격 채용 (비개발)', icon: '/iconUser.webp', link: '/remote-foreign-hiring' },
        { title: '한국어 가능 외국인 채용', icon: '/iconKor.webp', link: '/korean-speaking-foreigners' },
        { title: '해외 개발자 활용 서비스', icon: '/iconSetting.webp', link: '/developer-services' },
      ],
    },
  },
};

export async function GET() {
  return NextResponse.json(staticData);
}
