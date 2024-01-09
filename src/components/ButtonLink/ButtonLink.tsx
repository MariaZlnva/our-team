import { IBtnLink } from '../../redux/types';
import './ButtonLink.scss'
import { Link } from 'react-router-dom'

const ButtonLink: React.FC<IBtnLink> = ({text, textLink, path}) => {
  return (
    <div className='btn-link__wrap'>
        <p className='btn-link__text'>{text}</p>
        <Link to={path} className='btn-link__link'>{textLink}</Link>
      </div>
  )
}

export default ButtonLink;
