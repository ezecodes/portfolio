import React, { useState, useEffect, createRef } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'

export default function Layout ({children}) {
	return (
		<section id='layout' className=' lg:w-[1000px] mx-[auto]'>
			
			<Header />
				{children}
			<Footer />
		</section>
	)
}