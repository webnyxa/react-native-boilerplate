import axios from "axios";
import Toast from "react-native-simple-toast";

class Service {

  constructor() {
    let service = axios.create({
      baseURL: "http://react-demo.webnyxa.com/api/",
    });
    service.interceptors.response.use(this.handleSuccess, this.handleError);
    this.service = service;
  }

  handleSuccess(response) {
    console.log(response);
    return response;
  }

  handleError = error => {
    switch (error.status) {
      case 401:
        Toast.show(error.toString(), Toast.LONG);
        break;
      case 404:
        Toast.show(error.toString(), Toast.LONG);
        break;
      case 500:
        Toast.show(error.toString(), Toast.LONG);
        break;
       
      default:
       Toast.show(error.toString(), Toast.LONG);
        
    }
      return Promise.reject(error.response);
 
  };

  get(path, params = {}) {
    return this.service.get(path, { ...params });
  }


  patch(path, payload, callback) {
    return this.service
      .request({
        method: "PATCH",
        url: path,
        responseType: "json",
        data: payload
      })
      .then(response => callback(response.data, response.status));
  }

  post(path, payload, config = {}) {
    return this.service.request({
      method: "POST",
      url: path,
      responseType: "json",
      data: payload,
      ...config
    });
  }
 


  put(path, payload, config = {}) {
    return this.service.request({
      method: "PUT",
      url: path,
      responseType: "json",
      data: payload,
      ...config
    });
  }
 
}

export default new Service();
