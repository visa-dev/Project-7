
import { useEffect, useRef } from 'react';

import Logo from '../../Assets/Images/images/uni-logo.png';
import { NavLink, Link } from 'react-router-dom';
import userIcon from '../../Assets/Images/images/avatar-icon.png';
import { BiMenu } from 'react-icons/bi';




const Header = (props) => {

  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickyHeader = () => {

    window.addEventListener('scroll', () => {

      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

        headerRef.current.classList.add('sticky__header');
      } else {
        headerRef.current.classList.remove('sticky__header');
      }

    })

  };

  useEffect(() => {
    //handleStickyHeader();
    return () => window.removeEventListener('scroll', handleStickyHeader);
  });


  const toggleMenu = () => menuRef.current.classList.toggle('show__menu');

  return (
    <header className='header flex items-center'>
      <div className="container">

        <div className="flex items-center justify-around">
          <div className='w-[70px] min-w-[70px]'>
           <Link to='/admin/home'> <img src={Logo} alt="uov-sport" /></Link>
          </div>


          <div className='navigation' ref={menuRef} onClick={toggleMenu} >
            <ul className="menu flex items-center gap-[2.7rem] ">
              {

                props.navLinks.map((link, index) =>
                  <li key={index} >

                    <NavLink to={link.path} className={navClass => navClass.isActive ? 'text-primaryColor text-[16px] leading-7 font-[600]' : 'text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor'} >{link.display}</NavLink>

                  </li>
                )
              }
            </ul>
          </div>

          <div className='flex items-center gap-4'>
            <div >
              <Link to='/'>
                <figure className='w-[35px] h-[35px] rounded-full cursor-pointer'>
                  <Link to='../admin/home' ><img src={userIcon} alt='#' className='w-full rounded-full' /></Link>
                  
                </figure>
              </Link>
            </div>
            {/* <Link to='/login'>
              <button className='bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]'>Login</button>
            </Link> */}

            <span className='lg:hidden' onClick={toggleMenu}>
              <BiMenu className='w-6 h-6 cursor-pointer' />

            </span>


          </div>
        </div>
      </div>

    </header >
  );

}

export default Header