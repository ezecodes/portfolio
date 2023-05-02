import React, { useEffect, useState } from 'react'
import DesktopNav from '../navbar/Desktop'
import MobileNav from '../navbar/Mobile'
import { AiFillHome } from "react-icons/ai";
import { BsInfoLg, BsCodeSlash, BsFillTelephonePlusFill } from "react-icons/bs";
import { RiGitRepositoryFill } from "react-icons/ri";
import { useRouter } from 'next/router';

export default function Header () {
	const [links, setLinks] = useState([
		{link: 'home', icon: <AiFillHome />, active: false},
		{link: 'projects', icon: <RiGitRepositoryFill />, active: false},
		{link: 'stack', icon: <BsCodeSlash />, active: false},
		{link: 'contact', icon: <BsFillTelephonePlusFill />, active: false}
	])

	const router = useRouter()

	useEffect(() => {
		console.log(router.asPath)
	}, [router.asPath])

	return (
		<header className='sticky backdrop-blur-xl z-50 bg-[#3f3d5605] top-0 flex justify-between relative px-4 py-4'>
			<div>
				{'</>'}
			</div>
			<DesktopNav links={links} />
			<MobileNav links={links} />
		</header>
	)
}