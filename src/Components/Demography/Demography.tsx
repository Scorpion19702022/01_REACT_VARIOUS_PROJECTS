import React from 'react'

import styles from './Styles/Demography.module.css'
import DemographyHeader from './DemographyHeader'
import DemographySelect from './DemographySelect'
import { DemographyProvider } from './Context/DemographyContext'
import DemographyInfo from './DemographyInfo'
import DemographyChart from './DemographyChart'

const Demography = () => {
	return (
		<main className={styles.wrapper}>
			<DemographyProvider>
				<DemographyHeader />
				<DemographySelect />
				<div className={styles.box_demography_info}>
					<DemographyInfo />
					<DemographyChart />
				</div>
			</DemographyProvider>
		</main>
	)
}

export default Demography
