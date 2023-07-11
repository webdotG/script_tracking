import React, {useState} from "react";
import './RemeberForgotCheck.component.css'
import {RiCheckboxBlankCircleLine, RiCheckboxCircleLine} from "react-icons/ri";
import { Link } from "react-router-dom";

function CheckBox() {
		const [checked, setChecked] = useState(true);
		let icon;

		function handleChange() {
				const newChecked = !checked; // Получаю новое значение заранее изменяя текущее
				setChecked(newChecked); // Обновляю состояние на новое
				console.log(`new = ${newChecked}; old = ${checked} `);
		}

		if (checked) {
				icon = <RiCheckboxCircleLine className={'form-login__remember-input--checkbox--icon'}/>
		} else {
				icon = <RiCheckboxBlankCircleLine className={'form-login__remember-input--checkbox--icon'}/>
		}

		return (
				<div className={'loggingform__remember-wrapper'}>
								<label className={'loggingform__remember-label'}>
								<input className={'loggingform__remember-input'} type="checkbox" onChange={() => handleChange()}/>
								<span className={'loggingform__remember--checkbox--icon'}>{icon}</span>
								запомнить</label>
						<Link to='/forgotpass' className={'loggingform__forgot-password-link'}>забыли пароль ?</Link>
				</div>
		)

}

export default CheckBox;


