import { useEffect, useRef, useState } from 'react';
import NavLink from './NavLink'
import { AiOutlineMenu, AiOutlineArrowRight } from "react-icons/ai";
import { CSSTransition } from 'react-transition-group';
import { useRouter } from 'next/router';

export default function ({links}) {
    const [showNav, setNav] = useState(false)
    const ref = useRef(null)

    const router = useRouter()

	useEffect(() => {
		setNav(false)
	}, [router.asPath])

    function handleNav() {
        setNav(prev => !prev)
    }
    return (
    <div id='mobileNav' className=' relative flex flex-col sm:hidden'>
        <div className='self-end' onClick={handleNav}>
            <AiOutlineMenu className='text-[26px] text-black cursor-pointer' />
        </div>
        <CSSTransition
			in={showNav}
            nodeRef={ref}
            timeout={800}
            classNames={{
                enter: 'animate__animated',
                enterActive: 'animate__flipInY',
                exit: 'animate__animated',
                exitActive: 'animate__flipOutY',
	        }}
	        unmountOnExit
		>
            <nav ref={ref} className='absolute pt-5 nav flex flex-col right-[-16px] h-[100vh] top-[160%] w-[250px]'>
                
                {
                    links.map((link, i) => {
                        return <NavLink key={i} path={link.link} icon={link.icon} className='text-center flex' />
                    })
                }
            </nav>
        </CSSTransition>
    </div>
    )
}