import { renderData } from "./domRender";

export default async function getData(user) {

    try{
        const userData = await fetch(`https://api.github.com/users/${user}`);
        const data = await userData.json();
        renderData(data);
    }catch (error) {
        
        console.log(error);
    }
}