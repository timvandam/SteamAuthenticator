import React from 'react'
import styles from '@styles/centeredflexbox.module.scss'
import concatClasses from '@util/concatClasses'

type CenteredFlexBoxProps = {
	direction?: 'column' | 'row'
}

const CenteredFlexBox: React.FC<CenteredFlexBoxProps> = ({ direction = 'column', children }) => {
	return (
		<div
			className={concatClasses(
				styles.centeredflexbox,
				direction === 'column' ? styles.column : styles.row
			)}
		>
			{children}
		</div>
	)
}

export default CenteredFlexBox
