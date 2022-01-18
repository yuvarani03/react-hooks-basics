import React, { useState, useEffect } from 'react';
//useEffect
function Cnt() {
  const [cnt, setCnt] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${cnt} times`;
  });

  return (
    <div>
      <h1>You clicked {cnt} times</h1>
      <button onClick={() => setCnt(cnt + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Cnt