#!/usr/bin/env node

'use strict';

var CPF = require('cpf');

function option(opcao) {
    if (process.argv.indexOf(opcao) !== -1) {
        return true;
    } else {
        return false;
    }
}

var formatar;

if (option('-f') || option('--formatar')) {
    formatar = true;
} else {
    formatar = false;
}

if (option('--versão') || option('--versao')) {
    var version = require('./package.json').version;

    console.log(version);
} else if (option('--ajuda')) {
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
    } else if (!formatar) {
        var numero = process.argv[2],
            val = CPF.validar(numero);

        if (val) {
            val = 'Válido';
        } else {
            val = 'Inválido';
        }

        if (/^--?/.test(numero)) {
            console.log(CPF.gerar());
        } else {
            console.log(val);
        }
    } else {
        var argv1 = process.argv[2],
            argv2 = process.argv[3],
            arg;

        if (argv1 === '-f' || argv1 === '--formatar') {
            arg = argv2;
        } else {
            arg = argv1;
        }

        if (/^--?/.test(arg)) {
            console.log(CPF.gerar());
        } else {
            var formatado = CPF.formatar(arg);

            if (formatado === undefined) {
                console.log('Inválido');
            } else {
                console.log(formatado);
            }
        }
    }
}
