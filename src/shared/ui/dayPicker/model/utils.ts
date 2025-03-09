import { ICalendarDay } from './types'

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

const generateCalendar = (year: number, month: number) => {
	const firstDay = new Date(year, month, 1)
	const lastDay = new Date(year, month, 0)

	const startDay = (firstDay.getDay() + 6) % 7
	const daysInMonth = lastDay.getDate()

	const calendar: ICalendarDay[] = []

	for (let i = 0; i < startDay; i++) {
		calendar.push({ day: null, isCurrentMonth: false })
	}

	for (let day = 1; day <= daysInMonth; day++) {
		calendar.push({ day, isCurrentMonth: true })
	}

	while (calendar.length % 7 !== 0) {
		calendar.push({ day: null, isCurrentMonth: false })
	}

	const weeks: ICalendarDay[][] = []
	for (let i = 0; i < calendar.length; i += 7) {
		weeks.push(calendar.slice(i, i + 7))
	}

	return weeks
}

export { generateCalendar, controlYearInput, contolMonthInput }
