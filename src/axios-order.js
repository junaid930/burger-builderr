import axios from 'axios'

const instance=axios.create({
    baseURL:"https://react-myburger-875c6-default-rtdb.firebaseio.com/"
});

export default instance