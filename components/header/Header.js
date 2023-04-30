import React from 'react'
import DesktopNav from '../navbar/Desktop'
import MobileNav from '../navbar/Mobile'
import { AiFillHome } from "react-icons/ai";
import { BsInfoLg, BsCodeSlash, BsFillTelephonePlusFill } from "react-icons/bs";
import { RiGitRepositoryFill } from "react-icons/ri";

const links = [
	{link: 'home', icon: <AiFillHome />},
	{link: 'projects', icon: <RiGitRepositoryFill />},
	{link: 'stack', icon: <BsCodeSlash />},
	{link: 'contact', icon: <BsFillTelephonePlusFill />}
]


export default function Header () {
	return (
		<header className='sticky backdrop-blur-xl z-50 bg-[#3f3d5605] top-0 flex justify-between relative px-4 py-4'>
			<div>
				LOGO
			</div>
			<DesktopNav links={links} />
			<MobileNav links={links} />
		</header>
	)
}