import { create } from 'zustand'

interface INote {
	[id: string]: INoteData | null
}
interface INoteData {
	title: string
	timeStart: string
	timeEnd: string
	dateStart: string
	dateEnd: string
}

interface INoteStore {
	notes: INote
	addNote: (id: string, data: INoteData) => void
	deleteNote: (id: string) => void
	updateNote: (id: string, data: INoteData) => void
}

const useNoteStore = create<INoteStore>()((set, get) => ({
	notes: {},
	addNote: (id, data) => {
		const { notes } = get()
		set({ notes: { ...notes, [id]: data } })
	},
	deleteNote: id => {
		const { notes } = get()
		set({ notes: { ...notes, [id]: null } })
	},
	updateNote: (id, data) => {
		const { notes } = get()
		set({ notes: { ...notes, [id]: data } })
	},
}))

export { useNoteStore }
