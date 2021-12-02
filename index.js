let linkel=document.getElementById("link-el")
let name=document.getElementById("name")
//const btn=document.getElementById("btn")
let closebtn=document.getElementById('closebtn1')
let btn1=document.getElementById('btn1')
let inputbtn=document.getElementById('btn2')
let today=new Date();
let date=today.getDate()+"-"+today.getMonth()+"-"+today.getFullYear();
let final=[]



function clean(){


  name.value=""
  linkel.value=""
}



   function save(){
    if (name.value !="" && linkel.value !=""){
      entries=" "
  var table=document.getElementById("table");
  var row = table.insertRow(1);
  var c1=row.insertCell(0);
  var c2=row.insertCell(1);
  var c3=row.insertCell(2);

  c1.innerHTML = name.value;
c2.innerHTML = "<a href='linkel.value'>"+linkel.value+"</a>";
time=
c3.innerHTML=date;
 entries= name.value+ " "+ linkel.value+" "+date
final.push(entries)
console.log(entries)
console.log(final)
clean()
}
}


function closing() {
  name.value="closing";
  window.close()
}

btn1.addEventListener("click" , save)
inputbtn.addEventListener("click", clean)
closebtn1.addEventListener("click", closing)

// const savebtn=document.getElementById("btn1")
// const clrbtn=document.getElementById("btn2")
// const closebtn=document.getElementById("closebtn1")
//
// savebtn.addEventListner("click",function(){
//   if (name.value !="" && linkel.value !=""){
//     entries=" "
// var table=document.getElementById("table");
// var row = table.insertRow(1);
// var c1=row.insertCell(0);
// var c2=row.insertCell(1);
// var c3=row.insertCell(2);
//
// c1.innerHTML = name.value;
// c2.innerHTML = "<a href='linkel.value'>"+linkel.value+"</a>";
// time=
// c3.innerHTML=date;
// entries= name.value+ " "+ linkel.value+" "+date
// final.push(entries)
// console.log(entries)
// console.log(final)
// clean()
// }})
// closebtn1.addEventListner("click", function(){
//  window.close()
// });
