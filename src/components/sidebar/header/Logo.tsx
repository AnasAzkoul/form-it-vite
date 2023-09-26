import { NavLink } from 'react-router-dom';

const Logo = () => {
  return (
    <div>
      <NavLink
        to='/'
        className='text-primary text-3xl'
      >
        <p>Form IT</p>
      </NavLink>
    </div>
  );
};

export default Logo;
