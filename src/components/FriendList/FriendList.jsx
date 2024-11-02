import s from './FriendList.module.css';
import FriendListItem from './FriendListItem'

const FriendList = ({friends}) => {
    console.log(friends);
  return (
   <div className={s.usersBox}>
    <ul className={s.userList}>
        {friends.map(friend => 
            (<li className={s.userItem} key={friend.id}>
                <FriendListItem 
                avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
                />
            </li>))}
    </ul>
   </div>
  )}

export default FriendList