import React, { useState, useEffect } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import LoaderIcon from "react-loader-icon";
import { useRouter } from 'next/router'

export default function Layout ({children}) {
	const router = useRouter()
	const [showLoader, setLoader] = useState(false)

	useEffect(() => {
		const startRouteChange = () => setLoader(true)
		const endRouteChange = () => setLoader(false)
		router.events.on('routeChangeStart', startRouteChange)
		router.events.on('routeChangeComplete', endRouteChange)
		return () => {
			router.events.off('routeChangeStart', startRouteChange)
			router.events.off('routeChangeComplete', endRouteChange)
		}
	}, [router.events])

	return (
		<section id='layout' className='bg-zinc-50'>
			{showLoader && 
				<div className=''>
					<LoaderIcon type={"spin"} size={30} color='#fff' />
				</div>
			}
			<Header />
				{children}
			<Footer />
		</section>
	)
}