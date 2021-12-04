

const renderData = (data) => {
    const { avatar_url, bio, company, created_at, followers, following, location, login, public_repos, twitter_username, blog, name } = data;

    console.log(company);
    console.log(blog);
    document.getElementById('avatar').src = avatar_url;
    document.getElementById('bio').innerText = bioCheck(bio);
    document.getElementById('date').innerText = formatDate(created_at);
    document.getElementById('login').innerText = login;
    document.getElementById('name').innerText = name;
    document.getElementById('repo').innerText = public_repos;
    document.getElementById('follower').innerText = followers;
    document.getElementById('following').innerText = following;
    checkLocation(document.getElementById('location'), location);
    checkLinks(document.getElementById('twitter'), twitter_username);
    checkLinks(document.getElementById('company'), company);
    checkLinks(document.getElementById('blog'), blog);



    
}   


const formatDate = (date) => {

    const newDate = new Date(date);
    const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(newDate);
    const month = new Intl.DateTimeFormat('en', {month: 'short' }).format(newDate);
    const year = new Intl.DateTimeFormat('en', {year: 'numeric'}).format(newDate);

    return `Joined ${day} ${month} ${year}`;     
}

const bioCheck = (data) => {

    if(data == "" || data == null) {

        return " Sorry No Bio available";
    }else {
        return data
    }

}

const checkLinks = (el, data) => {
   
    
    if(data == null || data == '') {

        el.innerText = 'Not Available';
        el.classList.add('link_not');
        el.href = '';

    }else {
        
        el.innerText = data;
        el.href = data;
        el.classList.remove('link_not');
    }

}

const checkLocation = (el, data) => {

    if(data == null || data == '') {

        el.innerText = "Location unknown";
    }else {

        el.innerText = data;
    }
}


export { renderData }