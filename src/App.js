import  { useState } from 'react';
import styles from './app.module.css';
import data from './data.json';

export const App = () => {

	const [steps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);

	const setBack = () => {
		if(activeIndex > 0)
			setActiveIndex(activeIndex - 1);
		
	}

	const setForward = () => {
		if(activeIndex < steps.length - 1) {
			setActiveIndex(activeIndex + 1);
		} else {
			setActiveIndex(0);
		}
	}

	

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						<h2>{steps[activeIndex].title}</h2>
						<p>{steps[activeIndex].content}</p>
					</div>
					<ul className={styles['steps-list']}>
						{steps.map((step, index) => {
							let stepClass = styles['steps-item'];
							if(index < activeIndex) stepClass += ' ' + styles.done;
							if(index === activeIndex) stepClass += ' ' + styles.active + ' ' + styles.done;

							return (
								<li key={index} className={stepClass}>
									<button
									className={styles['steps-item-button']}
									onClick={() => setActiveIndex(index)}
									>
										{index + 1}
									</button>
									{step.title}
								</li>
							)
						})}
						
					</ul>
					<div className={styles['buttons-container']}>
						<button onClick={setBack} className={styles.button} disabled={activeIndex === 0}>Назад</button>
						<button onClick={setForward} className={styles.button}>
							{
								activeIndex === steps.length - 1? 'Начать сначала' : 'Далее'
							}
							
							
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
