function getMaterial(){
    const diametrOfDetail = document.getElementById("Diametr");
    const highOfDetail = document.getElementById("High");
    const variantOfDetail=myForm2.variant.value; 
    const submitBtn=document.getElementById("submit");
    const resultElement = document.getElementById('result');
    const material=document.getElementById('material');
    const price = document.getElementById('Price');
    const radioButton=document.myForm2.variant;
    let priceOfKg=price.value;
    let getMat = material.value;
    let di=+diametrOfDetail.value;
    let hi=+highOfDetail.value;
    console.log(getMat);
    console.log(variantOfDetail);
    console.log(priceOfKg);
    let choosedVariant=1;
    if(getMat==="Болт"){
        if (variantOfDetail==="Круг"){
            choosedVariant=calculateVolumeCircle(di/1000,hi/1000,priceOfKg);
        }else{
            choosedVariant=calculateShestBolt(di,hi,priceOfKg);
        }
    }else if(getMat=="Гайка"){
        if (variantOfDetail=="Круг"){
            choosedVariant=calculateVolumeCircle(di/1000,hi/1000,priceOfKg);
        }else{
            choosedVariant=calculateShestGaika(di,priceOfKg);
        }
    }else{
        choosedVariant=calculateVolumeCircle(di/1000,hi/1000,priceOfKg);
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
function calculateVolumeCircle(diametr, high, price){
    
    let volume=Math.PI *(diametr/2)**2 * high*2.45*price;
    console.log(Math.PI *(diametr/2)**2 * high*2.45*price);
    return volume;
}
function calculateShestBolt(diametr, high,price){
    let volume=(0.8*diametr+high)/1000*2.45*price;
    return volume;
}
function calculateShestGaika(diametr,price){
    let volume=(0.8*diametr)/1000*2.45*price;
    console.log(0.8*diametr)/1000;
    return volume;
}


