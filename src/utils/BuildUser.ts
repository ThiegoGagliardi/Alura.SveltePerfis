import type IRepository from "../interfaces/IRepository";
import type IUser from "../interfaces/IUser";

export default function buildUser(userData: any, dataRepositories: any): IUser{
    /*
    const repositories : IRepository[] = [ {name:"DIOAngularBuzzFeedClone",url:""} ,
                                           {name:"DIO.Angular.BlogAngular",url:""},
                                           {name:"DIO.Mentoria.Entendendo_Async_Await_com_CSharp",url:""}];

    return {

        name: "Thiego W S Gagliardi",
        login: "ThiegoGagliardi",
        avatar_url: "https://avatars.githubusercontent.com/u/79970895?v=4",
        profile_url: "https://api.github.com/users/ThiegoGagliardi",
        repositories: 0,
        followers: 0,
        last_repositories: repositories        


    }*/

    const repositories : IRepository[] = dataRepositories.map((repo) => {
        return {name : repo. name,
                url  : repo.url} as IRepository;
    });

    return {
        name: userData.name,
        login: userData.login,
        avatar_url: userData.avatar_url,
        profile_url: userData.url,
        repositories: userData.public_repos,
        followers: userData.followers,
        last_repositories: repositories
    }
}