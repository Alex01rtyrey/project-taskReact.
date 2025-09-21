
import styles from './App.module.css';
import { MyComponent } from './MyComponent';


function App() {
  
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
		<MyComponent />
	  </header>
    
    </div>
  );
}

export default App;
