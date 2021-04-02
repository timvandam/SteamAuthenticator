import React from 'react'
import styles from '@styles/table.module.scss'

type TableRowProps = {}

export const Row: React.FC<TableRowProps> = ({ children }) => {
	return <tr>{children}</tr>
}

type TableProps = {
	children: typeof Row[]
	columns: string[]
}

const Table: React.FC<TableProps> = ({ children, columns }: { children: typeof Row[] }) => {
	return (
		<table className={styles.table}>
			<thead className={styles.tableHead}>
				<Row>
					{columns.map((column, i) => (
						<th key={i}>{column}</th>
					))}
				</Row>
			</thead>
			<tbody>
				{children.map((row, i) => (
					<td key={i}>{row}</td>
				))}
			</tbody>
		</table>
	)
}

export default Table
