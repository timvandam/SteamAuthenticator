import React from 'react'
import Link from 'next/link'
import styles from '@styles/navbar.module.scss'
import { useRouter } from 'next/router'
import concatClasses from '@util/concatClasses'

type NavButtonProps = { href: string }

const NavButton: React.FC<NavButtonProps> = ({ href, children }) => {
	const { asPath } = useRouter()

	const active = asPath === href

	return (
		<Link href={href}>
			<a className={concatClasses(styles.navlink, active && styles.active)}>{children}</a>
		</Link>
	)
}

const Navbar: React.FC = () => {
	return (
		<nav className={styles.navbar}>
			<span
				style={{
					color: 'white',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					height: '3em',
					fontSize: '2rem',
				}}
			>
				LOGO
			</span>
			<NavButton href="/accounts">Accounts</NavButton>
			<NavButton href="/confirmations">Confirmations</NavButton>
		</nav>
	)
}

export default Navbar
