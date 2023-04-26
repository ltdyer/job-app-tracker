import { Routes, Route } from 'react-router-dom';
import { Homepage, SavedJobsPage } from './routes';

function App() {
  return (
    <Routes>
      <Route path='/' element={ <Homepage /> } />
      <Route path='/saved-jobs' element={ <SavedJobsPage /> }/>
    </Routes>
    
  );
}

export default App;
