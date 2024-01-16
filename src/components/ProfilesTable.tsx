import { Link, useParams } from 'react-router-dom';
import { IProfile } from '../types/placeholder-data'
import BootstrapTable from 'react-bootstrap/Table';

interface IProfilesTable {
    data: IProfile[];
}

const ProfilesTable = ({ data }: IProfilesTable) => {
    const { accountId } = useParams();
    const profile = data.find((profile) => profile.profileId === Number(accountId))
    const { profileId, country, marketplace } = (profile ?? {}) as IProfile;

  return (
      <BootstrapTable striped bordered hover>
          <thead>
              <tr>
                  <th>Profile ID</th>
                  <th>Country</th>
                  <th>Marketplace</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>
                      <Link to={`/campaigns/${profileId}`} >{profileId}</Link>
                  </td>
                  <td>{country}</td>
                  <td>{marketplace}</td>
              </tr>
          </tbody>
  </BootstrapTable>
  )
}

export default ProfilesTable
