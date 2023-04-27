import NavLink from './NavLink'
import { AiOutlineMenu, AiOutlineArrowRight } from "react-icons/ai";

export default function ({links}) {
    return (
    <div id='mobileNav' className=' relative flex flex-col sm:hidden'>
        <div className='self-end'>
            <AiOutlineMenu className='text-[26px] cursor-pointer' />
        </div>
        <nav className='absolute pt-5 nav flex flex-col  right-[-15px] h-[100vh] top-[150%] w-[250px]'>
            <div>
                <AiOutlineArrowRight className='ml-2 cursor-pointer bg-slate-700 rounded-sm text-white' />
            </div>
            {
                links.map((link, i) => {
                    return <NavLink key={i} path={link.link} icon={link.icon} className='text-center flex' />
                })
            }
        </nav>
    </div>
    )
}