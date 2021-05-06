import React from 'react'
import { NavLink } from 'react-router-dom'

export default function UserAccountMenu() {
	return (
		<ul className='user-account-menu'>
			<li><NavLink to='/mon-compte/infos' activeClassName='active'>Infos personnelles</NavLink></li>
			<li><NavLink to='/mon-compte/adresse' activeClassName='active'>Adresse de livraison</NavLink></li>
			<li><NavLink to='/mon-compte/commandes' activeClassName='active'>Mes commandes</NavLink></li>
		</ul>
	)
}
