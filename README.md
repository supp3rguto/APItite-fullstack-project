# APItite - Plataforma de Delivery Full-Stack

## 🚀 Sobre o Projeto

O **APItite** é uma simulação de uma plataforma de delivery de comida, desenvolvida como um projeto de estudo full-stack. O objetivo principal foi aplicar e aprofundar conhecimentos na integração de dois ecossistemas tecnológicos distintos: o desenvolvimento backend com **Java e Spring Boot**, e o frontend com **React**. O desafio foi construir uma aplicação robusta, segura e com uma experiência de usuário fluida, que servisse como uma demonstração prática de habilidades prontas para o mercado.

A arquitetura e o fluxo de funcionalidades foram concebidos com base na análise de soluções de mercado consolidadas. A intenção não foi replicar, mas sim usar essas plataformas como inspiração para recriar uma experiência familiar e intuitiva para o usuário, permitindo focar na exploração de decisões técnicas específicas para fins de aprendizado e domínio das tecnologias envolvidas.

## ✨ Funcionalidades Principais

* **Autenticação de Usuários:** Sistema completo de cadastro e login, com validações de segurança e hashing de senhas no backend para garantir a proteção dos dados dos usuários.
* **Dashboard Principal:** Exibição de restaurantes e categorias de forma dinâmica, carregados através de chamadas assíncronas à API assim que o usuário acede à página.
* **Filtragem por Categoria:** Permite ao usuário navegar e filtrar os estabelecimentos pelo tipo de comida de forma reativa, atualizando a lista de restaurantes instantaneamente sem a necessidade de recarregar a página.
* **API RESTful:** Backend robusto e bem estruturado que serve os dados para o frontend de forma clara, segura e seguindo as convenções do padrão REST.

## 🛠️ Tecnologias e Ferramentas

Este projeto foi construído com um ecossistema moderno, focando em tecnologias de alta demanda no mercado para criar uma aplicação completa e performática.

### **Backend**

* **Java 21:** Versão LTS mais recente da linguagem, garantindo acesso a funcionalidades modernas, performance otimizada e segurança robusta.
* **Spring Boot 3:** Framework principal para a construção da API, que agiliza drasticamente a configuração e o desenvolvimento através de sua abordagem de "convenção sobre configuração".
* **Spring Security:** Implementação da camada de segurança, responsável por proteger os endpoints e gerir o processo de autenticação e autorização.
* **JDBC Template:** Escolha deliberada para a manipulação de dados, focando no domínio de queries SQL e no controlo direto sobre as operações de banco de dados, sem a abstração de um ORM.
* **Maven:** Gestor de dependências e ferramenta de build do projeto, garantindo a consistência do ambiente de desenvolvimento.

### **Frontend**

* **React 18:** Biblioteca líder de mercado para a construção de interfaces de usuário reativas e componentizadas, permitindo um código organizado e reutilizável.
* **React Router:** Gestão das rotas e navegação da aplicação, essencial para criar uma experiência de Single Page Application (SPA) fluida e sem recarregamentos de página.
* **Axios:** Cliente HTTP robusto e fácil de usar para realizar a comunicação assíncrona entre o frontend e a API do backend.

### **Banco de Dados**

* **H2 Database:** Banco de dados relacional em memória, escolhido por sua simplicidade e agilidade, ideal para ambientes de desenvolvimento e teste que não requerem persistência de dados entre sessões.

## 🏛️ Arquitetura e Padrões de Projeto

A estrutura do projeto foi pensada para ser escalável, organizada e para demonstrar a aplicação de conceitos sólidos de engenharia de software, refletindo as melhores práticas do mercado.

### **Manipulação de Dados: A Escolha pelo JDBC Template**

Uma decisão técnica central neste projeto foi a **não utilização de um ORM como o JPA/Hibernate**. Em vez disso, optou-se pelo **Spring JDBC Template**. Embora esta abordagem exija um código mais verboso em comparação com o Spring Data JPA, ela foi motivada por objetivos de aprendizado cruciais:

1.  **Domínio de SQL:** Escrever queries SQL manualmente para todas as operações (CRUD), forçando um aprofundamento no conhecimento da linguagem de banco de dados e suas nuances.
2.  **Controlo Total:** Ter controlo granular sobre a performance e a exata execução das queries, compreendendo o que acontece "debaixo do capô" e evitando a "magia" de um ORM, que pode por vezes esconder ineficiências.
3.  **Mapeamento Manual:** Implementar `RowMappers` para converter os resultados do `ResultSet` em objetos Java, o que proporciona uma compreensão prática e fundamental de como funciona a hidratação de objetos, um conceito essencial no desenvolvimento de software.

### **Padrões de Projeto e Arquitetura**

