import React from 'react'
import { useForm } from 'react-hook-form';
import { CgDanger } from 'react-icons/cg'

export default function User_Shipping() {

    const { register, handleSubmit, errors } = useForm();

	return (
		<div className='user-shipping-component'>
			<form id='form-user-shipping'>
				<div>
					<label htmlFor='' className=''>Adresse</label>
					<input
						name='address'
						placeholder=''
						ref={register({
							validate: value => value !== ''
						})}
					/>
					{errors.address && <div className=''><CgDanger  size={20}/><p className=''>Merci de renseigner votre adresse.</p></div>}
				</div>
				<div>
					<label htmlFor='' className=''>Code postal</label>
					<input
						name='postalCode'
						placeholder=''
						ref={register({
							validate: value => value !== ''
						})}
					/>
					{errors.postalCode && <div className=''><CgDanger  size={20}/><p className=''>Merci de renseigner votre code postal.</p></div>}
				</div>
				<div>
					<label htmlFor='' className=''>Ville</label>
					<input
						name='city'
						placeholder=''
						ref={register({
							validate: value => value !== ''
						})}
					/>
					{errors.city && <div className=''><CgDanger  size={20}/><p className=''>Merci de renseigner votre Ville.</p></div>}	
				</div>
				<div className='form-button-user-shipping'>
					<button form='form-user-shipping'>Mettre à jour</button>
				</div>
			</form>
		</div>
	)
}
