const SocialLinks = ({ href, icon, linksClass }) => {
	return (
		<li>
			<a href={href} target='_blank' rel='noreferrer' className={linksClass}>
				<i className={icon}></i>
			</a>
		</li>
	)
}
export default SocialLinks
