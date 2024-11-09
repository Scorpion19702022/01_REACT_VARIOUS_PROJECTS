import React, { useContext } from 'react'

import styles from './Styles/DemographySelect.module.css'

import trend from './assets/trend.png'
import DemographyContext from './Context/DemographyContext'

const DemographySelect = () => {
	const { selectCity, handleChangeCity } = useContext(DemographyContext)

	const typeOfCities = {
		city01: 'Warszawa',
		city02: 'Białystok',
		city03: 'Bydgoszcz',
		city04: 'Gdańsk',
		city05: 'Gorzów Wielkopolski',
		city06: 'Katowice',
		city07: 'Kielce',
		city08: 'Kraków',
		city09: 'Lublin',
		city10: 'Łódź',
		city11: 'Olsztyn',
		city12: 'Opole',
		city13: 'Poznań',
		city14: 'Rzeszów',
		city15: 'Szczecin',
		city16: 'Toruń',
		city17: 'Wrocław',
		city18: 'Zielona Góra',
	}

	const selectCities = Object.entries(typeOfCities).map(([value, city]) => (
		<option className={styles.option} key={value} value={city}>
			{city}
		</option>
	))

	return (
		<section className={styles.wrapper}>
			<div className={styles.box_img}>
				<img className={styles.img} src={trend} alt='image_trend' />
			</div>
			<h2 className={styles.heading}>Po wybraniu miasta wyświetlisz informacje i dane demograficzne</h2>
			<div className={styles.box_select}>
				<label className={styles.label_city}>wybierz miasto:</label>
				<select className={styles.select_city} value={selectCity} onChange={e => handleChangeCity(e.target.value)}>
					{selectCities}
				</select>
			</div>
		</section>
	)
}

export default DemographySelect
