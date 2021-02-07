import React from 'react';
import '../4-css/Home.css';
import ProductCard from './components/ProductCard';
import { BsChevronRight, BsChatSquareDots, BsChatSquareQuote } from 'react-icons/bs'
import { MdLocalShipping } from 'react-icons/md'
import { RiSecurePaymentLine } from 'react-icons/ri'

export default function Home() {
	return (
		<div className='home-page'>
			<header>
				<div className='home-page-banniere'>
					<img alt='' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.artzolo.com%2Fsites%2Fdefault%2Ffiles%2Fuploads%2Fmulti%2F3898%2Flargest%2Fblue_horizontal_abstract.jpg&f=1&nofb=1'></img>
				</div>
				<div className='home-page-image-bar'>
					<div className='image-bar-product product-1'>
						<img alt='' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%3Fid%3DOIP.qKjkIv5VGTbcQv4sFoY9xwHaEL%26pid%3DApi&f=1'></img>
					</div>
					<div className='image-bar-product product-2'>
						<img alt='' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHTB1ihImp1uSBuNjy1Xcq6AYjFXa4%2FCDJLFH-Brand-3D-Cute-Panda-Print-20-Colors-White-Shirt-Print-T-shirt-Lovers-Round-Neck.jpg&f=1&nofb=1'></img>
					</div>
					<div className='image-bar-product product-3'>
						<img alt='' src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.notonthehighstreet.com%2Ffs%2Fdc%2F4c%2F9f67-4d7c-4bbd-8ee7-3aa0792db026%2Foriginal_great-beard-man-mug.jpg&f=1&nofb=1'></img>
					</div>
				</div>
			</header>
			<section className='presentation-part'>
				<div className='presentation-image'>
					<img alt='' src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.decortoi.fr%2Fwp-content%2Fuploads%2Ftableau-decoration-00112-lion-image1.jpg&f=1&nofb=1'></img>
				</div>
				<div className='presentation-description'>
					<h2>Envie d'un portrait original ?</h2>
					<p>Lorem ipsum orem ipsum orem ipsumorem ipsum orem ipsum orem ipsum orem ipsum orem ipsum orem ipsum orem ipsum orem ipsum orem ipsum</p>
				</div>
			</section>
			<section className='shop-part'>
				<h2>Nos modèles</h2>
				<div className='shop-part-products'>
					<ProductCard />
					<ProductCard />
					<ProductCard />
				</div>
				<button className='shop-btn'>Boutique <BsChevronRight/></button>
			</section>
			<section className='reviews-part'>
				<h2>Que pensent nos clients</h2>
				<div className="reviews-part-body">
					<BsChatSquareDots size={50}/>
					<p>C'était parfait !</p>
					<p><strong>Anne-Sophie</strong></p>
				</div>
			</section>
			<section className="about-part">
				<h2>A propos</h2>
				<div className="about-part-body">
					<div className="about-part-photo">
						<img alt='' src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.S_RVf7MNfKBNMycuaYXy6AHaKf%26pid%3DApi&f=1"></img>
					</div>
					<p>
						On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte. Du texte. Du texte.' est qu'il possède une distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard. De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).
					</p>
				</div>
			</section>
			<section className="pre-footer-part">
				<div className="pre-footer-body">
					<div className="pre-footer">
						<RiSecurePaymentLine size={40}/>
						<h2> Paiement sécurisé </h2>
						<p>On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions.</p>
					</div>
					<div className="pre-footer">
						<MdLocalShipping size={40}/>
						<h2> Livraison </h2>
						<p>On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions.</p>
					</div> 
					<div className="pre-footer">
						<BsChatSquareQuote size={40}/>
						<h2> Avis clients </h2>
						<p>On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions.</p>
					</div>
				</div>  
			</section>
		</div>
	)
}
