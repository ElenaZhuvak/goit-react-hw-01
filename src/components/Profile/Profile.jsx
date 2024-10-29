import s from "./Profile.module.css"

const Profile = ({userData}) => {
  return (
    <div className={s.container}>
        <div className={s.card}>
            <img className={s.image}
            src={userData.avatar}
            alt="User avatar"/>
            <p className={s.name}>{userData.username}</p>
            <p className={s.tag}>@{userData.tag}</p>
            <p className={s.location}>{userData.location}</p>
        </div>

        <ul className={s.stats}>
            <li className={s.statsItem}>
            <span className={s.label}>Followers</span>
            <span className={s.quantity}>{userData.stats.followers}</span>
            </li>
            <li className={s.statsItem}>
            <span className={s.label}>Views</span>
            <span className={s.quantity}>{userData.stats.views}</span>
            </li>
            <li className={s.statsItem}>
            <span className={s.label}>Likes</span>
            <span className={s.quantity}>{userData.stats.likes}</span>
            </li>
        </ul>
    </div>
  )
}

export default Profile;