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
    let elementNameContent = document.createElement("p");
    let elementNameContentText = document.createTextNode(`${elem.name.title} ${elem.name.first} ${elem.name.last}`);
    elementNameContent.appendChild(elementNameContentText);
    elementName.appendChild(elementNameContent);
    
    let elementLocation = document.createElement("div");
    let elementLocationContent = document.createElement("p");
    let elementLocationContentText = document.createTextNode(`${elem.location.country} ${elem.location.city} ${elem.location.timezone.description}
     ${elem.location.timezone.offset} ${elem.location.coordinates.longitude} ${elem.location.coordinates.latitude} ${elem.location.street.number} ${elem.location.street.name}
     ${elem.location.postcode} ${elem.location.state}`);
    elementLocationContent.appendChild(elementLocationContentText);
    elementLocation.appendChild(elementLocationContent);

    element.appendChild(elementGender);
    element.appendChild(elementName);
    element.appendChild(elementLocation);
    element.className="test2";
    container.appendChild(element);
  })
}

xmlHttpRequest('https://randomuser.me/api/?results=25')
  .then((users) => {
      drowElements(users);
      console.log(users);
  }).catch(function(err){
  console.error(err);
});