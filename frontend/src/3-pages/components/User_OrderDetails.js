import React, { useEffect } from 'react'

export default function User_OrderDetails(props) {

	useEffect(() => {
		console.log(props)
		return () => {
		}
	}, [])
	return (
		<div className='user-order-details-component'>
			<div className='user-order-item'>
				<div className='order-details-image'>
					<img alt='' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fww1.prweb.com%2Fprfiles%2F2006%2F05%2F23%2F389860%2FeditIMG1709.jpg&f=1&nofb=1'></img>
				</div>
				<div className='order-details-product'>
					<p>Modèle : <span>test</span></p>
					<p>Prix : <span>test</span></p>
					<p>Quantité : <span>test</span></p>
				</div>
			</div>
			<div className='user-order-address'>
				<div className='shipping-address'>
					<h2>Adresse de livraison</h2>
					<p>Adresse : <span>46 bis rue de la convention,</span></p>
					<p>Code postal : <span>44100,</span></p>
					<p>Ville : <span>Nantes,</span></p>
					<p>Pays : <span>France.</span></p>
				</div>
				<div className='billing-address'>
					<h2>Adresse de facturation</h2>
					<p>Adresse : <span>46 bis rue de la convention,</span></p>
					<p>Code postal : <span>44100,</span></p>
					<p>Ville : <span>Nantes,</span></p>
					<p>Pays : <span>France.</span></p>
				</div>
			</div>
			<div className='user-order-resume'>
				<h2>Récapitulatif de commande</h2>
				<p>N° de commande : <span>12325621,</span></p>
				<p>Date : <span>12/11/2021,</span></p>
				<p>Nombre d'article : <span>1,</span></p>
				<p>Mode de réglement : <span>Carte bancaire,</span></p>
				<p>Frais de livraison : <span>4€99,</span></p>
				<p>TVA : <span>3€99,</span></p>
				<p>Total : <span>69€99.</span></p>
			</div>
			<div className='user-order-download-billing'>
				<button>Télécharger ma facture</button>
			</div>
		</div>
	)
}
