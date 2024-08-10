import { legacy_createStore as createStore} from 'redux'
import reducer from './reducer';

import { composeWithDevTools } from 'redux-devtools-extension';


export let store = createStore(reducer,composeWithDevTools());    // created store and pass the reducer function which contains state 
                                                // variable as counter. 