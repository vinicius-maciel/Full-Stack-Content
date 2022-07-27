ALTER TABLE empresas MODIFY cnpj VARCHAR(14);

INSERT INTO empresas
    (nome, cnpj)
VALUES
    ('Bradesco', 08446815000100),
    ('Vale', 45594444000130),
    ('Cielo', 76340939000167);

desc empresas;
desc prefeitos;
select * from empresas;
select * from cidades;

INSERT INTO empresas_unidades
    (empresa_id, cidade_id, sede)
VALUES
(1,1,1),
(1,2,0),
(2,1,0),
(2,2,1);
