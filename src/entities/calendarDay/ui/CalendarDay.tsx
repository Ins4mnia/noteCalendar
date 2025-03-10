import { Modal } from '@/shared/ui/modal/ui/Modal'
import { FC, useState } from 'react'
import { Link } from 'react-router'
import type { Props } from '../model/type'

export const CalendarDay: FC<Props> = ({ year, month, day }) => {
	const [isOpen, setIsOpen] = useState(false)
	if (day === null) return
	return (
		<>
			<div
				className='text-center bg-gray-100 hover:bg-gray-200 cursor-pointer w-full h-full relative transition-colors rounded-lg duration-300'
				onClick={() => setIsOpen(!isOpen)}
			>
				<span className='absolute left-0 top-0 bg-gray-200 rounded px-2 py-1'>
					{day}
				</span>
			</div>
			<Modal isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
				<div className='w-full h-full flex flex-col gap-6'>
					<div className='flex flex-col gap-3'>
						<div className='bg-gray-100 rounded-md p-2'>1</div>
						<div className='bg-gray-100 rounded-md p-2'>2</div>
						<div className='bg-gray-100 rounded-md p-2'>3</div>
					</div>
					<Link
						className='text-center'
						to={`/day?date=${day}.${month}.${year}`}
					>
						Добавить запись
					</Link>
				</div>
			</Modal>
		</>
	)
}
