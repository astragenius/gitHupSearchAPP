

const renderData = (data) => {
    const { avatar_url, bio, company, created_at, followers, following, location, login, public_repos, twitter_username, blog, name, html_url } = data;

    document.getElementById('avatar').src = avatar_url;
    document.getElementById('bio').innerText = checkBio(bio);
    document.getElementById('date').innerText = formatDate(created_at);
    
   
    document.getElementById('repo').innerText = public_repos;
    document.getElementById('follower').innerText = followers;
    document.getElementById('following').innerText = following;
    setName( document.getElementById('name'), name, login);
    seturl(document.getElementById('login'), html_url, login);
    checkLocation(document.getElementById('location'), location);
    checkTwitter(document.getElementById('twitter'), twitter_username);
    checkCompany(document.getElementById('company'), company);
    checkBlog(document.getElementById('blog'), blog);

    
}   

const renderError = () =>{

    document.getElementById('error').classList.remove('hide');
}

const removeError = () => {

    if(document.getElementById('error').matches('hide') == false) {
        document.getElementById('error').classList.add('hide');
    }else {
        return;
    }
}

const seturl = (el, data, dataName) => {

    el.innerText = dataName;
    el.href = data;
}

const setName = (el, data, data1) => {

    if(data == '' || data == null) {

        el.innerText = data1;
    } else {

        el.innerText = data;
    }
}


const formatDate = (date) => {

    const newDate = new Date(date);
    const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(newDate);
    const month = new Intl.DateTimeFormat('en', {month: 'short' }).format(newDate);
    const year = new Intl.DateTimeFormat('en', {year: 'numeric'}).format(newDate);

    return `Joined ${day} ${month} ${year}`;     
}

const checkBio = (data) => {

    if(data == "" || data == null) {

        return " Sorry No Bio available";
    }else {
        return data
    }

}

const checkTwitter = (el, data) => {

    const svg = document.getElementById('twitter_icon');

        if(data == null || data == '') {
            el.innerText = 'Not Available';
            el.classList.add('link_not');
            el.href = '';
            svg.children[0].classList.add('svg_not');
            svg.children[0].classList.remove('svg_fill');
            
        } else {
            
            el.href = `https://www.twitter.com/${data}`;
            el.innerText = data; 
            el.classList.remove('link_not');
            svg.children[0].classList.remove('svg_not');
            svg.children[0].classList.add('svg_fill');
        }
}

const checkBlog = (el, data) => {
   
    const svg = document.getElementById('blog_icon');
    if(data == null || data == '') {

        el.innerText = 'Not Available';
        el.classList.add('link_not');
        svg.children[0].classList.add('svg_not');
        svg.children[0].classList.remove('svg_fill');
        el.href = '';

    }else {
        
        el.innerText = data;
        el.href = data;
        el.classList.remove('link_not');
        svg.children[0].classList.remove('svg_not');
        svg.children[0].classList.add('svg_fill');
    }

}

const checkCompany = (el, data) => {
   
    const svg = document.getElementById('company_icon');
    if(data == null || data == '') {

        el.innerText = 'Not Available';
        el.classList.add('link_not');
        svg.children[0].classList.remove('svg_fill');
        svg.children[0].classList.add('svg_not');
        el.href = '';

    }else {
        
        el.innerText = data;
        el.href = data;
        el.classList.remove('link_not');
        svg.children[0].classList.remove('svg_not');
        svg.children[0].classList.add('svg_fill44');
    }

}

const checkLocation = (el, data) => {
    const svg = document.getElementById('location_icon');
    if(data == null || data == '') {

        el.innerText = "Location unknown";
        svg.children[0].classList.add('svg_not');
        svg.children[0].classList.remove('svg_fill');
    }else {

        el.innerText = data;
        svg.children[0].classList.remove('svg_not');
        svg.children[0].classList.add('svg_fill');
        
    }
}


export { renderData, renderError, removeError }