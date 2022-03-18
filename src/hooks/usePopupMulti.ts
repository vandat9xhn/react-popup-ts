import { useRef, useState } from 'react';
import { useForceUpdate } from 'react-commons-ts';
//
import { PopupObj } from '../types/common';

//
export function usePopupMulti({}) {
    //
    const popup_arr = useRef<PopupObj[]>([]);
    const ref_c_popup_id = useRef(0);

    //
    const forceUpdate = useForceUpdate();

    // ----

    //
    function addPopup(popup_obj: Omit<PopupObj, 'id'>) {
        ref_c_popup_id.current += 1;
        popup_arr.current.push({ ...popup_obj, id: ref_c_popup_id.current });
        forceUpdate();
    }

    //
    function removePopup(popup_id = 0) {
        popup_arr.current = popup_arr.current.filter(
            (item) => item.id !== popup_id
        );

        if (popup_arr.current.length == 0) {
            ref_c_popup_id.current = 0;
        }

        forceUpdate();
    }

    //
    return {
        popup_arr,

        addPopup,
        removePopup
    };
}
