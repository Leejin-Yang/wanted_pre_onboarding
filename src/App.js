import './App.css';
import Box from './components/Box';
import Toggle from './components/Toggle';
import Tab from './components/Tab';
import Slider from './components/Slider';
import Input from './components/Input';
import Dropdown from './components/Dropdown';

function App() {
  return (
    <div className='App'>
      <Box name={'Toggle'}>
        <Toggle />
      </Box>
      <Box name={'Tab'}>
        <Tab />
      </Box>
      <Box name={'Slider'}>
        <Slider />
      </Box>
      <Box name={'Input'}>
        <Input />
      </Box>
      <Box name={'Dropdown'}>
        <Dropdown />
      </Box>
    </div>
  );
}

export default App;
