import axios from 'axios'

const instance =axios.create({
    // baseURL:'https://fanapsimulator.firebaseio.com'
    baseURL:'http://10.20.0.97:8080/deka/sim'
});
instance.defaults.headers.common['Authorization']='approved';

export default instance;