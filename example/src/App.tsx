import React, { useState } from 'react';

import { Popup } from 'react-popup-ts';
import 'react-popup-ts/dist/index.css';

//
const App = () => {
    //
    const [is_show, setIsShow] = useState(false);

    //
    function toggleShow() {
        setIsShow((is_show) => !is_show);
    }

    //
    return (
        <div>
            <div onClick={toggleShow}>Toggle</div>

            <div>
                <Popup is_show={is_show} top={200}>
                    <div
                        style={{
                            width: 'fit-content',
                            padding: '6px 12px',
                            borderRadius: '10px',
                            backgroundColor: 'rgba(0,0,0,0.8)',
                            color: 'white'
                        }}
                    >
                        This is Popup
                    </div>
                </Popup>
            </div>
        </div>
    );
};

export default App;
