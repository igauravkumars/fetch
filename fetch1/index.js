let button =document.getElementById("btn")
button.addEventListener("click",fetchuser)


function fetchuser(){
    fetch('https://reqres.in/api/users').then(response =>response.json()).then(finalresponse =>{
        let user_list =finalresponse.data
        let output =""
        user_list.forEach(user => {
            output += `
                <div id="user-card">
                    <div id="img">
                    <image src="${user.avatar}" alt="user-image"}
                    </div>
                    <div class="user-details">
                    <p class="name">${user.first_name+" "+user.last_name}</p>
                    </div>   
                    <div>
                    <p class="email">${user.email}</p></div>   
                </div>
            `;
        });
        document.getElementById("userslist").innerHTML =output;
    })
    .catch(err =>{
        console.err("something went wrong",err)
    })
}
