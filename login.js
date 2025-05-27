
function login()
{
  const email = loginemail.value.trim().toLowerCase();
  const password = loginpassword.value;
  console.log(email,password);
  

if (email === "" || password === "") {
  alert("All fields are required.")
  
}

else{
  if (email in localStorage)
  {

    const result=JSON.parse(localStorage.getItem(email))
    console.log(result);
    if(password === result.password )
    {
      localStorage.setItem("Current User",JSON.stringify(email));
      window.location = "dashboard.html";

    }
    else 
    {
      alert("Invalid password.");
      loginform.reset();

    }
    

  }

  else
  {
    alert("Invalid email.");
    loginform.reset();

  }

}
}



