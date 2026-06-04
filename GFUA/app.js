const btn = document.getElementById("searchBtn");

btn.addEventListener("click", () => {

    const username = document.getElementById("username").value;

    fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => {

        document.getElementById("avatar").src = data.avatar_url;
        document.getElementById("name").innerText = data.name;
        document.getElementById("login").innerText = data.login;
        document.getElementById("followers").innerText = data.followers;
        document.getElementById("following").innerText = data.following;
        document.getElementById("repos").innerText = data.public_repos;

    })
    .catch(error => {
        console.log(error);
    });

});