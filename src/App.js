import { render } from '@testing-library/react';
import './App.css';
import Counter from './components/Counter';
import Greeting from './components/Greeting';
import ThemeButton from './components/ThemeButton';

// Компоненты
// функциональные
// классовые

function App() {
  return (
    <>
      <Greeting name="Masha" isGreeting={false} />
      <ThemeButton isLightTheme={true} />
      <Counter step={2} />
    </>
  );
  // = Greeting({name:'Masha', isGreeting: true})
  // = new Counter({step: 2}).render()
}

export default App;
