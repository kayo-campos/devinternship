# BACK

#### Esta branch contém a resposta para a parte 2.2 do devinternship test, que consiste em:

> Utilizando qualquer linguagem (sugestão: javascript) e qualquer servidor web (sugestão: Nginx), desenvolva uma aplicação web que:
> - Receba uma requisição http GET​ e retorne os dados da tabela pessoas em JSON.
> - Receba uma requisição http POST​ contendo JSON (body/raw) e salve esses dados na tabela pessoas.
> #####IMPORTANTE: Não​ precisa​ usar a sugestão. Feito é melhor do que perfeito.

#### How it works

- Clone a banch, instale as dependências
`$ npm install`
- Suba o servidor
`$ npm start`

Para fazer a requisição GET:
`localhost:3000/get`

Para fazer a requisição POST:
`localhost:3000/post`

Exemplo de JSON para POST:
```json
{
	"nome": "Joaquim",
	"telefone": "(92)9999.9999",
	"email": "joaquim@email.com",
	"tipo_id": 1
}
```
