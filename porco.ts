class PorquinhoDigital {
    saldo: number;
    objetivo: number;
  
    constructor(saldoInicial: number, objetivo: number) {
      this.saldo = saldoInicial;
      this.objetivo = objetivo;
    }
  
    depositar(valor: number): void {
      this.saldo += valor;
    }
  
    retirar(valor: number): void {
      if (valor <= this.saldo) {
        this.saldo -= valor;
      } else {
        console.log("Não há saldo suficiente para esta retirada.");
      }
    }
  
    definirObjetivo(valor: number): void {
      this.objetivo = valor;
    }
  
    verificarProgresso(): void {
      const progresso = this.saldo / this.objetivo;
      if (progresso >= 1) {
        console.log("Parabéns! Você alcançou seu objetivo.");
      } else {
        console.log(`Você alcançou ${progresso * 100}% do seu objetivo.`);
      }
    }
  }
  
  // Exemplo de uso da classe PorquinhoDigital
  const meuPorquinho = new PorquinhoDigital(100, 1000); // Saldo inicial de 100 e objetivo de 1000
  
  meuPorquinho.depositar(500);
  meuPorquinho.retirar(60);
  meuPorquinho.verificarProgresso(); // Deve mostrar o progresso atual
  
  