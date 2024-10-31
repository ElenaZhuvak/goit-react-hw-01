import "modern-normalize";
import Profile from "./Profile/Profile";
import userData from './../assets/userData.json';
import FriendListItem from './FriendListItem/FriendListItem';
import friends from './../assets/friends.json';
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from './../assets/transactions.json';

const App = () => {
  return (
    <div>
      <Profile userData={userData} />
       <FriendListItem friends={friends}/>
       <TransactionHistory items={transactions}/>
    </div>
  )
}

export default App;