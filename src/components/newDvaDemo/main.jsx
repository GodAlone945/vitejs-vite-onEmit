import connect from '../../utils/connect.js';

console.log(connect);

const Test = (props) => {
  const { dispatch, testData } = props;

  const updateState = (field, value) => {
    dispatch({
      type: 'testDemo/updateState',
      payload: {
        [field]: value,
      },
    });
  };

  return (
    <>
      <div>{testData}</div>
    </>
  );
};

export default connect(({ testDemo }) => ({ ...testDemo }))(Test);
