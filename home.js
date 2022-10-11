i=0;
function scroll_image_right(){
    if(i==0){
        document.getElementById("container-5").style.marginLeft='-35vw';
        document.getElementById("image-scroll-button1").style.display='block';
        document.getElementById("container-5").style.transition='all ease-out 0.5s';  
        i=1;
    }
    else if(i==1){
        document.getElementById("container-5").style.marginLeft='-70vw';
        document.getElementById("container-5").style.transition='all 0.5s'; 
        i=2;
    }
    else if(i==2){
        document.getElementById("container-5").style.marginLeft='-105vw';
        document.getElementById("container-5").style.transition='all 0.5s'; 
        i=3;
    }
    else if(i==3){
        document.getElementById("container-5").style.marginLeft='-140vw';
        document.getElementById("container-5").style.transition='all 0.5s'; 
        i=4;
    }
    else if(i==4){
        document.getElementById("container-5").style.marginLeft='-175vw';
        document.getElementById("image-scroll-button2").style.display='none';
        document.getElementById("container-5").style.transition='all 0.5s'; 
        i=5;
    }
}

function scroll_image_left(){
    if(i==5){
        document.getElementById("container-5").style.marginLeft='-140vw';
        document.getElementById("image-scroll-button2").style.display='block';
        document.getElementById("container-5").style.transition='all 0.5s'; 
        i=4;
   }
    else if(i==4){
        document.getElementById("container-5").style.marginLeft='-105vw';
        document.getElementById("container-5").style.transition='all 0.5s'; 
        i=3;
   }
   else if(i==3){
        document.getElementById("container-5").style.marginLeft='-70vw';
        document.getElementById("container-5").style.transition='all 0.5s'; 
        i=2;
   }
   else if(i==2){
    document.getElementById("container-5").style.marginLeft='-35vw';
    document.getElementById("container-5").style.transition='all 0.5s';    
    i=1;
   }
   else if(i==1){
    document.getElementById("container-5").style.marginLeft='-2vw';
    document.getElementById("image-scroll-button1").style.display='none';
    document.getElementById("container-5").style.transition='all 0.5s';    
    i=0;
   }
}