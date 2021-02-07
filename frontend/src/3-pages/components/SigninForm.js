import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../2-actions/userActions';
import LoadingSpinner from './LoadingSpinner';
import MessageBox from './MessageBox';
import GoogleLogin from 'react-google-login';
import '../../4-css/Auth_Forms.css';

export default function SigninForm() {

	const responseGoogle = (response) => {
		dispatch(login(response.profileObj.email, response.profileObj.googleId));
	}

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [signinError, setSigninError] = useState('');

	const userLogin = useSelector(state => state.userLogin);
	const { loading, error, success } = userLogin;

	const dispatch = useDispatch()

	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(login(email, password))
	}

	useEffect(() => {
		if (error) {
			setSigninError(error)
		}
		if (success) {
			setEmail('')
			setPassword('')
		}
		return () => {
		}
	}, [error])

	return (
			<form className='form signin' onSubmit={submitHandler}>
				<h2>Connexion</h2>
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
					signinError &&
					<MessageBox style='danger' message={signinError}/>
				}
				{
					success &&
					<MessageBox style='success' message='Vous êtes connecté.'/>
				}
				</div>
			</form>
	)
}
