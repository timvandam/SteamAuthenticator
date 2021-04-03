import React, { CSSProperties } from 'react'
import styles from '@styles/progressbar.module.scss'

type ProgressBarProps = {
	text: string
	progress: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ text, progress }) => {
	const spanStyle: CSSProperties = {
		width: `${progress}%`,
	}

	return (
		<div className={styles.progressBar}>
			<span className={styles.progress} style={spanStyle} />
			{text}
		</div>
	)
}

export default ProgressBar
