import type { ReactNode } from 'react'

interface Props {
	children: ReactNode
	isOpen: boolean
	onClose: () => void
}

export type { Props }
