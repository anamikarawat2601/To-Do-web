//
console.log('welcome to to-do-app');

const taskname = document.querySelector("#taskname");
const tasklist = document.querySelector("#tasklist");
const btn = document.querySelector("#submitbtn");

btn.addEventListener("click", function() {
    if (taskname.value === '') {
        alert("YOU must write something");
    } else {
        let li = document.createElement("li");
        li.innerText = taskname.value;
        tasklist.appendChild(li);

        // Adding a span for delete button
        let span = document.createElement("span");
        span.innerText = "\u00d7";
        li.appendChild(span);

        // Add 'unchecked' image via CSS pseudo-element
        li.classList.add('unchecked');
    }
    taskname.value = "";
    savedata();
});

tasklist.addEventListener("click", function(e) {
    // Toggle checked status
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        savedata();
    } 
    // Remove the task if the 'x' (span) is clicked
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata() {
    localStorage.setItem("data", tasklist.innerHTML);
}

function showtask() {
    tasklist.innerHTML = localStorage.getItem("data");
}
showtask();

/*console.log('welcome to to-do-app')

const taskname=document.querySelector("#taskname");
const tasklist=document.querySelector("#tasklist");
const btn=document.querySelector("#submitbtn")
let tasks=[];
let id=1;
btn.addEventListener("click",function(){
    if(taskname.value===''){
        alert("YOU must write something");
    }else{
        let li=document.createElement("li");
        li.innerText=taskname.value;
          tasklist.appendChild(li);
          let span=document.createElement("span");
           span.innerText="\u00d7";
           li.appendChild(span);
           
    }
    taskname.value="";
    savedata();
})
tasklist.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata()
    }else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        savedata()
    }
},false)
 
function savedata(){
    localStorage.setItem("data",tasklist.innerHTML);

}

function showtask(){
    tasklist.innerHTML=localStorage.getItem("data");
}
showtask()*/
/*btn.addEventListener("click",function(e){
    if(e.value===''){
        alert("YOU must write something");
    }
    if(e.key==="Enter"){
        let obj={};
        obj.title=taskname.value;
        obj.status="pending"
        obj.id=id;
        id++;
        tasks.push(obj);
        addom(obj);
        taskname.value=" ";
        console.log(tasks);
    }
})
/*function addom(){                                                             //simple
    let li=document.createElement("li");
    li.innerText=taskname.value;
   // tasklist.append(li);
    let taskdiv=document.createElement("div");
    let span=document.createElement("span")
    span.innerText=taskname.value;

    taskdiv.append(span);
    tasklist.append(taskdiv);


}*/
/*function addom(task){
    let taskdiv=document.createElement("div");
    taskdiv.setAttribute("id", task.taskid);//doubt
    let span=document.createElement("span")
    span.innerText=task.title
    let chk=document.createElement("input")
    chk.setAttribute("type","checkbox")
    chk.addEventListener("click",function(){
        let newstatus="pending";
        if(chk.checked==true){
            span.style.textDecoration="line-through";
                 newstatus="Complete";   
        }else{
            span.style.textDecoration="none";
        }

        tasks=tasks.map(function(item){
            if(item.taskid==task.taskid)
                item.status=newstatus;

            return item;

        })
        console.log(tasks);
        

    })
    let delbtn=document.createElement("button")
    delbtn.innerText="del";
    delbtn.addEventListener("click",function(){
        span.innerText='';

    })

    taskdiv.append(span);
    taskdiv.append(chk);
    taskdiv.append(delbtn);
    tasklist.append(taskdiv);

}
/*function addom(task){
  let taskdiv=document.createElement("div");
  let span=document.createElement("span");
  let chk=document.createElement("input");
  chk.setAttribute("type","checkbox");
  chk.addEventListener("click",function(){
    if(chk.checked){
        status="complete";

    }else{

    }
  })
  let delbutton=document.createElement("button");
  delbutton.innerText=del;
  delbutton.addEventListener("click",function(){

  })
  span.innerText=task.title;
  taskdiv.append(span);
  tasklist.append(taskdiv);
}*/
/**
 // function addtoDom()
// {
//     // let li=document.createElement("li");
//     // li.innerText=taskname.value;

//     // taskList.append(li);

//     let taskdiv=document.createElement("div");

//     let span=document.createElement("span");
//     span.innerText=taskname.value;

//     taskdiv.append(span);

//     taskList.append(taskdiv);
 */