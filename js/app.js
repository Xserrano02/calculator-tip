document.getElementById("five-porcent").addEventListener('click', (e)=>{
    var input =parseInt(document.getElementById("bill").value);
    let person = parseInt(document.getElementById("person").value);

    let result = input *0.05 /person ;
    let total =result*person + input;

    document.getElementById("tip").value = result;
    document.getElementById("total").value = total/person;
})

 document.getElementById("ten-porcent").addEventListener('click', (e)=>{
    var input =parseInt(document.getElementById("bill").value);
    let person = parseInt(document.getElementById("person").value);

    let result = input *0.10 /person ;
    let total =result*person + input;

    document.getElementById("tip").value = result;
    document.getElementById("total").value = total/person;
})

document.getElementById("fif-porcent").addEventListener('click', (e)=>{
    var input =parseInt(document.getElementById("bill").value);
    let person = parseInt(document.getElementById("person").value);

    let result = input *0.15 /person ;
    let total =result*person + input;

    document.getElementById("tip").value = result;
    document.getElementById("total").value = total/person;
})

document.getElementById("twenfi-porcent").addEventListener('click', (e)=>{
    var input =parseInt(document.getElementById("bill").value);
    let person = parseInt(document.getElementById("person").value);

    let result = input *0.25 /person ;
    let total =result*person + input;

    document.getElementById("tip").value = result;
    document.getElementById("total").value = total/person;
})

document.getElementById("fift-porcent").addEventListener('click', (e)=>{
    var input =parseInt(document.getElementById("bill").value);
    let person = parseInt(document.getElementById("person").value);

    let result = input *0.50 /person ;
    let total =result*person + input;

    document.getElementById("tip").value = result;
    document.getElementById("total").value = total/person;
})

document.getElementById("custom-input").addEventListener('click', (e)=>{
    var input =parseInt(document.getElementById("bill").value);
    let person = parseInt(document.getElementById("person").value);
    let custom = parseInt(document.getElementById("custom-input").value);


    let result = input * custom/100 / person ;
    let total =result*person + input;

    document.getElementById("tip").value = result;
    document.getElementById("total").value = total/person;
})
function reset(){
    var input =parseInt(document.getElementById("bill").value = '');
    let person = parseInt(document.getElementById("person").value = '');
    document.getElementById("tip").value = '';
    document.getElementById("total").value = '';
}
