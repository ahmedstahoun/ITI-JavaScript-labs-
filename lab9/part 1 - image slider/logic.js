var nextBtn = document.querySelector(".next"),
prevBtn = document.querySelector(".previous"),
child=document.getElementsByClassName("child")
left = document.querySelector("#left"),
middle = document.querySelector("#middle"),
right=document.querySelector("#right")


nextBtn.addEventListener("click",nextHandler);
prevBtn.addEventListener("click",prevHandler);

function nextHandler() {


    for(let i=0;i<child.length; i++)
    {
        if(i==2)
        {
            if(Number(child[i].innerHTML)< 6)
               {
                child[i].innerHTML=Number(child[i].innerHTML)+1;
               } 
               else{
                    child[i].innerHTML=1;
               }        
            
        }
        else{
            child[i].innerHTML=child[i+1].innerHTML;
        }
        
       
        
    }
}



function prevHandler(){

    for(let i=0;i<child.length; i++)
    {
    if(i==2)
    {
        if(Number(child[child.length-i-1].innerHTML)> 1)
           {
            child[child.length-i-1].innerHTML=Number(child[child.length-i-1].innerHTML)-1;
           } 
           else{
                child[child.length-i-1].innerHTML=6;
           }        
        
    }
    else{
        child[child.length-i-1].innerHTML=child[child.length-i-2].innerHTML;
    }
    
   
    
}
}


setInterval(nextHandler,2000);