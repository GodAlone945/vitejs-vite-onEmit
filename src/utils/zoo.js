import { legacy_createStore } from 'redux';
import { Provider } from 'react-redux';

// 为effects或reducer添加namespace
const addNamespace = (obj, name) => {
  const newObj = {};
  Object.keys(obj).forEach((item) => {
    newObj[`${name}/${item}`] = obj[item];
  });
  return newObj;
};

class Zoo {
  constructor() {
    this.state = {};
    this.models = {};
    this.reducers = {};
    this.effects = {};
    this.store = {};
  }

  init(modals) {
    Object.values(models).forEach((item) => {
      this.model(item);
    });
    return this.createStore();
  }

  model(modelObj) {
    const { state, reducer, effects, namespace } = modelObj;
    this.state[namespace] = state;
    this.models[namespace] = modelObj;

    const newReducer = addNamespace(reducer, namespace);
    this.reducers[namespace] = reducer;

    this.effects[namespace] = effects;
  }

  createStore() {
    const reducer = (state = this.state, action) => {
      let newState = state;
      const { type, payload } = action;
      const [namespace, typeName] = type.split('/');

      // 根据namespace获取对应的state和reducer
      const currentState = newState[namespace];
      const currentReducer = this.reducers[namespace];

      if (currentReducer && currentReducer[type] && currentState) {
        newState[namespace] = currentReducer[type](currentState, payload);
        newState = { ...newState };
      }
      return newState;
    };

    // 创建store
    this.store = createStore(reducer);

    const { dispatch, getState } = this.store;

    Object.keys(this.effects).forEach((namespace) => {
      this.effects[namespace].dispatch = ({ type, payload }) => {
        dispatch({ type: `${namespace}/${type}`, payload });
      };
      this.effects[namespace].getState = getState;
    });

    return this.store;
  }
}

export default new Zoo();
