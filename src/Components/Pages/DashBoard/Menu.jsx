
import { FaTasks } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
// Components
import MenuItem from './MenuItem'

const Menu = () => {
    return (
        <>
          <MenuItem
                icon={FaTasks}
                label='Create Task'
                address='/dashboard'
              />
              <MenuItem
                icon={FaUsers}
                label='Manage Members'
                address='/dashboard/manageMember'
              />
              
        </>
    );
};

export default Menu;