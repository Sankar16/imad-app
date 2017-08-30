console.log('Loaded!');
//Change text
var element= document.getElementById('main-text');
element.innerHTML='Yo Logang';

//move image
var img=document.getElementById('Img1');
var marginLeft=0;
function moveRight(){
  marginLeft=marginLeft+10;  
  img.style.marginLeft=marginLeft+'px';
}
img.onclick=function(){
    var interval=setInterval(moveRight,100);

};