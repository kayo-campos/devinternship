DROP TABLE IF EXISTS tbl_tipos_pessoas;
DROP TABLE IF EXISTS tbl_pessoas;

CREATE TABLE IF NOT EXISTS tbl_tipos_pessoas (
	id SERIAL PRIMARY KEY,
	descricao VARCHAR(8)
);

CREATE TABLE IF NOT EXISTS tbl_pessoas (
	id SERIAL PRIMARY KEY,
	nome VARCHAR(30) NOT NULL,
	email VARCHAR(30) NOT NULL,
	telefone VARCHAR(15),
	tipo_id INT references tbl_tipos_pessoas(id),
	CONSTRAINT validate_telefone CHECK (	
		telefone SIMILAR TO '\(([0-9]{2})\)([0-9]{4})\.([0-9]{4})'
		OR
		telefone SIMILAR TO '\(([0-9]{2})\)([0-9]{3})\.([0-9]{3})\.([0-9]{3})'
	),
	CONSTRAINT validate_email CHECK (
		email SIMILAR TO '[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}'
	)
);

INSERT INTO tbl_tipos_pessoas (descricao)
VALUES ('Física'), ('Jurídica');

INSERT INTO tbl_pessoas (nome, email, telefone, tipo_id)
VALUES	
-- ACCEPTED VALUES
		('Francisco', '(85)123.456.789', 'francisco@gmail.com', 1),
		('João', '(85)1234.5678', 'joao@gmail.com', 1),
		('Pizzaria do João', '(85)123.456.789', 'contato@pizzariadojoao.com', 2);
-- REFUSED VALUES
--		('Kleber', 'email3@email.com', '(800)8080.10000', 2),
--		('Jhonatan', 'not-an_email.com', '(85)8080.8080', 1),
--		('Jackson', 'invalid@email.coooooom', '(88)808.808.808', 2)