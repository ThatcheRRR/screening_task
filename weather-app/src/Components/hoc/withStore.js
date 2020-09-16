import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './redux/rootReducer';

const store = createStore(rootReducer);

export const withStore = (Wrapped) => {
    return function(props) {
        return(
            <Provider store = {store}>
                <Wrapped {...props} />
            </Provider>
        );
    }
};