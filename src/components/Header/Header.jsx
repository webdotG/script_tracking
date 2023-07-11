import React from "react";
import   '../../index.css'
import header_style from './Header.module.css'
import {removeUser} from "../../store/slices/userSlice";
import { useDispatch } from 'react-redux';
import {useAuth} from "../../hookCustom/authUser";
import { ReactComponent as MainLogo } from '../../images/Logo/WhiteLogo.svg';


function Header() {

		const {isAuth, email} = useAuth()
		const dispatch = useDispatch()
		return isAuth ? (
				<header className={`${header_style.header} ${'Bebas_Neue_Pro_Bold'}`}>
						<MainLogo className={header_style['logo-header']} />
						<button className={header_style['header__btn-logout']}
								onClick={() => dispatch(removeUser())}
						>выйти из {email}
						</button>
						Дела
				</header>
		) :
		 (
				<div className={header_style['header']}>
						<h6>Дела</h6>
				</div>

		)


}

export default Header;
