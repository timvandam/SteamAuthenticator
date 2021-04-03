import React from 'react'
import styles from '@styles/table.module.scss'

type TableRowProps = {}

export const Row: React.FC<TableRowProps> = ({ children }) => {
	return <tr className={styles.row}>{children}</tr>
}

type TableProps = {
	columns: readonly string[]
}

const Table: React.FC<TableProps> = ({ children, columns }) => {
	return (
		<table className={styles.table}>
			<thead className={styles.tableHead}>
				<Row>
					{columns.map((column, i) => (
						<th key={i}>{column}</th>
					))}
				</Row>
			</thead>
			<tbody className={styles.tableBody}>{children}</tbody>
		</table>
	)
}

export default Table
