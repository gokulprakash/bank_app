
function signUp()

{
  const user ={
    firstName: signfirstname.value.trim().toUpperCase(),
    lastName: signlastname.value.trim().toUpperCase(),
    email: signemail.value.trim().toLowerCase(),
    password: signpassword.value,
    confirmPassword: signconfirmpassword.value,
    balance: 2000,
    Account_Number: Math.floor(10000000000 + Math.random() * 99999999999)
  }


  if (user.firstName === "" ||user.lastName === "" ||user.email === "" ||user.password === "" ||user.confirmPassword === "") 
  {
    alert("All fields are required.");
  }

  else if (user.password !== user.confirmPassword)
  {
    alert("Passwords do not match");
  }

  else 
  {
    if (user.email in localStorage)
    {
      alert("Account already Exists."); 
    }
    else 
    {
      localStorage.setItem(user.email, JSON.stringify(user));
      signupform.reset();
      signsuccess.textContent = 'Registration successful! Redirecting to login...';
      setTimeout(() => {
        window.location = "login.html";
        }, 1000);
    }
  }

}




















