/* eslint-disable */

import { TbBrandTypescript } from "react-icons/tb";
import { IoLogoJavascript , IoLogoFirebase} from "react-icons/io";
import { FaAws, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiFirebase, SiMysql, SiNextdotjs, SiPostgresql, SiPrisma, SiRemix, SiSequelize } from 'react-icons/si'
import { DiMongodb } from 'react-icons/di'

const stacks = [
	['nextjs', <SiNextdotjs className="text-[#00]" />],
	['typescript', <TbBrandTypescript className="text-[#007ACC]" />],
	['javascript', <IoLogoJavascript className="text-[#F7DF1E]" />],
	['reactjs', <FaReact className="text-[#61DAFB]" />],
	['nodejs', <FaNodeJs className="text-[#43853d]"/>],
	['sql', <SiMysql className="text-[#00758F]" />],
	['mongodb', <DiMongodb className='text-[#4DB33D]' />],
	// ['prisma', <SiPrisma className='text-[#1B222D]' />],
	// ['remix', <SiRemix className='text-[#4E3FB4]'/>],
	// ['firebase', <SiFirebase className='text-[#FFCA28]' />],
	// ['aws', <FaAws className='text-[#FF9900]' />],
	// ['sequelize', <SiSequelize className='text-[#52B0E7]' />],
	// ['Postgresql', <SiPostgresql className='text-[#336791]' />],
]

export default function () {
	return (
		<section id="stack">
			<h2 className="h2_header"> <span>Tech stack</span> </h2>
			<p className="semifaded_text">These are the plethora of languages and frameworks I have used throughout my programming career.</p>
			<div className="grid grid-cols-4 row-span-1	gap-4 sm:grid-cols-8 mt-5 ">
				{
					stacks.map((stack, i) => {
						return (
							<div className="stack" key={i}>
								<span>{stack[1]}</span>
								<span className="semifaded_text"> {stack[0]} </span>
							</div>
						)
					})
				}
			</div>
		</section>
	)
}