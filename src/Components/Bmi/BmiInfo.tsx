import React from 'react'

import styles from './Style/BmiInfo.module.css'

import MainImg from './assets/main_bmi_30.jpg'

const BmiInfo = () => {
	return (
		<section className={styles.wrapper}>
			<img className={styles.main_img} src={MainImg} alt='photo_measure' />
			<h1 className={styles.heading}>Czym jest wskaźnik BMI</h1>
			<p className={styles.text}>
				Wskaźnik BMI to stosunek masy ciała (wagi) do wzrostu. Niskie wartości mówią o tym, że ważmy za mało, wysokie –
				że za dużo. Im wyższy współczynnik BMI, tym wyższe ryzyko wystąpienia chorób związanych z nadmierną masą ciała.
				Są to choroby serca, cukrzyca typu 2, nadciśnienie, miażdżyca, kamicy żółciowej, zapalenia kości i stawów,
				bezdechów sennych, a nawet niektórych nowotworów. Zbyt niski wskaźnik BMI także wiąże się ze zagrożeniem zdrowia
				ze względu na niedożywienie, które może prowadzić do zmniejszenia odporności organizmu, apatii, zmniejszenia
				zdolności motorycznych, objawów niedoborów witamin.
			</p>
		</section>
	)
}

export default BmiInfo
