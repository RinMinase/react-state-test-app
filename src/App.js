import { useState, useEffect } from 'react';

function Perf() {
  const [something, setSomething] = useState({});

  useEffect(() => {
    // setSomething({ ...something, c: 5 });
    // setSomething({ ...something, b: 4 });
    // setSomething({ ...something, a: 3 });

    setSomething((state) => ({ ...state, c: 5 }));
    setSomething((state) => ({ ...state, b: 4 }));
    setSomething((state) => ({ ...state, a: 3 }));
  }, []);

  useEffect(() => {
    console.log('object changed value', something);
  }, [something]);

  return (
    <div>
      <h1>table1 {something.a}</h1>
      <h1>table2 {something.b}</h1>
      <h1>table3 {something.c}</h1>
    </div>
  );
}

export default Perf;
