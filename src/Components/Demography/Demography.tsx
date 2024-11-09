import React from 'react'

import styles from './Styles/Demography.module.css'
import DemographyHeader from './DemographyHeader'
import DemographySelect from './DemographySelect'
import { DemographyProvider } from './Context/DemographyContext'

const Demography = () => {
	return (
		<main className={styles.wrapper}>
			<DemographyProvider>
				<DemographyHeader />
				<DemographySelect />
			</DemographyProvider>
		</main>
	)
}

export default Demography
