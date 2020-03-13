/* Step 1: using axios, send a GET request to the following URL
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/



/* Step 2: Inspect and study the data coming back, this is YOUR
   github info! You will need to understand the structure of this
   data in order to use it to build your component function


let data = {
   login: "W-B28",
   id: 50033779,
   node_id: "MDQ6VXNlcjUwMDMzNzc5",
   avatar_url: "https://avatars1.githubusercontent.com/u/50033779?v=4",
   gravatar_id: "",
   url: "https://api.github.com/users/W-B28",
   html_url: "https://github.com/W-B28",
   followers_url: "https://api.github.com/users/W-B28/followers",
   following_url: "https://api.github.com/users/W-B28/following{/other_user}",
   gists_url: "https://api.github.com/users/W-B28/gists{/gist_id}",
   starred_url: "https://api.github.com/users/W-B28/starred{/owner}{/repo}",
   subscriptions_url: "https://api.github.com/users/W-B28/subscriptions",
   organizations_url: "https://api.github.com/users/W-B28/orgs",
   repos_url: "https://api.github.com/users/W-B28/repos",
   events_url: "https://api.github.com/users/W-B28/events{/privacy}",
   received_events_url: "https://api.github.com/users/W-B28/received_events",
   type: "User",
   site_admin: false,
   name: null,
   company: null,
   blog: ""
};


   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function,
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either
          follow this link in your browser https://api.github.com/users/<Your github name>/followers
          , manually find some other users' github handles, or use the list found
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.

          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

axios.get('https://api.github.com/users/w-b28/followers')
.then(response => {
  console.log(response);
  response.data.forEach(item => {
    console.log(item)
    axios.get(item.url)
      .then(response => {
        console.log(response);
        document.querySelector('.cards').append(gitHubCard(response.data));
      })
  })
})
.catch(error => {
  console.log("Error", error)
})

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

function gitHubCard(data) {
  const card = document.createElement('div');
  card.classList.add('card');

  const cardInfo = document.createElement('div');


  const image = document.createElement('img');



  const realName = document.createElement('h3');
  realName.classList.add('name');

  const userName = document.createElement('p');
  userName.classList.add('username');


  const location =  document.createElement('p');
  const profile = document.createElement('p');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  const profileURL= document.createElement('a');


  realName.textContent = data.name;
  userName.textContent = data.login;
  profileURL.textContent = data.html_url;
  image.src = data.avatar_url;
  location.textContent = data.location;
  followers.textContent = data.followers;
  following.textContent =data.following;
  bio.textContent = data.bio;

  card.append(image);
  card.append(cardInfo);
  card.append(profile);
  cardInfo.append(realName, userName, location, profileURL, followers, following, bio);

return card

}

axios.get('https://api.github.com/users/w-b28')
  .then(response => {
    console.log(response);
    document.querySelector('.cards').append(gitHubCard(response.data))
  })
  .catch( error => {
    console.log("The data was not returned", error);
  });

/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
