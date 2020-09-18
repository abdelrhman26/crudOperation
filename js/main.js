/*


*/

var currentIndex
var empName=document.getElementById("empName")
var empSalary=document.getElementById("empSalary")
var empPhone=document.getElementById("empPhone")
var empAge=document.getElementById("empAge")
var addEmployee=document.getElementById("addemployee")
var employees;
var inputs=document.getElementsByClassName("form-control")
if(localStorage.getItem("employeList")==null)
{
  employees=[];
}
else
{
employees=JSON.parse(localStorage.getItem("employeList"))
displayData()
}

addemployee.onclick=function ()
{

if (addEmployee.innerHTML=="add employee")
{
  addEmployer()
}
else{
  editEmployer()
  addEmployee.innerHTML="add employee"
  addEmployer()
  displayData()
resetData()
}

}

function resetData()
{
  for(var i=0;i<inputs.length;i++)
  {
    inputs[i].value=""
  }
}




function  addEmployer()
{
  var employee=
  {
"name":empName.value,
"age":empAge.value,
"salary":empSalary.value,
"phone":empPhone.value,
}

employees.push(employee)
localStorage.setItem("employeList",JSON.stringify(employees))
}






function displayData()
{
var cartona="";
//step 1  //step2
for(i=0;i<employees.length;i++)
{
  //step 3
cartona+=`<tr><td>`+employees[i].name+`</td><td>`+employees[i].age+`</td>
<td>`+employees[i].salary+`</td>
<td>`+employees[i].phone+`</td>
<td><button onclick="deleteEmployer(`+i+`)" class="btn btn-danger">delete</button></td><td><button onclick="getData(`+i+`)" class="btn ml-2 btn-primary">edit</button></td></tr>`
}

document.getElementById("employerData").innerHTML=cartona
}


function deleteEmployer(index)
{
  employees.splice(index,1)
  localStorage.setItem("employeList",JSON.stringify(employees))
  displayData()
}

function getData(index)
{
currentIndex=index
  empName.value=employees[index].name
  empAge.value=employees[index].age
  empSalary.value=employees[index].salary
  empPhone.value=employees[index].phone
  addEmployee.innerHTML="edit employee"
}

function editEmployer()
{
employees[currentIndex].name=empName.value
employees[currentIndex].age=empAge.value
employees[currentIndex].salary=empSalary.value
employees[currentIndex].phone=empPhone.value
}
function search(searchtxt)
{
  var search=""
  for(var i=0;i<employees.length;i++)
  {
    if(employees[i].name.toLowerCase().includes(searchtxt.toLowerCase()))
    {
      search+=`<tr><td>`+employees[i].name+`</td><td>`+employees[i].age+`</td>
      <td>`+employees[i].salary+`</td>
      <td>`+employees[i].phone+`</td>
      <td><button onclick="deleteEmployer(`+i+`)" 
      class="btn btn-danger">delete</button></td><td><button onclick="getData(`+i+`)"
       class="btn ml-2 btn-primary">edit</button></td></tr>`
    }
  }
  document.getElementById("employerData").innerHTML=search
}



































var closeIcon=document.getElementById("close");
var prevIcon=document.getElementById("prev");
var nextIcon=document.getElementById("next");
var lightBoxContainer=document.querySelector("#lightBoxContainer")
var lightContainer=document.querySelector("#lightBoxItem")
 var imgs=Array.from(document.getElementsByClassName("img-fluid"))
 var currentSlideIndex=0;
 
for(var i=0;i<imgs.length;i++)
{
imgs[i].addEventListener("click",openBox)
}
function openBox(e)
{
  lightBoxContainer.style.display="flex"
  var event=e.target.src
  lightContainer.style.backgroundImage=`url(${event})`
  currentSlideIndex= imgs.indexOf(e.target)
}



closeIcon.addEventListener("click",closeLightBox)

function closeLightBox(){
  lightBoxContainer.style.display="none"
}

nextIcon.addEventListener("click" , nextImg)

 function nextImg()
 {
   currentSlideIndex++;
   if(currentSlideIndex==imgs.length)
   {
     currentSlideIndex=0;
   }
    var imgSrc=imgs[currentSlideIndex];
   lightContainer.style.backgroundImage=`url(${imgSrc.src})`
 
   console.log(currentSlideIndex)
}

prevIcon.addEventListener("click" , prevImg)

function prevImg()
{
  currentSlideIndex--;
  if(currentSlideIndex<0)
  {
    currentSlideIndex=imgs.length-1
  }
  var imgSrc=imgs[currentSlideIndex];
  lightContainer.style.backgroundImage=`url(${imgSrc.src})`
}
document.addEventListener("keydown",function(e){
  if(e.keyCode==39)
  {
    nextImg()
  }

else if (e.keyCode==37)
{
prevImg()
}
else if (e.keyCode=27)
{
closeLightBox()
}
})

/*

//methods of API
//get get data from db
//post send data to db
//update update data from db
//patch update single data 
//delete data from db

var httpRequest=new XMLHttpRequest();
httpRequest.open("GET","https://forkify-api.herokuapp.com/api/search?q=pasta");
httpRequest.send();
httpRequest.readyState=0,1,2,3,4
var recipes=[]
//0 request initialized
//1 request established
//2 request sent to server
//3 server recieved and proceed
//4 response is ready
 httpRequest.addEventListener("readystatechange",function(){
   if (httpRequest.readyState==4)
   {
     recipes=(JSON.parse(httpRequest.response).recipes)
     displayRecipes()
   }
 })

 var recipesRow=document.getElementById("recipesRow")
 function displayRecipes()
 {
   var cartona=``
   for(i=0;i<recipes.length;i++)
   {
     cartona+=`
     <div class="col-md-3">
            <div>
                <img class="img-fluid imageRecipes" src="${recipes[i].image_url}">
                <h4>${recipes[i].title}</h4>
                <p>${recipes[i].publisher}</p>
                <button class="btn btn-primary"> go to publisher
                <a href="${recipes[i].source_url}"></a></button>
            </div>
        </div>`
   }
   recipesRow.innerHTML=cartona
 }

*/

 
/*function welcome(name="user name",age,salary)
{
  console.log(`welcome ya ${name} and your age is ${age} and your salary is ${salary}`)
}
welcome("abdo",25,7000)

var well=(username)=>
{
  return`welcome${username}`
}*/






















































