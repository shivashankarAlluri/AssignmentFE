import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeUser } from '../utils/userSlice'; 
import axios from 'axios';

const sidebarLinks = [
  { id: 1, title: 'Home', path: '/home', icon: 'fa fa-house' },
  { id: 2, title: 'Jobs', path: '/jobs', icon: 'fa fa-briefcase' },
  { id: 3, title: 'Employees', path: '/employees', icon: 'fa fa-users' },
  { id: 4, title: 'Interviews', path: '/interviews', icon: 'fa fa-comments' },
  {
    id: 5,
    title: 'Reports',
    path: '/reports',
    icon: 'fa fa-chart-bar',
    children: [
      { id: 51, title: 'Monthly Report', path: '/reports/monthly', icon: 'fa fa-calendar-alt' },
      { id: 52, title: 'Annual Report', path: '/reports/annual', icon: 'fa fa-calendar' },
    ],
  },
  { id: 6, title: 'Settings', path: '/settings', icon: 'fa fa-cog' },
  { id: 7, title: 'Job Posting', path: '/jobposting', icon: 'fa fa-file-alt' },
];

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:3000/logout',{}, { withCredentials: true }); 
      dispatch(removeUser()); 
      navigate('/login');
    } catch (err) {
      console.error('Logout error:', err);
    }
  };

  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-4 flex flex-col justify-between">
      <ul className="space-y-2">
        {sidebarLinks.map((link) => (
          <li key={link.id}>
            <Link to={link.path} className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
              <i className={link.icon}></i>
              <span>{link.title}</span>
            </Link>
            {link.children && (
              <ul className="ml-6 border-l border-gray-600 pl-2">
                {link.children.map((child) => (
                  <li key={child.id}>
                    <Link to={child.path} className="flex items-center space-x-2 hover:bg-gray-700 p-1 rounded">
                      <i className={child.icon}></i>
                      <span>{child.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
      >
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
