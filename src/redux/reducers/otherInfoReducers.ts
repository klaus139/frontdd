import {IUser} from '../../utils/Type'
import {GET_OTHER_INFO, IGetOtherInfoType} from '../types/profileTypes'

const otherInfoReducer = (
    state: IUser[] = [],
    action: IGetOtherInfoType
): IUser[] => {
    switch(action.type){
        case GET_OTHER_INFO:
            return [...state, action.payload]
        default:
            return state
    }

}

export default otherInfoReducer;