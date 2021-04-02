import Head from 'next/head'
import styles from '@styles/dashboard.module.scss'
import React from 'react'
import CenteredFlexBox from '@components/CenteredFlexBox'
import Table, { Row } from '@components/Table'

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
					<Row>row one</Row>
					<Row>row two</Row>
				</Table>
			</CenteredFlexBox>
		</CenteredFlexBox>
	)
}

export default Dashboard
