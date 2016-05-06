# cpf-cli

> Formatar, gerar ou validar um CPF via linha de comando.

## Instalação

Via linha de comando com [NPM](https://npmjs.com/):

```
$ npm install --global cpf-cli
```

## Uso

```
cpf [opções] <número>
Tente `cpf --ajuda` para mais informações.
```

Veja alguns exemplos:

```sh
$ cpf 111.444.777-35          # Válido
$ cpf --formatar 11144477735  # 111.444.777-35
```

Use `cpf` (sem argumentos) para gerar um CPF aleatório válido.

## Licença

[MIT](http://theuves.mit-license.org/) &copy; [Matheus Alves](http://github.com/theuves)
