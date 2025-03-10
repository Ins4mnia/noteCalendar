import type { INoteData } from '@/app/store/useNoteStore'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
	id: string
	data: INoteData
}

export type { Props }
