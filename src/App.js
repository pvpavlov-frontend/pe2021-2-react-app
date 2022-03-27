import './App.css';
import Greeting from './components/Greeting';
import ThemeButton from './components/ThemeButton';

// Компоненты
// функциональные
// классовые

// Написать компонент ThemeButton для кнопки.
// В зависимости от пропа isLightTheme формировать
// надпись "Светлая" или "Темная".

function App() {
  return (
    <>
      <Greeting name="Masha" isGreeting={false} />
      <ThemeButton isLightTheme={true} />
    </>
  ); // = Greeting({name:'Masha', isGreeting: true})
}

export default App;
