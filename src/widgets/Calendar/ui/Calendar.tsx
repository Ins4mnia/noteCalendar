import { FC, useEffect, useState } from 'react'
import CalendarDay from '@/entities/calendarDay'
import { generateCalendar } from '@/app/utils'
import type { ICalendarDay } from '@/app/utils'
import { weekDays } from '@/app/contants'

export const Calendar: FC = () => {
	const [weeks, setWeeks] = useState<ICalendarDay[][]>([])

	useEffect(() => {
		setWeeks(
			generateCalendar(new Date().getFullYear(), new Date().getMonth() + 1)
		)
	}, [])

	return (
		<table className='border-collapse w-full h-full'>
			<thead>
				<tr>
					{weekDays.map(day => (
						<th
							key={day}
							className='text-center bg-gray-100 font-normal w-1/12 text-xl rounded-lg'
						>
							{day}
						</th>
					))}
				</tr>
			</thead>
			<tbody>
				{weeks.map((week, weekIndex) => (
					<tr key={weekIndex}>
						{week.map((day, dayIndex) => (
							<td key={`${weekIndex}-${dayIndex}`} className='w-1/12'>
								<CalendarDay
									year={new Date().getFullYear()}
									month={new Date().getMonth() + 1}
									day={day.day}
								/>
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	)
}
