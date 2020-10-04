import { action, observable, computed } from "mobx";

export class UsersStore {
    @observable users = [];
    @observable page = 0;
    @observable isError = false;
    @observable errorMessage = "";
    @observable isModalShow = false;

    constructor() {
        this.refresh();
    }

    loadUsers(page = 0, results = 20) {
        this.isError = false;
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
            this.isModalShow = true;
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

    @action closeModal = () => {
        this.isModalShow = false;
        this.isError = false;
    }

    @action openModal = () => {
        this.isModalShow = true;
    }

    @computed get getTitle() {
        return this.isError ? "Error" : "Info";
    }

    @computed get getRandomUser() {
        return this.users[Math.round(Math.random()*this.users.length)];
    }

    @action getUser(id) {
        return this.users.filter((e)=>{
            return e.login.uuid == id
        })[0];
    }
}
