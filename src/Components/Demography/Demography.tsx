import React from 'react'

import styles from './Styles/Demography.module.css'
import DemographyHeader from './DemographyHeader'
import DemographySelect from './DemographySelect'

const Demography = () => {
	return (
		<main className={styles.wrapper}>
			<DemographyHeader />
			<DemographySelect />
		</main>
	)
}

export default Demography
