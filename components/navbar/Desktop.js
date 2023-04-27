
import NavLink from './NavLink'

export default function ({links}) {
    return (
        <nav className='hidden sm:flex w-full flex-row justify-end' id='desktopNav'>
            {
                links.map((link, i) => {
                    return <NavLink key={i} path={link.link} className='text-center flex' />
                })
            }
        </nav>
    )
}