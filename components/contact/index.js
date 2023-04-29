
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
			<h2 className="h2_header"> Contact me </h2>
			<form className="" id="contact_form">
				<legend className="semifaded_text"> Feel free, leave me a message lets discuss your next project together. </legend>
				<fieldset className="mt-5">
					<Field>
						<Input type="text" placeholder="Name" required />
						<Input type="email" placeholder="Email" required />
					</Field>
					<Field>
						<textarea>
							Leave me a message
						</textarea>
					</Field>
				</fieldset>
			</form>
		</section>
	)
}