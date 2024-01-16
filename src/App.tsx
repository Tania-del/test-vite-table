
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import './App.css'
import AccountsTable from './components/AccountsTable'
import CampaignsTable from './components/CampaignsTable'
import ProfilesTable from './components/ProfilesTable'
import { data } from './placeholder-data'
import { IData } from './types/placeholder-data'

function App() {
  const { accounts, profiles, campaigns }: IData = data;  

  return (
      <Router basename='/test-vite-table'>
        <Routes>
        <Route path='/' element={<AccountsTable data={accounts} />} />
        <Route path='/profiles/:accountId' element={<ProfilesTable data={profiles} />} />
          <Route path='/campaigns/:profileId' element={<CampaignsTable data={campaigns} />} />
      </Routes>
      </Router>
  )
}

export default App;
