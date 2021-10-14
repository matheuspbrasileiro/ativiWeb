function calculo(){
    const peso =  parseInt(document.formImc.numPeso.value);
    const alturaAux = document.formImc.numAltura.value;
    const altura = parseFloat(alturaAux.replace(',', '.'));
    const imc = peso / (altura**2);
    

    if (imc < 18.5) {
        situacao = 'Magreza';
    } else if (imc >= 18.5 && imc <= 24.9) {
        situacao = 'Normal';
    } else if (imc > 24.9 && imc <= 30) {
        situacao = 'Sobrepeso';
    } else {
        situacao = 'Obesidade';
    }

    const spanResultado = document.getElementById("resultado");   
    spanResultado.innerHTML = situacao;
    
}