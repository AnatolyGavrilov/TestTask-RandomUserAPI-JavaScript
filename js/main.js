let getJSON = (url) => {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';

    xhr.onload = () => {
        
        let status = xhr.status;

        if (status == 200) {
            let users = [];
            xhr.response.results.map((result)=>{
                users.push(result);
            });
            console.log(users);
        } else {
            console.error(status);
        }
    };

    xhr.send();
};

getJSON('https://randomuser.me/api/?results=25');

