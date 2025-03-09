import { AddNoteToStore } from '@/features/addNoteToStore'
import DayPicker from '@/shared/ui/dayPicker'
import Modal from '@/shared/ui/modal'
import TimePicker from '@/shared/ui/timePicker'
import { FC, useState } from 'react'
import { useSearchParams } from 'react-router'
import type { INoteData } from '../model/type'

export const Day: FC = () => {
	const [searchParams] = useSearchParams()
	const [noteInfo, setNoteInfo] = useState<INoteData>({
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
	const [isOpen, setIsOpen] = useState(false)
	return (
		<>
			<h2>{searchParams.get('date')}</h2>
			<button onClick={() => setIsOpen(!isOpen)}>Добавить</button>
			<Modal isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
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
										noteInfo={noteInfo}
										handleAddNoteParam={handleAddNoteParam}
										param={'timeStart'}
									/>
								</div>
							</div>
							<div className='flex flex-row items-center justify-between border-b border-gray-100 hover:border-gray-200'>
								<p>Дата</p>
								<DayPicker
									noteInfo={noteInfo}
									handleAddNoteParam={handleAddNoteParam}
									param={'dateStart'}
								/>
							</div>
						</div>
						<div className='flex flex-col gap-4 '>
							<h2>Конец события</h2>
							<div className='flex flex-col gap-2'>
								<div className='flex flex-row items-center justify-between border-b border-gray-100 hover:border-gray-200'>
									<p>Время</p>
									<TimePicker
										noteInfo={noteInfo}
										handleAddNoteParam={handleAddNoteParam}
										param={'timeEnd'}
									/>
								</div>
								<div className='flex flex-row items-center justify-between border-b border-gray-100 hover:border-gray-200'>
									<p>Дата</p>
									<DayPicker
										noteInfo={noteInfo}
										handleAddNoteParam={handleAddNoteParam}
										param={'dateEnd'}
									/>
								</div>
							</div>
						</div>
					</div>
					<div className='flex flex-row gap-2'>
						<AddNoteToStore
							id={searchParams.get('date')!}
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
			</Modal>
		</>
	)
}
