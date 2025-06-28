import { menu_list } from '../../assets/assets';
import { motion } from 'framer-motion';

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-neutral-900 py-12 px-4" id="explore-menu">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Explore our menu
          </motion.h1>

          <motion.p
            className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Choose from a diverse menu featuring a delectable array of dishes. Our mission is to
            satisfy your cravings and elevate your dining experience, one delicious meal at a time.
          </motion.p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {menu_list.map((item, index) => (
              <motion.div
                key={index}
                onClick={() =>
                  setCategory((prev) => (prev === item.menu_name ? 'All' : item.menu_name))
                }
                className={`cursor-pointer p-3 rounded-xl transition-all duration-300 flex flex-col items-center border
                  ${
                    category === item.menu_name
                      ? 'bg-orange-100 dark:bg-orange-300/20 border-orange-500 shadow-md scale-105'
                      : 'bg-white dark:bg-neutral-800 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-neutral-700'
                  }`}
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <img
                  src={item.menu_image}
                  alt={item.menu_name}
                  className="w-20 h-20 object-cover rounded-full mb-2"
                />
                <p className="text-sm font-medium text-red-500 dark:text-white text-bold">
                  {item.menu_name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <hr className="my-10 border-gray-300 dark:border-gray-600" />
    </>
  );
};

export default ExploreMenu;
