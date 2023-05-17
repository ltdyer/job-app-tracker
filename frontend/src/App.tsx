import { Routes, Route } from 'react-router-dom';
import { Homepage, SavedJobsPage } from './routes';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {

  return (
    <ThemeProvider>
      <Routes>
        <Route path='/' element={ <Homepage /> } />
        <Route path='/saved-jobs' element={ <SavedJobsPage /> }/>
      </Routes>
    </ThemeProvider>
    
  );
}

export default App;
