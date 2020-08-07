describe("Suíte de teste de divisão", function(){

    var Calculadora = require('../../src/js/calculadora.js');

    it('deve retornar 2 para 6 e 3', function(){
        expect(Calculadora.dividir(6, 3)).toEqual(2);
    })

    it("deve retornar 2 para 6 e 3 no formato texto", function(){
        expect(Calculadora.dividir('10','2')).toEqual(5)
    })

    it("deve retotnar 1.5 para 4,5 e 3", function(){
        expect(Calculadora.dividir(4.5, 3)).toEqual(1.5);
    });

    it("deve retotnar 2.5 para 10 e 5 divisao por numeros decimais", function(){
        expect(Calculadora.dividir(10, 5)).toEqual(2,5);
    });

    it("deve verificar dividendo menor que divisor", function(){
        expect(Calculadora.dividir(4, 10)).toEqual(0.4);
    })

    it("deve verificar o valor 1 invalido", function(){
        expect(Calculadora.dividir(undefined, 10)).toEqual(0);
    });

    it("deve verificar o valor 2 invalido", function(){
        expect(Calculadora.dividir( 10, undefined)).toEqual(0);
    });

    it("deve verificar divisão por zero", function(){
        expect(Calculadora.dividir( 10, 0)).toEqual('Impossivel dividir por zero');
    });

   

})