import { FC, useEffect, useRef, useState } from 'react'
import { monthNames, monthShortNames, weekDays } from '../model/constants'
import type { ICalendarDay, Props } from '../model/types'
import {
	generateCalendar,
	controlYearInput,
	contolMonthInput,
} from '../model/utils'

export const DayPicker: FC<Props> = ({
	noteInfo,
	handleAddNoteParam,
	param,
}) => {
	const dayPickerRef = useRef<HTMLDivElement>(null)

	const [selectedYear, setSelectedYear] = useState<number>(
		new Date().getFullYear()
	)
	const [selectedMonth, setSelectedMonth] = useState<number>(
		new Date().getMonth()
	)
	const [weeks, setWeeks] = useState<ICalendarDay[][]>([])

	const [choosenDate, setChoosenDate] = useState<string>(
		`${new Date().getDate()} ${monthShortNames[selectedMonth]} ${selectedYear}`
	)

	const [showCalendar, setShowCalendar] = useState(false)

	const handleDayClick = (
		day: number | null,
		setFn: (data: string) => void,
		handleAddNoteParam: Props['handleAddNoteParam'],
		param: string
	) => {
		if (day === null) return
		setFn(`${day} ${monthShortNames[selectedMonth]} ${selectedYear}`)
		handleAddNoteParam(
			noteInfo,
			param,
			`${day}.${selectedMonth + 1}.${selectedYear}`
		)
		setShowCalendar(!showCalendar)
	}

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dayPickerRef.current &&
				!dayPickerRef.current.contains(event.target as Node)
			) {
				setShowCalendar(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])
	useEffect(() => {
		setWeeks(generateCalendar(selectedYear, selectedMonth))
	}, [selectedYear, selectedMonth])

	return (
		<div className='relative'>
			<button
				className='cursor-pointer'
				onClick={() => setShowCalendar(!showCalendar)}
			>
				{choosenDate}
			</button>

			<div
				ref={dayPickerRef}
				className={`absolute bg-white z-[100] right-0 ${
					showCalendar ? 'block' : 'hidden'
				}`}
			>
				<div className='flex flex-row gap-2 p-2 relative border border-b-0'>
					<input
						value={selectedYear}
						className='bg-gray-100 rounded-md w-1/2 p-2 hover:bg-gray-200 outline-none text-center'
						onChange={e => controlYearInput(e, setSelectedYear)}
					/>
					<input
						value={monthNames[selectedMonth]}
						className='bg-gray-100 rounded-md w-1/2 p-2 hover:bg-gray-200 outline-none text-center'
						onChange={e => contolMonthInput(e, setSelectedMonth, monthNames)}
					/>
				</div>
				<table className='rounded-md border-collapse'>
					<thead>
						<tr>
							{weekDays.map(day => (
								<th key={day} className='text-center border p-3'>
									{day}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{weeks.map((week, weekIndex) => (
							<tr key={weekIndex}>
								{week.map((day, dayIndex) => (
									<td
										className={
											day.day === null
												? 'border'
												: 'border hover:bg-gray-200 cursor-pointer text-center p-2'
										}
										key={dayIndex}
										onClick={() =>
											handleDayClick(
												day.day,
												setChoosenDate,
												handleAddNoteParam,
												param
											)
										}
									>
										{day.day}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}
