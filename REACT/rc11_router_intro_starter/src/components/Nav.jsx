import {Link,NavLink} from "react-router-dom"

const Nav = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <NavLink NavLink to="/instructors">Instructors</NavLink>
      </li>
      <li>
        <NavLink NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
  );
};

export default Nav;
