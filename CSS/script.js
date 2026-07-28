const button =document.getElementById("btn");
const more= document.getElementById("more");

button.addEventListener("click", function () {
    if(more.style.display === "none"){
        more.style.display="block";
        button.textContent="show less";
    }else{
        more.style.display="none";
        button.textcontent="show more";
    }
    
});
const interests=["web development","music","sleeping","travelling"];
const list=document.getElementById("interests");
interests.forEach(function(interest){
    const li=document.createElement("li");
    li.textcontent =interest;
    list.appendChild(li);
});
    
