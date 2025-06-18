import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import rootReducer from './reducers';


export const store = configureStore({
    reducer: rootReducer,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});
//Finally, create an asynchronous action creator using thunk:

//javascript
export const FetchData= () => {
    return async (dispatch) => {
        dispatch({ type: 'FETCH_DATA_REQUEST'});

        try{
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();

            dispatch({ type: 'FETCH_DATA_SUCESS', payload: data});
        }
        catch (error){
            dispatch({ type: 'FETCH_DATA_FAILURE', error: error});
        }
      };
    };
