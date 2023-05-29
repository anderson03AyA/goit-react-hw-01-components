import PropTypes from 'prop-types';
import style from './Perfil.module.css'
import data from  '../../data/user.json'

export const Perfil = () =>{
  return(
  <div className={style.profile}>
  <div className={style.description}>
    <img
      src={data.avatar}
      alt={data.tag}
      className={style.avatar}
    />
    <p className={style.name}>{data.dataname}</p>
    <p className={style.tag}>@{data.tag}</p>
    <p className={style.location}>{data.location}</p>
  </div>

  <ul className={style.stats}>
    <li className={style.stats_item}>
      <span className={style.label}>Followers</span>
      <span className={style.quantity}>{data.stats.followers}</span>
    </li>
    <li className={style.stats_item}>
      <span className={style.label}>Views</span>
      <span className={style.quantity}>{data.stats.views}</span>
    </li>
    <li className={style.stats_item}>
      <span className={style.label}>Likes</span>
      <span className={style.quantity}>{data.stats.likes}</span>
    </li>
  </ul>
</div>
)

}


Perfil.propTypes = {
  username: PropTypes.string.isRequired,
  tag:PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};



