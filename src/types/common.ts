//
export type Keyframes = Keyframe[] | PropertyIndexedKeyframes;

//
export type PopupObj = {
    id?: number,
    is_show: boolean;
    children: React.ReactElement;

    keyframes?: Keyframes;
    duration?: number;
    time_exist?: number;
};
