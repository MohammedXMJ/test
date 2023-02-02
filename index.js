
// const allUsers = [];
// $(".btnloging").click(function (){
//     let userName = $(".input1").val();
//     let password = $(".input2").val();
//     for(let i=0 ; i <= 5 ; i++){
//         if (userName === allUsers.user[i].username)
//         {
//             console.log("yeah")
//         }     else 
//         console.log("no")
//     }
//     // let userinfo = {useuserName , password}
//     // const chekuser = allUsers.includes(userinfo);
//     // if (chekuser){
//     //     console.log("yeah")
//     // } else 
//     // console.log("no")
// })


// take the username and password and push it into the array for sign up 
$(".btnsignup").click(function (){
    let userName = $(".registerName").val();
    let password = $(".register2").val();
    let password2 = $(".register3").val();
    if (userName === "" || password === "" || password2 === ""){
        $(".derrentpassword").text("يرجى ادخال المعلومات المطلوبه")
    }else if (password === password2){
        localStorage.setItem("userName",userName);
        localStorage.setItem("password",password);
    } else 
    $(".derrentpassword").text("يرجى ادخال المعلومات المطلوبه")
})



// check the sign in 
$(".btnloging").click(function (){
    let userName = $(".registerName").val();
    let password = $(".register2").val();
    if (userName === "" || password === "" || password2 === ""){
        $(".derrentpassword").text("يرجى ادخال المعلومات المطلوبه")
    }else if (password === password2){
    } else 
    $(".derrentpassword").text("يرجى ادخال المعلومات المطلوبه")
})














// function atLeastOneLetterAndSpace(str) {
//     return (
//       /^[A-Za-z\s]*$/.test(str) &&
//       /[A-Za-z]/.test(str) &&
//       /\s/.test(str)
//     );
//   }
  
//   const str1 = 'OnlyLetters';
//   const str2 = '  '; // Only spaces
//   const str3 = 'letters and spaces';
  
//   console.log(atLeastOneLetterAndSpace(str1)); // false
//   console.log(atLeastOneLetterAndSpace(str2)); // false
//   console.log(atLeastOneLetterAndSpace(str3)); // true


