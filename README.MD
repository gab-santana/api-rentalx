# Cadastro de carro

**Requisitos Funcionais**
Deve ser possível cadastrar um novo carro

**Regra de Negócio**
Não deve ser possível cadastrar um carro com uma placa já existente.
O carro deve ser cadastrado como disponivel por padrão.
O usuário responsável pelo cadastro deve ser um usuário administrador

# Listagem de carros
**Requisitos Funcionais**
Deve ser possível listar todos os carros disponíveis
Deve ser possível listar todos os carros disponíveis pelo nome da categoria
Deve ser possível listar todos os carros disponíveis pelo nome da marca
Deve ser possível listar todos os carros disponíveis pelo nome do carro

**Regra de Negócio**
O usuário não precisa estar logado no sistema.

# Cadastro de Especificação do carro

**Requisitos Funcionais**
Deve ser possível cadastrar uma especificação para um carro

**Regra de Negócio**
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.

# Cadastro de imagens do carro

**Requisitos Funcionais**
Deve ser possível cadastrar a imagem do carro

**Requisitos Não Funcionais**
Utilizar o multer para upload dos arquivos

**Regra de Negócio**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro
O usuário responsável pelo cadastro deve ser um usuário administrador.

# Aluguel de carro

**Requisitos Funcionais**
Deve ser possível cadastrar um aluguel

**Requisitos Não Funcionais**

**Regra de Negócio**
O aluguel deve ter duração minima de 24h
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro


