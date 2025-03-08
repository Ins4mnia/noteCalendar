import { FC, useState, useEffect, useRef } from 'react'

export const TimePicker: FC = () => {
	const [hours, setHours] = useState<number>(0)
	const [minutes, setMinutes] = useState<number>(0)
	const [showTimePicker, setShowTimePicker] = useState(false)
	const timePickerRef = useRef<HTMLDivElement>(null)

	const hoursArray = Array.from({ length: 25 }, (_, i) => i)
	const minutesArray = Array.from({ length: 60 }, (_, i) => i)

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (
				timePickerRef.current &&
				!timePickerRef.current.contains(e.target as Node)
			) {
				setShowTimePicker(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	const formatTime = (value: number) => value.toString().padStart(2, '0')

	return (
		<div className='relative cursor-pointer' ref={timePickerRef}>
			<p onClick={() => setShowTimePicker(!showTimePicker)}>
				{`${formatTime(hours)}:${formatTime(minutes)}`}
			</p>

			{showTimePicker && (
				<div className='absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg top-full'>
					<div className='flex p-2 max-h-60 gap-2'>
						<div className='flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-gray-100'>
							{hoursArray.map(hour => (
								<div
									key={hour}
									className={`p-2 text-center cursor-pointer rounded-md transition-colors
                    ${
											hour === hours
												? 'bg-blue-500 text-white'
												: 'hover:bg-gray-100'
										}`}
									onClick={e => {
										e.stopPropagation()
										setHours(hour)
									}}
								>
									{formatTime(hour)}
								</div>
							))}
						</div>

						<div className='flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-200 scrollbar-track-gray-100'>
							{minutesArray.map(minute => (
								<div
									key={minute}
									className={`p-2 text-center cursor-pointer rounded-md transition-colors
                    ${
											minute === minutes
												? 'bg-blue-500 text-white'
												: 'hover:bg-gray-100'
										}`}
									onClick={e => {
										e.stopPropagation()
										setMinutes(minute)
									}}
								>
									{formatTime(minute)}
								</div>
							))}
						</div>
					</div>
				</div>
			)}
		</div>
	)
}
