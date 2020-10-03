import { action, observable } from "mobx";

export class UsersStore {
    @observable users = [];
    @observable page = 0;
    @observable isError = false;
    @observable errorMessage = "";

    constructor() {
        this.refresh();
    }

    loadUsers(page = 0, results = 20) {
        var settings = {
            "Content-Security-Policy": "default-src 'self'; connect-src 'self' https://randomuser.me https://randomuser.me/api",
            "Access-Control-Allow-Origin": "*; no-cors"
        };
        fetch(`https://randomuser.me/api/?page=${page}&results=${results}`, settings)
        .then((response)=>{
            return response.json();
        })
        .then((json)=>{
            this.users = page==0 ? json.results : this.users.concat(json.results);
        }).catch((error)=>{
            console.log(error);
            this.isError = true;
            this.errorMessage = "Ошибка загрузки данных с сервера. Попробуйте обновить страницу."
        })
    }

    @action getNext = () => {
        this.page++;
        this.loadUsers(this.page);
    }

    @action refresh = () => {
        this.loadUsers();
    }
}
