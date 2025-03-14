import { useNoteStore } from '@/app/store/useNoteStore/useNoteStore'
import { FC, memo } from 'react'
import type { Props } from '../model/type'

const AddNoteToStore: FC<Props> = memo(({ children, id, data, ...rest }) => {
	const addNote = useNoteStore(state => state.addNote)
	const handleClick = () => {
		addNote(id, data)
	}
	return (
		<button onClick={handleClick} {...rest}>
			{children}
		</button>
	)
})

export default AddNoteToStore
