# react-popup-ts

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/react-popup-ts.svg)](https://www.npmjs.com/package/react-popup-ts) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-popup-ts
```

## Usage

```tsx
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

```

## License

MIT © [vandat9xhn](https://github.com/vandat9xhn)
