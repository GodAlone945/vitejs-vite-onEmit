import { connect } from '../../utils/zoo';

const Test = (props) => {
  const { dispatch, testData } = props;

  const updateState = (field, value) => {
    dispatch({
      type: 'zoo/updateState',
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

export default connect(({ zoo }) => ({ ...zoo }))(Test);
