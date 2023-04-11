import React, {useEffect, useState, useRef, useCallback} from 'react';
import {Link} from "react-router-dom";
import {motion, AnimatePresence} from "framer-motion";

import {styles} from "../../styles.js";
import {navLinks} from "../../constants";

import classes from './Navbar.module.scss'
import menu from '../../assets/menu.svg'
import close from '../../assets/close.svg'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef(null);

  const handleCloseMenu = useCallback(() => {
    setToggle(false)
  }, [])

  const handleOpenMenu = useCallback(() => {
    setToggle(true)
  }, [])

  useEffect(() => {
    const handler = (event) => {
      if (!menuRef.current) {
        return;
      }
      if (!menuRef.current.contains(event.target)) {
        setToggle(false)
      }
    };
    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

  return (
    <nav className={`
      ${styles.paddingX}
      w-full flex items-center py-5 bg-beige
    `}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            window.scrollTo(0, 0)
          }}
        >
          <p className={`logoText text-black text-[24px] font-bold cursor-pointer flex`}>
            hotsk1y
          </p>
        </Link>

        <ul className='list-none hidden md:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`text-black text-[18px] ease-in-out transition-all font-medium cursor-pointer hover:text-[#9B7132]`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div
          className="md:hidden flex flex-1 justify-end items-center"
        >
          <img
            src={menu}
            alt="menu"
            className={`${toggle ? 'hidden' : ''} w-[28px] h-[28px] object-contain cursor-pointer`}
            onClick={handleOpenMenu}
          />
          <img
            src={close}
            alt="close"
            className={`${!toggle ? 'hidden' : ''} w-[28px] h-[28px] object-contain cursor-pointer`}
            onClick={handleCloseMenu}
          />
          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{opacity: 0.2}}
                ref={menuRef}
                className="p-6 bg-white absolute top-20 right-0 mx-4 my-2 min-w-[140xp] z-10 rounded-xl"
              >
                <ul
                  className="list-none flex justify-end items-start flex-col gap-4">
                  {navLinks.map(link => (
                    <motion.li
                      initial={{height: 0}}
                      animate={{height: 'auto'}}
                      exit={{height: 0}}
                      transition={{duration: 0.3}}
                      key={link.id}
                      className="cursor-pointer text-[16px]"
                    >
                      <a
                        href={`#${link.id}`}
                        onClick={handleCloseMenu}
                      >
                        {link.title}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;