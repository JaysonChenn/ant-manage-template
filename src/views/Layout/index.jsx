import React from 'react';
import './index.css';
import { Layout } from 'antd';
import SiderMenu from './Sider';
import HeaderMenu from './Header';
import { connect } from 'react-redux';

const { Content } = Layout;

class LayoutComponent extends React.Component {
  render() {
    return (
      <Layout id='layout'>
        <SiderMenu value={this.props.isCollaspsed}></SiderMenu>
        <Layout className='site-layout'>
          <HeaderMenu />
          <Content
            className='site-layout-background'
            style={{
              margin: '6px',
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default connect(state => ({
  isCollaspsed: state.collaspsedReducer
}))(LayoutComponent);
