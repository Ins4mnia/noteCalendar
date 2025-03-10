import { monthShortNames } from '@/app/contants'

const formatDate = (dateString: string | null): string => {
	if (!dateString) return ''
	return dateString
		.split('.')
		.map((elem, index) =>
			index === 1 ? `${monthShortNames[Number(elem) - 1]} ` : `${elem} `
		)
		.join('')
}
export { formatDate }
