//Create a function to Get the User data
async function getUsers(url) {
    let users;
    try {
      const data = await fetch(
        url,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      users = await data.json();
    } catch (err) {
      console.log(err);
    }
    return users;
  }
  // getUsers();
  
  //create a function to display all the Anime  data
  async function all_anime_data() {
    const url="https://anime-facts-rest-api.herokuapp.com/api/v1";
    let users = await getUsers(url);
    let user=users.data;
    let userList = document.querySelector(".home_render");
    userList.innerHTML = "";
    for(let i=0;i<user.length;i++){
      userList.innerHTML += `
      <div class="user-container">
      <img class="user-image" src="${user[i].anime_img}" alt="img">
      <div>
      <h2 class="user-name">${user[i].anime_name}</h2>
      </div>
      </div>`;
    };
  }
  
  //create a function to fetch Anime name from anime list to display particular anime's facts
  function take_name(){
      let store_name=document.querySelector(".anime_name").value;
      anime_fact(store_name);
      return store_name;
  }

  //all_anime_data();


//create a function to display particular anime's facts
  async function anime_fact(anime_name) {
      try{
    const url=`https://anime-facts-rest-api.herokuapp.com/api/v1/${anime_name}`;
    let url_anime=url;
    let users = await getUsers(url_anime);
    let user=users.data;
    console.log(user);
    let userList = document.querySelector(".facts_render");
    userList.innerHTML = "";
    for(let i=0;i<user.length;i++){
      userList.innerHTML += `
      <div class="user-container">
      <h2 class="user-name">${user[i].fact}</h2>
      <button onclick="specific_anime_fact(${user[i].fact_id},take_name())">Specific Anime Fact</button>
      </div>`;
    }}
    catch (err) {
        console.log(err);
      }
  }
  
  //anime_fact();

//create a function to display particular anime's specific facts
  async function specific_anime_fact(fact_id,anime_name) {
      try{
    let url_merge=`https://anime-facts-rest-api.herokuapp.com/api/v1/${anime_name}/${fact_id}`;
    let users = await getUsers(url_merge);
    let user=users.data;
    console.log(user);
    let userList = document.querySelector(".specific_fact_render");
    userList.innerHTML = `
      <div class="user-container">
      <h2 class="user-name">${user.fact}</h2>
      </div>`;
    }
    catch (err) {
        console.log(err);
      }
  }

  //specific_anime_fact();