function getMaterial(){
    const diametrOfDetail = document.getElementById("Diametr");
    const highOfDetail = document.getElementById("High");
    const submitBtn=document.getElementById("submit");
    const resultElement = document.getElementById('result');
    const material=document.getElementById('material');
    let getMat = material.value;
    let price;
    if(getMat=="Сталь")
        price= 10;
    else if(getMat=="Медь")
        price= 7;
    else if(getMat=="Титан")
        price= 15;
    function calculateVolume(diametr, high, pr){
        let volume=Math.PI *(diametr/2)**2 * high*pr;
        return volume;
    }
    submitBtn.onclick = function () {
        const result=calculateVolume(diametrOfDetail.value, highOfDetail.value,price);
        resultElement.textContent= result.toFixed(3);
    }
}




