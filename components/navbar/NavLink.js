import Link from 'next/link'

function NavLink({path, icon, className}) {
    return (
        <Link passHref href={path.toLowerCase() === 'home' ? '/' : `/#${path}`} >
            <a> {icon && icon} {path}</a>
        </Link>
    )
}

export default NavLink