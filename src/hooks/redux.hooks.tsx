import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatchType, RootState} from "../redux/store";


const useAppSelector :TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatch = ()=> useDispatch<AppDispatchType>();

export{
    useAppSelector,
    useAppDispatch
}

