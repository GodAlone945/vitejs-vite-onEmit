import { Provider } from 'react-redux';

import zoo from '../../utils/zoo';
import modal from './model';
import Main from './main';

const zooStore = zoo.init({ modal });

export default function main() {
  return (
    <Provider store={zooStore}>
      <Main />
    </Provider>
  );
}
