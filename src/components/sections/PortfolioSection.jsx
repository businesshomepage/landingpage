import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const PortfolioCard = ({ title, category, image, link, description }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="block bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    whileHover={{ y: -5 }}
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 }
    }}
  >
    <div className="aspect-video relative overflow-hidden">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover"
      />
      <div className="absolute top-2 right-2">
        <span className="px-3 py-1 bg-primary-600 text-white text-sm rounded-full">
          {category}
        </span>
      </div>
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </motion.a>
);

PortfolioCard.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

const PortfolioSection = () => {
  const portfolios = [
    {
      title: "요가 강사 AsiaTop님의 홈페이지",
      category: "강사",
      image: "https://t1.daumcdn.net/news/202105/23/muscleandfitness/20210523210108742mqyg.jpg",
      link: "#",
      description: "온라인 클래스 예약과 커리큘럼 소개가 가능한 미니멀한 디자인"
    },
    {
      title: "메이크업 아티스트 BlackBlue님의 포트폴리오",
      category: "아티스트",
      image: "https://image.xportsnews.com/contents/images/upload/article/2019/0503/mb_1556840011308166.jpg",
      link: "#",
      description: "작품 갤러리와 예약 시스템이 통합된 포트폴리오 사이트"
    },
    {
      title: "퍼스널 트레이너 Jacob님의 홈페이지",
      category: "트레이너",
      image: "https://watermark.lovepik.com/photo/20220304/large/lovepik-fitness-trainer-instructing-students-with-dumbbell-picture_502364998.jpg",
      link: "#",
      description: "회원 관리와 PT 일정 예약이 가능한 올인원 플랫폼"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center px-6 py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
        className="space-y-12"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
          <p className="text-gray-600">
            보다 빠르게 시작한 예술가들을 소개합니다.
          </p>
        </motion.div>

        <div className="grid gap-6">
          {portfolios.map((portfolio, index) => (
            <PortfolioCard key={index} {...portfolio} />
          ))}
        </div>

        <motion.div
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
          className="text-center"
        >
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200"
          >
            나도 시작하기
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PortfolioSection;