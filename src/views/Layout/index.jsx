import React from 'react';
import './index.css';
import { Layout } from 'antd';
import SiderMenu from './Sider';
import HeaderMenu from './Header';

const { Content } = Layout;

class LayoutComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollaspsed: false,
    };
  }
  toggleCollaped() {
    this.setState({
      isCollaspsed: !this.state.isCollaspsed,
    });
  }
  render() {
    return (
      <Layout id='layout'>
        <SiderMenu value={this.state.isCollaspsed}></SiderMenu>
        <Layout className='site-layout'>
          <HeaderMenu
            value={this.state.isCollaspsed}
            onClick={() => this.toggleCollaped()}
          ></HeaderMenu>
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

export default LayoutComponent;
