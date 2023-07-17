let container = document.querySelector('.container');

let users = [];

let xmlHttpRequest = function(url) {
    return new Promise(function(resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.responseType = 'json';
        xhr.onload = () => {
        let status = xhr.status;
        if (status == 200) {
            xhr.response.results.map((result)=>{
                users.push(result);
            });
            resolve(users);
            } else {
                reject(status);
                console.error(status);
            }
        };
      xhr.send();
    });
  };
  
let drowElements = (users) => {
  users.map((elem)=> { 
    let element = document.createElement("div");

    let elementGender = document.createElement("p");
    let elememtGenderText = document.createTextNode(elem.gender);
    elementGender.appendChild(elememtGenderText);

    let elementName = document.createElement("div");
    let elementNameTitle = document.createElement("p");
    let elementNameTitleText = document.createTextNode(elem.name.title);
    elementNameTitle.appendChild(elementNameTitleText);
    elementName.appendChild(elementNameTitle);
    

    element.appendChild(elementGender);
    element.appendChild(elementName);
    element.className="test2";
    container.appendChild(element);
  })
}

xmlHttpRequest('https://randomuser.me/api/?results=25')
  .then((users) => {
      drowElements(users);
  }).catch(function(err){
  console.error(err);
});