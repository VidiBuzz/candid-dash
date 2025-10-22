import { Admin, Resource, ListGuesser, EditGuesser, ShowGuesser } from 'react-admin';
import postgrestRestProvider from 'ra-data-postgrest';

// PostgREST API endpoint - Railway PostgreSQL
const dataProvider = postgrestRestProvider(
  import.meta.env.VITE_API_URL || 'http://localhost:3000'
);

function App() {
  return (
    <Admin
      dataProvider={dataProvider}
      title="Candid Studios Dashboard"
    >
      {/* Add resources here as you create them */}
      {/* Example: <Resource name="users" list={ListGuesser} edit={EditGuesser} show={ShowGuesser} /> */}
    </Admin>
  );
}

export default App;
