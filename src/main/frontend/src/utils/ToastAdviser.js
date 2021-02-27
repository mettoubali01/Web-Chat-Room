import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
export const toastAdviser = (message, messageType) => {
    switch (messageType) {

        case 'success':
            toast.success(message, {position: "bottom-left"});
        break;
        case 'warning':
            toast.warning(message, {position: "bottom-left"});
        break;
        case 'info':
            toast.info(message, {position: "bottom-left"});
        break;
        default:
            break;
    }
}
