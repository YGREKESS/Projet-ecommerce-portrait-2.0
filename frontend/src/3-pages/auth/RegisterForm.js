import React, { useEffect, useState } from 'react';
import { register } from '../../2-actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import MessageBox from '../components/MessageBox';
import LoadingSpinner from '../components/LoadingSpinner';
import GoogleLogin from 'react-google-login';
import '../../4-css/Auth_Forms.css';

export default function RegisterForm({ props }) {

	const responseGoogle = (response) => {
		dispatch(register(response.profileObj.familyName, response.profileObj.email, response.profileObj.googleId));
	}

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [registerError, setRegisterError] = useState('');

	const userRegister = useSelector(state => state.userRegister);
	const { loading, success, error } = userRegister;

	const dispatch = useDispatch()

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(register(name, email, password));
	}

	useEffect(() => {
		if (error) {
			setRegisterError(error)
		}
		if (success) {
			setName('');
			setEmail('');
			setPassword('');
		}
		return () => {
		}
	}, [error, success])

	return (
			<form onChange={() => setRegisterError('')} className='form register' onSubmit={submitHandler}>
				<h2>Inscription</h2>
				<div>
					<input placeholder='Nom' value={name} onChange={(e) => setName(e.target.value)} />
				</div>
				<div>
					<input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
				</div>
				<div>
					<input type='password' placeholder='Mot de passe' value={password} onChange={(e) => setPassword(e.target.value)}/>
				</div>
				<div className='form-submit'>
					{
						loading ? 
							<LoadingSpinner />
						:
							<div>
								<button className='validate-btn'>Valider</button>
								<GoogleLogin
									clientId="451793171695-lgnd29tc2sn8fav97nmhfnv7b1uan259.apps.googleusercontent.com"
									buttonText=""
									render={renderProps => (
										<button className='google-auth-button' onClick={renderProps.onClick} disabled={renderProps.disabled}/>
									)}
									onSuccess={responseGoogle}
									onFailure={responseGoogle}
									cookiePolicy={'single_host_origin'}
								/>
							</div>
					}
				</div>

				<div className='message-container'>
				{
					registerError &&
					<MessageBox type='danger' message={registerError}/>
				}
				{
					success &&
					<MessageBox type='success' message='Votre compte a été créé.'/>
				}
				</div>
			</form>
	)
}
