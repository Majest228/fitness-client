import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react'

export interface ButtonInterface
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	children: ReactNode
	br: 'red' | 'white'
}
