import { AddNoteToStore } from '@/features/addNoteToStore'
import DayPicker from '@/shared/ui/dayPicker'
import TimePicker from '@/shared/ui/timePicker'
import { FC, useState } from 'react'
import type { INoteData } from '@/app/store/useNoteStore'

interface Props {
	date: string
}

const AddNoteWindow: FC<Props> = ({ date }) => {
	const [noteInfo, setNoteInfo] = useState<INoteData>({
		noteId: `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`,
		title: '',
		timeStart: '',
		timeEnd: '',
		dateStart: '',
		dateEnd: '',
	})
	const handleAddNoteParam = (
		noteInfo: INoteData,
		param: string,
		info: string
	) => {
		setNoteInfo({ ...noteInfo, [param]: info })
	}
	return (
		<>
			<div className='flex flex-col gap-8'>
				<input
					placeholder='Название'
					className='border border-gray-100 outline-none p-2 rounded-md hover:border-gray-200'
					onChange={e => setNoteInfo({ ...noteInfo, title: e.target.value })}
				/>
				<div className='flex flex-col gap-4 p-2'>
					<div className='flex flex-col gap-4'>
						<h2>Начало события</h2>
						<div className='flex flex-col gap-2'>
							<div className='flex flex-row items-center justify-between border-b border-gray-100 hover:border-gray-200'>
								<p>Время</p>
								<TimePicker
									onTimeChange={time =>
										handleAddNoteParam(noteInfo, 'timeStart', time)
									}
								/>
							</div>
						</div>
						<div className='flex flex-row items-center justify-between border-b border-gray-100 hover:border-gray-200'>
							<p>Дата</p>
							<DayPicker
								onDateChange={date =>
									handleAddNoteParam(noteInfo, 'dateStart', date)
								}
							/>
						</div>
					</div>
					<div className='flex flex-col gap-4'>
						<h2>Конец события</h2>
						<div className='flex flex-col gap-2'>
							<div className='flex flex-row items-center justify-between border-b border-gray-100 hover:border-gray-200'>
								<p>Время</p>
								<TimePicker
									onTimeChange={time =>
										handleAddNoteParam(noteInfo, 'timeEnd', time)
									}
								/>
							</div>
							<div className='flex flex-row items-center justify-between border-b border-gray-100 hover:border-gray-200'>
								<p>Дата</p>
								<DayPicker
									onDateChange={date =>
										handleAddNoteParam(noteInfo, 'dateEnd', date)
									}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className='flex flex-row gap-2'>
					<AddNoteToStore
						id={date!}
						data={noteInfo}
						className='bg-gray-100 rounded-md w-1/2 p-2 hover:bg-gray-200'
					>
						Добавить
					</AddNoteToStore>
					<button className='bg-gray-100 rounded-md w-1/2 p-2 hover:bg-gray-200'>
						Отмена
					</button>
				</div>
			</div>
		</>
	)
}

export default AddNoteWindow
