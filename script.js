const btn = document.querySelector(".submit");
btn.addEventListener("click", function(){
    const email = document.querySelector(".email").value;
    const password = document.querySelector(".password").value;
    const phone = document.querySelector(".phone").value;
    if(email === "" || password === "" || phone === ""){
        alert("Fill the Follwings")
    }else{
        alert("Thanks for sent feedback!")
    }
})