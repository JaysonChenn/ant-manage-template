import React from 'react';

import { connect } from 'react-redux';
import { Layout } from 'antd';

import SiderMenu from './Sider';
import HeaderMenu from './Header';

import './index.css';

const { Content } = Layout;

/**
 * @desctiption react hooks
 */
const LayoutComponent = ({ isCollaspsed, children }) => {
  return (
    <Layout id='layout'>
      <SiderMenu value={isCollaspsed} />
      <Layout className='site-layout'>
        <HeaderMenu />
        <Content
          className='site-layout-background'
          style={{
            margin: '6px',
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

/**
 * @desctiption mapStateToProps
 */
const mapStateToProps = (state) => ({
  isCollaspsed: state.collaspsedReducer,
});

export default connect(mapStateToProps)(LayoutComponent);
