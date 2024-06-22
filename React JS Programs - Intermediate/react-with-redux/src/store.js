import { legacy_createStore as createStore} from 'redux'
import reducer from './reducer';


export let store = createStore(reducer);    // created store and pass the reducer function which contains state 
                                                // variable as counter. 