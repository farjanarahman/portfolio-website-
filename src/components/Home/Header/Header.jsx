import { useState, useEffect, useRef } from 'react';
import animation from '../../../assets/71439-girl-working-on-computer.json'
import about from '../../../assets/23165-isometric-laptop.json'
import Lottie from 'lottie-react'
import { Link } from 'react-scroll'
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
import emailjs from '@emailjs/browser';

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

    return (
        <>
            <div id="/">
                <Navbar className="bg-blue-gray-50 sticky top-0 z-10 h-max max-w-full rounded-none py-1 px-4 lg:px-24 lg:py-2">
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
                        <h1 className='text-5xl font-semibold leading-normal'>And I am a <span className='name' ref={el}>Web Developer</span></h1>
                        <h2 className='text-2xl font-medium leading-normal'>Turning Ideas Into Functional Websites</h2>

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
                <div id="skills" className="skills mt-10">
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
                <div id="projects" className="project mt-10">
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
                <div id="contact" className="contact flex justify-between mx-auto items-center mt-10 w-11/12">
                    <div className="form-left ms-20 w-1/2">
                        <div>
                            <h2 className='font-bold text-3xl mb-5 name'>Get In Touch</h2>
                        </div>
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
                    <div className="form-right w-96 me-20">
                        <Lottie animationData={contact}></Lottie>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Header;


// import { useState, useEffect, useRef } from 'react';
// import animation from '../../../assets/71439-girl-working-on-computer.json';
// import about from '../../../assets/23165-isometric-laptop.json';
// import Lottie from 'lottie-react';
// import Typed from 'typed.js';
// import { FaFacebookF, FaLinkedinIn, FaHtml5, FaCss3Alt, FaBootstrap } from 'react-icons/fa';
// import { IoMdDownload } from 'react-icons/io';

// const Header = () => {
//   const [openNav, setOpenNav] = useState(false);

//   useEffect(() => {
//     window.addEventListener(
//       'resize',
//       () => window.innerWidth >= 960 && setOpenNav(false)
//     );
//   }, []);

//   const el = useRef(null);

//   useEffect(() => {
//     const typed = new Typed(el.current, {
//       strings: ['Transforming Ideas into Functional Websites'],
//       startDelay: 300,
//       typeSpeed: 50,
//       backSpeed: 0,
//       smartBackspace: false,
//       loop: true,
//       showCursor: false,
//     });

//     return () => {
//       typed.destroy();
//     };
//   }, []);

//   const navList = (
//     <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
//       {/* Nav links */}
//     </ul>
//   );

//   const data = [
//     // Skill data
//   ];

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="sticky top-0 z-10 h-max max-w-full rounded-none py-1 px-4 lg:px-24 lg:py-2">
//         <div className="flex items-center justify-between text-blue-gray-900">
//           {/* Logo */}
//           <a
//             href="#"
//             className="mr-4 cursor-pointer py-1.5 font-bold text-xl"
//           >
//             Farjana's Portfolio
//           </a>
//           {/* Mobile Nav */}
//           <div className="flex items-center gap-4">
//             <div className="mr-4 hidden lg:block">{navList}</div>
//             {/* Resume Button */}
//             <button className="hidden lg:inline-block btn">Resume</button>
//             {/* Mobile Menu Button */}
//             <button
//               className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
//               onClick={() => setOpenNav(!openNav)}
//             >
//               {openNav ? (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   className="h-6 w-6"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                   strokeWidth={2}
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 </svg>
//               ) : (
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-6 w-6"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth={2}
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 </svg>
//               )}
//             </button>
//           </div>
//         </div>
//         {/* Mobile Nav Menu */}
//         <div className={`${openNav ? 'block' : 'hidden'} lg:hidden`}>
//           {navList}
//           <button className="btn w-full">Resume</button>
//         </div>
//       </nav>
//       {/* Hero */}
//       <header className="bg-gray-200 py-16 lg:py-32">
//         <div className="container mx-auto">
//           <div className="flex flex-col justify-center items-center">
//             <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 leading-snug mb-4">
//               Transforming Ideas into Functional Websites
//             </h1>
//             <h2
//               ref={el}
//               className="text-lg md:text-xl lg:text-2xl text-center text-blue-gray-700"
//             ></h2>
//           </div>
//         </div>
//       </header>
//       {/* About */}
//       <section className="py-16 lg:py-32 bg-white">
//         <div className="container mx-auto">
//           <div className="flex flex-col lg:flex-row lg:items-center">
//             {/* Image */}
//             <div className="lg:w-1/2">
//               <Lottie animationData={about} />
//             </div>
//             {/* Text */}
//             <div className="lg:w-1/2 lg:ml-16">
//               <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
//                 About Me
//               </h3>
//               <p className="text-blue-gray-700 leading-relaxed mb-6">
//                 {/* About me description */}
//               </p>
//               <div className="flex items-center">
//                 <a
//                   href="#"
//                   className="mr-4 text-2xl text-blue-500 hover:text-blue-700"
//                 >
//                   <FaFacebookF />
//                 </a>
//                 <a
//                   href="#"
//                   className="mr-4 text-2xl text-blue-500 hover:text-blue-700"
//                 >
//                   <FaLinkedinIn />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Skills */}
//       <section className="py-16 lg:py-32 bg-blue-gray-50">
//         <div className="container mx-auto">
//           <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-8">
//             Skills
//           </h3>
//           <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
//             {/* Skill cards */}
//           </div>
//         </div>
//       </section>
//       {/* Contact */}
//       <section className="py-16 lg:py-32 bg-white">
//         <div className="container mx-auto">
//           <div className="flex flex-col lg:flex-row items-center">
//             {/* Form */}
//             <div className="lg:w-1/2">
//               <form className="space-y-6">
//                 <div>
//                   <label className="block mb-1 font-medium text-gray-900">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Enter Your Name"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                   />
//                 </div>
//                 <div>
//                   <label className="block mb-1 font-medium text-gray-900">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     placeholder="Your Email"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                   />
//                 </div>
//                 <div>
//                   <label className="block mb-1 font-medium text-gray-900">
//                     Message
//                   </label>
//                   <textarea
//                     rows="4"
//                     placeholder="Write Something"
//                     className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
//                   ></textarea>
//                 </div>
//                 <button className="btn w-full">Submit</button>
//               </form>
//             </div>
//             {/* Animation */}
//             <div className="lg:w-1/2 mt-10 lg:mt-0">
//               <Lottie animationData={animation} />
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Footer */}
//       <footer className="bg-gray-900 py-6">
//         <div className="container mx-auto flex justify-center">
//           <p className="text-gray-300">
//             &copy; {new Date().getFullYear()} Farjana's Portfolio. All rights
//             reserved.
//           </p>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Header;
