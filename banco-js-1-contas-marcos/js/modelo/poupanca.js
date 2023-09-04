class Poupanca extends Conta{
    constructor(dataAniversario, jurosMes){
        super(dataAniversario, jurosMes);
    }

    juros(valor){    
        super.juros(valor * 0.05);
    }
}