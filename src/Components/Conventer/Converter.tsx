import React from 'react'

import styles from './Styles/Converter.module.css'
import ConverterHeader from './ConverterHeader'
import ConverterResult from './ConverterResult'

const Converter = () => {
	return (
		<main className={styles.wrapper}>
			<ConverterHeader />
			<ConverterResult />
		</main>
	)
}

export default Converter
