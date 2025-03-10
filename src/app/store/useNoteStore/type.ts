interface INoteData {
	noteId: string
	title: string
	timeStart: string
	timeEnd: string
	dateStart: string
	dateEnd: string
}

interface INote {
	[dayId: string]: INoteData[] | null
}

interface INoteStore {
	notes: INote
	addNote: (dayId: string, data: INoteData) => void
	deleteNote: (dayId: string, noteId: string) => void
}

export type { INoteStore, INoteData, INote }
