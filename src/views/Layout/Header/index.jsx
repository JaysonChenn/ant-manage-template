import React from 'react';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';

const { Header } = Layout;

/**
 * @desctiption react hooks
 */
const HeaderMenu = ({isCollaspsed, handleCollasped}) => {
  return (
    <Header className='site-layout-background' style={{ padding: 0 }}>
      {React.createElement(
        isCollaspsed ? MenuUnfoldOutlined : MenuFoldOutlined,
        {
          className: 'trigger',
          onClick: () => handleCollasped(),
        }
      )}
    </Header>
  );
};

/**
 * @desctiption mapStateToProps
 */
const mapStateToProps = (state) => ({
  isCollaspsed: state.collaspsedReducer,
});

/**
 * @desctiption mapDispatchToProps
 */
const mapDispatchToProps = (dispatch) => ({
  handleCollasped: () => {
    dispatch({ type: 'collasped' });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMenu);
