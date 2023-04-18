import React, { useState } from 'react';

const Tres = (props) => {
   const [text, setText] = useState('');

    return (
        <div>
            <h1>Tres</h1>
          {  <input type="text" value={text} onChange={(e) => setText(e.target.value)} /> }
        </div>
    );
}

export default Tres;
