import { List, Datagrid, TextField, NumberField} from 'react-admin';

export const ListPayments = () => (
  <List>
    <Datagrid>
      <NumberField source="id" />
      <NumberField source="rental_id"/>
      <TextField source="payment_date"/>
      <TextField source="payment_method"/>
      <TextField source="transaction_ref"/>
      <TextField source="payment_type"/>
      <TextField source="notes"/>
      <TextField source="created_at"/>
    </Datagrid>
  </List>
);