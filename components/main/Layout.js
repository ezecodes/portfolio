import React, { useState, useEffect, createRef } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import { CSSTransition } from 'react-transition-group';
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
		<section id='layout' className=' lg:w-[1000px] mx-[auto]'>
			{showLoader && 
				<div className='fixed bottom-[20px] rounded-md px-2 py-2 z-100 bg-neutral-900 right-[10px]'>
					<LoaderIcon type={"spin"} size={30} color='#000' />
				</div>
			}
			<Header />
			{children}
			<Footer />
		</section>
	)
}