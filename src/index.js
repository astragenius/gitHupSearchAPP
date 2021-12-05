import darkLightMode from "./dark_light";
import getData from "./fetchData";

const toggleBtn = document.getElementById('toggle-btn');
const searchBtn = document.getElementById('search_btn');








searchBtn.addEventListener('click', () =>{
    getData(document.getElementById('search_bar').value);
})

toggleBtn.addEventListener('click', darkLightMode);