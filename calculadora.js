function calcu (){
    let porcentagem = parseFloat(document.getElementById('porcentagem').value.replace(",", "."));
    let valor = parseFloat(document.getElementById("valor").value.replace(",", " "));
    
    let resultado = (porcentagem * valor) / 100;

    document.getElementById("comissao").textContent = `Sua comissão vai ser: R$${resultado.toFixed(2)}`;
    
    console.log(porcentagem);
    console.log(valor);
}
