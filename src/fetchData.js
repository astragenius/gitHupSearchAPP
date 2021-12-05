import { renderData, renderError, removeError } from "./domRender";

export default async function getData(user) {

    try{
        const userData = await fetch(`https://api.github.com/users/${user}`);
        const data = await userData.json();
        if(data.message == 'Not Found') {
            renderError();
        }else {
            removeError();
            renderData(data);
        }
    }catch (error) {
        
        console.log(error);
    }
}