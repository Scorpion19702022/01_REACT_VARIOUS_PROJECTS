import React, { useContext } from 'react'

import styles from './Styles/DemographyInfo.module.css'
import DemographyContext from './Context/DemographyContext'

const DemographyInfo = () => {
	const { selectCity, cityDemography } = useContext(DemographyContext)

	const cityData = cityDemography[0]

	return (
		<section className={styles.wrapper}>
			<h2 className={styles.heading}>{selectCity}</h2>
			{cityData ? (
				<div className={styles.populationData}>
					{Object.entries(cityData.population).map(([year, population]) => (
						<p key={year}>
							<strong>Rok: {year}:</strong> {population?.toLocaleString()}
						</p>
					))}
				</div>
			) : (
				<p>Brak danych demograficznych dla wybranego miasta.</p>
			)}
		</section>
	)
}

export default DemographyInfo
