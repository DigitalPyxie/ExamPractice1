import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import { createTrailbaseProvider } from './ra-trailbase.js';


const Trailbase_URL = "https://animated-couscous-x45j7jx7x6w3grv-4000.app.github.dev";
const {dataProvider, authProvider} = createTrailbaseProvider(Trailbase_URL);

//Import each page


//Resources
export const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
   <Resource name="users" list={ListGuesser} show={ShowGuesser}/>
   <Resource name="users" list={ListGuesser} />
  </Admin>
);