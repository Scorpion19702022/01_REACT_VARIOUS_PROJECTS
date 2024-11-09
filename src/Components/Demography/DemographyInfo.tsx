import React, { useContext } from 'react'

import styles from './Styles/DemographyInfo.module.css'
import DemographyContext from './Context/DemographyContext'

const DemographyInfo = () => {
	const { selectCity } = useContext(DemographyContext)

	return (
		<section className={styles.wrapper}>
			<h2 className={styles.heading}>{selectCity}</h2>
		</section>
	)
}

export default DemographyInfo
