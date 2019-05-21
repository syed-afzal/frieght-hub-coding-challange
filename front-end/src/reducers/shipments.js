import {
    GET_SHIPMENTS_REQUEST,
    GET_SHIPMENTS_SUCCESS,
    GET_SHIPMENTS_FAILED,
    UPDATE_SHIPMENTS_PAGE
} from '../constants/actionTypes';

const initialState = {
    data: [],
    skip: 0,
    limit: 20,
    isLoading: false
};

const shipment_reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SHIPMENTS_REQUEST:
            return Object.assign(
                {},
                state,
                {
                    isLoading: true
                }
            );
        case GET_SHIPMENTS_SUCCESS:
            return Object.assign(
                {},
                state,
                {
                    isLoading: false,
                    data: [...action.data]
                }
            );
        case GET_SHIPMENTS_FAILED:
            return Object.assign(
                {},
                state,
                {
                    isLoading: false,
                    data: [],
                }
            );
        case UPDATE_SHIPMENTS_PAGE:
            return Object.assign(
                {},
                state,
                {
                    skip: action.data
                }
            );
        default:
            return state;
    }
};

export default shipment_reducer;