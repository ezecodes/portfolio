import { FaBookOpen, FaGithubAlt } from "react-icons/fa"
import { MdOpenInNew} from "react-icons/md"

function ProjectCard({name, description, img, url, type, roles = []}) {
	return (
		<div className={`border-2 border-[rgba(0,0,0,.1)] project_card flex justify-center flex-col h-[350px] w-[300px] sm:w-[300px] sm:mr-0 px-5 shadow-md mb-[2rem] `}>
			<div> <img src={img.url} /> </div>
			<div className="mt-5">
				<h3 className="text-md mb-2 font-semibold">{name}</h3>
				<p className="semifaded_text text-[.9rem]">{description}</p>
			</div>
			<div className="flex flex-wrap my-2" title="Role">
				{ roles.length > 0 &&
					roles.map((role, i) => {
						return (
							<span key={i} className="mr-3 text-sm bg-green-50 px-2 py-1 text-stone-600">
								#{role}
							</span>
						)
					})
				}
			</div>
			<div className="mt-1 flex justify-end">
				{
					type === 'public' ?
					<a href={url} rel="noreferrer" target="_blank" className="card_link" >
						<FaGithubAlt className="text-[#ff9056]" />
						<span className="ml-3 text-[#ff9056]"> View Code </span>
					</a>
					:
					<a href={url} rel="noreferrer" target="_blank" className="card_link" >
						<span className="mr-3 text-[#3f3d56]"> Open </span>
						<MdOpenInNew className="text-[#3f3d56]" />
					</a>
				}
			</div>
		</div>
	)
}

const projects = [
	{
		name: 'mobipay',
		description: 'A financial application used by company investors to give out and receive money from prospective customers.',
		img: {
			url: '/project_thumbnails/mobipay.png'
		},
		roles: ['lead developer'],
		type: 'private',
		url: 'https://gomobidata.com'
	},
	{
		name: 'obinwosu',
		description: 'A campaign website',
		img: {
			url: '/project_thumbnails/obi.png'
		},
		type: 'private',
		roles: ['lead developer'],
		url: 'https://obinwosu.onrender.com'
	},
	{
		name: 'Portfolio',
		description: 'My personal portfolio site',
		img: {
			url: '/project_thumbnails/portfolio.png'
		},
		type: 'public',
		roles: ['lead developer', 'ui/ux designer'],
		url: 'https://github.com/jahdevelops/portfolio'
	},
]

export default function () {
	return (
		<section id="projects">
			<h2 className="h2_header"> <span>Projects</span> </h2>
			<p className="semifaded_text">Here is a selection of my recent projects that demonstrate my technical skills and problem-solving abilities.</p>
			<div className="grid grid-cols-1 row-span-1	gap-3.5 sm:grid-cols-2">
				{
					projects.map((item, i) => <ProjectCard key={i} {...item} />)
				}
			</div>
		</section>
	)
}
