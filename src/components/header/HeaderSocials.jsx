import React from 'react'
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SlSocialVkontakte } from "react-icons/sl";

const HeaderSocials = () => {
	return (
		<div className="header__socials">
			<a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
			<a href="https://github.com" target="_blank"><BsGithub /></a>
			<a href="https://vk.com" target="_blank"><SlSocialVkontakte /></a>
		</div>
	)
}

export default HeaderSocials