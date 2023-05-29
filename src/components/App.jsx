import { Perfil } from '../components/Perfil/Perfil';
import { Statistics } from '../components/Statistics/Statistics';
import { FriendsList } from '../components/FriendList/FriendsList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
const styleTest = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 40,
  color: '#010101'
}

export const App = () => {
  return (
    <>
      <div style={styleTest}>
        <Perfil user />
      </div>
      <div>
        <Statistics user />
      </div>
      <div>
        <FriendsList user />
      </div>
      <div>
        <TransactionHistory user />
      </div>
    </>
  );
};
