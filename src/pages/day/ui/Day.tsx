import Modal from '@/shared/ui/modal'
import { FC, useState } from 'react'
import { useSearchParams } from 'react-router'
import AddNoteWindow from '@/widgets/addNoteWindow/ui/AddNoteWindow'
import { NoteList } from '@/widgets/noteList'
import { formatDate } from '../model/utils'

export const Day: FC = () => {
	const [searchParams] = useSearchParams()
	const [isOpen, setIsOpen] = useState(false)

	if (!searchParams.get('date')) return <div>Возникла ошибка!</div>
	return (
		<>
			<h2 className='text-center py-2 text-xl'>
				{formatDate(searchParams.get('date'))}
			</h2>
			<button
				className='absolute bottom-2 left-1/2 -translate-x-1/2'
				onClick={() => setIsOpen(!isOpen)}
			>
				Добавить
			</button>
			<NoteList date={searchParams.get('date')} />
			<Modal isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
				<AddNoteWindow date={searchParams.get('date')!} />
			</Modal>
		</>
	)
}
