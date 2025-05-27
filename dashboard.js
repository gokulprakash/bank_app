
const user = JSON.parse(localStorage.getItem('Current User'))
console.log(user);
const userDashboard = JSON.parse(localStorage.getItem(user))
console.log(userDashboard);

dashboarduser.textContent = userDashboard.firstName + ' ' + userDashboard.lastName;




const userDetails=document.getElementById('userdetails');

userDetails.innerHTML = `<div class="card border-0 p-5" style="width: 100%;">
  <img src="images/vecteezy_user-profile-icon_50737224.png" class="card-img-top h-50 w-50 object-fit-cover align-self-center "  alt="person">
  <div class="card-body text-start">
    <p class="card-text fs-5 fw-semibold">Account Number: <span class="fw-normal">${userDashboard.Account_Number}</span></p>
    <p class="card-text  fs-5 fw-semibold">Email: <span class="fw-normal">${userDashboard.email}</span></p>

  </div>
</div>`




//deposit

function deposit(){
    const depAmount = depositamount.value;
    console.log(depAmount);
    console.log(typeof depAmount);
    document.getElementById('dashboardbalance').textContent = "";

    
    if(depAmount == "")
    {
        dashboardmessage.innerHTML = '<span class="error-message fw-semibold">Enter a valid deposit amount.</span>';
    }

    else{
        userDashboard.balance =Number(userDashboard.balance) + Number(depAmount);
        localStorage.setItem(user,JSON.stringify(userDashboard))
        dashboardmessage.innerHTML = '<span class="success-message fw-semibold">Deposited ₹' +   depAmount + ' successfully!</span>';
        setTimeout(()=>{
            dashboardmessage.innerHTML = "";
            dashboardbalance.innerHTML = "";
        },2000)
        depositamnt.reset();

    }

}





//withdraw

function withdraw(){
    const amount = withdrawamount.value;
    console.log(amount);
    console.log(typeof amount);
    document.getElementById('dashboardbalance').textContent = "";
    
    if(amount == "")
    {
        dashboardmessage.innerHTML = '<span class="error-message fw-semibold">Enter a valid withdrawal amount.</span>';
        
    }

    else{


        if(userDashboard.balance - amount < 2000)
        {
            dashboardmessage.innerHTML = '<span class="error-message fw-semibold">Cannot withdraw. Balance cannot drop below ₹2000.</span>';
            withdrawamnt.reset();
        }

        else{
            userDashboard.balance =Number(userDashboard.balance) - Number(amount);
            localStorage.setItem(user,JSON.stringify(userDashboard))
            dashboardmessage.innerHTML = '<span class="success-message fw-semibold">Withdrew ₹' + amount + ' successfully!</span>';
            setTimeout(()=>{
                dashboardmessage.innerHTML = "";
                dashboardbalance.innerHTML = "";
            },2000)
            withdrawamnt.reset();
 
        }

    }
}



//balance
function balance(){
    dashboardmessage.innerHTML = "";
    dashboardbalance.textContent = "₹" + userDashboard.balance;
    withdrawamnt.reset();
    depositamnt.reset();
}

//logout

function logout(){
    localStorage.removeItem('Current User');
    window.location= "login.html";
 };
