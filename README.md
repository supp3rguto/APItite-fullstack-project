# 🍔 APItite - Plataforma de Delivery Full-Stack

<p align="left">
  <img src="https://img.shields.io/badge/java-21-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java 21">
  <img src="https://img.shields.io/badge/spring_boot-3.3.2-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white" alt="Spring Boot">
  <img src="https://img.shields.io/badge/react-18-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React">
  <img src="https://img.shields.io/badge/Testes-JUnit5%20%7C%20Mockito%20%7C%20RTL-success?style=for-the-badge" alt="Testes">
</p>


## 📸 Galeria do Projeto

| Landing Page | Home Menu |
|:---:|:---:|
| ![Landing Page](/img/landpage.png) | ![Home Menu](/img/homepg.png) |
| **Home Menu 2** | **Cadastro** |
| ![Home Menu 2](/img/homepg2.png) | ![Dashboard](/img/register.png) |


## 🚀 Sobre o Projeto

O **APItite** é uma simulação de uma plataforma de delivery de comida, desenvolvida como um projeto de estudo full-stack. O objetivo principal foi aplicar e aprofundar conhecimentos na integração de dois ecossistemas tecnológicos distintos: o desenvolvimento backend com **Java e Spring Boot**, e o frontend com **React**. 

O desafio foi construir uma aplicação robusta, segura e com uma experiência de usuário fluida, que servisse como uma demonstração prática de habilidades prontas para o mercado. A arquitetura e o fluxo de funcionalidades foram concebidos com base na análise de soluções de mercado consolidadas, permitindo focar na exploração de decisões técnicas específicas.

## 🛡️ Qualidade de Software e Testes Automatizados

Este projeto foi desenvolvido com um forte foco em **Qualidade e Manutenção de Software**, aplicando conceitos avançados de testes automatizados em ambas as camadas da aplicação (Honrando métricas de maturidade de código):

* **Backend (Spring Boot):** Cobertura de testes unitários e de integração utilizando **JUnit 5** e **Mockito**. Implementação de técnicas avançadas como *Test Doubles (Mocks/Stubs)*, *Argument Captors*, Testes Parametrizados e **TDD** (Test-Driven Development) para validação de regras de domínio.
* **Frontend (React):** Testes de componentes e integração de interface utilizando **React Testing Library** e **Jest**, simulando o comportamento real do usuário (`userEvents`) em formulários e rotas protegidas.
* **Análise de Cobertura:** Configuração do plugin **JaCoCo** no pipeline do Maven para geração de relatórios e garantia de cobertura de código.

## ✨ Funcionalidades Principais

* **Autenticação de Usuários:** Sistema completo de cadastro e login, com validações de segurança e hashing de senhas no backend para garantir a proteção dos dados.
* **Dashboard Principal:** Exibição de restaurantes e categorias de forma dinâmica, carregados através de chamadas assíncronas à API.
* **Filtragem por Categoria:** Permite ao usuário navegar e filtrar os estabelecimentos pelo tipo de comida de forma reativa, atualizando a lista instantaneamente (SPA).
* **API RESTful:** Backend robusto e bem estruturado que serve os dados para o frontend de forma clara, segura e seguindo as convenções do padrão REST.

## 🏛️ Arquitetura e Padrões de Projeto

A estrutura do projeto foi pensada para ser escalável, organizada e para demonstrar a aplicação de conceitos sólidos de engenharia de software.

### 💡 A Escolha pelo JDBC Template (Por que não usar um ORM?)
Uma decisão técnica central neste projeto foi a **não utilização de um ORM como o JPA/Hibernate**. Em vez disso, optou-se pelo **Spring JDBC Template**. Essa escolha foi motivada por objetivos de aprendizado cruciais:
1. **Domínio de SQL:** Escrever queries SQL manualmente para todas as operações (CRUD), aprofundando o conhecimento em bancos relacionais.
2. **Controle Total:** Ter controle granular sobre a performance e a execução das queries, evitando a "magia" de um ORM que pode esconder ineficiências.
3. **Mapeamento Manual:** Implementar `RowMappers` para converter os resultados do `ResultSet` em objetos Java, compreendendo na prática como funciona a hidratação de objetos.

### 🧩 Padrões Aplicados
* **Arquitetura em Camadas:** Divisão clara entre `Controller` (Porta de entrada/HTTP), `Service` (Regras de negócio) e `Repository` (Acesso a dados).
* **Padrão DTO (Data Transfer Object):** Desacoplamento do modelo de dados interno das respostas da API, garantindo segurança (não expondo senhas) e flexibilidade (`LoginResponseDTO`, `RegisterRequestDTO`).
* **Injeção de Dependências (DI):** Utilizada extensivamente pelo ecossistema Spring para gerenciar componentes e facilitar a criação de testes com Mocks.

## 🛠️ Tecnologias e Ferramentas

### **Backend**
* **Linguagem:** Java 21 (LTS)
* **Framework:** Spring Boot 3
* **Segurança:** Spring Security + JWT (JSON Web Tokens)
* **Persistência:** Spring JDBC Template
* **Banco de Dados:** H2 Database (In-memory)
* **Build/Dependências:** Maven

### **Frontend**
* **Biblioteca:** React 18
* **Roteamento:** React Router DOM
* **Comunicação HTTP:** Axios
* **Estilização:** CSS3 / Estrutura reativa

## ⚙️ Como Executar o Projeto

### **Pré-requisitos**
* Java 21 (ou superior) instalado
* Maven 3.x instalado
* Node.js e npm instalados

### **1. Rodando o Backend**
```bash
# Clone o repositório
git clone [https://github.com/supp3rguto/APItite-delivery-app-poc.git](https://github.com/supp3rguto/APItite-delivery-app-poc.git)

# Navegue para a pasta do backend
cd APItite-delivery-app-poc/backend

# Execute o Spring Boot
./mvnw spring-boot:run

```

> O servidor backend estará rodando em `http://localhost:8080`.

### **2. Rodando o Frontend**

```bash
# Em outro terminal, navegue para a pasta do frontend
cd APItite-delivery-app-poc/frontend

# Instale as dependências
npm install

# Execute a aplicação React
npm start

```

> A aplicação estará disponível no seu navegador em `http://localhost:3000`.


## 👨‍💻 Autor

**Augusto Ortigoso Barbosa**

* **GitHub:** [github.com/supp3rguto](https://github.com/supp3rguto)
* **LinkedIn:** [linkedin.com/in/augusto-barbosa-769602194](https://www.linkedin.com/in/augusto-barbosa-769602194)
