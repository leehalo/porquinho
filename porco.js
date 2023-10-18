var PorquinhoDigital = /** @class */ (function () {
    function PorquinhoDigital(saldoInicial, objetivo) {
        this.saldo = saldoInicial;
        this.objetivo = objetivo;
    }
    PorquinhoDigital.prototype.depositar = function (valor) {
        this.saldo += valor;
    };
    PorquinhoDigital.prototype.retirar = function (valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
        }
        else {
            console.log("Não há saldo suficiente para esta retirada.");
        }
    };
    PorquinhoDigital.prototype.definirObjetivo = function (valor) {
        this.objetivo = valor;
    };
    PorquinhoDigital.prototype.verificarProgresso = function () {
        var progresso = this.saldo / this.objetivo;
        if (progresso >= 1) {
            console.log("Parabéns! Você alcançou seu objetivo.");
        }
        else {
            console.log("Voc\u00EA alcan\u00E7ou ".concat(progresso * 100, "% do seu objetivo."));
        }
    };
    return PorquinhoDigital;
}());
// Exemplo de uso da classe PorquinhoDigital
var meuPorquinho = new PorquinhoDigital(100, 1000); // Saldo inicial de 100 e objetivo de 1000
meuPorquinho.depositar(500);
meuPorquinho.retirar(60);
meuPorquinho.verificarProgresso(); // Deve mostrar o progresso atual
