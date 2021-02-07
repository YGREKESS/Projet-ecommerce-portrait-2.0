import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { CgDanger } from 'react-icons/cg'

export default function User_Infos(props) {

    const { register, handleSubmit, errors } = useForm();
	const { register: register1, handleSubmit: handleSubmit1, errors: errors1 } = useForm(); 
	
	const submitInfos = data => {
		console.log(data);
	}

	const submitPassword = data => {
		console.log(data);
	}

	useEffect(() => {
		console.log(props)
		return () => {
		}
	}, [])
	return (
		<div className='user-infos-component'>
			<form id='form-user-infos' onSubmit={handleSubmit(submitInfos)}>
				<div>
					<label htmlFor='' className=''>Nom</label>
					<input
						name='name'
						placeholder=''
					/>
				</div>
				<div>
					<label htmlFor='' className=''>Prénom</label>
					<input
						name='firstname'
						placeholder=''
					/>
				</div>
				<div>
					<label htmlFor='' className=''>Téléphone</label>
					<input
						name='phone'
						placeholder=''
					/>
				</div>
				<div>
					<label htmlFor='' className=''>Email<span className=''>*</span></label>
					<input
						className={ + ( errors.username ? '' : '')}
						name='username'
						placeholder=''
						ref={register({
						validate: value => value !== ''
						})}
					/>
					{errors.username && <div className=''><CgDanger  size={20}/><p className=''>Merci de renseigner votre nom.</p></div>}	
				</div>
				<div className='form-button-user-infos'>
					<button form='form-user-infos'>Mettre à jour</button>
				</div>
			</form>

			<form id='form-update-password' className='form-update-password' onSubmit={handleSubmit1(submitPassword)}>
				<div>
					<label htmlFor='' className=''>Mot de passe actuel<span className=''>*</span></label>
					<input
						className={ + ( errors1.password ? '' : '')}
						name='password'
						placeholder=''
						ref={register1({
						validate: value => value !== ''
						})}
					/>
					{errors1.password && <div className=''><CgDanger  size={20}/><p className=''>Merci de renseigner votre nom.</p></div>}	
				</div>
				<div>
					<label htmlFor='' className=''>Nouveau mot de passe<span className=''>*</span></label>
					<input
						className={ + ( errors1.newpassword1 ? '' : '')}
						name='newpassword1'
						placeholder=''
						ref={register1({
						validate: value => value !== ''
						})}
					/>
					{errors1.newpassword1 && <div className=''><CgDanger  size={20}/><p className=''>Merci de renseigner votre nom.</p></div>}	
				</div>
				<div>
					<label htmlFor='' className=''>Confirmation du nouveau mot de passe<span className=''>*</span></label>
					<input
						className={ + ( errors1.newpassword2 ? '' : '')}
						name='newpassword2'
						placeholder=''
						ref={register1({
						validate: value => value !== ''
						})}
					/>
					{errors1.newpassword2 && <div className=''><CgDanger  size={20}/><p className=''>Merci de renseigner votre nom.</p></div>}	
				</div>
				<div className='form-button-update-password'>
					<button form='form-update-password'>Modifier mon mot de passe</button>
				</div>
			</form>
		</div>
	)
}
