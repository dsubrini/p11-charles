import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/user.reducer";
import { editmodeReducer} from './reducers/editmode.reducer';


const store = configureStore({reducer: {user: userReducer, editmode: editmodeReducer}})

export default store;
