
import { FaTasks } from "react-icons/fa";
import { VscTasklist } from "react-icons/vsc";
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
                icon={VscTasklist}
                label='All Task'
                address='/dashboard/allTask'
              />
              
        </>
    );
};

export default Menu;