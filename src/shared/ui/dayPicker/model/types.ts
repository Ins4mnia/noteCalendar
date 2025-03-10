interface ICalendarDay {
	day: number | null
	isCurrentMonth: boolean
}

interface INoteData {
	title: string
	timeStart: string
	timeEnd: string
	dateStart: string
	dateEnd: string
}
interface Props {
	handleAddNoteParam: (noteInfo: INoteData, param: string, info: string) => void
	param: string
	noteInfo: INoteData
}
export type { ICalendarDay, Props }
