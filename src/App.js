import { Route ,Routes  } from 'react-router-dom';


import AllMeetUpsPage from './pages/AllMeetUps';
import FaivriotsPage from './pages/Faivriots';
import NewMeetUpsPage from './pages/NewMeetUps';
import Layout from './components/layout/Layout';






function App() {
  return (
    
    <Layout>      
      <Routes>
        <Route path="/" element={<AllMeetUpsPage />} />
        <Route path="/f" element={<FaivriotsPage />} />
        <Route path="/n" element={<NewMeetUpsPage />} />
      </Routes>
    </Layout>
    
  );
}

export default App;
