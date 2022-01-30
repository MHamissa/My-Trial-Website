var menu=document.querySelectorAll('.menu');
var content=document.querySelectorAll('p');

for (let i=0;i<menu.length;i++) {
    
   menu[i].onmouseover=function(){
    menu[i].classList.toggle('active');
};
  menu[i].onmouseout=function(){
    menu[i].classList.toggle('active');
};
}
menu[0].onclick=function(){
  
  for (let i=0; i<content.length;i++) {
    content[i].style.display="none";
  }
   document.getElementById('logos').style.display="flex";
  document.getElementById('home').style.display="flex";
  document.getElementById('home').style.flexDirection="row";
  document.getElementById('left').style.display="flex";
  document.getElementById('right').style.display="flex";
  document.getElementById('first').style.display="flex";
  document.getElementById('third').style.display="none";


};
menu[1].onclick=function(){
 for (let i=0; i<content.length;i++) {
    content[i].style.display="none";

  }
      

  document.getElementById('aboutMe').style.display="block";
  document.getElementById('logos').style.display="none";
};
menu[2].onclick=function(){
  for (let i=0; i<content.length;i++) {
    content[i].style.display="none";
  }
   document.getElementById('logos').style.display="none";

  document.getElementById('contactMe').style.display="flex";
  
};
var first=   document.getElementById('first');
var second=   document.getElementById('second');
var third=   document.getElementById('third');


var logos=[first,second,third];
document.getElementById('left').onclick=function(){
 for (let i=0;i<logos.length;i++) {
    if (logos[i].style.display==="flex") {
     if (i+1===logos.length) {
                logos[0].style.display="flex";
logos[i].style.display="none";
     }else{
        logos[i+1].style.display="flex";
        logos[i].style.display="none";
        }
break;
    }else{
     
     continue;
    }
 }
};
document.getElementById('right').onclick=function(){
 for (let i=2;i>-1;i--) {
    if (logos[i].style.display==="flex") {
     if (i-1===-1) {
                logos[2].style.display="flex";
logos[i].style.display="none";
     }else{
        logos[i-1].style.display="flex";
        logos[i].style.display="none";
        }
break;
    }else{
     
     continue;
    }
 }
};

