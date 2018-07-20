# DBA

##### Este branch é a resposta da parte 2.1 do devinternship test, a qual consiste em:
> Desenvolva um script SQL (postgres) que cria tabelas e insira os dados iniciais em cada um dos esquemas do banco.
> ### Segue tabela e dados:
> #### tabela tipos_pessoa:
> id, descricao
> #### tabela pessoas:
> nome, telefone, email, tipo_id
> --> sendo tipo_id uma relaçao com a tabela tipos_pessoa.
> validação:
> o campo telefone só permite os formatos:
> (XX)XXXX.XXXX
> ou
> (XX)XXX.XXX.XXX

> ##### dados para a tabela tipos_pessoa:
> - id: 1, descricao: 'Física';
> - id: 2, descricao: 'Jurídica';

> ##### dados para a tabela pessoas:
> - Francisco, (85)123.456.789, francisco@gmail.com, 1;
> - João, (85)1234.5678, joao@gmail.com, 1;
> - Pizzaria do João, (85)123.456.789, contato@pizzariadojoao.com, 2;