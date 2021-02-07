import React, { useEffect, useState } from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import { HiOutlineUser } from 'react-icons/hi';
import { FiLogOut } from 'react-icons/fi';
import { GrInstagram } from 'react-icons/gr';
import { IoClose } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../2-actions/userActions';
import ReactModal from 'react-modal';
import RegisterForm from './RegisterForm';
import SigninForm from './SigninForm';

export default function Navbar(props) {

	const [auth, setAuth] = useState(false);
	const [register, setRegister] = useState(false);
	
	const userLogin = useSelector(state => state.userLogin)
	const { userInfos } = userLogin;

	const dispatch = useDispatch()

	const logoutHandler = () => {
		dispatch(logout())
	}
	const modalAuthHandler = () => {
		setAuth(!auth)
	}

	useEffect(() => {
		if (userInfos) {
			setAuth(false)
		}
		return () => {
		}
	}, [userInfos])
	return (
		<div className='navbar'>
			{
				auth &&
				<ReactModal
					isOpen={auth}
					className="Modal"
					ariaHideApp={false}
					overlayClassName="Overlay"
					onRequestClose={() => modalAuthHandler(!auth)}
				>
					<div className='modal-content'>
						<div className='modal-close-btn'>
							<IoClose size={25} onClick={() => modalAuthHandler(!auth)}/>
						</div>
						{
							register ? 
								<div className='modal-register-form'>
									<RegisterForm />
									<p>Déjà un compte ? <span onClick={() => setRegister(!register)}>Me connecter.</span></p>
								</div>
								:
								<div className='modal-signin-form'>
									<SigninForm />
									<p>Pas de compte ? <span onClick={() => setRegister(!register)}>Créer mon compte.</span></p>
								</div>	
						}
						

					</div>
					
				</ReactModal>
			}
			<div className='navbar-top'>
				<div className='navbar-logo'>
					<Link to='/'>
						<img alt='' src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_554214.png&f=1&nofb=1'></img>
					</Link>
				</div>
				<div className='navbar-icons'>
					<Link to={'#'} className='cart-icon'>
						<BiShoppingBag size={30}/>
					</Link>
					<Link to={userInfos ? '/mon-compte/infos' : '#'} className='account-icon'>
						<HiOutlineUser size={30} onClick={userInfos ? null : () => modalAuthHandler()}/>
					</Link>
					{
						userInfos &&
						<Link to={'#'} className='logout-icon' onClick={() => logoutHandler()}>
							<FiLogOut size={30} />
						</Link>
					}
				</div>
			</div>
			<div className='navbar-bottom'>
				<ul className='navbar-links'>
					<li><Link to='#'>Boutique</Link></li>
					<li><Link to='#'>Blog</Link></li>
					<li><Link to='#'>Contact</Link></li>
					<li><Link to='#'><GrInstagram size={25}/></Link></li>
				</ul>
			</div>			
		</div>
	)
}
