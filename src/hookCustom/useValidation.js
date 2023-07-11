import {useEffect, useState} from "react";


const useValidation = (value, validations) => {

		const [isEmpty, setIsEmpty] = useState(true)
		const [minLengthError, setMinLengthError] = useState(false)
		const [maxLengthError, setMaxLengthError] = useState(false)
		const [emailError, setEmailError] = useState(false)
		const [inputValid, setInputValid] = useState(false)

		useEffect(() => {
				for (const validation in validations) {
						switch (validation) {
								case 'minLength':
										value.length < validations[validation]
										? setMinLengthError(true)
												:setMinLengthError(false)
										break;
								case 'isEmpty' :
										value ? setIsEmpty(false) : setIsEmpty(true)
										break;
								case 'maxLength' :
										value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false)
										break
								case 'isEmail' :
										const regular = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
										regular.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
										break
 						}
				}
		}, [value])


		useEffect(() => {

				if(isEmpty || maxLengthError || minLengthError || emailError){
						setInputValid(false)
				} else {
						setInputValid(true)
				}
		} ,[isEmpty, minLengthError, maxLengthError, emailError])

		return{
				isEmpty,
				minLengthError,
				maxLengthError,
				emailError,
				inputValid
		}
}

export {useValidation}
