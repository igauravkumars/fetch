let button=document.getElementById("btn")

function fetchuser(data){
    data.forEach(user =>{
        

       let user_list = document.createElement("div")
       user_list.className="user-card"
        // user image
        let user_img = document.createElement("img")
        user_img.src=user.avatar

       //name of the user
       let user_name =document.createElement("p")
       user_name.textContent =user.first_name

       //last name of user
       let last_name =document.createElement("p")
       last_name.textContent =user.last_name

       //user email id
       let user_email =document.createElement("p")
       user_email.textContent =user.email

      user_list.append(user_img,user_name,last_name,user_email)
      button.append(user_list)
    })
}





fetch('https://reqres.in/api/users')
.then(response => response.json())
.then(Finalresponse =>{
    fetchuser(Finalresponse.data)
}).catch(err =>{
    console.log("something went wrong")
})
// <!-- DISPLAYING USER DATA
// Task:
// Create an HTML file with a button labeled "Fetch Users".
// Upon clicking the button, use the fetch() function to retrieve user data from the Reqres API.
// Display the user data in a visually appealing manner on the webpage.
// Use CSS to style the user information.
// Guidelines:
// Create a JavaScript file index.js to write the logic for fetching and displaying user data.
// Use the Reqres API to fetch user data.
// The displayed information should include at least the user's name, email, and avatar. -->