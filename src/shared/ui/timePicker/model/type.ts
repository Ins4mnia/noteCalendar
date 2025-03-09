interface INoteData {
	title: string
	timeStart: string
	timeEnd: string
	dateStart: string
	dateEnd: string
}

interface Props {
	noteInfo: INoteData
	handleAddNoteParam: (noteInfo: INoteData, param: string, info: string) => void
	param: string
}

export type { Props }
