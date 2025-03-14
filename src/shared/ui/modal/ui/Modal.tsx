import { FC, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import type { Props } from '../model/type'

export const Modal: FC<Props> = ({ children, isOpen, onClose }) => {
	useEffect(() => {
		const handleEsc = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose()
		}

		if (isOpen) window.addEventListener('keydown', handleEsc)
		return () => window.removeEventListener('keydown', handleEsc)
	}, [isOpen, onClose])

	if (!isOpen) return null

	return createPortal(
		<div
			className='fixed inset-0 bg-black/25 flex items-center justify-center'
			onClick={onClose}
		>
			<div
				className='bg-white rounded-lg min-w-[500px] h-auto relative p-4'
				onClick={e => e.stopPropagation()}
			>
				<button
					onClick={onClose}
					className='absolute -right-10 top-0 bg-gray-100 rounded-md p-1 hover:bg-gray-200 transition-colors'
				>
					<X className='text-black' size={24} />
				</button>
				{children}
			</div>
		</div>,
		document.body
	)
}
