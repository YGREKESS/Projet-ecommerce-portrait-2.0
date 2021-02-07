import React from 'react'
import { Link } from 'react-router-dom'

export default function OrderCard() {
	return (
		<div className='order-card'>
			<div className='order-card-image'>
				<Link to='/mon-compte/commandes/123'>
					<img alt='' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fww1.prweb.com%2Fprfiles%2F2006%2F05%2F23%2F389860%2FeditIMG1709.jpg&f=1&nofb=1'></img>
				</Link>
			</div>
			<div className='order-card-body'>
				<div className='order-card-title'>
					<h2><Link to='/mon-compte/commandes/123'>Nom du produit Nom du produit </Link></h2> 
				</div>
				<div className='order-card-price'>
					<h2>19€99</h2>
				</div>
			</div>
			<div className='order-card-footer'>
				<p>Le 12/11/2014</p>
			</div>
		</div>
	)
}
