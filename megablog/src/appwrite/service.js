import config from "../config/config";

import { Client, Databases,Storage ,Query,ID} from "appwrite";

export class Service{
    client= new Client();
    databases;
    bucket;

    constructor(){
        this.client.setEndpoint(config.appWriteUrl)
        .setProject(config.projectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.databases.createDocument(
                config.databaseName,
                config.collectionName,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    userId,
                    status
                }
            );
        } catch (error) {
            throw new Error(error.message);
        }

    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try{
            return await this.databases.updateDocument(config.databaseName,
                config.collectionName,slug,{
                    title,
                    content,
                    featuredImage,
                    status
                })
        }catch(error){
            throw new Error(error.message);
        }
    }

    async deletePost(slug){
        try{
            await this.databases.deleteDocument(config.databaseName,
                config.collectionName,slug);
                return true;
        }catch(error){
            throw new Error(error.message);
        }
    }

    async getCurrentPost(slug){
        try {
            const post = await this.databases.getDocument(config.databaseName,config.collectionName,slug);
            return post; 
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async getAllPosts(queries=(Query.equal["status",true])){
        try{
            const posts = await this.databases.listDocuments(config.databaseName,config.collectionName,queries);
            return posts;
        }
        catch(error){
            throw new Error(error.message);
        }
    }

    async uploadFile(file){
        try {
            return await this.bucket.createFile(config.bucketName,ID.unique(),file);
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(config.bucketName,fileId);
            return true;
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async viewFile(fileId){
        try{
            return await this.bucket.getFilePreview(config.bucketName,fileId);
        }
        catch(error){
            throw new Error(error.message);
        }
    }


};

const service = new Service();

export default service;