const handleInput = (
	e: React.ChangeEvent<HTMLInputElement>,
	setFn: (data: string) => void
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

export { handleInput, handleBlur, handleFocus }
