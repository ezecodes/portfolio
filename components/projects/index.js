import { FaBookOpen, FaGithubAlt } from "react-icons/fa"

function ProjectCard({name, description, img, url, type}) {
	return (
		<div className="project_card flex justify-center flex-col h-[350px] sm:mr-0 px-5 shadow-md mb-[2rem] ">
			<div> <img src={img.url} /> </div>
			<div className="mt-5">
				<h3 className="text-lg mb-2 font-semibold">{name}</h3>
				<p className="semifaded_text">{description}</p>
			</div>
			<div className="mt-3">
				{
					type === 'public' ?
					<a href={url} rel="noreferrer" target="_blank" className="card_link border-[#ffd2bb]" >
						<FaGithubAlt className="text-[#ff9056]" />
						<span className="ml-3 text-[#ff9056]"> View on Github </span>
					</a>
					:
					<a href={url} rel="noreferrer" target="_blank" className="card_link border-[#868593]" >
						<span className="mr-3 text-[#3f3d56]"> Open </span>
						<FaBookOpen className="text-[#3f3d56]" />
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
		type: 'private',
		url: 'https://gomobidata.com'
	},
	{
		name: 'mobipay',
		description: 'A financial application used by company investors to give out and receive money from prospective customers.',
		img: {
			url: '/project_thumbnails/mobipay.png'
		},
		type: 'public',
		url: 'https://github.com/jahdevelops'
	},
]

export default function () {
	return (
		<section id="projects">
			<h2 className="h2_header"> <span>Projects</span> </h2>
			<div className="grid grid-cols-1 row-span-1	gap-3.5 sm:grid-cols-2">
				{
					projects.map((item, i) => {
						return (
							<ProjectCard key={i} {...item} />
						)
					})
				}
			</div>
		</section>
	)
}