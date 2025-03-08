import React, { useContext, useState, useEffect } from 'react';
import { ShopContxt } from '../context/ShopContxt';
import dropdown_icon from '../assets/dropdown_icon.png';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
import { products } from '../assets/assets';  // import products

const Collection = () => {

  const { search, showSearch } = useContext(ShopContxt);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortOption, setSortOption] = useState('relevant');
  const [colors, setColors] = useState([]); // State to store selected colors
  
  // Get unique color options from the products data
  const availableColors = [...new Set(products.map(product => product.colour))];

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const toggleColor = (e) => {
    const value = e.target.value;
    setColors((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  const applyFilters = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) => subCategory.includes(item.subCategory));
    }

    if (colors.length > 0) {
      productsCopy = productsCopy.filter((item) => colors.includes(item.colour)); // Filter by selected color
    }

    if (sortOption === 'low-high') {
      productsCopy = productsCopy.sort((a, b) => a.price - b.price);
    } else if (sortOption === 'high-low') {
      productsCopy = productsCopy.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'relevant') {
      productsCopy = productsCopy.sort((a, b) => (b.bestseller ? 1 : 0) - (a.bestseller ? 1 : 0));
    }

    setFilterProducts(productsCopy);
  };

  useEffect(() => {
    applyFilters();
  }, [category, subCategory, search, showFilter, sortOption, colors]);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      <div className='min w-60'>
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img className={`h-3 sm:hidden rotate-180 ${showFilter ? 'rotate-180' : ' '}`} 
            src={dropdown_icon} alt="" />
        </p>

        {showFilter && (
          <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? ' block' : 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <p className='flex gap-2 '>
                <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory} />MEN
              </p>
              <p className='flex gap-2 '>
                <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory} />WOMEN
              </p>
              <p className='flex gap-2 '>
                <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory} />KIDS
              </p>
            </div>
          </div>
        )}

        <div className={`border border-gray-300 pl-5 py-3 mt-5 ${showFilter ? ' block' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2 '>
              <input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleSubCategory} />TOPWEAR
            </p>
            <p className='flex gap-2 '>
              <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory} /> BOTTOMWEAR
            </p>
            <p className='flex gap-2 '>         
              <input className='w-3' type="checkbox" value={'Fullpiece'} onChange={toggleSubCategory} /> FULL-PIECE
            </p>
          </div>  
        </div>

        {/* Color Filter Section */}
        <div className={`border border-gray-300 pl-5 py-3 mt-5 ${showFilter ? ' block' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>COLOR</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            {availableColors.map((color) => (
              <p key={color} className='flex gap-2 '>
                <input className='w-3' type="checkbox" value={color} onChange={toggleColor} />{color.toUpperCase()}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          <select value={sortOption} onChange={handleSortChange} className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevant">Sort by: RELEVANT</option>
            <option value="low-high">Sort by: LOW TO HIGH</option>
            <option value="high-low">Sort by: HIGH TO LOW</option>
          </select>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts.map((item, index) => (
            <ProductItem 
              key={index} 
              id={item._id} 
              name={item.name} 
              image={item.image} 
              price={`${item.price.toFixed(2)}`} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
