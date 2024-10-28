import image1 from "../assets/images/1.png";
import image2 from "../assets/images/2.png"
 import image3 from "../assets/images/3.png"
import image4 from "../assets/images/4.png"
import image5 from "../assets/images/5.png"

import {motion } from 'framer-motion';

const projectsData = [
	{
		image: image1,
		title: 'Go Green Webiste',
		description:
			'This is the static website design based on the plants sales description and so on ',
		technologies: [ 'HTML', 'CSS', 'JavaScript' ]
	},
	{
		image: image2,

		title: 'Market Mingle Hub',
		description:
			'It is a full dynamic e-commerce website which mainly focus on the  CRUD functionality.It contains homepage ,Dashboard for trader and Admin',	
			technologies: [ 'PHP','ORACLE','Figma']
	},
	{
		image:image3,
		title: 'VITALIC Sports Pvt.Ltd',
		description:'It is a full dynamic e-commerce website which mainly focus on the  sales of the cloth from online.',
		technologies: ['LARAVEL','MYSQL']
	},
	{
		image: image4,

		title: 'Jewllery Website',
		description:
			'This is the dynamic website which is means for the jewellery shop',
		technologies: [ 'HTML', 'CSS', 'JavaScript','React']
	},
	{
		image:image5,
		title: 'Personal Portfolio',
		description:
			'Design for myself to show work I had done upto date',
		technologies: [ 'HTML', ' Tailwind CSS', 'React' ]
	}
];
const ScrollReveal=({children})=>{
	return(
		<motion.div
		initial={{opacity:0,y:100}} 
		whileInView={{opacity:1,y:0}}
		viewPort={{once:true}}
		transition={{duration:0.8}}
		>
			{children}
		</motion.div>

	)
}

const ProjectCard = ({ project }) => {

	return (
		<ScrollReveal>
		<div className=" flex flex-col items-center gap-8 md:flex-row md:gap-24">
			<img
				src={project.image}
				alt=""
				className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
			/>
			<div className="flex flex-col gap-5">
				<div className="flex flex-col gap-3">
					<div className="text-xl font-semibold">{project.title}</div>
					<div className="text-gray-400">{project.description}</div>
				</div>
				<div className="flex flex-wrap gap-5">
					{project.technologies.map((tech, index) => (
						<span key={index} className="rounded-lg bg-black p-3">
							{tech}
						</span>
					))}
				</div>
			</div>
		</div>
		</ScrollReveal>
	);
};
const Projects = () => {
	return (
		<div
			id="projects"
			className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
		>
			<ScrollReveal>
				
			<h1 className="text-4xl font-light text-white md:text-6xl">My Projects</h1>
			</ScrollReveal>
			<div className="flex w-full max-w-[1000px] flex-col gap -16 text-white">
				{projectsData.map((project, index) => <ProjectCard key={index} project={project} />)}
			</div>
		</div>
	);
};

export default Projects;
