import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { createTrailbaseProvider } from './ra-trailbase.js';


//Import each page
import { ListPayments } from './financial/resources/payments/ListPayments.jsx';

const Trailbase_URL = "https://animated-couscous-x45j7jx7x6w3grv-4000.app.github.dev/";
const {dataProvider, authProvider} = await createTrailbaseProvider(Trailbase_URL);


//Resources
export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
   <Resource name="ListPayments" list={ListPayments} show={ShowPayments}/>
   <Resource name="users" list={ListGuesser} />
  </Admin>
); 