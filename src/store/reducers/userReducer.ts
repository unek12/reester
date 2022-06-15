const FETCH_USERS = "FETCH_USERS"
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
const FETCH_USERS_ERROR = "FETCH_USERS_ERROR"

interface User {
    name: string
}
interface UserState {
    users: User,
    loading: boolean,
    error: null | boolean
}

const initialState: UserState = {
    users: [],
    loading: false,
    error: null
}

export const userReducer = (state = initialState, action): UserState => {
    switch (action.type) {
        case FETCH_USERS:
            return { loading: true, error: null, users: [] }
        case FETCH_USERS_SUCCESS:
            return { loading: false, error: null, users: [] }
        case FETCH_USERS_ERROR:
            return { loading: false, error: null, users: [] }
        default:
            return state
    }
}
