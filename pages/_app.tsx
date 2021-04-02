import { AppProps } from 'next/app'
import '@styles/global.scss'
import Navbar from '@components/Navbar'
import CenteredFlexBox from '@components/CenteredFlexBox'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<CenteredFlexBox direction="row">
			<Navbar />
			<CenteredFlexBox>
				<Component {...pageProps} />
			</CenteredFlexBox>
		</CenteredFlexBox>
	)
}

export default MyApp
