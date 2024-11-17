import React, { useContext } from 'react'

import styles from './Styles/DemographyInfo.module.css'
import DemographyContext from './Context/DemographyContext'
import DemographyChart from './DemographyChart'

const DemographyInfo = () => {
	const { selectCity, cityDemography } = useContext(DemographyContext)

	const cityData = cityDemography[0]

	if (!cityDemography.length) {
		return <p>Brak danych demograficznych dla wybranego miasta.</p>
	}

	const lastYearData = Object.values(cityData.population)

	const cityViewData = Object.entries(cityData.population).map(([year, population]) => (
		<div key={year} className={styles.box_population}>
			<h4 className={styles.year}>
				<span className={styles.span}>Rok:</span> {year}
			</h4>
			<p className={styles.population}>
				{' '}
				<span className={styles.span}>mieszkańców:</span> {population > 0 ? population.toLocaleString('pl-PL') : 'bd'}
			</p>
		</div>
	))

	return (
		<section className={styles.wrapper}>
			<h2 className={styles.heading}>{selectCity}</h2>
			<div className={styles.box_information}>
				<div className={styles.box_description}>
					<div className={styles.description}>
						<div className={styles.box_img}>
							<img className={styles.img} src={cityData.img} alt='zdjęcie miasta' />
						</div>
						<div className={styles.box_text}>
							<p className={styles.text}>{cityData.description}</p>
							<p className={styles.current_data}>
								{lastYearData[5].toLocaleString('pl-PL')} <span className={styles.current_data_span}>mieszkańców</span>
							</p>
						</div>
					</div>
					<div className={styles.box_population_data}>{cityViewData}</div>
				</div>
				<DemographyChart />
			</div>
		</section>
	)
}

export default DemographyInfo
