describe("Suíte de teste de adição", function(){

    var Calculadora = require('../../src/js/calculadora.js');

    it('deve retornar 5 para 2 e 3', function(){
        expect(Calculadora.adicionar(2,3)).toEqual(5);
    });

    it('deve retornar 6 para e 9 e -3 no formato testo', function(){
        expect(Calculadora.adicionar('9', '-3')).toEqual(6);
    });

    it('deve retornar 4.5 para 1.5 e 3', function(){
        expect(Calculadora.adicionar(1.5, 3)).toEqual(4.5);
    });

    it('deve retornar 0 quando valor 1 nao for númerico', function(){
        expect(Calculadora.adicionar(undefined, 10)).toEqual(0);
    });

    it('deve retornar 0 quando valor 2 nao for númerico', function(){
        expect(Calculadora.adicionar(10, undefined)).toEqual(0);
    })
})