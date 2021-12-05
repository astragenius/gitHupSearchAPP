

const renderData = (data) => {
    const { avatar_url, bio, company, created_at, followers, following, location, login, public_repos, twitter_username, blog, name, html_url } = data;

    console.log(data);
    console.log(blog);
    document.getElementById('avatar').src = avatar_url;
    document.getElementById('bio').innerText = checkBio(bio);
    document.getElementById('date').innerText = formatDate(created_at);
    
    document.getElementById('name').innerText = name;
    document.getElementById('repo').innerText = public_repos;
    document.getElementById('follower').innerText = followers;
    document.getElementById('following').innerText = following;
    seturl(document.getElementById('login'), html_url, login);
    checkLocation(document.getElementById('location'), location);
    checkTwitter(document.getElementById('twitter'), twitter_username);
    checkLinks(document.getElementById('company'), company);
    checkLinks(document.getElementById('blog'), blog);



    
}   

const seturl = (el, data, dataName) => {

    el.innerText = dataName;
    el.href = data;
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

        if(data == null || data == '') {
            el.innerText = 'Not Available';
            el.classList.add('link_not');
            el.href = '';
        } else {
            
            el.href = `https://www.twitter.com/${data}`;
            el.innerText = data; 
            el.classList.remove('link_not');
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