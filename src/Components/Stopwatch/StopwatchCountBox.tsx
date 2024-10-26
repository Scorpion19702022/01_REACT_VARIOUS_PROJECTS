import React, { useContext } from 'react'
import { AiFillInfoCircle } from 'react-icons/ai'
import { IoColorPalette } from 'react-icons/io5'
import { FaPlay } from 'react-icons/fa6'
import { FaPause } from 'react-icons/fa6'
import { FaStop } from 'react-icons/fa6'

import styles from './Styles/StopwatchCountBox.module.css'
import StopwatchCotext from './Context/StopwatchContext'

const StopwatchCoutBox = () => {
	const {
		modalInfo,
		modalColor,
		inputName,
		gamerName,
		stateStopwatch,
		startCount,
		pauseCount,
		resetCount,
		minutes,
		seconds,
		milliseconds,
		handleServiceModalInfo,
		handleServiceModalChangeColor,
		handleServiceChangeColor,
		handleChangeInput,
		handleAddedNameGamer,
		handleUseEnter,
		handleStart,
		handlePause,
		handleStop,
		handleViewGamers,
		handleCleanAll,
	} = useContext(StopwatchCotext)

	return (
		<section className={styles.wrapper} onKeyDown={handleUseEnter}>
			<div className={styles.box_header}>
				<h4 className={styles.state_info}>{stateStopwatch}</h4>
				<div className={styles.box_icons}>
					<button className={styles.btn_icon} onClick={handleServiceModalInfo}>
						<AiFillInfoCircle className={styles.icon_info} />
					</button>
					<button className={styles.btn_icon} onClick={handleServiceModalChangeColor}>
						<IoColorPalette className={styles.icon_info} />
					</button>
				</div>
			</div>
			<div className={styles.box_gamer}>
				<div className={styles.box_inputs}>
					<label className={styles.label}>Podaj nazwę gracza</label>
					<input
						className={styles.input}
						type='text'
						value={inputName}
						onChange={e => handleChangeInput(e.target.value)}
					/>
				</div>
				<div className={styles.box_btn_gamer}>
					<button className={styles.btn_gamer} onClick={handleAddedNameGamer}>
						zapisz
					</button>
				</div>
			</div>
			<div className={styles.box_name_gamer}>
				<span className={styles.name_gamer}>{gamerName}</span>
			</div>
			<div className={modalInfo ? styles.box_modal_info : styles.no_box_modal_info}>
				<h3 className={styles.heading_info}>Instrukcja:</h3>
				<p className={styles.text_info}>Wpisz nazwę w input i zatwierdź</p>
				<div className={styles.box_action_info}>
					<p className={styles.text_info}>
						<AiFillInfoCircle /> <span className={styles.span_info}> - obsługa</span>
					</p>
					<p className={styles.text_info}>
						<IoColorPalette /> <span className={styles.span_info}> - zmień kolorystykę</span>
					</p>
				</div>
				<div className={styles.box_text_info}>
					<p className={styles.text_info}>
						<FaPlay /> <span className={styles.span_info}> - start</span>
					</p>
					<p className={styles.text_info}>
						<FaPause /> <span className={styles.span_info}> - pauza</span>
					</p>
					<p className={styles.text_info}>
						<FaStop /> <span className={styles.span_info}> - stop (zapisuje też gracza)</span>
					</p>
				</div>
				<ul className={styles.box_list_text_info}>
					<li className={styles.text_list_info}>przycisk "pokaż czasy" pokazuje listę poszczególnych pomiarów</li>
					<li className={styles.text_list_info}>
						przycisk "wyczyść wszystko" kasuje czasy, gracza i listę z pomiarami
					</li>
				</ul>
				<button className={styles.btn_close_modal_info} onClick={handleServiceModalInfo}>
					zamknij
				</button>
			</div>
			<div className={modalColor ? styles.box_modal_change_color : styles.no_box_modal_change_color}>
				<button className={styles.btn_change_color} onClick={() => handleServiceChangeColor('blue')}></button>
				<button className={styles.btn_change_color} onClick={() => handleServiceChangeColor('purple')}></button>
				<button className={styles.btn_change_color} onClick={() => handleServiceChangeColor('orange')}></button>
			</div>
			<div className={styles.box_count}>
				<div className={styles.count}>
					<span className={styles.timePart}>{minutes < 10 ? `0${minutes}` : minutes}</span>:
					<span className={styles.timePart}>{seconds < 10 ? `0${seconds}` : seconds}</span>:
					<span className={styles.timePart}>{milliseconds < 10 ? `0${milliseconds}` : milliseconds}</span>
				</div>
				<div className={styles.box_meassures}>
					<span className={styles.meassure}>minuty</span>
					<span className={styles.meassure}>sekundy</span>
					<span className={styles.meassure}>milisekundy</span>
				</div>
				<span className={styles.time}>0:00</span>
				<div className={styles.box_control}>
					<button className={!startCount ? styles.btn_control : styles.btn_control_active} onClick={handleStart}>
						<FaPlay />
					</button>
					<button className={!pauseCount ? styles.btn_control : styles.btn_control_active} onClick={handlePause}>
						<FaPause />
					</button>
					<button className={!resetCount ? styles.btn_control : styles.btn_control_active} onClick={handleStop}>
						<FaStop />
					</button>
				</div>
			</div>
			<div className={styles.box_btns}>
				<button className={styles.btn_archives} onClick={handleViewGamers}>
					pokaż czasy
				</button>
				<button className={styles.btn_reset} onClick={handleCleanAll}>
					wyczyść wszystko
				</button>
			</div>
		</section>
	)
}

export default StopwatchCoutBox
