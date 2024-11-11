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
		<div key={year} className={styles.box_population}>
			<h4 className={styles.year}>
				<span className={styles.span}>Rok:</span> {year}
			</h4>
			<p className={styles.population}>
				{' '}
				<span className={styles.span}>mieszkańców:</span> {population.toLocaleString('pl-PL')}
			</p>
		</div>
	))

	return (
		<section className={styles.wrapper}>
			<h2 className={styles.heading}>{selectCity}</h2>
			<div className={styles.box_description}>
				<div className={styles.box_img}>
					<img className={styles.img} src={cityData.img} alt='zdjęcie miasta' />
				</div>
				<div className={styles.box_text}>
					<p className={styles.text}>{cityData.description}</p>
				</div>
			</div>
			<div className={styles.box_population_data}>{cityViewData}</div>
		</section>
	)
}

export default DemographyInfo
