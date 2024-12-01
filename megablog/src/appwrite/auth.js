import config from "../config/config";

import { Client, Account,ID } from "appwrite";

export class AuthService{
    client = new Client();
    account;
    constructor() {
        this.client.setEndpoint(config.appWriteUrl)
        .setProject(config.projectId);
        this.account = new Account(this.client);
    }

    async createAccount({email,password,name}){
        try {
            const response = await this.account.create(ID.unique(),email, password, name);
            if(response){
                this.login(email,password);
                return response;
            }else{
                throw new Error("Failed to create account");
            }
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async login({email,password}){
        try{
            const loggedIn = await this.account.createEmailPasswordSession(email,password);
            return loggedIn;
        }catch (error) {
            throw new Error(error.message);
        }
    }

    async getCurrentUser(){
        try {
            const user = await this.account.get();
            if(!user) return null;
            return user;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async logout(){
        try {
            return await this.account.deleteSession("current");
        } catch (error) {
            throw new Error(error.message);
        }
    }
};

const authService = new AuthService();

export default authService;
