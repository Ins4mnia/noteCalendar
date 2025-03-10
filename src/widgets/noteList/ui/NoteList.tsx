import { useNoteStore } from '@/app/store/useNoteStore/useNoteStore'
import { FC } from 'react'

interface Props {
	date: string
}

const NoteList: FC<Props> = ({ date }) => {
	const notes = useNoteStore(state => state.notes)
	console.log(notes, date)
	return (
		<div>
			{notes[date]?.map(elem => (
				<div>{elem.title}</div>
			))}
		</div>
	)
}

export default NoteList
