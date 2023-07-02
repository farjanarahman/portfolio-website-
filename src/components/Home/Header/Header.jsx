import { useState, useEffect, useRef } from 'react';
import animation from '../../../assets/71439-girl-working-on-computer.json'
import about from '../../../assets/23165-isometric-laptop.json'
import Lottie from 'lottie-react'
import project1 from '../../../assets/images/chef-s-delight.png'
import project2 from '../../../assets/images/toy.png'
import project3 from '../../../assets/images/job-website.png'
import project4 from '../../../assets/images/AI-universe.png'
import project5 from '../../../assets/images/calculator.png'
import project6 from '../../../assets/images/html-project.png'
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Tooltip,
} from "@material-tailwind/react";
// import {
//     Tabs,
//     TabsHeader,
//     TabsBody,
//     Tab,
//     TabPanel,
// } from "@material-tailwind/react";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import contact from '../../../assets/70229-contact-us.json'

library.add(faLink);

import './Header.css';
import Typed from "typed.js";
import { IoMdDownload } from 'react-icons/io';
import { FaFacebookF, FaLinkedinIn, FaHtml5, FaCss3Alt, FaBootstrap } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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
            loop: true,
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

    const data = [
        {
            label: "HTML",
            value: "html",
            desc: `It really matters and then like it really doesn't matter.
          What matters is the people who are sparked by it. And the people 
          who are like offended by it, it doesn't matter.`,
        },
        {
            label: "React",
            value: "react",
            desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
        },
        {
            label: "Vue",
            value: "vue",
            desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
        },
        {
            label: "Angular",
            value: "angular",
            desc: `Because it's about motivating the doers. Because I'm here
          to follow my dreams and inspire other people to follow their dreams, too.`,
        },
        {
            label: "Svelte",
            value: "svelte",
            desc: `We're not always in the position that we want to be at.
          We're constantly growing. We're constantly making mistakes. We're
          constantly trying to express ourselves and actualize our dreams.`,
        },
    ];

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

                    <button className='flex  btn rounded px-3 py-2 items-center text-white mt-3 font-medium'>
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
                <div className='about-left ms-20'>
                    <Lottie animationData={about}></Lottie>
                </div>
                <div className='about-right me-24'>
                    <h2 className='font-bold text-3xl mb-5 name'>About Me</h2>
                    <p>Hello, I'm <span className='font-bold'>Farjana Rahman</span>, a dedicated web developer. I have a strong passion for transforming ideas into functional websites that not only look visually appealing but also provide a seamless user experience. With my expertise in front-end development, back-end development, and various web technologies, I bring ideas to life and create engaging online experiences. I am constantly learning and staying up-to-date with the latest trends and best practices in web development to deliver high-quality and innovative solutions. Let's collaborate and bring your web projects to the next level!</p>
                    <div className='icons flex my-2'>
                        <div className='m-1 rounded-full p-3 border text-black border-purple-500'>
                            <FaLinkedinIn />
                        </div>
                        <div className='m-1 rounded-full p-3 border text-black border-purple-500' >
                            <FaGithub />

                        </div>
                        <div className='m-1 rounded-full p-3 border text-black border-purple-500' >
                            <FaFacebookF />

                        </div>
                    </div>
                    <button className='btn rounded px-3 py-2 items-center text-white mt-3 font-medium'>Contact Me</button>
                </div>
            </div>
            {/* Skills */}


            {/* <Tabs value="html">
                    <TabsHeader>
                        {data.map(({ label, value }) => (
                            <Tab key={value} value={value}>
                                {label}
                            </Tab>
                        ))}
                    </TabsHeader>
                    <TabsBody>
                        {data.map(({ value, desc }) => (
                            <TabPanel key={value} value={value}>
                                {desc}
                            </TabPanel>
                        ))}
                    </TabsBody>
                </Tabs> */}
            <div className="skills mt-10">
                <h2 className='font-bold text-3xl mb-5 name text-center'>My Skills</h2>
                <div className="skill-card flex justify-center items-center">
                    <div className='text-5xl text-orange-900'>
                        <FaHtml5 />
                    </div>
                    <div className='text-5xl text-blue-800'>
                        <FaCss3Alt />
                    </div>

                    <div className='text-5xl text-purple-700'>
                        <FaBootstrap />
                    </div>


                </div>
            </div>

            {/* Projects */}
            <div className="project mt-10">
                <h2 className='font-bold text-3xl mb-5 name text-center mx-auto'>My Projects</h2>
                {/* Cards */}
                <div className="card-div flex justify-between mt-5 mx-64">
                    <Card className=" w-96 me-5">
                        {/*  */}
                        <CardHeader floated={false} className="h-80 cont">
                            <div className='image-container'>
                                <img className='img-project' src={project1} alt="hello-picture" />
                            </div>
                        </CardHeader>

                        <div className="mx-auto p-2">
                            <Typography variant="h4" color="blue-gray" className="mb-2">
                                Chef's Delight
                            </Typography>
                            <div className=''>
                                <h4 className='font-bold text-black mb-1'>Technologies</h4>
                                <div className='flex flex-wrap'>
                                    <p className='border bg-purple-500 rounded-2xl flex items-center p-2 me-2 text-white'>React</p>
                                    {/* <p className='border bg-purple-500 rounded-2xl flex items-center p-2 me-2 text-white'>React Router</p> */}
                                    <p className='border bg-purple-500 rounded-2xl flex items-center p-2 me-2 text-white'>Express.js</p>
                                    <p className='border bg-purple-500 rounded-2xl flex items-center p-2 me-2 text-white'>Firebase</p>
                                    <p className='border bg-purple-500 rounded-2xl flex items-center p-2 text-white'>MongoDB</p> <br />
                                </div>
                            </div>
                        </div>
                        <div className='p-3 my-2 flex justify-between'>
                            <button className='border-2 me-2 border-indigo-600 rounded-2xl px-3 py-2'>
                                <FontAwesomeIcon className='me-2' icon={faLink} />
                                Live Preview
                            </button>
                            <button className='border-2 border-indigo-600 rounded-2xl px-3 py-2 me-2'>
                                <FontAwesomeIcon className='me-2' icon={faGithub} />

                                Client
                            </button>
                            <button className='border-2 border-indigo-600 rounded-2xl px-3 py-2'>
                                <FontAwesomeIcon className='me-2' icon={faGithub} />

                                Server
                            </button>
                        </div>
                    </Card>
                    <Card className="w-96 me-5">
                        {/*  */}
                        <CardHeader floated={false} className="h-80 cont">
                            <div className='image-container'>
                                <img className='img-project' src={project2} alt="hello-picture" />
                            </div>
                        </CardHeader>

                        <div className="mx-auto p-2">
                            <Typography variant="h4" color="blue-gray" className="mb-2">
                                Chef's Delight
                            </Typography>
                            <div className=''>
                                <h4 className='font-bold text-black mb-1'>Technologies</h4>
                                <div className='flex flex-wrap'>
                                    <p className='border bg-purple-500 rounded-2xl flex items-center p-2 me-2 text-white'>React</p>
                                    {/* <p className='border bg-purple-500 rounded-2xl flex items-center p-2 me-2 text-white'>React Router</p> */}
                                    <p className='border bg-purple-500 rounded-2xl flex items-center p-2 me-2 text-white'>Express.js</p>
                                    <p className='border bg-purple-500 rounded-2xl flex items-center p-2 me-2 text-white'>Firebase</p>
                                    <p className='border bg-purple-500 rounded-2xl flex items-center p-2 text-white'>MongoDB</p> <br />
                                </div>
                            </div>
                        </div>
                        <div className='p-3 my-2 flex justify-between'>
                            <button className='border-2 me-2 border-indigo-600 rounded-2xl px-3 py-2'>
                                <FontAwesomeIcon className='me-2' icon={faLink} />
                                Live Preview
                            </button>
                            <button className='border-2 border-indigo-600 rounded-2xl px-3 py-2 me-2'>
                                <FontAwesomeIcon className='me-2' icon={faGithub} />

                                Client
                            </button>
                            <button className='border-2 border-indigo-600 rounded-2xl px-3 py-2'>
                                <FontAwesomeIcon className='me-2' icon={faGithub} />

                                Server
                            </button>
                        </div>
                    </Card>
                    <Card className="w-1/3">

                        <CardHeader floated={false} className="h-80 cont">
                            <div className='image-container'>
                                <img className='img-project' src={project4} alt="hello-picture" />
                            </div>
                        </CardHeader>

                        <div className="mx-auto p-2">
                            <Typography variant="h4" color="blue-gray" className="mb-2">
                                Chef's Delight
                            </Typography>
                            <div className=''>
                                <h4 className='font-bold text-black mb-1'>Technologies</h4>
                                <div className='flex flex-wrap'>
                                    <p className='border bg-purple-500 rounded-2xl flex items-center p-2 me-2 text-white'>React</p>
                                    {/* <p className='border bg-purple-500 rounded-2xl flex items-center p-2 me-2 text-white'>React Router</p> */}
                                    <p className='border bg-purple-500 rounded-2xl flex items-center p-2 me-2 text-white'>Express.js</p>
                                    <p className='border bg-purple-500 rounded-2xl flex items-center p-2 me-2 text-white'>Firebase</p>
                                    <p className='border bg-purple-500 rounded-2xl flex items-center p-2 text-white'>MongoDB</p> <br />
                                </div>
                            </div>
                        </div>
                        <div className='p-3 my-2 flex justify-between'>
                            <button className='border-2 me-2 border-indigo-600 rounded-2xl px-3 py-2'>
                                <FontAwesomeIcon className='me-2' icon={faLink} />
                                Live Preview
                            </button>
                            <button className='border-2 border-indigo-600 rounded-2xl px-3 py-2 me-2'>
                                <FontAwesomeIcon className='me-2' icon={faGithub} />

                                Client
                            </button>
                            <button className='border-2 border-indigo-600 rounded-2xl px-3 py-2'>
                                <FontAwesomeIcon className='me-2' icon={faGithub} />

                                Server
                            </button>
                        </div>
                    </Card>

                </div>
            </div>

            {/* Contact Form */}
            <div className="contact flex justify-between mx-auto items-center mt-10 w-11/12">
                <div className="form-left ms-20 w-1/2">
                    <div>
                        <h2 className='font-bold text-3xl mb-5 name'>Get In Touch</h2>
                    </div>
                    <form action="">
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Enter Your Name"
                                className="input-field"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input-field"
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                placeholder="Write Something"
                                className="input-field textarea-field"
                            ></textarea>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="submit-button bg-indigo-500 text-white py-2 px-3 rounded-lg">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="form-right w-96 me-20">
                    <Lottie animationData={contact}></Lottie>
                </div>
            </div>


        </>
    );
}

export default Header;