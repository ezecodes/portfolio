import Head from 'next/head'
import Image from 'next/image';
import dynamic from 'next/dynamic';

import { FaDownload, FaFileDownload, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { AiFillGoogleCircle, AiOutlineDownload, AiOutlineWhatsApp } from "react-icons/ai";

function Social({children, href}) {
	return <a href={href}  rel="noreferrer" target='_blank' className='duration-200 hover:zoom-[10] block mr-2 text-[1.8rem]' >{children}</a>
}

const ContactForm = dynamic(() => import('../components/contact'))
const Projects = dynamic(() => import('../components/projects'))
const Stack = dynamic(() => import('../components/stack'))

export default function Home() {

	return (
		<main>
			<Head>
				<meta charSet="utf-8" />
				<link rel='icon' href='/img/logo_main.png' />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="Eze Elijah, a solutions driven developer." />
				<meta name="keywords" content="eze elijah, elijah developer, elijah software developer, developer nigeria" />
				<meta name="author" content="jahdevelops" />
				<title>Elijah Eze - Software developer</title>
			</Head>

			<section className='px-[1rem]' id='main' >
				<section>
					<div className='flex justify-between items-center'>
						<div className='flex-1 mb-[1rem] sm:mr-[2rem] text-center sm:text-left sm:items-start flex flex-col items-center'>
							<h1 className='text-[1.7rem] mb-[.5rem] font-medium'>Hi all ✋, I am Elijah Eze</h1>
							<p className='semifaded_text mt-[.5rem]'>
								A passionate fullstack developer, having an experience of building Web and Mobile applications with JavaScript, Nodejs, React, React-Native and some other cool libraries and frameworks.
							</p>
							<div className='my-[2rem] flex'>
								<Social href='https://github.com/jahdevelops'><FaGithub className='text-[#181717]' /> </Social>
								<Social href='https://linkedin.com/elijh-e'><FaLinkedin className='text-[#0077B5]' /> </Social>
								<Social href='mailto:elijaheze777@gmail.com'><AiFillGoogleCircle className='text-[#DB4437]' /> </Social>
								<Social href='https://api.whatsapp.com/send?phone=09155977113&text=Hello Elijah!'><AiOutlineWhatsApp className='text-[#25D366]' /> </Social>
							</div>
							<div className='mt-[2rem] flex'>
								<a 
									href=''
									download
									className='flex items-center justify-center mr-2 text-center text-white bg_green w-[130px] py-2 rounded-md'>Resume &nbsp; <FaFileDownload /></a>
								
							</div>
						</div>
						<div className='hidden sm:block w-[40%]'>
							<Image 
								className='w-full h-[200px]'
								src={'/undraw_developer_activity_re_39tg.svg'} 
								width={'360px'}
								height={'360px'}
							/>
						</div>
					</div>
				</section>

				<Projects />
				<Stack />
				<ContactForm />
			</section>
		</main>
	)
}
