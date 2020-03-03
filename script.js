function MyCar (cor, velocidadeMaxima) {
    this.Cor = cor;
    this.VelocidadeMaxima = velocidadeMaxima;
    this.VelocidadeAtual = 0;
}
MyCar.prototype.Acelerar = function () {
    if (this.VelocidadeAtual <= this.VelocidadeMaxima) {
        this.VelocidadeAtual++;
    }
}
MyCar.prototype.Frear = function () {
    if (this.VelocidadeAtual > 0) {
        this.VelocidadeAtual--;
    }
}

let meuCarro = new MyCar('Preta', 10);
let meuFusca = new MyCar('Vermelha', 5);

var minhaFerrari = {
    
    Cor: "Amarela",
    VelocidadeMaxima: 300,
    VelocidadeAtual: 0,

    Acelerar: function () {
        if(this.VelocidadeAtual < this.VelocidadeMaxima) {
            this.VelocidadeAtual++;
        }
    }
}





document.getElementById("btn").addEventListener('click', ()=> {
    meuCarro.Acelerar();
    console.log('Meu Carro: ' + meuCarro.VelocidadeAtual);

    meuFusca.Acelerar();
    console.log('MeuFusca: ' + meuFusca.VelocidadeAtual); 
})

              