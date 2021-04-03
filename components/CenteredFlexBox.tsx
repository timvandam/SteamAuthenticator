import React from 'react'
import styles from '@styles/centeredFlexBox.module.scss'
import classes from '@util/classes'

type CenteredFlexBoxProps = {
	direction?: 'column' | 'row'
}

const CenteredFlexBox: React.FC<CenteredFlexBoxProps> = ({ direction = 'column', children }) => {
	return (
		<div
			className={classes({
				[styles.centeredFlexBox]: true,
				[styles.column]: direction === 'column',
				[styles.row]: direction === 'row',
			})}
		>
			{children}
		</div>
	)
}

export default CenteredFlexBox
