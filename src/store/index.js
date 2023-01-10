import { legacy_createStore } from 'redux';
import reducer from './reducer.js';

// 创建仓库
export default legacy_createStore(reducer);
