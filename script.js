
let number_increment =  document.getElementsByClassName('box');

console.log(number_increment);

let arr =  Array.from(number_increment);

arr.forEach((element, index)=>{
    let h2 = document.querySelectorAll('h2');
    let val = Array.from(h2);
    console.log(arr)
    let time = 3000;
    let startvalue = 0;
    let endvalue =  element.getAttribute('data-val');
    let duration = (time / endvalue);
    
   let interval =  setInterval(( )=>{ 
        startvalue = startvalue + 1;
        console.log(startvalue)
        h2[index].innerText = `${startvalue}+`;
        if(startvalue == endvalue){
            clearInterval(interval);
        }
    }, 
       duration)
})