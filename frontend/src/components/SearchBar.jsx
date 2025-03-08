import React, { useContext, useEffect , useState} from 'react'
import { ShopContxt } from '../context/ShopContxt'
import { assets } from '../assets/assets';
import search_icon from '../assets/search_icon.png'
import cross_icon from '../assets/cross_icon.png'
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

    const { search, setSearch ,showSearch, setShowSearch} = useContext(ShopContxt);
    const [visible, setVisible] = useState(false);
    const location = useLocation();


    useEffect(() => {
      setVisible(showSearch);
    }, [location, showSearch]); // Whenever location or showSearch changes, update visibility
  
    const handleCloseSearch = () => {
      setShowSearch(false); // Close search bar on cross button click
      setVisible(false); // Update visible state to hide search
    };
  
    const handleSearchChange = (e) => {
      setSearch(e.target.value); // Update search state
    };

    useEffect(()=>{
      if(location.pathname.includes('collection') && showSearch){
        setVisible(true);
      }else{
        setVisible(false);
      }
    },[location])


    

  return showSearch && visible ?(
    <div className='border-t border-b bg-gray-50 text-center'>
        <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
        <input value={search}  onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type="text" placeholder='Search'/>
        <img className='w-4' src={search_icon} alt="" />
        </div>
      <img onClick={() => setShowSearch(false)} className='inline w-3 cursor-pointer' src={cross_icon} alt="" />
    </div>
  ) : null
}

export default SearchBar
