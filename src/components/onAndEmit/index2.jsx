import { useEffect, useState } from 'react';
function Test2() {
  const [num, setNum] = useState('Hello World！');
  useEffect(() => {
    Event.listen('test2', (text) => {
      setNum(text);
    });
  }, []);
  return (
    <div>
      <h1>{num}</h1>
    </div>
  );
}

export default Test2;
