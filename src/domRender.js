

const renderData = (data) => {
    const { avatar_url, bio, company, created_at, followers, following, location, login, public_repos, twitter_username } = data;

    document.getElementById('avatar').src = avatar_url;
    //document.getElementById('bio').innerText = bio;
    //document.getElementById('date').innerText = created_at;
    document.getElementById('login').innerText = login;
    document.getElementById('repo').innerText = public_repos;
    document.getElementById('follower').innerText = followers;
    document.getElementById('following').innerText = following;

   

}   





export { renderData }