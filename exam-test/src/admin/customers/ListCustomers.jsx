import { List, Datagrid, TextField, NumberField} from 'react-admin';

export const ListCustomers = () => (
  <List>
    <Datagrid>
      <NumberField source="id" />
      <TextField source="customer_number"/>
      <TextField source="name"/>
      <TextField source="email"/>
      <TextField source="phone"/>
      <TextField source="address"/>
      <TextField source="divers_license"/>
      <TextField source="license_expiry"/>
      <TextField source="date_of_birth"/>
      <TextField source="registration_date"/>
      <NumberField source="is_blacklisted"/>
      <TextField source="notes"/>
      <TextField source="created_at"/>
    </Datagrid>
  </List>
);

