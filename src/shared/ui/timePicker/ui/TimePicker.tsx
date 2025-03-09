import { FC, useState } from 'react'
import { handleBlur, handleFocus, handleInput } from '../model/utils'
export const TimePicker: FC = () => {
	const [time, setTime] = useState<string>('00:00')
	return (
		<input
			type='text'
			value={time}
			onBlur={e => handleBlur(e, setTime)}
			onFocus={e => handleFocus(e, setTime)}
			onChange={e => handleInput(e, setTime)}
			className='outline-none text-right'
		/>
	)
}
