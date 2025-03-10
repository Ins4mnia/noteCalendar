const controlYearInput = (
	e: React.ChangeEvent<HTMLInputElement>,
	setFn: (data: number) => void
) => {
	const inputYear = e.target.value.trim().replace(' ', '')
	if (inputYear.length === 0) {
		const year = new Date().getFullYear()
		return setFn(year)
	}
	if (inputYear.length > 4) return setFn(parseInt(inputYear.slice(0, 4)))
	return setFn(parseInt(inputYear))
}

const contolMonthInput = (
	e: React.ChangeEvent<HTMLInputElement>,
	setFn: (data: number) => void,
	monthArray: string[]
) => {
	const inputMonth = e.target.value.trim().replace(' ', '')
	const normalizedMonth =
		inputMonth.charAt(0).toUpperCase() + inputMonth.slice(1).toLowerCase()
	setFn(monthArray.indexOf(normalizedMonth))
}

export { controlYearInput, contolMonthInput }
