/*
  Algorithm to fetch data
  - get input, button, reposData
  - on click for button call function getRepos
  - getRepos function 
    - check if value is empty then print "Please Enter Github username" innerHTML
    - else 
      - fetch data from API 
      - empty container show data
      - loop on data and get repos name
      - display repos in HTML

  best practices 
  - function for fetch, loop on data
*/

let input = document.querySelector(" input");
let getBtn = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");

getBtn.addEventListener("click", () => {
  if (input.value === "") {
    reposData.innerHTML = "<span>Please enter Github username</span>";
  } else {
    fetch(`https://api.github.com/users/${input.value}/repos`)
      .then((repos) => {
        const getData = repos.json();
        return getData;
      })
      .then((showRepo) => {
        // empty show data
        reposData.innerHTML = "";

        let repoUl = document.createElement("ul");
        reposData.appendChild(repoUl);

        for (let i = 0; i < showRepo.length; i++) {
          let repoListItem = document.createElement("li");
          repoListItem.append(showRepo[i].name);
          repoUl.append(repoListItem);
        }
      });
  }
});
