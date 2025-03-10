import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import type { INoteStore } from './type'

const useNoteStore = create<INoteStore>()(
	persist(
		(set, get) => ({
			notes: {},
			addNote: (dayId, data) => {
				const { notes } = get()
				const currentNotes = notes[dayId] || []
				set({ notes: { ...notes, [dayId]: [data, ...currentNotes] } })
			},

			deleteNote: (dayId, noteId) => {
				const { notes } = get()
				const userNotes = notes[dayId]
				if (userNotes) {
					const updatedNotes = userNotes.filter(note => note.noteId !== noteId)
					set({ notes: { ...notes, [dayId]: updatedNotes } })
				}
			},
		}),
		{
			name: 'note-storage',
			storage: createJSONStorage(() => localStorage),
		}
	)
)

export { useNoteStore }
