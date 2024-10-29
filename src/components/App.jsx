import Profile from "./Profile/Profile";
import profileData from './../assets/userData.json';
import "modern-normalize";

const App = () => {
  return (
    <div>
      <Profile userData={profileData} />
    </div>
  )
}

export default App;