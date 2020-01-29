// Developer Profile Generator

module.exports = function ProfileGen(userInfo) {

    this.name = userInfo.name;
    this.gitHubURL = userInfo.html_url;
    this.img = userInfo.avatar_url;
    this.color = userInfo.color;
    this.bio = userInfo.bio;
    this.blog = userInfo.blog;
    this.location = userInfo.location;
    this.company = userInfo.company;
    this.public_repos = userInfo.public_repos;
    this.followers = userInfo.followers;
    this.following = userInfo.following;
    this.stargazers_count = userInfo['stargazers_count'];

    this.colors = {
        green: {            
            headerBackground: "darkgreen",
            wrapperBackground: "green",
            headerColor: "white",
        },
        blue: {            
            headerBackground: "darkblue",
            wrapperBackground: "blue",
            headerColor: "white",
        },
        pink: {            
            wrapperBackground: "pink",
            headerBackground: "deeppink",
            headerColor: "white",
        },
        red: {            
            headerBackground: "darkred",
            wrapperBackground: "red",
            headerColor: "white",
        }
    };
    
    this.html = `<!DOCTYPE html>
  <html lang="en">
     <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
        <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Raleway&display=swap" rel="stylesheet">
        <title>Document</title>
        <style>
           html, body {
           padding: 0;
           margin: 0;
           }
           
           html, body, .wrapper {
           height: 100%;
           }
           
           .wrapper {
           background-color: ${this.colors[this.color].wrapperBackground};
           padding-top: 100px;
           }
           
           body {
           background-color: white;
           -webkit-print-color-adjust: exact !important;
           font-family: 'Raleway', sans-serif, Helvetica;
           }
           
           main {
           background-color: gainsboro;
           height: auto;
           padding-top: 10px;
           }
           
           h1, h2, h3, h4, h5, h6 {
           font-family: 'Raleway', sans-serif, Helvetica;
           margin: 0;
           }
           
           h1 {
           font-size: 36px;
           }
           
           h2 {
           font-size: 32px;
           }
           
           h3 {
           font-size: 28px;
           }
           
           h4 {
           font-size: 24px;
           }
           
           h5 {
           font-size: 20px;
           }
           
           h6 {
           font-size: 18px;
           }
           
           .photo-header {
           position: relative;
           margin: 0 auto;
           margin-bottom: 20px;
           display: flex;
           justify-content: center;
           flex-wrap: wrap;
           background-color: ${this.colors[this.color].headerBackground};
           color: ${this.colors[this.color].headerColor};
           padding: 10px;
           width: 85%;
           }
           
           .photo-header img {
           width: 250px;
           height: 250px;
           border-radius: 50%;
           object-fit: cover;
           margin-top: -75px;
           }
           
           .photo-header h1, .photo-header h2 {
           width: 100%;
           text-align: center;
           }
           
           .photo-header h1 {
           margin-top: 10px;
           }
           
           .links-nav {
           width: 100%;
           text-align: center;
           padding: 20px 0;
           font-size: 18px;
           }
           
           .nav-link {
           display: inline-block;
           margin: 5px 10px;
           }
           
           .container {
           padding: 30px;
           padding-left: 100px;
           padding-right: 100px;
           }
  
           .row {
           display: flex;
           flex-wrap: wrap;
           justify-content: space-between;
           margin-top: 20px;
           margin-bottom: 20px;
           }
  
           .card {
           padding: 10px;
           background-color: ${this.colors[this.color].headerBackground};
           color: ${this.colors[this.color].headerColor};
           margin: 10px;
           }
           
           .col {
           flex: 1;
           text-align: center;
           }
  
           a, a:hover {
           text-decoration: none;
           color: inherit;
           font-weight: bold;
           }
  
           @media print { 
            body { 
              zoom: .75; 
            } 
           }
        </style>
        </head>
        <body>
        <div class="wrapper">
           <div class="photo-header">
                <img src="${this.img}" alt="Developer Profile Image">
                <h1>Hello !</h1>
                <h2>My name is ${this.name}</h2>
                <h4>Currently @ ${this.company}</h4>
                <ul class="links-nav">
                    <li class="nav-link"><a href="http://maps.google.com/?q=${this.location}"><i class="fas fa-location-arrow"></i> ${this.location}</a></li>
                    <li class="nav-link"><a href="${this.gitHubURL}"><i class="fab fa-github-alt"></i> GitHub</a></li>
                    <li class=" nav-link"><a href="${this.blog}"><i class="fas fa-rss"></i> Blog</a></li>
                </ul>
            </div>
        <main>
            <div class="container">
                <div class="row">
                    <h5 class="col">${this.bio}</h5>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="card">
                        <h4>Public Reposorities</h4>
                        <h5>${this.public_repos}</h5>
                        </div>
                        <div class="card col">
                        <h4>GitHub Stars</h4>
                        <h5>${this.stargazers_count}</h5>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                        <h4>Followers</h4>
                        <h5>${this.followers}</h5>
                        </div>
                        <div class="card col">
                        <h4>Following</h4>
                        <h5>${this.following}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</body>
</html>`;
}