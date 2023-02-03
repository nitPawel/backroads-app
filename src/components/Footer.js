import { pageLinks, socialLinks } from '../data'
import SocialLinks from './SocialLinks'
import PageLinks from './PageLinks'

const Footer = () => {
	return (
		<footer className='section footer'>
			<ul className='footer-links'>
				{pageLinks.map(link => {
					return <PageLinks key={link.id} {...link} linkClass={'footer-link'} />
				})}
			</ul>
			<ul className='footer-icons'>
				{socialLinks.map(link => {
					return <SocialLinks key={link.id} {...link} linksClass={'footer-icon'} />
				})}
			</ul>
			<p className='copyright'>
				copyright &copy; Backroads travel tours company
				<span id='date'>{new Date().getFullYear()}</span> all rights reserved
			</p>
		</footer>
	)
}

export default Footer
