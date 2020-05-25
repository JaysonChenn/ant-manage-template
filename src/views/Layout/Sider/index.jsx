import React from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;
const siderbarMenu = [
  {
    key: '1',
    name: 'nav 1',
    icon: <UserOutlined />,
  },
  {
    key: '2',
    name: 'nav 2',
    icon: <VideoCameraOutlined />,
  },
  {
    key: '3',
    name: 'nav 3',
    icon: <UploadOutlined />,
  },
];

/**
 * @desctiption react hooks
 */
const SiderMenu = ({value}) => {
  return (
    <Sider trigger={null} collapsible collapsed={value}>
      <div className='logo' />
      <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
        {siderbarMenu.map((item) => {
          return (
            <Menu.Item key={item.key} icon={item.icon}>
              {item.name}
            </Menu.Item>
          );
        })}
      </Menu>
    </Sider>
  );
};

export default SiderMenu;
