import React from 'react'
import { Link } from 'react-router-dom'
import '../../4-css/Products.css'

export default function ProductCard() {
	return (
		<div className='product-card'>
			<div className='product-card-image'>
				<Link to='#'>
					<img alt='' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fww1.prweb.com%2Fprfiles%2F2006%2F05%2F23%2F389860%2FeditIMG1709.jpg&f=1&nofb=1'></img>
				</Link>
			</div>
			<div className='product-card-body'>
				<div className='product-card-title'>
					<h2><Link to='#'>Nom du produit </Link><span>-<br/>50x70</span></h2> 
				</div>
				<div className='product-card-price'>
					<h2>19€99</h2>
				</div>
			</div>
			<div className='product-card-footer'>

			</div>
		</div>
	)
}
