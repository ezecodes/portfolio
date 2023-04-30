
function Field({children}) {
	return <div className="field flex w-full flex-col sm:flex-row justify-between">
		{children}
	</div>
}

function Input(props) {
	return <input {...props} className="" />
}

export default function () {
	return (
		<section id="contact">
			<h2 className="h2_header"> <span>Contact me</span> </h2>
			<form className="" id="contact_form">
				<legend className="semifaded_text"> Feel free, leave me a message lets discuss your next project together. </legend>
				<fieldset className="my-5">
					<Field>
						<Input type="text" placeholder="Name" required />
						<Input type="email" placeholder="Email" required />
					</Field>
					<Field>
						<textarea defaultValue='Your message here' />
					</Field>
				</fieldset>
				<fieldset>
					<Field><button className="bg_green text-white w-[100px] py-2 rounded-md">Submit</button></Field>
				</fieldset>
			</form>
		</section>
	)
}