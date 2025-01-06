function getDetal(){
    const diametrOfDetail = document.getElementById("Diametr");
    const highOfDetail = document.getElementById("High");
    const variantOfDetail=myForm2.variant.value; 
    const submitBtn=document.getElementById("submit");
    const resultElement = document.getElementById('result');
    const detal=document.getElementById('detal');
    const material=document.getElementById('material');
    const price = document.getElementById('Price');
    const radioButton=document.myForm2.variant;
    let priceOfKg=price.value;
    let getType = detal.value;
    let getMat=material.value;
    let di=+diametrOfDetail.value;
    let hi=+highOfDetail.value;
    let choosedVariant=1;
    let density=1;
    console.log(getMat);
    if(getMat=="Сталь")
        density=2;
    else if(getMat=="Титан")
        density=3;
    else if(getMat=="Латунь")
        density=4;
    console.log(density);
    if(getType=="Болт"){
        if (variantOfDetail==="Круг"){
            choosedVariant=calculateVolumeCircle(di/1000,hi*10,density,priceOfKg);
        }else{
            choosedVariant=calculateShestBolt(di,hi,density,priceOfKg);
        }
    }else if(getType=="Гайка"){
        if (variantOfDetail=="Круг"){
            choosedVariant=calculateVolumeCircle(di/1000,hi,density,priceOfKg);
        }else{
            choosedVariant=calculateShestGaika(di,density,priceOfKg);
        }
    }else{
        choosedVariant=calculateVolumeCircle(di/1000,hi*10,density,priceOfKg);
    }
    submitBtn.onclick = function () {
        const result=choosedVariant.toFixed(3);
        let fullresult=variantOfDetail +": "+ String(result) + " руб.";
        resultElement.textContent= fullresult;
        radioButton.forEach(radio=>{
            radio.checked=false;
        })
    }
}
function calculateVolumeCircle(diametr, high, density, price){
    
    let volume=Math.PI *(diametr/2)**2 * high*density*price;
    return volume;
}
function calculateShestBolt(diametr, high, density,price){
    let volume=(0.8*diametr+high)/1000*density*price;
    return volume;
}
function calculateShestGaika(diametr, density, price){
    let volume=(0.8*diametr)/1000*density*price;
    return volume;
}


