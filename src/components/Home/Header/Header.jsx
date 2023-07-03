import { useState, useEffect, useRef } from 'react';
import animation from '../../../assets/71439-girl-working-on-computer.json'
import about from '../../../assets/23165-isometric-laptop.json'
import Lottie from 'lottie-react'
import { Link } from 'react-scroll'
import project1 from '../../../assets/images/chef-s-delight.png'
import project2 from '../../../assets/images/toy.png'
import project3 from '../../../assets/images/sportify.png'
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
import emailjs from '@emailjs/browser';
import Resume from '../../../../public/Resume of Farjana.pdf'
import { SiTailwindcss, SiReact, SiFirebase, SiMongodb, SiExpress } from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di';


library.add(faLink);

import './Header.css';
import Typed from "typed.js";
import { IoMdDownload } from 'react-icons/io';
import { FaFacebookF, FaLinkedinIn, FaHtml5, FaCss3Alt, FaBootstrap } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FiSun, FiMoon } from 'react-icons/fi';

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
            strings: ["Web Developer", "MERN Stack Developer", "React Developer"], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 300,
            typeSpeed: 80,
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
                <Link to="/" spy={true} smooth={true} offset={50} duration={500} href="#" className="flex items-center text-indigo-600 hover:text-lg ">
                    Home
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to="about" spy={true} smooth={true} offset={50} duration={500} href="#" className="flex items-center text-indigo-600 hover:text-lg ">
                    About
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to="skills" spy={true} smooth={true} offset={50} duration={500} href="#" className="flex items-center text-indigo-600 hover:text-lg ">
                    Skills
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to="projects" spy={true} smooth={true} offset={50} duration={500} href="#" className="flex items-center text-indigo-600 hover:text-lg ">
                    Projects
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <Link to="contact" spy={true} smooth={true} offset={50} duration={500} href="#" className="flex items-center text-indigo-600 hover:text-lg ">
                    Contact
                </Link>
            </Typography>
        </ul>
    );

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_6y9ctkk', 'template_6hbr0s5', form.current, '7M4W_kUI68T8B3QRA')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    const DarkMood = () => {
        const setDarkMood = () => {
            document.querySelector("body").setAttribute('data-theme', 'dark')
            localStorage.setItem("selectedTheme", "dark")
        }
        const setLightMood = () => {
            document.querySelector("body").setAttribute('data-theme', 'light')
            localStorage.setItem("selectedTheme", "light")
        }
        const selectedTheme = localStorage.getItem("selectedTheme");
        const toggleTheme = () => {
            if (e.target.checked) setDarkMood();
            else setLightMood()
        };
    }



    return (
        <>
            <div id="/" className='max-w-full'>
                <Navbar className="bg-blue-gray-50 sticky top-0 z-10 h-max max-w-full rounded-none py-1 px-4 lg:px-24 lg:py-2">
                    <div className="flex items-center justify-between text-blue-gray-900">
                        <Typography
                            as="a"
                            href="#"
                            className="mr-4 cursor-pointer py-1.5 font-bold text-xl"
                        >
                            <span className=' text-3xl text-purple-700'>F</span>arjana's Portfolio
                        </Typography>
                        <div className="flex items-center gap-4">
                            <div className="mr-4 hidden lg:block">{navList}</div>
                            <Button
                                variant="gradient"
                                size="sm"
                                className="hidden lg:inline-block"
                                onClick={() => window.open(Resume)}
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
                    <div data-aos="fade-down" data-aos-delay="25" className="left mt-5 text-left
                    2xl: ms-24 w-2/5">
                        <h1 className="text-4xl leading-normal md:text-5xl font-semibold md:font-semibold md:leading-normal">
                            Hi, I am <span className="name">Farjana Rahman</span>
                        </h1>


                        <h1 className='text-4xl 2xl:text-5xl font-semibold leading-normal'>And I am a <span className='name' ref={el}>Web Developer</span></h1>
                        <h2 className='text-xl 2xl:text-2xl font-medium leading-normal md:leading-normal mt-2'>Turning Ideas Into Functional Websites</h2>

                        <button className=' 2xl: flex  btn rounded px-3 py-2 items-center text-white mt-3 font-medium'>
                            <a href='Resume of Farjana.pdf' download className='me-1'>
                                Resume
                            </a>
                            <a href='Resume of Farjana.pdf' download><IoMdDownload /></a>
                        </button>
                    </div>
                    <div className="right hidden md:block">
                        <Lottie animationData={animation}></Lottie>
                    </div>
                </div>

                {/* About Section */}
                <div id='about' className=' md:flex justify-between mx-auto items-center mt-10'>
                    <div className='about-left md:ms-20'>
                        <Lottie animationData={about}></Lottie>
                    </div>
                    <div className='about-right me-24'>
                        <h2 className='font-bold text-3xl mb-5 name'>About Me</h2>
                        <p data-aos="fade-left" className='text-justify md:text-justify md:w-auto '>Hello, I'm <span className='font-bold'>Farjana Rahman</span>, a dedicated web developer. I have a strong passion for transforming ideas into functional websites that not only look visually appealing but also provide a seamless user experience. With my expertise in front-end development, back-end development, and various web technologies, I bring ideas to life and create engaging online experiences. I am constantly learning and staying up-to-date with the latest trends and best practices in web development to deliver high-quality and innovative solutions. Let's collaborate and bring your web projects to the next level!</p>
                        <div className='icons flex my-2'>
                            <a href="https://www.linkedin.com/in/farjana-rahman-79085b206?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BqzxyqgRlTDmmSWxuOdZ%2Fbw%3D%3D"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='m-1 rounded-full p-3 border text-black border-purple-500 bg-purple-50
                            hover:scale-110 transition-transform'>
                                <FaLinkedinIn />
                            </a>
                            <a href='https://github.com/farjanarahman' target='_blank' rel="noopener noreferrer" className='m-1 rounded-full p-3 border bg-purple-50 text-black border-purple-500 hover:scale-110 transition-transform' >
                                <FaGithub />

                            </a>
                            <a href='https://www.facebook.com/farjana.rahman.5074644/' target='_blank' rel="noopener noreferrer" className='m-1 rounded-full p-3 border bg-purple-50 text-black border-purple-500 hover:scale-110 transition-transform ' >
                                <FaFacebookF />

                            </a>
                        </div>
                        <button className='btn rounded px-3 py-2 items-center text-white mt-3 font-medium'>Contact Me</button>
                    </div>
                </div>


                {/* Skills */}
                <div id="skills" className="skills mt-10">
                    <h2 className='font-bold text-3xl mb-10 name text-center'>My Skills</h2>
                    <div data-aos="fade-up" className="skill-card grid grid-rows-4 grid-flow-col gap-4 md:flex justify-center items-center">
                        <div className='me-3 text-6xl text-orange-900 hover:scale-110 transition-transform'>
                            <FaHtml5 />
                        </div>
                        <div className='me-3 text-6xl text-blue-800 hover:scale-110 transition-transform'>
                            <FaCss3Alt />
                        </div>

                        <div className='me-3 text-6xl text-purple-700 hover:scale-110 transition-transform'>
                            <FaBootstrap />
                        </div>
                        <div className="me-3 text-6xl text-cyan-500 hover:scale-110 transition-transform">
                            <SiTailwindcss />
                        </div>
                        <div className="me-3 text-light-blue-500 text-6xl hover:scale-110 transition-transform">
                            <SiReact />
                        </div>
                        <div className="me-3 text-6xl text-yellow-700 hover:scale-110 transition-transform">
                            <SiFirebase />
                        </div>
                        <div className="me-3 text-6xl text-green-600 hover:scale-110 transition-transform">
                            <SiMongodb />
                        </div>
                        <div className="me-3 text-6xl text-purple-600 hover:scale-110 transition-transform">
                            <SiExpress />
                        </div>
                        <div className='me-3 text-6xl text-yellow-400 hover:scale-110 transition-transform'>
                            <DiJavascript1 />
                        </div>
                    </div>
                </div>


                {/* Projects */}
                <div id="projects" className="project mt-28">
                    <h2 className='font-bold text-3xl mb-10 name text-center mx-auto'>My Projects</h2>
                    {/* Cards */}
                    <div data-aos="flip-up" className="card-div md:flex justify-between mt-5 md:mx-64">
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
                                        <p className='border bg-purple-500 rounded-2xl flex items-center p-2 text-white'>Tailwind</p> <br />
                                    </div>
                                </div>
                            </div>
                            <div className='p-3 my-2 flex justify-between'>
                                <a href='https://sunny-lollipop-a98b54.netlify.app/' target="_blank" rel="noopener noreferrer" className='border-2 me-2 border-indigo-600 text-indigo-600 rounded-2xl px-3 py-2  hover:bg-indigo-500 hover:text-white'>
                                    <FontAwesomeIcon className='me-2' icon={faLink} />
                                    Live Preview
                                </a>
                                <a href='https://github.com/farjanarahman/chef-s-delight-client' target="_blank" rel="noopener noreferrer" className='border-2 me-2 border-indigo-600 text-indigo-600 rounded-2xl px-3 py-2  hover:bg-indigo-500 hover:text-white'>
                                    <FontAwesomeIcon className='me-2' icon={faGithub} />
                                    Client
                                </a>
                                <a href='https://github.com/farjanarahman/chef-s-delight-server' target="_blank" rel="noopener noreferrer" className='border-2 me-2 border-indigo-600 text-indigo-600 rounded-2xl px-3 py-2  hover:bg-indigo-500 hover:text-white'>
                                    <FontAwesomeIcon className='me-2' icon={faGithub} />
                                    Server
                                </a>
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
                                    Roboplayground
                                </Typography>
                                <div className=''>
                                    <h4 className='font-bold text-black mb-1'>Technologies</h4>
                                    <div className='flex flex-wrap'>
                                        <p className='border bg-purple-500 rounded-2xl flex items-center p-2 me-2 text-white'>React</p>
                                        <p className='border bg-purple-500 rounded-2xl flex items-center p-2 me-2 text-white'>Tailwind</p>

                                        <p className='border bg-purple-500 rounded-2xl flex items-center p-2 me-2 text-white'>Express.js</p>
                                        <p className='border bg-purple-500 rounded-2xl flex items-center p-2 me-2 text-white'>Firebase</p>
                                        <br />
                                    </div>
                                </div>
                            </div>
                            <div className='p-3 my-2 flex justify-between'>
                                <a href='https://roboplayground-cbc31.web.app/' target="_blank" rel="noopener noreferrer" className='border-2 me-2 border-indigo-600 text-indigo-600 rounded-2xl px-3 py-2  hover:bg-indigo-500 hover:text-white'>
                                    <FontAwesomeIcon className='me-2' icon={faLink} />
                                    Live Preview
                                </a>
                                <a href='https://github.com/farjanarahman/toy-marketplace-client' target="_blank" rel="noopener noreferrer" className='border-2 me-2 border-indigo-600 text-indigo-600 rounded-2xl px-3 py-2  hover:bg-indigo-500 hover:text-white'>
                                    <FontAwesomeIcon className='me-2' icon={faGithub} />
                                    Client
                                </a>
                                <a href='https://github.com/farjanarahman/toy-marketplace-server' target="_blank" rel="noopener noreferrer" className='border-2 me-2 border-indigo-600 text-indigo-600 rounded-2xl px-3 py-2  hover:bg-indigo-500 hover:text-white'>
                                    <FontAwesomeIcon className='me-2' icon={faGithub} />
                                    Server
                                </a>
                            </div>

                        </Card>
                        <Card className="w-96">

                            <CardHeader floated={false} className="h-80 cont">
                                <div className='image-container'>
                                    <img className='img-project' src={project3} alt="hello-picture" />
                                </div>
                            </CardHeader>

                            <div className="mx-auto p-2">
                                <Typography variant="h4" color="blue-gray" className="mb-2">
                                    Sportify
                                </Typography>
                                <div className=''>
                                    <h4 className='font-bold text-black mb-1'>Technologies</h4>
                                    <div className='flex flex-wrap'>
                                        <p className='border bg-purple-500 rounded-2xl flex items-center p-2 me-2 text-white'>React</p>
                                        <p className='border bg-purple-500 rounded-2xl flex items-center p-2 me-2 text-white'>Express.js</p>
                                        <p className='border bg-purple-500 rounded-2xl flex items-center p-2 me-2 text-white'>Firebase</p>
                                        <p className='border bg-purple-500 rounded-2xl flex items-center p-2 text-white'>MongoDB</p> <br />
                                    </div>
                                </div>
                            </div>
                            <div className='p-3 my-2 flex justify-between'>
                                <a href=' https://sportify-academy-6d048.web.app/' target="_blank" rel="noopener noreferrer" className='border-2 me-2 border-indigo-600 text-indigo-600 rounded-2xl px-3 py-2  hover:bg-indigo-500 hover:text-white'>
                                    <FontAwesomeIcon className='me-2' icon={faLink} />
                                    Live Preview
                                </a>
                                <a href='https://github.com/farjanarahman/summercamp-client' target="_blank" rel="noopener noreferrer" className='border-2 me-2 border-indigo-600 text-indigo-600 rounded-2xl px-3 py-2  hover:bg-indigo-500 hover:text-white'>
                                    <FontAwesomeIcon className='me-2' icon={faGithub} />
                                    Client
                                </a>
                                <a href='https://github.com/farjanarahman/summercamp-server' target="_blank" rel="noopener noreferrer" className='border-2 me-2 border-indigo-600 text-indigo-600 rounded-2xl px-3 py-2  hover:bg-indigo-500 hover:text-white'>
                                    <FontAwesomeIcon className='me-2' icon={faGithub} />
                                    Server
                                </a>
                            </div>
                        </Card>

                    </div>
                </div>


                {/* Contact Form */}
                <div id="contact" className="contact mt-28">
                    <h2 className='font-bold text-3xl mb-5 name text-center'>Contact Me</h2>
                    <div className=' flex justify-between mx-auto items-center mt-10 w-11/12'>
                        <div data-aos="fade-up"
                            data-aos-duration="500" className="form-left ms-20 w-1/2 ">
                            <form ref={form} onSubmit={sendEmail} action="">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        placeholder="Enter Your Name"
                                        className="input-field"
                                        name="from_name"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        className="input-field"
                                        name="from_email"
                                    />
                                </div>
                                <div className="form-group">
                                    <textarea
                                        placeholder="Write Something"
                                        className="input-field textarea-field"
                                        name="message"
                                    ></textarea>
                                </div>
                                <div className="form-group">
                                    <button type="submit" value="Send" className="submit-button bg-indigo-500 text-white py-2 px-3 rounded-lg">Submit</button>
                                </div>
                            </form>
                        </div>
                        <div className="hidden form-right md:block w-96 me-20">
                            <Lottie animationData={contact}></Lottie>
                        </div>
                    </div>
                </div>
            </div>


            {/* Footer */}
            <div className=' bg-blue-gray-50 p-10'>
                <Typography
                    variant="small"
                    className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
                >
                    &copy; 2023 <a href="https://material-tailwind.com/">Farjana Rahman</a>. All
                    Rights Reserved.
                </Typography>
                <div className='icons flex my-2 mx-auto text-center justify-center'>
                    <a href="https://www.linkedin.com/in/farjana-rahman-79085b206?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BqzxyqgRlTDmmSWxuOdZ%2Fbw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='m-1 rounded-full p-3 border text-black border-gray-500 hover:scale-110 transition-transform '>
                        <FaLinkedinIn />
                    </a>
                    <a href='https://github.com/farjanarahman' target='_blank' rel="noopener noreferrer" className='m-1 rounded-full p-3 border text-black border-gray-500 hover:scale-110 transition-transform ' >
                        <FaGithub />

                    </a>
                    <a href='https://www.facebook.com/farjana.rahman.5074644/' target='_blank' rel="noopener noreferrer" className='m-1 rounded-full p-3 border text-black border-gray-500 hover:scale-110 transition-transform ' >
                        <FaFacebookF />

                    </a>
                </div>

            </div>




        </>
    );
}

export default Header;







