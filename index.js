function userCredentials(email,password){
    const validEmail="abboracheal3@gmail.com";
    const validpassword="22/U/2302";

    if(email===validEmail && password===validpassword){
        console.log(`User email is ${email},login successfully!`);
    }else{
        console.log("Invalid User credentials!");
    }
}
userCredentials("abboracheal3@gmail.com","22/U/2302");