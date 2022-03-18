import * as React from 'react';
import { PopupObj } from '../../types/common';
//
import Popup from '../popup/Popup';

//
type PopupMultiObj = {
    id?: number;
} & Omit<PopupObj, 'id'>;

//
export interface PopupMultiProps {
    popup_arr: PopupMultiObj[];
    removePopup: (ix?: number) => void;
}

//
function PopupMulti({ popup_arr, removePopup }: PopupMultiProps) {
    //
    return (
        <div>
            {popup_arr.map((item) => (
                <div key={item.id} style={{ paddingBottom: '8px' }}>
                    <Popup
                        is_show={item.is_show}
                        duration={item.duration}
                        keyframes={item.keyframes}
                        handleAfterEndTimeExist={() => removePopup(item.id)}
                    >
                        {item.children}
                    </Popup>
                </div>
            ))}
        </div>
    );
}

export default PopupMulti;