* **Arquitetura em Camadas (Layered Architecture):** O backend é claramente dividido em camadas com responsabilidades distintas, garantindo baixo acoplamento e alta coesão. O fluxo de uma requisição segue o padrão:
    * **Controller:** A porta de entrada. Responsável por receber as requisições HTTP, validar os dados de entrada e devolver as respostas (JSON).
    * **Service:** O cérebro da aplicação. Onde reside a lógica de negócio e as regras da aplicação, orquestrando as chamadas aos repositórios.
    * **Repository:** A camada de acesso a dados. Sua única responsabilidade é interagir com o banco de dados, executando as queries SQL através do JDBC Template.

* **Padrão DTO (Data Transfer Object):** Este padrão foi aplicado para desacoplar o modelo de dados interno (as classes de Modelo, como `User`) da representação externa (o que a API expõe).
    * **Segurança:** Ao usar DTOs como o `LoginResponseDTO`, garantimos que dados sensíveis, como a senha criptografada do usuário, nunca sejam expostos pela API. Apenas as informações necessárias são enviadas para o cliente.
    * **Flexibilidade e Contrato da API:** DTOs como `RegisterRequestDTO` e `LoginRequestDTO` definem um "contrato" claro para o que a API espera receber, separando a camada de transporte de dados da lógica de negócio. Isso permite que o modelo de domínio interno evolua sem quebrar os clientes da API.

* **Padrão Repository:** Mesmo sem o Spring Data, o conceito foi aplicado ao criar classes `Repository` que abstraem a lógica de acesso aos dados. Isso torna o código de serviço mais limpo e focado na regra de negócio, sem se preocupar com os detalhes da implementação do acesso ao banco de dados.

* **Injeção de Dependências (DI):** Utilizada extensivamente pelo Spring Boot para gerir os componentes (`Beans`) e desacoplar as camadas da aplicação. Isso torna o código mais testável, flexível e fácil de manter.

## 🌊 Fluxo de Dados e Experiência do Usuário

O fluxo de interação do usuário foi desenhado para ser intuitivo e reativo, inspirado em plataformas de sucesso do setor, com uma clara separação de responsabilidades entre cliente e servidor:

1.  **Cadastro:** O usuário preenche o formulário. O frontend, usando o estado do React (`useState`), realiza validações instantâneas (ex: força da senha). Ao submeter, os dados são enviados para a API, que realiza validações de segurança (ex: se o e-mail já existe) e retorna uma `ResponseEntity` com o status apropriado.
2.  **Login:** O usuário autentica-se. Após a validação bem-sucedida no backend, conceitualmente, um token JWT seria gerado e retornado para o cliente, que o armazenaria (ex: no `localStorage`) para autenticar as próximas requisições.
3.  **Navegação:** O usuário é direcionado para o dashboard. O componente React, através do hook `useEffect`, dispara uma requisição `GET` à API para buscar as categorias e uma lista inicial de restaurantes.
4.  **Filtragem:** Ao clicar numa categoria, o estado do React (`selectedCategory`) é atualizado. Esta mudança no estado é detetada pelo `useEffect`, que dispara uma nova requisição à API com um parâmetro de busca (ex: `/api/restaurantes?category=Pizza`), sem recarregar a página.
5.  **Resposta da API:** O backend recebe a requisição, o `Service` processa a lógica e o `Repository` executa a query SQL correspondente no banco de dados H2. O resultado é mapeado de volta para objetos Java pelo `RowMapper` e serializado como um JSON na resposta.
6.  **Renderização:** O React recebe o JSON, atualiza o seu estado de `restaurants`, e o seu Virtual DOM recalcula a interface de forma eficiente, atualizando dinamicamente apenas a lista de restaurantes na tela.

## ⚙️ Como Executar o Projeto

### **Pré-requisitos**

* Java 21 (ou superior)
* Maven 3.x
* Node.js e npm

### **Backend**

```bash
# Clone o repositório
git clone [https://github.com/seu-usuario/apittite-fullstack-project.git](https://github.com/seu-usuario/apittite-fullstack-project.git)

# Navegue para a pasta do backend
cd apittite-fullstack-project/backend

# Instale as dependências e execute
./mvnw spring-boot:run

O servidor backend estará a rodar em http://localhost:8080.
```

Frontend
```bash
# Em outro terminal, navegue para a pasta do frontend
cd apittite-fullstack-project/frontend

# Instale as dependências
npm install

# Execute a aplicação
npm start

A aplicação React estará disponível em http://localhost:3000.
```

## 👨‍💻 Autor

**Augusto Ortigoso Barbosa**

* **GitHub:** [github.com/supp3rguto](https://github.com/supp3rguto)
* **LinkedIn:** [linkedin.com/in/augusto-barbosa-769602194](https://www.linkedin.com/in/augusto-barbosa-769602194)
