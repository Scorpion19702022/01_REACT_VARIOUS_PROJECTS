import React, { useContext } from 'react'

import imgInput from './assets/salary1.png'
import imgInputDesktop from './assets/salary.png'

import styles from './Styles/SalaryInput.module.css'
import SalaryContext from './Context/SalaryContext'

const SalaryInput = () => {
	const {
		contract,
		errorContract,
		salaryInput,
		errorInputValue,
		handleChangeContract,
		handleChangeInputSalary,
		handleCalculateSalary,
	} = useContext(SalaryContext)

	const typeOfContract = {
		contract01: 'wybierz umowę',
		contract02: 'umowa o pracę',
		contract03: 'umowa zlecenie',
		contract04: 'umowa o dzieło',
		contract05: 'umowa B2B',
	}

	const selectContract = Object.entries(typeOfContract).map(([value, contract]) => (
		<option className={styles.option} key={value} value={contract}>
			{contract}
		</option>
	))

	return (
		<section className={styles.wrapper}>
			<img className={styles.input_img_mobile} src={imgInput} alt='moneyimage' />
			<img className={styles.input_img_desktop} src={imgInputDesktop} alt='moneyimage' />
			<div className={styles.box_main}>
				<h2 className={styles.heading}>Kalkulator wynagrodzeń</h2>
				<div className={styles.box_inputs}>
					<div className={styles.box_input_label}>
						<label className={styles.label}>wybierz typ umowy:</label>
						<select
							className={styles.select_contract}
							value={contract}
							onChange={e => handleChangeContract(e.target.value)}
						>
							{selectContract}
						</select>
						<div className={styles.box_error}>
							<span className={styles.error}>{errorContract}</span>
						</div>
						<label className={styles.label}>
							<span className={styles.label_span}>{`miesięczne`.toLocaleUpperCase()}</span> wynagrodzenie brutto:
						</label>
						<div className={styles.box_input}>
							<input
								className={styles.input}
								type='number'
								min={0}
								value={Number(salaryInput) || ''}
								onChange={e => handleChangeInputSalary(e.target.value)}
							/>
							<span className={styles.kind_value}>zł brutto</span>
						</div>
						<div className={styles.box_error}>
							<span className={styles.error}>{errorInputValue}</span>
						</div>
					</div>
				</div>
				<div className={styles.box_btns}>
					<button className={styles.btn} onClick={handleCalculateSalary}>
						Sprawdź
					</button>
				</div>
			</div>
		</section>
	)
}

export default SalaryInput
