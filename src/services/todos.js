import axios from 'axios';

class TodoDataService{

getAll(token){
axios.defaults.headers.common["Authorization"] = "Token " + token;
return axios.get('http://127.0.0.1:8000/api/todos/');
}
createTodo(data, token){
axios.defaults.headers.common["Authorization"] = "Token " + token;
return axios.post("http://127.0.0.1:8000/api/todos/", data);
}
updateTodo(id, data, token){
axios.defaults.headers.common["Authorization"] = "Token " + token;
return axios.put(`http://127.0.0.1:8000/api/todos/${id}`, data);
}
deleteTodo(id, token){
axios.defaults.headers.common["Authorization"] = "Token " + token;
return axios.delete(`http://127.0.0.1:8000/api/todos/${id}`);
}
completeTodo(id, token){
axios.defaults.headers.common["Authorization"] = "Token " + token;
return axios.put(`http://127.0.0.1:8000/api/todos/${id}/complete`);
}
login(data){
return axios.post("http://127.0.0.1:8000/api/login/", data);
}
signup(data){
return axios.post("http://127.0.0.1:8000/api/signup/", data);
}

signuptab(data){
    return axios.post("http://127.0.0.1:8000/api/signuptab/", data);
    }

// Table01(columns){
// return axios.post("https://jsonplaceholder.typicode.com/posts", columns);
// }
    

}
export default new TodoDataService();
