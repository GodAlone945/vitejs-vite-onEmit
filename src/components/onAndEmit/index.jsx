import Event from '../../utils/event';
import Test1 from './index1.jsx';
import { useEffect, useState } from 'react';

window.Event = Event;
function onAndEmit() {
  const handleClick = () => {
    Event.trigger('test1', '19980405');
  };

  const handleClick1 = () => {
    Event.trigger('test2', 'Hello React！');
  };

  return (
    <div>
      <h1>GodAlone</h1>
      <button onClick={handleClick}>给子组件传递值</button>
      <br />
      <button onClick={handleClick1}>给子组件传递值-1</button>
      {/* <Test1 /> */}
    </div>
  );
}

export default onAndEmit;
