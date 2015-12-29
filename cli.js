#!/usr/bin/env node

'use strict';

var CPF = require('cpf');

if (process.argv.indexOf('--versão') !== -1) {
    var version = require('package.json').version;

    console.log(version);
} else if (process.argv.indexOf('--ajuda') !== -1) {
    var ajuda = [
        '',
        '  Uso: cpf [opções] [número]',
        '',
        '  Opções:',
        '',
        '    -f, --formatar  Formatar um CPF.',
        '        --versão    Exibir a versão.',
        '        --ajuda     Exibir está ajuda.',
        ''
    ];
    ajuda = ajuda.join('\n');
    console.log(ajuda);
} else {
    if (process.argv.length === 2) {
        console.log(CPF.gerar());
    } else if (process.argv.length === 3) {
        var numero = process.argv[2],
            val = CPF.validar(numero);

        if (val) {
            val = 'Válido';
        } else {
            val = 'Inválido';
        }

        console.log(val);
    } else {
        var argv1 = process.argv[2],
            argv2 = process.argv[3];

        if (argv1 === '-f' || argv1 === '--formatar') {
            console.log(CPF.formatar(argv2));
        } else {
            console.log(CPF.formatar(argv1));
        }
    }
}
