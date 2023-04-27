import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Button, InputField, Field, Label, Required, RequiredInfo, getFields, PhoneInput } from '../FormUtils'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Form ({}) {
	const fieldclx = 'lg:w-[440px] mb-4 sm:mb-4'
	const router = useRouter()
	const [errors, setErrors] = useState({email: '', tel: ''})
	const [loader, setLoader] = useState(false)

	function handleSubmit(e) {
		e.preventDefault()
		setErrors({email: '', tel: ''})
		const fields = getFields(e.target)

		if (fields.tel !== '' && fields.tel === '+234') {
			toast.error('Phone number is invalid')
			return setErrors(prev => {
				return {...prev, tel: 'Please enter a valid phone number'}
			})
		}

		setLoader(true)
		fetch('/api/user', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({...fields})
		}).then(async (res) => {
			const data = await res.json()
			setLoader(false)
			if (res.ok) {
				toast.success('Registration successful. ✔')
				router.push('/thankyou')
				
			} else {
				setErrors({...data})
			}
		})
	}

	return (
		<>
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
		<form id='form' onSubmit={handleSubmit}  method='post'>
			<ol className='grid grid-cols-1 gap-x-[2.3rem] md:grid-cols-2 justify-items-center'>
				<InputField name='name' label='Name' type='text' fieldclx={fieldclx} />
				<PhoneInput 
					id='tel'
					name='tel'
					error={errors.tel}
					fieldclx={fieldclx}
				/>
				{/*<InputField name='tel' label='Phone' type='tel' error={errors.tel} fieldclx={fieldclx} />*/}
				<InputField name='lga' label='LGA' type='text' fieldclx={fieldclx} />
				<InputField name='ward' label='Ward' type='text' fieldclx={fieldclx} />
				<InputField name='email' label='Email Address' type='email' error={errors.email} required={false} fieldclx={fieldclx} />

				<Field className={` ${fieldclx}`}>
					<Label htmlFor='select'> Which department would you like to join <Required /> </Label>
					<select required name='department' className='bg-white outline-0 w-full border-[#9d6a1f42] py-[5px] px-[5px] rounded-[5px] border-[#9d6a1f42]'>
						<option value="" hidden>-- Select --</option>
		        <option value="Media">Media</option>
		        <option value="Publicity">Publicity</option>
		        <option value="Logistics">Logistics</option>
		        <option value="canvasser">Ward canvasser</option>
		        <option value="reps">LGA Reps</option>
		        <option value="others">Others</option>
					</select>
				</Field>

				<Field className={`mt-3 flex flex-col ${fieldclx} `}>
					<RequiredInfo />
					<div className='flex'>
						<Button className='bg-[#7a6b64] border-0 text-white mr-3' loader={loader}> Submit </Button>
						<Button className='hover:text-white' type='reset'> Reset </Button>
					</div>
				</Field>
			</ol>

		</form>
		</>
	)
}