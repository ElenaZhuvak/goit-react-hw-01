import s from './FriendListItem.module.css';
import clsx from 'clsx'

const FriendListItem = ({avatar, name, isOnline}) => {
  return (
    <div>
        <img className={s.userAvatar} src={avatar} alt="Avatar" width="48" />
        <p className={s.userName}>{name}</p>
        <p className={clsx(s.status, {
            [s.online]: isOnline,
            [s.offline]: !isOnline,
        })}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  )
}

export default FriendListItem