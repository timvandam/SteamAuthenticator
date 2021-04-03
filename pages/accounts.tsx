import Head from 'next/head'
import styles from '@styles/dashboard.module.scss'
import React from 'react'
import CenteredFlexBox from '@components/CenteredFlexBox'
import Table, { Row } from '@components/Table'
import ProgressBar from '@components/ProgressBar'
import TwoFAProgressBar from '@components/TwoFAProgressBar'

const Dashboard: React.FC = () => {
	return (
		<CenteredFlexBox>
			<Head>
				<title>Dashboard</title>
			</Head>
			{/*todo: put this table somewhere else (not component, some other name)*/}
			{/*todo: limit the size of the table*/}
			<CenteredFlexBox>
				<Table columns={['Username', '2FA Code']}>
					<Row>
						<td>account_one</td>
						<td>
							<TwoFAProgressBar text="123AB" />
						</td>
					</Row>
					<Row>
						<td>account_two</td>
						<td>
							<TwoFAProgressBar text="123AB" />
						</td>
					</Row>
				</Table>
			</CenteredFlexBox>
		</CenteredFlexBox>
	)
}

export default Dashboard
