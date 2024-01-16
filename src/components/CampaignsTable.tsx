import { ICampaign } from '../types/placeholder-data'
import { useParams } from 'react-router-dom';
import BootstrapTable from 'react-bootstrap/Table';


interface ICampaignsTable {
    data: ICampaign[];
}
const CampaignsTable = ({ data }: ICampaignsTable) => {
    const { profileId } = useParams();
    const campaign = data.find((campaign) => campaign.campaignId === Number(profileId))
    const { campaignId, clicks, cost, date } = (campaign ?? {}) as ICampaign    

  return (
      <BootstrapTable striped bordered hover>
          <thead>
              <tr>
                  <th>Campaign ID</th>
                  <th>Clicks</th>
                  <th>Cost</th>
                  <th>Date</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>{campaignId}</td>
                  <td>{clicks}</td>
                  <td>{cost}</td>
                  <td>{date}</td>
              </tr>
          </tbody>
    </BootstrapTable>
  )
}

export default CampaignsTable
