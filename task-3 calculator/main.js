let string = "";
let buttons = document.querySelectorAll('.btn');
buttons.forEach(function (button){
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }else if(e.target.innerHTML == 'AC'){
            string = "";
            document.querySelector('input').value = string;
        }else if(e.target.innerHTML == 'del'){
            string = string.slice(0,-1);
            document.querySelector('input').value = string;
        }else if(e.target.innerHTML == '%'){
            string = string + "/100";
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else{
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})