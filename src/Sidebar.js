import React from 'react';
import SidebarRow from './SidebarRow';
import './Sidebar.css';
import './Header.css';
import { ExpandMoreOutlined } from '@material-ui/icons';
import { useStateValue } from './StateProvider';

function Sidebar() {

    const[{user}, dispatch] = useStateValue();
  
  return (
    <div className="sidebar">
      <SidebarRow src={user.photoURL} title={'Raise Your Voice'}/>
      <SidebarRow Icon={ExpandMoreOutlined} title="Racism is prohibited" />
      <SidebarRow Icon={ExpandMoreOutlined} title="Scamming is prohibited" />
      <SidebarRow Icon={ExpandMoreOutlined} title="Use appropriate language" />
      <SidebarRow Icon={ExpandMoreOutlined} title="Do not spam anything" />
      <SidebarRow Icon={ExpandMoreOutlined} title="Do not impersonate" />
      <SidebarRow Icon={ExpandMoreOutlined} title="No NSFW allowed" />
      <SidebarRow Icon={ExpandMoreOutlined} title="Keep personal information to yourself" />
      <SidebarRow Icon={ExpandMoreOutlined} title="Use appropriate conversation in appropriate channel" />
    </div>
  );
}

export default Sidebar;