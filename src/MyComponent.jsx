import styles from './App.module.css';
import { useState } from 'react';

export const MyComponent = () => {
	const [value, setValue] = useState('');

	const [list, setList] = useState([]);

	const [error, setCheckError] = useState('');

	const isValueVaild = value.length >= 3;

	const onInputButtonClick = () => {
		const promptValue = prompt('');

		if (promptValue === null) return;

		if (promptValue.length < 3) {
			setCheckError('Введенное значение должно содержать 3 символа');
		} else {
			setValue(promptValue);
			setCheckError('');
		}
	};

	const onAddButtonClick = () => {
		if (value.length < 3) return;

		const newItem = { id: Date.now(), value };
		const updatedList = [...list, newItem];
		setList(updatedList);

		setValue('');
		setCheckError('');
	};

	return (
		<div className={styles.app}>
			<h1 className={styles['page-heading']}>Ввод значения</h1>
			<p className={styles['no-margin-text']}>
				Текущее значение <code>value</code>: "
				<output className={styles['current-value']}>{value}</output>"
			</p>
			{error && <div className={styles.error}>{error}</div>}
			<div className={styles['buttons-container']}>
				<button className={styles.button} onClick={onInputButtonClick}>
					Ввести новое
				</button>
				<button
					onClick={onAddButtonClick}
					className={styles.button}
					disabled={!isValueVaild}
				>
					Добавить в список
				</button>
			</div>
			<div className={styles['list-container']}>
				<h2 className={styles['list-heading']}>Список:</h2>
				{list.length === 0 ? (
					<p className={styles['no-margin-text']}>Нет добавленных элементов</p>
				) : (
					<ul className={styles.list}>
						{list.map((item) => (
							<li key={item.id} className={styles['list-item']}>
								{item.value}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};
