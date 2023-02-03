import logo from '../images/logo.svg'
import { pageLinks, socialLinks } from '../data'
import SocialLinks from './SocialLinks'
import PageLinks from './PageLinks'

const NavBar = () => {
	return (
		<nav className='navbar'>
			<div className='nav-center'>
				<div className='nav-header'>
					<img src={logo} className='nav-logo' alt='backroads' />
					<button type='button' className='nav-toggle' id='nav-toggle'>
						<i className='fas fa-bars'></i>
					</button>
				</div>
				<ul className='nav-links' id='nav-links'>
					{pageLinks.map(link => {
						return <PageLinks key={link.id} {...link} linkClass={'nav-link'} />
					})}
				</ul>

				<ul className='nav-icons'>
					{socialLinks.map(link => {
						return <SocialLinks key={link.id} {...link} linksClass={'nav-icon'} />
					})}
				</ul>
			</div>
		</nav>
	)
}
export default NavBar
