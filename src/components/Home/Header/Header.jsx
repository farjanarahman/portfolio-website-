import React, { useState, useEffect, useRef } from 'react';
import animation from '../../../assets/71439-girl-working-on-computer.json'
import about from '../../../assets/23165-isometric-laptop.json'
import Lottie from 'lottie-react'
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import './Header.css';
import Typed from "typed.js";
import { IoMdDownload } from 'react-icons/io';

const Header = () => {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Transforming Ideas into Functional Websites"], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 300,
            typeSpeed: 50,
            backSpeed: 0,
            //   backDelay: 150,
            smartBackspace: false,
            //   loop: true,
            showCursor: false,
        });

        // Destropying
        return () => {
            typed.destroy();
        };

    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center text-indigo-600 hover:text-lg ">
                    About
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center text-indigo-600 hover:text-lg">
                    Skills
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center text-indigo-600 hover:text-lg">
                    Projects
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center text-indigo-600 hover:text-lg">
                    Contact Us
                </a>
            </Typography>
        </ul>
    );
    return (
        <>
            <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-1 px-4 lg:px-24 lg:py-2">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Typography
                        as="a"
                        href="#"
                        className="mr-4 cursor-pointer py-1.5 font-bold text-xl"
                    >
                        Farjana's Portfolio
                    </Typography>
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>
                        <Button
                            variant="gradient"
                            size="sm"
                            className="hidden lg:inline-block"
                        >
                            <span>Resume</span>
                        </Button>
                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <MobileNav open={openNav}>
                    {navList}
                    <Button variant="gradient" size="sm" fullWidth className="mb-2">
                        <span>Resume</span>
                    </Button>
                </MobileNav>
            </Navbar>
            <div className="header flex justify-between mx-auto items-center">
                <div className="left
                    ms-24 w-2/5">
                    <h1 className='text-5xl font-semibold leading-normal'>Hi, I am <span className='name'>Farjana Rahman</span></h1>
                    <h1 className='text-5xl font-semibold leading-normal'>And I am a <span className='name'>Web Developer</span></h1>
                    <h2 className='text-2xl font-medium leading-normal' ref={el}></h2>
                    <button className='flex btn rounded px-3 py-2 items-center text-white mt-3 font-medium'>
                        <a href='Resume of Farjana.pdf' download className='me-1'>
                        Resume
                        </a>
                        <a href='Resume of Farjana.pdf' download><IoMdDownload /></a>
                    </button>
                </div>
                <div className="right">
                    <Lottie animationData={animation}></Lottie>
                </div>
            </div>

            {/* About Section */}
            <div id='about' className=' flex justify-between mx-auto items-center mt-10'>
                <div className='about-left ms-24 w-2/5'>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam expedita quis ipsa cum, vero mollitia optio ut, nam distinctio sed facilis eum labore voluptatem nostrum quidem. Exercitationem ipsa quo harum cumque beatae explicabo, quae autem. Asperiores explicabo consequatur tempora delectus? Qui ducimus, dolore quas voluptatum dolorem quibusdam fugiat at eius!</p>
                </div>
                <div>
                <Lottie animationData={about}></Lottie>
                    
                </div>
                

            </div>
        </>
    );
}

export default Header;