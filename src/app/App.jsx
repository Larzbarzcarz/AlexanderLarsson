import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

// import components
import DownloadButton from '../common/components/DownloadButton/DownloadButton';
import IconButton from '../common/components/IconButton/IconButton';
import InputField from '../common/components/InputField/InputField';
import TextAreaField from '../common/components/TextAreaField/TextAreaField';
import SubmitButton from '../common/components/SubmitButton/SubmitButton';
import Loader from '../common/components/Loader/Loader';
import cv from '../assets/files/Resume.pdf';

// import icons
import { FaReact } from "react-icons/fa";
import { AiFillGithub, AiFillLinkedin, AiFillHtml5, AiOutlineEye } from "react-icons/ai";
import { BiLogoGmail, BiLogoCss3, BiLogoJavascript, BiLogoRedux, BiLogoJava } from "react-icons/bi";
import { BsFacebook, BsGit, BsPuzzle } from "react-icons/bs";
import { TbBrandCpp } from "react-icons/tb";
import { FaMobileAlt } from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";
import { SiTypescript, SiRecoil, SiReactquery } from "react-icons/si";
import {  TbBrandCSharp } from "react-icons/tb";

//import images

import TrashBashers from '../assets/images/TrashBashers.png';
import Evilutions from '../assets/images/Evilutions.png';
import FriendoAI from '../assets/images/FriendoAI.png';
import overbrewing from '../assets/images/Overbrewing.png';
import LogoImage1 from '../assets/images/cplus_icon.png';
import LogoImage2 from '../assets/images/csharp_icon.png';
import ProfileImage from '../assets/images/Profil.jpg';

//importing videos
import Video1 from '../assets/videos/GP1.mp4';
import Video2 from '../assets/videos/GP2.mp4';
import Video3 from '../assets/videos/GP3.mp4';

const videoList = [Video1, Video2, Video3];



// import style
import style from './App.module.css';
import clsx from 'clsx';

const skills = [

	{
		name: 'Responsive Design',
		icon: <FaMobileAlt size="25px" color="white" />,
		cssName: "responsive"
	},
	
	{
		name: 'C++',
		icon: <TbBrandCpp size="25px" color="white" />,
		cssName: "cpp"
	},
	{
		name: 'C#',
		icon: <TbBrandCSharp size="25px" color="purple" />,
		cssName: "c#"
	},
	{
		name: 'Problem Solving',
		icon: <BsPuzzle size="25px" color="white" />,
		cssName: "problem-solving"
	}
];

const projects = [
	{
		name: 'TrashBashers',
		link: 'https://futuregames.itch.io/trash-bashers',
		github: 'https://pastebin.com/u/LarzBarzCarz/1/ZWW2AQ1W',
		description: 'TrashBashers is a 2.5D game where you are roaming the streets fighting slime and picking up bottles and cans to resycle for power ups.',
		image: TrashBashers
	},
	{
		name: `Evilution`,
		link: 'https://futuregames.itch.io/evillution',
		github: 'https://github.com/Larzbarzcarz/GameProject2PotionCrafting',
		description: "Evilution is a phone game that was designed around the touch capability of phones with a simplistic turn based battler with a potion crafting system.",
		image: Evilutions
	},
	{
		name: 'OverBrewed',
		link: 'https://futuregames.itch.io/overbrewed',
		github: 'https://pastebin.com/u/LarzBarzCarz/1/gYz6Dr9t',
		description: 'OverBrewed is a co.op game that takes place in a fantasy potion shop. Where the roles are split in to two, a potion seller and the one crafting the potions. With a heavy emphasis on communication',
		image: overbrewing
	},
	{
		name: 'FriendoAI',
		link: 'https://larzko.itch.io/friendoai',
		github: 'https://github.com/detdu/BBP-Game-Jam',
		description: 'Its a game jam, That was mostly developed during 1 day. on the simple premise of if AI existed in the 90s, You as a player got to train the AI',
		image: FriendoAI
	},
]

