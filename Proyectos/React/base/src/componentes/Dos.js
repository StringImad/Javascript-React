import React, { useState } from 'react';

const Dos = (props) => {
   const [text, setText] = useState('');

    return (
        <div>
            <h1>Dos</h1>
            {
                
            }
          {  <input type="text" value={text} onChange={(e) => setText(e.target.value)} /> }
        </div>
    );
}

export default Dos;
