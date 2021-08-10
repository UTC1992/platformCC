import { HashRouter } from 'react-router-dom';
import Routes from './routes/Routes';
import './App.css';

const App: React.FC = () => (
  <HashRouter>
    <Routes />
  </HashRouter>
);

export default App;
