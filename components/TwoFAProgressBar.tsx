import React, { useEffect, useState } from 'react'
import ProgressBar from '@components/ProgressBar'

type TwoFAProgressBarProps = {
	text: string // username. then get 2fa code with api
}

const TwoFAProgressBar: React.FC<TwoFAProgressBarProps> = ({ text }) => {
	const [progress, setProgress] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			const p = (100 * (new Date().getSeconds() % 31)) / 30
			setProgress(p)
		}, 1000)
		return () => clearInterval(interval)
	}, [])

	return <ProgressBar text={text} progress={progress} />
}

export default TwoFAProgressBar
