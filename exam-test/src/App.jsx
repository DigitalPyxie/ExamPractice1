import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { createTrailbaseProvider } from "./ra-trailbase";

//Imports
import { ListPayments } from './finances/payments/ListPayments';
import { ListCustomers } from './admin/customers/ListCustomers';


const Trailbase_URL = "https://stunning-fiesta-7xvg6gw6xq93p6x7-4000.app.github.dev";
const {dataProvider, authProvider} = createTrailbaseProvider(Trailbase_URL);

function App () {
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource name="payments" list={ListPayments} />
      <Resource name="customers" list={ListCustomers} />
    </Admin>
  );
}

export default App;