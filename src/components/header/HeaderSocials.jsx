import React from 'react'
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SlSocialVkontakte } from "react-icons/sl";

const HeaderSocials = () => {
	return (
		<div className="header__socials">
			<a href="https://github.com/fhgaha" target="_blank"><BsGithub /></a>
			<a href="https://vk.com/id73770321" target="_blank"><SlSocialVkontakte /></a>
			<a
				href="https://www.linkedin.com/in/%D0%B0%D0%BD%D1%82%D0%BE%D0%BD-%D1%81%D0%B8%D0%BC%D0%BA%D0%B8%D0%BD-324525216/"
				target="_blank"
			>
				<BsLinkedin />
			</a>
		</div>
	)
}

export default HeaderSocials