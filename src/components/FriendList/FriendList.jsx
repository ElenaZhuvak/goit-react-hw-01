import s from './FriendList.module.css';
import clsx from 'clsx';

const FriendList = ({friends}) => {
  return (
   <div className={s.usersBox}>
    <ul className={s.userList}>
        {friends.map(user => (<li className={s.userItem} key={user.id}>
            <img className={s.userAvatar} src={user.avatar} alt="Avatar" width="48" />
            <p className={s.userName}>{user.name}</p>
            <p className={clsx(s.status, {
                [s.online]: user.isOnline,
                [s.offline]: !user.isOnline,
            })}>{user.isOnline ? "Online" : "Offline"}</p>
        </li>))}
    </ul>
   </div>

  )
}

export default FriendList