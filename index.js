// Declaration
let message = document.querySelector(".message"),
    starContainer = document.querySelectorAll(".star-container i"),
    submitBtn = document.querySelector(".submit-button button"),
    feedBack = document.querySelector(".feed-back"),
    deviceType = "",
    events = {
        touch : {over:"touchStart"},
        mouse : {over: "click"}
    }
     activeStars = []

// Device Type
let isTouch = ()=>{
try {
    document.createEvent("TouchEvent")
    deviceType = "touch"
    console.log("touch")
    return true
} catch (error) {
    deviceType = "mouse"
    return false
}
}
isTouch()

// eventListener for Stars
starContainer.forEach((star , index) => {
    star.addEventListener(`${events[deviceType].over}`,()=>{
        if (star.classList.contains("inactive")) {
            fillFuction(0,index,true)
            
            // console.log(counter)
            
        }else{
            fillFuction(index ,starContainer.length -1 ,false)
            
           
        }
      
    })
})

let fillFuction = (start , end , inactive)=>{
   for (let index = start ; index <= end; index++) {
    if (inactive) {
        starContainer[index].className = "fa-solid fa-star"
        starContainer[index].classList.add("active")
        
        // starContainer[index].classList.remove("inactive")  
    }else{
        
        starContainer[index].className = "fa-regular fa-star"
        starContainer[index].classList.add("inactive")
       
        // starContainer[index+1].classList.remove("active")
        
    }
    
   }
   let activeStars = document.getElementsByClassName("active")
   typeMessage(activeStars.length)
   
}


let typeMessage = (length)=>{
    switch (length) {
        case 1:
            message.innerHTML = "Terrible"
            break;
        case 2 :
            message.innerHTML = "Good"
            break;
        case 3 :
           message.innerHTML = "Very Good"
            break;
        case 4 :
           message.innerHTML = "Excellent"
            break;
        case 5 :
            message.innerHTML = "Perfect"
            break;
        default:
            break;
    }
}
submitBtn.addEventListener('click',()=>{
    let activeFeed = document.getElementsByClassName("active")
     if (activeFeed.length == 0) {
        alert("Please Rate Our Sevice")
     }else{
        feedBack.classList.add("show")
     }
})
// let submitMessage = (length)=>{
//   if (length > 0) {
//     feedBack.classList.add("show")
//   }else{
//     alert("Please Rate Our Sevice")
//   }
// }   
            
            
// switch (counter) {
//     case 1:
//         message.innerText = "bad"
//         break;

//     default:
//         break;
// }