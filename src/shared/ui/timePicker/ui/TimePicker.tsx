import { FC, useState } from 'react'
import type { Props } from '../model/type'

export const TimePicker: FC<Props> = ({
	noteInfo,
	handleAddNoteParam,
	param,
}) => {
	const [time, setTime] = useState<string>('00:00')

	const handleInput = (
		e: React.ChangeEvent<HTMLInputElement>,
		setFn: (data: string) => void,
		handleAddNoteParam: Props['handleAddNoteParam'],
		param: string
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

		setFn(formattedValue)
		handleAddNoteParam(noteInfo, param, formattedValue)
	}

	const handleBlur = (
		e: React.ChangeEvent<HTMLInputElement>,
		setFn: (data: string) => void
	) => {
		if (e.target.value === '') return setFn('00:00')
	}
	const handleFocus = (
		e: React.ChangeEvent<HTMLInputElement>,
		setFn: (data: string) => void
	) => {
		if (e.target.value === '00:00') return setFn('')
	}
	return (
		<input
			type='text'
			value={time}
			onBlur={e => handleBlur(e, setTime)}
			onFocus={e => handleFocus(e, setTime)}
			onChange={e => handleInput(e, setTime, handleAddNoteParam, param)}
			className='outline-none text-right'
		/>
	)
}
