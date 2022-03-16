import { useEffect, useRef } from 'react';
import { common_types, useForceUpdate } from 'react-commons-ts';

//
export interface usePopupProps {
    ref_popup_elm: common_types.RefElmType<HTMLElement>;
    is_show: boolean;
    keyframes?: Keyframe[] | PropertyIndexedKeyframes;
    duration?: number;
}

//
const default_keyframes: usePopupProps['keyframes'] = [
    {
        left: 0,
        transform: 'translateX(-100%)'
    },
    {
        left: '10px',
        transform: 'translateX(0%)',
        offset: 0.8
    },
    {
        left: '0px',
        transform: 'translateX(0%)'
    }
];

//
export function usePopup({
    ref_popup_elm,
    is_show,
    keyframes = default_keyframes,
    duration = 750
}: usePopupProps) {
    // -----
    const ref_animation = useRef<null | Animation>(null);
    const ref_show_popup = useRef(false);
    const ref_display_popup = useRef(false);
    const ref_interval_end = useRef<null | NodeJS.Timeout>(null);

    //
    const forceUpdate = useForceUpdate();

    //
    useEffect(() => {
        if (is_show) {
            handleStartShow();
        } else {
            handleHide();
        }
    }, [is_show]);

    // -----

    //
    function handleStartShow() {
        ref_display_popup.current = true;
        if (ref_interval_end.current) {
            clearTimeout(ref_interval_end.current);
            ref_interval_end.current = null;
        }
        forceUpdate();

        setTimeout(() => {
            handleShow();
        }, 10);
    }

    //
    function handleShow() {
        if (!ref_popup_elm.current || !keyframes) {
            return;
        }

        if (ref_animation.current) {
            ref_animation.current.playbackRate = 1;

            return;
        }

        ref_animation.current = ref_popup_elm.current.animate(keyframes, {
            duration: duration,
            easing: 'ease-in-out',
            fill: 'forwards'
        });

        ref_show_popup.current = true;
        forceUpdate();
    }

    //
    function handleHide() {
        if (!ref_popup_elm.current || !ref_animation.current) {
            return;
        }

        ref_animation.current.playbackRate = -1;
        if (ref_animation.current.effect) {
            const timing = ref_animation.current.effect.getComputedTiming();
            timing.fill = 'backwards';
            ref_animation.current.effect.updateTiming(timing);
        }
        ref_animation.current.onfinish = handleEnd;
    }

    //
    function handleEnd() {
        ref_animation.current = null;
        ref_show_popup.current = false;
        ref_display_popup.current = false;
        forceUpdate();
    }

    // ----

    return {
        ref_show_popup,
        ref_display_popup
    };
}
