import React, { useContext } from 'react'

import styles from './Styles/DemographyInfo.module.css'
import DemographyContext from './Context/DemographyContext'

const DemographyInfo = () => {
	const { selectCity, cityDemography } = useContext(DemographyContext)

	const cityData = cityDemography[0]

	if (!cityDemography.length) {
		return <p>Brak danych demograficznych dla wybranego miasta.</p>
	}

	const cityViewData = Object.entries(cityData.population).map(([year, population]) => (
		<div key={year}>
			<p>
				<strong>Rok: {year}:</strong> {population?.toLocaleString()} mieszkańców
			</p>
		</div>
	))

	return (
		<section className={styles.wrapper}>
			<h2 className={styles.heading}>{selectCity}</h2>
			<div className={styles.box_population_data}>{cityViewData}</div>
		</section>
	)
}

export default DemographyInfo
