import type IRepository from "./IRepository";

export default interface IUser{

    name         : string;
    login        : string;
    avatar_url   : string;
    profile_url  : string;
    repositories : number;
    followers    : number;
    last_repositories : IRepository[];
}