function App() {
	const form = useRef();

	const [menu, setMenu] = useState(false);
	const [loading, setLoading] = useState(false);

	const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

	const handleVideoEnd = () => { setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videoList.length); };

	const sendEmail = (e) => {
		e.preventDefault();
		setLoading(true);

		setTimeout(function () {
			emailjs.sendForm('service_gjbmeus', 'template_qk6p0pa', form.current, 'HDMwz57k3xrihLg4J')
				.then((result) => {
					e.target.name.value = '';
					e.target.email.value = '';
					e.target.message.value = '';
				});
			setLoading(false);
		}, 2000);

	};

	return (
		<div className={style.app}>
			{/* Navbar */}
		<div className={style.nav}>
    <a className={style.logo}>
        <div className={style.flipContainer}>
            <div className={style.flipper}>
                <img src={LogoImage1} className={style.front} alt="C++ logo" />
                <img src={LogoImage2} className={style.back} alt="C# logo" />
            </div>
        </div>
        <h5>Alexander Larsson</h5>
    </a>
    <ul>
					<li><a href="#Home">Home</a></li>
					<li><a href="#About">About</a></li>
					<li><a href="#Projects">Projects</a></li>
					<li><a href="#Contact">Contact</a></li>
				</ul>
				<div className={style["menu-icon"]}>
					<input id='checkbox' className={style["checkbox2"]} type="checkbox" />
					<label className={`${style.toggle} ${style.toggle2}`} for="checkbox" onClick={() => setMenu(!menu)}>
						<div className={`${style.bars} ${style.bar4}`}></div>
						<div className={`${style.bars} ${style.bar5}`}></div>
						<div className={`${style.bars} ${style.bar6}`}></div>
					</label>
				</div>
			</div>
			{
				menu === true &&
				<ul className={style.menu}>
					<li><a href="#Home">Home</a></li>
					<li><a href="#About">About</a></li>
					<li><a href="#Projects">Projects</a></li>
					<li><a href="#Contact">Contact</a></li>
				</ul>
			}

		{/* Home */}
			<div id='Home' className={style.home}>
				{/* video player */}
				<video 
					src={videoList[currentVideoIndex]} 
					autoPlay 
					muted 
					playsInline 
					onEnded={handleVideoEnd}
					className={style.bgVideo}
				/>

				<div className={style["home-content"]}>
					<h1>HEY, I'M Alexander Larsson</h1>
					<p>A Game programmer Specialised in C# and C++</p>
					<a
						href={cv}
						download="cv-PDF-document"
						target="_blank"
						rel="noopener noreferrer"
					>
						<DownloadButton >
							Download CV
						</DownloadButton>
					</a>
				</div>
				<div className={style["scroll-icon"]}>
					<div className={style["scroll-down"]} style={{ color: "skyblue !important" }}>
						<div className={style.chevrons}>
							<div className={style["chevron-down"]}></div>
							<div className={style["chevron-down"]}></div>
						</div>
					</div>
				</div>
				<div className={style["contact-nav"]}>
					<a className={style.github} target="_blank" href='https://github.com/Larzbarzcarz' >
						<AiFillGithub size="30px" color='black' />
					</a>
					<a className={style.linkedin} target="_blank" href='https://www.linkedin.com/in/alexander-larsson-/' >
						<AiFillLinkedin size="30px" color='black' />
					</a>
					<a className={style.gmail} target="_blank" href="mailto:bjdalexander.larsson@://gmail.com" >
						<BiLogoGmail size="30px" color='black' />
					</a>
				</div>
			</div>

			{/* About */}
			<div id='About' className={style.about}>
				<div className={style.container}>
					<h2 className={style.title}>About Me</h2>
					<p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
					<div className={style["about-content"]}>
						<div className={style["about-info"]}>

<div className={style.profilePicContainer}>
	<img src={ProfileImage} className={style.profilePic} alt="Alexander Larsson" />
</div>

							<h3>Get to know me!</h3>
							<p>
								I'm a <span>Game Programmer</span> focused on building efficient gameplay systems, mechanics, and interactive experiences that bring virtual worlds to life. Check out some of my work in the <span>Projects</span> section. <br /> <br />

I also enjoy breaking down complex systems and sharing knowledge related to the things I've learned over the years in <span>Game Development</span> to help and inspire others in the gamedev community. Feel free to Connect or Follow me on my <a href="https://www.linkedin.com/in/alexander-larsson-/" target="_blank">Linkedin</a> where I post updates about my programming journey and engineering insights. <br /> <br />

I'm actively looking for <span>Job</span> opportunities where I can apply my skills in <span>C# and C++</span> to contribute to exciting game projects, learn from experienced teams, and grow as an engineer. If you have an opportunity that matches my profile, don't hesitate to <span>contact</span> me.

							</p>
						</div>
						<div className={style["my-skill"]}>
							<h3>My Skills</h3>
							<div className={style.skills}>
								{
									skills.map((skill, index) => {
										return <div key={`skill${index}`} className={`${style.skill} ${style[skill.cssName]}`}>
											<div className={style["skill-name"]}>{skill.name}</div>
											<div className={style["skill-icon"]}>{skill.icon}</div>
										</div>
									})
								}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Projects */}
			<div id='Projects' className={style.projects}>
				<div className={style.container}>
					<h2 className={style.title}>Projects</h2>
					<p>Here you will find some of the games i did during my studies and free time with friends</p>
					<div className={style["projects-list"]}>
						{
							projects.map((project, index) => {
								return <div key={`project${index}`} className={style.project}>
									<div className={style["project-image"]}>
										<img src={project.image} alt="Project Image" />
									</div>
									<div className={style["project-info"]}>
										<h3>{project.name}</h3>
										<p>{project.description}</p>
										<div className={style["project-buttons"]}>
											<IconButton
												width="170px"
												height="50px"
												backgroundColor="var(--primary-main)"
												color="white"
												link={project.link}
												icon={<AiOutlineEye size="25px" color='white' />}
											>
												Itch.io
											</IconButton>
											<IconButton
												width="100px"
												height="50px"
												backgroundColor="black"
												color="white"
												link={project.github}
												icon={<AiFillGithub size="25px" color='white' />}
											>
												Github
											</IconButton>
										</div>
									</div>
								</div>
							})
						}

					</div>
				</div>
			</div>

			{/* Contact */}
			<div id='Contact' className={style.contact}>
				<div className={style.container}>
					<h2 className={style.title}>Contact</h2>
					<p>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
					<form
						ref={form} onSubmit={sendEmail}
						className={
							clsx(
								{ [style['inactive-form']]: loading }
							)}
					>
						<InputField
							width="700px"
							height="40px"
							name="name"
							placeholder="Enter Your Name"
							label="Name"
							type="text"
						/>
						<InputField
							width="700px"
							height="40px"
							name="email"
							placeholder="Enter Your Email"
							label="Email"
							type="email"
						/>
						<TextAreaField
							width="700px"
							height="250px"
							name="message"
							placeholder="Enter Your Message"
							label="Message"
							type="text"
						/>
						<SubmitButton
							icon={<RiSendPlaneFill size="20px" color='white' />}
							width="200px"
							height="60px"
							color="white"
							backgroundColor="var(--primary-main)"
						>
							Submit
						</SubmitButton>
						{
							loading &&
							<div className={style.loader}>
								<Loader />
							</div>
						}
					</form>
				</div>
			</div>

			{/* footer */}
			<div className={style.footer}>
				<div className={style.container}>
					<div className={style["footer-info"]}>
						<div>
							<h3>Alexander Larsson</h3>
							<p>A Game programmer building the foundation of game experiences in both C# and in C++</p>
						</div>
						<div className={style.social}>
							<h3>Social</h3>
							<div className="">
								<a className={style.git} target="_blank" href='https://github.com/Larzbarzcarz' >
									<AiFillGithub size="30px" color='white' />
								</a>
								<a className={style.linkedin} target="_blank" href='https://www.linkedin.com/in/alexander-larsson-/' >
									<AiFillLinkedin size="30px" color='white' />
								</a>
								<a className={style.gmail} target="_blank" href="mailto:bjdalexander.larsson@gmail.com?subject=SendMail&body=Description" >
									<BiLogoGmail size="30px" color='white' />
								</a>
								
							</div>
						</div>
					</div>
					<div className={style["copy-right"]}>
						© Copyright 2026. Made by <span>Alexander Larsson</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;