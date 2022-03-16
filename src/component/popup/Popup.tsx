import * as React from 'react';
//
import { usePopup, usePopupProps } from '../../hooks/usePopup';
//
import PopupStyles from './Popup.scss';

//
export interface PopupProps {
    is_show: boolean;
    children: React.ReactElement;

    duration?: number;
    keyframes?: usePopupProps['keyframes'];
    top: number | string;
}

//
function Popup({
    top,
    children,

    is_show,
    duration,
    keyframes
}: PopupProps) {
    //
    const ref_popup_elm = React.useRef(null);

    //
    const { ref_display_popup, ref_show_popup } = usePopup({
        ref_popup_elm: ref_popup_elm,
        is_show: is_show,
        keyframes: keyframes,
        duration: duration
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
            style={{ top: top }}
        >
            {children}
        </div>
    );
}

export default Popup;
