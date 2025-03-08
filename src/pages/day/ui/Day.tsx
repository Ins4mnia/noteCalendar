import DayPicker from '@/shared/ui/dayPicker'
import Modal from '@/shared/ui/modal'
import TimePicker from '@/shared/ui/timePicker'
import { FC, useState } from 'react'
import { useSearchParams } from 'react-router'

export const Day: FC = () => {
	const [searchParams, setSearchParams] = useSearchParams()

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
					/>
					<div className='flex flex-col gap-4 p-2'>
						<div className='flex flex-col gap-4'>
							<h2>Начало события</h2>
							<div className='flex flex-col gap-2'>
								<div className='flex flex-row items-center justify-between border-b border-gray-100 hover:border-gray-200'>
									<p>Время</p>
									<TimePicker />
								</div>
							</div>
							<div className='flex flex-row items-center justify-between border-b border-gray-100 hover:border-gray-200'>
								<p>Дата</p>
								<DayPicker />
							</div>
						</div>
						<div className='flex flex-col gap-4 '>
							<h2>Конец события</h2>
							<div className='flex flex-col gap-2'>
								<div className='flex flex-row items-center justify-between border-b border-gray-100 hover:border-gray-200'>
									<p>Время</p>
									<TimePicker />
								</div>
								<div className='flex flex-row items-center justify-between border-b border-gray-100 hover:border-gray-200'>
									<p>Дата</p>
									<DayPicker />
								</div>
							</div>
						</div>
					</div>
					<div className='flex flex-row gap-2'>
						<button className='bg-gray-100 rounded-md w-1/2 p-2 hover:bg-gray-200'>
							Добавить
						</button>
						<button className='bg-gray-100 rounded-md w-1/2 p-2 hover:bg-gray-200'>
							Отмена
						</button>
					</div>
				</div>
			</Modal>
		</>
	)
}
