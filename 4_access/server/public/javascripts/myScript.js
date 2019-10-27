try{ 

    var handleSubmit = (event) => {
        event.preventDefault();
        username = document.getElementById('username').value;
        password = document.getElementById('password').value;

        const requestObject = {username, password};
        console.log(requestObject);
        
        axios({
            method:'post',
            url: '/login',
            data: requestObject,
            headers: { 'Content-Type': 'application/json' }
        }).then((response) => {
            console.log(response.data);
        })
    }
}catch{
    console.log(1)
    console.error("Hey There is an error here :\n "+error)
  }