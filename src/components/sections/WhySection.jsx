import { motion } from 'framer-motion';
import { HiGlobe, HiClock, HiTrendingUp } from 'react-icons/hi';

const WhySection = () => {
  const reasons = [
    {
      icon: <HiGlobe className="w-8 h-8 text-primary-600" />,
      title: "'좋아요'는 짧지만 작품은 길다",
      description: "- 나를 대표하는 작품을 전시해줘야해"
    },
    {
      icon: <HiClock className="w-8 h-8 text-primary-600" />,
      title: "24시간 완벽하게 일하는 매니저",
      description: "- 자는 동안에도 쌓이는 수업문의, 자동 예약과 결제까지 한번에"
    },
    {
      icon: <HiTrendingUp className="w-8 h-8 text-primary-600" />,
      title: "프로페셔널 브랜딩",
      description: "수강생의 리뷰가 달라지고 수업의 가치가 달라지고 당신의 위상이 달라집니다"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center px-6 py-20">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={containerVariants}
        className="space-y-12"
      >
        <motion.div variants={itemVariants} className="text-center">
          <h2 className="text-3xl font-bold mb-4">
          한 번 오는 수강생이 <br></br>
          &apos;<span className="text-primary-600">평생 팬</span>&apos;이 되는 순간.
          </h2>
          <p className="text-gray-600">
          홈페이지는 단순한 웹사이트가 아닌 <br></br>당신만의 &apos;프리미엄 브랜드&apos;입니다
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          className="space-y-8"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {reason.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="text-center bg-primary-50 rounded-xl p-6"
        >
          <p className="text-lg text-primary-800 font-medium">
            무대 위 스포트라이트처럼, <br />
            당신의 작품만을 위한 특별한 조명을 비춥니다.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhySection;