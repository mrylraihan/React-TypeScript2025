import React, { type ReactNode } from 'react'

type InfoBoxProps = {
	mode: 'hint' | 'Warning'
	children: ReactNode
}
function InfoBox({ mode, children }: InfoBoxProps) {
	if (mode === 'hint') {
		return (
			<aside className="infobox infobox-hint">
				<p>{children}</p>
			</aside>
		)
	}
	return (
		<aside className="infobox infobox-warning warning--medium">
			<h2>Warning</h2>
			<p>{children}</p>
		</aside>
	)
}

export default InfoBox
