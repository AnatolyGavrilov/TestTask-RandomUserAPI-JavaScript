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

    let elementName = document.createElement("p");
    let elementNameContent = document.createTextNode(`${elem.name.title} ${elem.name.first} ${elem.name.last}`);
    elementName.appendChild(elementNameContent);
    
    let elementLocation = document.createElement("p");
    let elementLocationContent = document.createTextNode(`${elem.location.country} ${elem.location.city} ${elem.location.timezone.description}
    ${elem.location.timezone.offset} ${elem.location.coordinates.longitude} ${elem.location.coordinates.latitude} ${elem.location.street.number} ${elem.location.street.name}
    ${elem.location.postcode} ${elem.location.state}`);
    elementLocation.appendChild(elementLocationContent);

    let elementPhone = document.createElement("p")
    let elementPhoneContent = document.createTextNode(`${elem.phone}`);
    elementPhone.appendChild(elementPhoneContent);

    let elementLogin = document.createElement("p");
    let elementLoginContent = document.createTextNode(`${elem.login.salt} ${elem.login.sha1} ${elem.login.password}
    ${elem.login.sha256} ${elem.login.md5} ${elem.login.uuid} ${elem.login.username} `);
    elementLogin.appendChild(elementLoginContent);

    let elementEmail = document.createElement("p")
    let elementEmailContent = document.createTextNode(`${elem.email}`);
    elementEmail.appendChild(elementEmailContent);

    let elementDob = document.createElement("p");
    let elementDobContent = document.createTextNode(`${elem.dob.date} ${elem.dob.age}`);
    elementDob.appendChild(elementDobContent);

    let elementID= document.createElement("p");
    let elementIDContent = document.createTextNode(`${elem.id.name} ${elem.id.value}`);
    elementID.appendChild(elementIDContent);

    let elementCell = document.createElement("p")
    let elementCellContent = document.createTextNode(`${elem.cell}`);
    elementCell.appendChild(elementCellContent);

    let elementPicture = document.createElement("div")
    let elementPictureLarge = document.createElement("img")
    elementPictureLarge.src = elem.picture.large
    let elementPictureMedium = document.createElement("img")
    elementPictureMedium.src = elem.picture.medium
    let elementPictureThumbnail = document.createElement("img")
    elementPictureThumbnail.src = elem.picture.thumbnail
    elementPicture.appendChild(elementPictureLarge);
    elementPicture.appendChild(elementPictureMedium);
    elementPicture.appendChild(elementPictureThumbnail);

    let elementNat = document.createElement("p")
    let elementNatContent = document.createTextNode(`${elem.nat}`);
    elementNat.appendChild(elementNatContent);

    element.appendChild(elementName);
    element.appendChild(elementNatContent)
    element.appendChild(elementEmail);
    element.appendChild(elementPhone);
    element.appendChild(elementLocation);
    element.appendChild(elementGender);
    element.appendChild(elementDob);
    element.appendChild(elementLogin);
    element.appendChild(elementCell);
    element.appendChild(elementID);
    element.appendChild(elementPicture)

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