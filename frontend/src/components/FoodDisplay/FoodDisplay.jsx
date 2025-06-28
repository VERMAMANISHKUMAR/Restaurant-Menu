import React, { useContext, useState } from 'react';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { food_list } = useContext(StoreContext);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredFoodList =
    selectedCategory === 'All'
      ? food_list
      : food_list.filter((item) => item.category === selectedCategory);

  // Category group data
  const categoryGroups = [
    {
      heading: 'Existing Categories',
      categories: [
        'All',
        'Salad',
        'Rolls',
        'Sandwich',
        'Cake',
        'Veg',
        'Pasta',
        'Desserts',
        'Noodles',
        'EggRice',
        'Chicken_Liver_Rice',
        'Egg_Curry_Rice',
        'Chicken_Chilli',
        'Biryani',
        'Burger',
      ],
    },
    {
      heading: 'Desserts',
      categories: ['Gulab_Jamun', 'Rasgulla', 'Kheer', 'Gajar_Ka_Halwa'],
    },
    {
      heading: 'Rice & Biryani',
      categories: [
        'Veg_Biryani',
        'Paneer_Biryani',
        'Chicken_Biryani',
        'Mutton_Biryani',
        'Jeera_Rice',
        'Egg_Fried_Rice',
        'Paneer_Pulao',
      ],
    },
    {
      heading: 'Main Course - Curries',
      categories: [
        'Butter_Chicken',
        'Paneer_Butter_Masala',
        'Kadhai_Paneer',
        'Chicken_Curry',
        'Mutton_Rogan_Josh',
        'Palak_Paneer',
        'Dal_Makhani',
        'Mix_Veg_Curry',
        'Egg_Curry',
        'Malai_Kofta',
      ],
    },
    {
      heading: 'Starters & Snacks',
      categories: [
        'Veg_Samosa',
        'Paneer_Tikka',
        'Chicken_Tandoori',
        'Aloo_Tikki',
        'Hara_Bhara_Kabab',
        'Mutton_Seekh_Kebab',
        'Masala_Papad',
        'Dahi_Puri',
        'Pav_Bhaji',
        'Chole_Bhature',
      ],
    },
  ];

  // Toggle state for expanded sections
  const [expandedGroups, setExpandedGroups] = useState({});

  const toggleGroup = (heading) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [heading]: !prev[heading],
    }));
  };

  return (
    <div className="py-5 px-4 max-w-7xl mx-auto" id="food-display">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Top dishes near you</h2>

      {/* Category Groups with Toggleable Buttons */}
      <div className="flex flex-col gap-6 mb-10">
        {categoryGroups.map((group, index) => (
          <div key={index}>
            <h3
              className="text-xl font-semibold text-gray-700 mb-3 cursor-pointer hover:text-orange-500 transition"
              onClick={() => toggleGroup(group.heading)}
            >
              {group.heading}
              <span className="ml-2 text-sm text-gray-500">
                {expandedGroups[group.heading] ? '▲' : '▼'}
              </span>
            </h3>

            {expandedGroups[group.heading] && (
              <div className="flex flex-wrap gap-3">
                {group.categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition duration-300 ${
                      selectedCategory === category
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-200 text-gray-800 hover:bg-orange-100'
                    }`}
                  >
                    {category.replace(/_/g, ' ')}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Food Items Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredFoodList.map((item, index) => (
          <FoodItem
            key={item._id || index}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
