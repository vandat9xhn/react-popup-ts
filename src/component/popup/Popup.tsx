import * as React from 'react';
//
import { PopupObj } from '../../types/common';
//
import { usePopup, usePopupProps } from '../../hooks/usePopup';
//
import PopupStyles from './Popup.scss';

//
export interface PopupProps extends PopupObj {
    handleAfterEndTimeExist?: usePopupProps['handleAfterEndTimeExist'];
}

//
function Popup({
    is_show,
    duration,
    keyframes,
    time_exist,
    children,

    handleAfterEndTimeExist
}: PopupProps) {
    //
    const ref_popup_elm = React.useRef(null);

    //
    const { ref_display_popup, ref_show_popup } = usePopup({
        ref_popup_elm: ref_popup_elm,
        is_show: is_show,
        keyframes: keyframes,
        duration: duration,
        time_exist: time_exist,

        handleAfterEndTimeExist: handleAfterEndTimeExist
    });

    // -----

    //
    if (!ref_display_popup.current) {
        return null;
    }

    //
    return (
        <div
            ref={ref_popup_elm}
            className={`Popup ${PopupStyles['Popup']} ${
                PopupStyles[ref_show_popup.current ? '' : 'Popup-hidden']
            }`}
        >
            {children}
        </div>
    );
}

export default Popup;
