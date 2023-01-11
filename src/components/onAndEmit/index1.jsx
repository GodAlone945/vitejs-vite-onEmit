import { useEffect, useState } from 'react';
import Test2 from './index2.jsx';

function Test1(props) {
  console.log(props);
  const [num, setNum] = useState('XXXX-X-X');
  useEffect(() => {
    Event.listen('test1', (date) => {
      setNum(date);
    });
  }, []);

  return (
    <div>
      <h2>{num}</h2>
      <Test2 />
    </div>
  );
}

export default Test1;
