import { ReactNode } from 'react'
export interface HeaderTagInterface {
	children: ReactNode
	tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
	version: 'mobile' | 'desktop' | 'tablet'
}
