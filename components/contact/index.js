import { useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Field({children}) {
	return <div className="field flex w-full flex-col sm:flex-row justify-between">
		{children}
	</div>
}

export default function () {
	const nameRef = useRef(null)
	const emailRef = useRef(null)
	const messageRef = useRef(null)
	const [disabled, setButtonState] = useState(false)

	function handleForm(e) {
		e.preventDefault()
		const [email, name, message] = [emailRef.current.value, nameRef.current.value, messageRef.current.value]
		setButtonState(true)
		fetch('/api/form', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({email, name, message})
		})
		.then(async res => {
			let jsonResponse
			if (res.status === 200) {
				jsonResponse = await res.json()
				toast.success(jsonResponse.message)
				emailRef.current.value = ''
				nameRef.current.value = ''
				messageRef.current.value = ''
			}
			if (res.status === 500 || res.status === 400) {
				jsonResponse = await res.json()
				toast.error(jsonResponse.message)
			}
			
		})
		.catch(err => {
			console.error(err)
		})
		.finally(() => {
			setButtonState(false)
			
		})
	}
	return (<>
		<ToastContainer
			position="top-right"
			autoClose={5000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable={false}
			pauseOnHover
		/>
		<section id="contact">
			<h2 className="h2_header"> <span>Contact me</span> </h2>
			<form className="" id="contact_form" onSubmit={handleForm}>
				<legend className="semifaded_text text-center"> Feel free, leave me a message lets discuss your next project together. </legend>
				<fieldset className="my-5">
					<Field>
						<input type="text" placeholder="Name" required ref={nameRef} />
						<input type="email" placeholder="Email" required ref={emailRef} />
					</Field>
					<Field>
						<textarea placeholder='Your message here' ref={messageRef} />
					</Field>
				</fieldset>
				<fieldset>
					<Field>
						<button disabled={disabled} className={`${disabled ? 'bg_lightgreen' : 'bg_green'} text-white w-[100px] py-2 rounded-md`}>
							Submit {disabled && '...'}
						</button>
					</Field>
				</fieldset>
			</form>
		</section></>
	)
}