import { IChildren } from '../../redux/types';
import './Main.scss';
const Main: React.FC<IChildren> = function ({ children }) {
  return <main className='main'>{children}</main>;
};
export default Main;
