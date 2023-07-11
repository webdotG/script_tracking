import {useState} from "react";
import {useValidation} from "./useValidation";


const useInput = (initialValue, validations) => {

		const [value, setValue] = useState(initialValue)
		const [isTouch, setIsTouch] = useState(false)
		const valid = useValidation(value, validations)

		const onChange = (e) => {
			setValue(e.target.value)
		}

		const onBlur = (e) => {
				setIsTouch(true)
		}

		return{
				value,
				onChange,
				onBlur,
				isTouch,
				...valid
		}
}

export {useInput}
