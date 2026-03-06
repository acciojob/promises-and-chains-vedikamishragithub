//your JS code here. If required.
function validateForm(){
  let nameValue= document.getElementById("name").value;
  let age=document.getElementById("age").value;
  if(nameValue === "" ||  age === "" ){
    alert("Please enter valid details.");   
     return false; 
  }
 submitForm(nameValue, age)
    .then((data)=>{
      alert(data);
    })
    .catch((err)=>{
      alert(err);
    });
  return false;
}


const submitForm = (nameValue, age) =>{
   return new Promise((resolve, reject) => {
     setTimeout(()=>{
    if(age >=18){     
        resolve(`Welcome, ${nameValue}. You can vote.`);      
    }else {     
        reject(`Oh sorry ${nameValue}. You aren't old enough.`)}
      },4000);
    });
 
}