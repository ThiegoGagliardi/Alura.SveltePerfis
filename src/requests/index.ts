async function findUser(userName : string|null)
{
    if (userName === null){
        return null;
    }

    const userResponse = await fetch(
        `https://api.github.com/users/${userName}`,
      );

      return userResponse;
}

async function findRepositories(userName : string|null){
    if (userName === null){
        return null;
    }

    const userResponse = await fetch(
        `https://api.github.com/users/${userName}/repos?sort=created&per_page=5`,
      );

      return userResponse;    
}

export { findUser, findRepositories };