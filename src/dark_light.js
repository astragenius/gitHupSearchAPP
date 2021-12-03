const toggleBtn = document.getElementById('toggle-btn');
const moon = document.getElementById('moon');
const sun = document.getElementById('sun');
const html = document.getElementsByTagName('html')[0];


export default function darkLightMode() {

    if(html.classList == 'dark-mode') {

        html.classList.remove('dark-mode');
        html.classList.add('light-mode');
        sun.classList.add('hide');
        moon.classList.remove('hide');
        toggleBtn.children[0].innerText = 'Dark';
   }else {

       html.classList.remove('light-mode');
       html.classList.add('dark-mode');
       moon.classList.add('hide');
       sun.classList.remove('hide');
       toggleBtn.children[0].innerText = 'Light';
   }
}

