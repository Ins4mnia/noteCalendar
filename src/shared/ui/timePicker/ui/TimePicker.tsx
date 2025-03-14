import { FC, useState } from 'react'
import type { Props } from '../model/type'

export const TimePicker: FC<Props> = ({ onTimeChange }) => {
	const [time, setTime] = useState<string>('00:00')

	const handleInput = (
		e: React.ChangeEvent<HTMLInputElement>,
		onTimeChange: (time: string) => void
	) => {
		const value = e.target.value.trim().replace(/[^0-9:]/g, '')
		const cursorPosition = e.target.selectionStart || 0

		let formattedValue = value

		if (value.length > 2 && cursorPosition > 2) {
			formattedValue =
				value.slice(0, 2).replace(/:/g, '') +
				':' +
				value.slice(2).replace(/:/g, '')
		}

		if (formattedValue.length > 5) {
			formattedValue = formattedValue.slice(0, 5)
		}

		setTime(formattedValue)
		onTimeChange(formattedValue)
	}

	const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.value === '') return setTime('00:00')
	}
	const handleFocus = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.value === '00:00') return setTime('')
	}
	return (
		<input
			type='text'
			value={time}
			onBlur={e => handleBlur(e)}
			onFocus={e => handleFocus(e)}
			onChange={e => handleInput(e, onTimeChange)}
			className='outline-none text-center'
		/>
	)
}
