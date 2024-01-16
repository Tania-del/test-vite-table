
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import AccountsTable from './components/AccountsTable'
import CampaignsTable from './components/CampaignsTable'
import ProfilesTable from './components/ProfilesTable'

function App() {
  return (
     <BrowserRouter>
        <Routes>
        <Route path='/' element={<AccountsTable />} />
          <Route path='/campaigns/:profileId' element={<CampaignsTable />} />
        <Route path='/profiles/:accountId' element={<ProfilesTable />} />
      </Routes>
      </BrowserRouter>
  )
}

export default App;
