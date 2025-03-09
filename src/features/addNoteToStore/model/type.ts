interface INoteData {
	title: string
	timeStart: string
	timeEnd: string
	dateStart: string
	dateEnd: string
}
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
	id: string
	data: INoteData
}

export type { Props, INoteData }
