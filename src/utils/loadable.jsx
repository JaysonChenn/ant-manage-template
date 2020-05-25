import React from 'react';
import Loadable from 'react-loadable';
import { Spin } from 'antd';

/**
 * @description 通用的过场组件
 */
const loadingComponent = (props) => {
  let styleObj = {
    warpper: {
      wdith: '100%',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  };
  if (props.error) {
    return null;
  } else if (props.pastDelay) {
    return (
      <div style={styleObj.warpper}>
        <Spin tip='Loading...' />
      </div>
    );
  } else {
    return null;
  }
};

export default (loader, loading = loadingComponent) => {
  return Loadable({
    loader,
    loading,
  });
};
