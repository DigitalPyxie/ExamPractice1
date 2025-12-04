import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { createTrailbaseProvider } from "ra-trailbase.js";

//Imports
import { ListPayments } from './finances/payments/ListPayments';


const Trailbase_URL = "https://stunning-fiesta-7xvg6gw6xq93p6x7-4000.app.github.dev/";
const {dataProvider, authProvider} = await createTrailbaseProvider(Trailbase_URL);


const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="payments" list={ListPayments} />
    <Resource name="comments" list={ListGuesser} />
  </Admin>
);

export default App;