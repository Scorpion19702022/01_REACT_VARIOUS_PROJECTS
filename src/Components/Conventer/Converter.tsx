import React from 'react'

import styles from './Styles/Converter.module.css'
import ConverterHeader from './ConverterHeader'
import ConverterResult from './ConverterResult'
import { ConverterProvider } from './Context/ConverterContext'

const Converter = () => {
	return (
		<main className={styles.wrapper}>
			<ConverterProvider>
				<ConverterHeader />
				<ConverterResult />
			</ConverterProvider>
		</main>
	)
}

export default Converter
