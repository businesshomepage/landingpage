import { motion } from 'framer-motion';

const MainSection = () => {
  return (
    <div className="h-screen flex flex-col justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-6"
      >
        <h1 className="text-4xl font-bold leading-tight">
          안정적인 수입을 넘어{' '}<br />
          <span className="text-primary-600">폭발적인 성장</span>을 꿈꾸는
          <br />
          당신의 공간
        </h1>
        
        <p className="text-xl text-gray-600 leading-relaxed">
          이제는 <span className="text-primary-600">좋아요</span>를 넘어, <br />
          나만의 무대가 필요할 때입니다.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              contactSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            시작하기
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="text-gray-400 text-sm">스크롤하여 더 알아보기</div>
      </motion.div>
    </div>
  );
};

export default MainSection;