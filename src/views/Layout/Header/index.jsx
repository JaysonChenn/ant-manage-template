import React from 'react';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { connect } from 'react-redux'

const { Header } = Layout;

class HeaderMenu extends React.Component {
  render() {
    return (
      <Header className='site-layout-background' style={{ padding: 0 }}>
        {React.createElement(
          this.props.isCollaspsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: 'trigger',
            onClick: () => this.props.dispatch({type: 'collasped'}),
          }
        )}
      </Header>
    );
  }
}

export default connect(state => ({
  isCollaspsed: state.collaspsedReducer
}))(HeaderMenu);
