import React from 'react';
import { connect } from 'react-redux';
import zoo from './zoo';

export default (mapState, mapDispatch = {}, effectsArr = []) => {
  return (Component) => {
    // 修改组件中的dispatch先触发effects中对应的方法，不存在时，作为正常的action dispatch
    const myDispatch = ({ type, payload }) => {
      const [typeId, typeName] = type.split('/');
      const { effects, store } = zoo;
      const { dispatch } = store;
      if (effects[typeId] && effects[typeId][typeName]) {
        return effects[typeId][typeName](payload);
      }

      dispatch({ type, payload });
    };

    const NewComponent = (props) => {
      const { effects, state } = zoo;
      const effectsProps = {};
      // 组建中扩展加入 effects对象，更方便调用effects中的方法
      effectsArr.forEach((item) => {
        if (effects[item]) {
          effectsProps[`${item}Effects`] = effects[item];
          myDispatch[`${item}Effects`] = effects[item];
        }
      });

      return (
        <Component
          {...props}
          {...state}
          dispatch={myDispatch}
          {...effectsProps}
        ></Component>
      );
    };
    return connect(mapState, mapDispatch)(NewComponent);
  };
};
