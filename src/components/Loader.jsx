import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-800/80 to-black/80 text-white py-16">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.h2 
          className="text-blue-500 font-bold text-xl mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Loading Portfolio...
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default Loader;