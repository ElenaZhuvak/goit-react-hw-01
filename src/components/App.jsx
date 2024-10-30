import Profile from "./Profile/Profile";
import userData from './../assets/userData.json';
import FriendList from './FriendList/FriendList';
import friends from './../assets/friends.json';
import "modern-normalize";

const App = () => {
  return (
    <div>
      <Profile userData={userData} />
       <FriendList friends={friends}/>
    </div>
  )
}

export default App;