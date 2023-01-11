export default {
  namespace: 'testDemo',
  state: {
    testData: 'Godalone945',
  },
  effects: {},
  reducers: {
    updateState(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
