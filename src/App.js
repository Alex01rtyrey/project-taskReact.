import { useState } from "react";
import styles from './app.module.css';


function App() {

	const NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	const OPERATORS = ['+', '-', '=', 'C'];

	const [operand1, setOperand1] = useState('');
	const [operator, setOperator] = useState('');
	const [operand2, setOperand2] = useState('');
	const [isResult, setIsResult] = useState(false);

	function handleDigit(digit) {
		if(!operator) {
			setOperand1(prev => prev + digit);
		} else {
			setOperand2(prev => prev + digit);
		}
	}

	function handleOperator(op) {
		if (op === 'C') {
			setOperand1('');
			setOperator('');
			setOperand2('');
			return;
		}

		if (op === '=' && operator && operand2) {
			const num1 = parseInt(operand1, 10);
			const num2 = parseInt(operand2, 10);
			let result;

			if (operator === '+') result = num1 + num2;
			else if(operator === '-') result = num1 - num2;

			setOperand1(String(result));
			setOperator('');
			setOperand2('');
			setIsResult(true);
			return;
		}

		if(!operator) {
			setOperator(op);
			 setIsResult(false);
		} else if(operator && operand2) {
			setOperator(op);
			setIsResult(false);
		} else if(operator && operand2) {
			const num1 = parseInt(operand1, 10);
			const num2 = parseInt(operand2, 10);
			let result;

			if(operator === '+') result = num1 + num2;
			else if(operator === '-') result = num1 - num2;

			setOperand1(String(result));
			setOperator(op);
			setOperand2('');
			setIsResult(false);
		} else {
			setOperator(op);
    		setIsResult(false);
		}



	}


	return(
		<div className={styles.calculator}>
			<div className={`${styles.display} ${isResult ? styles.result : ''}`}>{operand1}{operator}{operand2}</div>
			<div className={styles.buttons}>
				{OPERATORS.map(op => (
					<button key={op} onClick={() => handleOperator(op)}>{op}</button>
				))}
				{NUMS.map(num => (
					<button key={num} onClick={() => handleDigit(num)}>{num}</button>
				))}	
			</div>
		</div>
	);
}

export default App;





