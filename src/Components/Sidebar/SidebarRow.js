import React from 'react';
import './SidebarRow.scss';
import { Avatar } from '@material-ui/core';

const SidebarRow = ({src, Icon, title}) => {
  return (
    <div className="sidebarrow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <p>{title}</p>
    </div>
  )
}

export default SidebarRow
