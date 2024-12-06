import { motion } from 'framer-motion';
import { HiX, HiCheck } from 'react-icons/hi';

const ComparisonSection = () => {
  const comparisonData = [
    {
      general: "템플릿 기반 디자인",
      dancerkit: "퍼스널 브랜딩을 고려한 맞춤 디자인",
    },
    {
      general: "일반적인 예약 시스템",
      dancerkit: "최적화된 예약 관리시스템",
    },
    {
      general: "기본적인 기능만 제공",
      dancerkit: "관리부터 정산까지 올인원 솔루션",
    },
    {
      general: "답답한 이메일 기술지원",
      dancerkit: "빠른 전화 및 카톡 기술지원",
    },
    {
      general: "제작 후 사후관리 없음",
      dancerkit: "지속적인 업데이트와 마케팅 조언",
    },
    {
      general: "단순 웹사이트 제작",
      dancerkit: "브랜드 커리어 성장 파트너",
    }
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center px-6 py-20 bg-gray-50">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
        className="space-y-12"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 }
          }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-4">차이를 만드는 선택</h2>
          <p className="text-xl font-medium text-primary-600 mb-2">
            그들은 홈페이지를 팔지만<br />
            우리는 1인 브랜딩의 미래를 만듭니다
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* 일반 업체 */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -10 },
              visible: { opacity: 1, x: 0 }
            }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-gray-400 mb-2">일반 업체</h3>
            </div>
            <ul className="space-y-4">
              {comparisonData.map((item, index) => (
                <li key={index} className="flex items-center text-gray-500">
                  <HiX className="text-red-400 mr-2 flex-shrink-0" />
                  <span>{item.general}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Dancerkit */}
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 10 },
              visible: { opacity: 1, x: 0 }
            }}
            className="bg-white rounded-xl p-6 shadow-lg border-2 border-primary-500"
          >
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-primary-600 mb-2">Bizkit</h3>
            </div>
            <ul className="space-y-4">
              {comparisonData.map((item, index) => (
                <li key={index} className="flex items-center">
                  <HiCheck className="text-primary-500 mr-2 flex-shrink-0" />
                  <span>{item.dancerkit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
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
            Bizkit과 함께 시작하기
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ComparisonSection;