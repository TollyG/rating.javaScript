
// var selectedNumber = 0;
const showContentBtn = document.getElementById("showcontent");
const contentOne = document.getElementById("first-main")
const contentTwo = document.getElementById("second-main")
const divs = document.getElementsByClassName(".flex-conatiner")

// divs.forEach( div =>{
//     div.addEventListener("click", function(){
//         selectedNumber = parseInt(div.getAttribute("id"));
//         // console.log("Selected number:", selectedNumber);

    
// // Reset styles and apply 'selected' class to clicked div\
//     // div.classList.add("selected");
//     // divs.forEach(d => d.classList.remove("selected"));
   

//     });
//    })

showContentBtn.addEventListener("click", function(){
    contentOne.style.display = "none";
    contentTwo.style.display = "block";
    // document.getElementById("number").textContent = selectedNumber;
    // if (selectedNumber > 0) {
    //     contentOne.style.display = "none";
    //     contentTwo.style.display = "block";
    //     document.getElementById("number").textContent = selectedNumber;
    //     console.log("Content displayed with number:", selectedNumber); 
    // } else {
    //     alert("Please select a number before submitting!");
    // }
});

const selectedNumber = document.getElementsByClassName("star");
const contentNumber = document.getElementById("content");

var number = divs
var feedBackNumber = [1, 2, 3, 4, 5];

divs.addEventListener("click", function(){
    if (feedBackNumber.includes(divs)){
        contentNumber.innerHTML = "You selected" + " " + feedBackNumber + " " + "out of 5";
    }
})


// function nbr(){
//     remove();
//     for (let i = 0; i < n; i++) {
//       if (n === 1) cls = "1";
//       else if (n === 2) cls = "2";
//       else if (n === 3) cls = "3";
//       else if (n === 4) cls = "4";
//       else if (n === 5) cls = "5";
//       stars[i].className = "star" + cls;
//     }
//    contentNumber.innerText = "You selected" + " " + n + " " + "out of 5";
// }

// function remove(){
//     var i = 0;
//     while (i < 5){
//         stars[i].className = "star";
//         i++;
//     }
// }



