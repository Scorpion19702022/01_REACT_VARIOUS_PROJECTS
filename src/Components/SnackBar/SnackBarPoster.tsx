import React from 'react'

import styles from './Styles/SnackBarPoster.module.css'

import SnackBarPosterImg from './assets/snack_01.png'

const SnackBarPoster = () => {
	return (
		<section className={styles.wrapper}>
			<div className={styles.box_poster}>
				<img className={styles.poster_img} src={SnackBarPosterImg} alt='photo_foods' />
				<div className={styles.box_info_poster}>
					<h1 className={styles.poster_heading}>SnackBar</h1>
					<span className={styles.poster_text}>Pysznie i szybko!</span>
				</div>
			</div>
		</section>
	)
}

export default SnackBarPoster
