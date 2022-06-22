import { HiOutlineMenu } from 'react-icons/hi';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <div className="app-sidebar">
      <span className="ham-navigation">
        <HiOutlineMenu />
      </span>
      <ul>
        <li>
          <Link to="/">
            <HiOutlineMenu />
          </Link>
        </li>
      </ul>
    </div>
  );
};
