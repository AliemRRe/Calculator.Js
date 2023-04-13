var display = document.querySelector('input');
var buttons=document.querySelectorAll('button');

buttons.forEach((item)=>{
    item.onclick=()=>{
        if(item.id=='clear'){
            display.value='';
        }
        else if(item.id=='backspace'){
            var string=display.value.toString();
            display.value=string.substr(0,string.length-1);   
        }
        else if(display.value!='' && item.id=='equal'){
            display.value=eval(display.value);
        }
        else if(display.value == '' && item.id == 'equal'){
            display.value='Sayı giriniz...';
            setTimeout(() => {
                display.value='';
            }, 5000);
        }
        else{
            display.value+=item.id;
        }
    }
})