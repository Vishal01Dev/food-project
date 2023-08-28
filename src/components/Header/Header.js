import React, { useRef, useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { SearchIcon, ShoppingCart, Bar, User, Close, SearchSmall, Plus, Minus, StarFill, StarEmp } from '../icons/CommonIcons'
import './Header.css'

import Search from '../../pages/Search'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { fetchFoods, setFoods } from '../../redux/slices/productSlice'
import { fetchCart } from '../../redux/slices/cartSlice'
import SearchBarCard from '../cards/SearchBarCard'


const Header = ({URL}) => {


  const location = useLocation()
  const dispatch = useDispatch()

  // useEffect(() => {
  //   const user = window.localStorage.getItem('user');
  //   dispatch(fetchFoods())
  //   dispatch(fetchCart(user))
  // }, [])

  useEffect(() => {
    setTotalData([])
    setEmp(false)
    setSearchResult(false)
    setToggleSearch(false)
    setSearchVal('')
  }, [location]);


  const FoodData = useSelector((state) => state.products.products)
  const cart = useSelector((state) => state.cart.cart)




  const [active, setActive] = useState('home')
  const [toggleNav, setToggleNav] = useState(false)
  const [toggleSearch, setToggleSearch] = useState(false)
  const [navBg, setNavBg] = useState(false)
  const [searchVal, setSearchVal] = useState('')
  const [searchResult, setSearchResult] = useState(false)
  const [proModel, setProModel] = useState(true)


  const [totalData, setTotalData] = useState([])
  const [emp, setEmp] = useState(false)



  const searchInput = useRef('')


  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setNavBg(true)
    }
    else if (scrolled <= 100) {
      setNavBg(false)
    }
  }

  window.addEventListener('scroll', toggleVisible)

  function setSearch() {
    setProModel(false)
    setSearchResult(true)
  }

  useEffect(() => {
    if (searchVal !== '') {
      setProModel(true)
      const filteredDataWithName = FoodData.filter((datata) => datata.name.toLowerCase().includes(searchVal.toLowerCase()))
      const filteredDataWithcategory = FoodData.filter((datata) => datata.category.toLowerCase().includes(searchVal.toLowerCase()))

      const filteredData = filteredDataWithName.concat(filteredDataWithcategory)

      setTotalData(filteredData)
      if (filteredData.length === 0) {
        setEmp(true)
      }
      else {
        setEmp(false)
      }
    }
    else {
      setTotalData([])
      setEmp(false)
      setSearchResult(false)
    }
  }, [searchVal])


  // const fetchData = async () => {

  // }
  // fetchData()

  return (
    <>
      <div className='fixed z-50 w-full bg-white'>
        <div className='relative z-50 flex items-center justify-between px-5 py-4 sm:px-10 md:px-16 lg:px-24'>
          <div>
            <Link to={`${URL}/`}>
              <p className='text-3xl font-bold tracking-[1px] text-prime'>Foodies</p>
            </Link>
          </div>
          <div className='items-center justify-center hidden gap-10 font-bold text-black/70 md:flex'>
            <motion.div whileHover={active === 'home' ? {} : { scale: 0.95 }} className={active === 'home' ? 'text-prime font-black' : 'hover:text-prime'} onClick={() => setActive('home')}>
              <Link to={`${URL}/home`}>Home</Link>
            </motion.div>
            <motion.div whileHover={active === 'menu' ? {} : { scale: 0.95 }} className={active === 'menu' ? 'text-prime font-black' : 'hover:text-prime'} onClick={() => setActive('menu')}>
              <Link to={`${URL}/menu`}>Menu</Link>
            </motion.div>
            <motion.div whileHover={active === 'about' ? {} : { scale: 0.95 }} className={active === 'about' ? 'text-prime font-black' : 'hover:text-prime'} onClick={() => setActive('about')}>
              <Link to={`${URL}/about`} >About</Link>
            </motion.div>
            <motion.div whileHover={active === 'contact' ? {} : { scale: 0.95 }} className={active === 'contact' ? 'text-prime font-black' : 'hover:text-prime'} onClick={() => setActive('contact')}>
              <Link to={`${URL}/contact`}>Contact</Link>
            </motion.div>
          </div>
          <div className='flex items-center justify-center gap-2 sm:gap-4 md:gap-7' >
            <motion.div whileHover={{ scale: 0.9 }} onClick={() => setToggleSearch(!toggleSearch)}>
              <SearchIcon />
            </motion.div>
            <motion.div whileHover={{ scale: 0.9 }}>
              <div className='relative'>
                <Link to={`${URL}/cart`}>
                  <ShoppingCart />
                  <span className='absolute -top-2 left-4 bg-prime w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] leading-5 sm:leading-5 text-center rounded-full text-white text-[9px] sm:text-[11px] font-sans font-bold'>{cart.length}</span>
                </Link>
              </div>
            </motion.div>
            {/* <motion.div whileHover={{ scale: 0.9 }}>
              <div className='relative'>
                <Link to='/login'>
                  <div className='flex items-center justify-center'>
                    <User />
                  </div>
                </Link>
              </div>
            </motion.div> */}
            <motion.div whileHover={{ scale: 0.9 }}>
              <div className='relative'>
                <Link to={`${URL}${window.localStorage.getItem('user') ? "/profile" : "/login"}`} >
                  <div className='flex items-center justify-center gap-1'>
                    <User />
                  </div>
                </Link>
              </div>
            </motion.div>


            <motion.div whileHover={{ scale: 0.9 }} className='md:hidden' onClick={() => setToggleNav(!toggleNav)}>
              <div className='relative'>
                <Bar />
              </div>
            </motion.div>
          </div>
        </div>
        {
          toggleSearch ?
            <>
              <div className={toggleSearch ? 'absolute w-full z-40 bg-gray-100 py-4 block -translate-y-0 transition duration-200 ease-in-out h-auto text-sm md:text-base' : 'absolute w-full z-40 bg-gray-100 py-4 block -translate-y-full transition duration-200 ease-in-out h-auto text-sm md:text-base'}>
                <div className={searchVal !== "" && proModel ? 'bg-white relative shadow mx-auto rounded-t-[20px] p-1 md:p-2 w-[90%] md:w-2/5 flex justify-center items-center' : 'bg-white relative shadow mx-auto rounded-[40px] p-1 md:p-2 w-[90%] md:w-2/5 flex justify-center items-center'}>
                  <input type="search" ref={searchInput} value={searchVal} onChange={(e) => setSearchVal(e.target.value)} className='w-full pl-5 pr-3 text-base font-bold text-black md:text-lg md:pl-8 focus:outline-none placeholder:text-black placeholder:opacity-60' placeholder='Search for &#127828; &#x1F355; &#x1F35F;' />

                  <motion.button whileTap={{ scale: 0.9 }} onClick={setSearch} className='border-2 border-prime bg-prime text-white p-2 md:px-4 md:py-1 rounded-[20px] flex  justify-center items-center font-semibold gap-2'><SearchSmall /><span className='hidden md:block'>Search</span></motion.button>
                  <div className='z-40 absolute flex justify-center items-center w-full top-[100%]'>
                    {
                      proModel ?

                        <div className={searchVal !== "" ? 'bg-white w-full rounded-b-[20px] px-10 max-h-96 overflow-auto shadow block ' : 'bg-white hidden w-full rounded-b-[20px] p-5 max-h-96 shadow  overflow-auto'}>

                          {
                            totalData !== [] ?
                              totalData.length !== 0 ?
                                totalData.map((item) => {
                                  const slug = item.name.replaceAll(" ", "-");
                                  return (
                                    // <div className='relative'>

                                    <SearchBarCard item={item} />

                                    // </div>
                                  )

                                })
                                :
                                <div className='grid grid-cols-6 gap-2 my-2 rounded-md'>
                                  <div className='col-span-6 py-2 '>
                                    <p className='text-2xl font-semibold text-center text-gray-400'>Oops!</p>
                                    <p className='my-1 text-sm text-center text-gray-400'>We could not understand what you mean,try rephrasing the query.</p>
                                  </div>
                                </div>

                              : ""
                          }


                        </div>
                        :
                        ""
                    }
                  </div>

                </div>

              </div>
              {
                searchResult && searchVal != "" ? <Search searchVal={searchVal} totalData={totalData} emp={emp} />
                  : ""

              }


            </>
            : ""
        }
        {
          toggleNav ?
            <>

              <div className='z-[1000] togglenav fixed md:hidden overflow-auto top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.8)] text-white p-5'>
                <div className='fixed top-6 right-6 text-prime flex items-center bg-white w-[30px] h-[30px] rounded-full' onClick={() => setToggleNav(false)}>
                  <Close />
                </div>
                <div className='flex flex-col items-center justify-center w-full h-full gap-10 text-xl font-bold text-white'>
                  <motion.div  whileHover={active === 'home' ? {} : { scale: 0.95 }} className={active === 'home' ? 'text-prime font-black' : 'hover:text-prime'} onClick={() => setActive('home')}>
                    <Link onClick={() => setToggleNav(false)} to='/home'>Home</Link>
                  </motion.div>
                  <motion.div  whileHover={active === 'menu' ? {} : { scale: 0.95 }} className={active === 'menu' ? 'text-prime font-black' : 'hover:text-prime'} onClick={() => setActive('menu')}>
                    <Link onClick={() => setToggleNav(false)} to='/menu'>Menu</Link>
                  </motion.div>
                  <motion.div  whileHover={active === 'about' ? {} : { scale: 0.95 }} className={active === 'about' ? 'text-prime font-black' : 'hover:text-prime'} onClick={() => setActive('about')}>
                    <Link onClick={() => setToggleNav(false)} to='/about'>About</Link>
                  </motion.div>
                  <motion.div  whileHover={active === 'contact' ? {} : { scale: 0.95 }} className={active === 'contact' ? 'text-prime font-black' : 'hover:text-prime'} onClick={() => setActive('contact')}>
                    <Link onClick={() => setToggleNav(false)} to='/contact'>Contact</Link>
                  </motion.div>

                </div>
              </div>
            </>
            : ""
        }
      </div>



    </>
  )
}

export default Header