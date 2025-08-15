# MyFood - Projeto de Estudo Full-Stack

<p align="center">
  <strong>Aplicação web inspirada no iFood, com Java/Spring Boot no backend e React no frontend.</strong>
</p>

---

## Sobre o Projeto

O **MyFood** é uma aplicação web **Full-Stack** desenvolvida como projeto de estudo e portfólio.
Inspirado na interface e no fluxo do **iFood**, o objetivo foi criar uma experiência realista de um sistema moderno, seguro e escalável, explorando **boas práticas** de arquitetura e desenvolvimento.

O projeto foi construído com **backend desacoplado** (Java + Spring Boot) e **frontend SPA** (React), seguindo o princípio de separação de responsabilidades:

* **Backend:** lógica de negócio e dados
* **Frontend:** apresentação e interação com o usuário

---

## Objetivos e Desafios Superados

### Backend

* Construção de **API RESTful** com autenticação segura usando **Spring Security**
* Registro de usuários com criptografia de senha (**BCrypt**)
* Persistência com **Spring Data JPA** + **Hibernate**
* Resolução de problemas comuns de inicialização do banco H2 e ordem de criação de tabelas

### Frontend

* Interface **SPA** com **React** e componentização (Header, RestaurantCard, CategoryList)
* Navegação com **React Router** (rotas públicas e privadas)
* Consumo de API com **Axios** e tratamento de estados de carregamento/erro

### Design Responsivo

* Adaptação para **desktop** e **mobile**
* Uso de **Flexbox**, **Grid Layout** e **Media Queries**

### Integração

* Configuração de **CORS** para comunicação segura entre backend e frontend
* Uso de padrões como **Repository** e **DTO** para manter o código limpo e seguro

---

## Funcionalidades

* **Landing Page** moderna e animada
* **Autenticação segura** (cadastro, login e sessão)
* **Dashboard interativa** com:

  * Filtro por categorias (Restaurante, Mercado, Farmácia, etc.)
  * Lista expansível ("Ver mais" / "Ver menos")
  * Logos dinâmicas integradas à API da Clearbit, com fallback para placeholders

---

## Tecnologias Utilizadas

| Categoria               | Tecnologias                                                       |
| ----------------------- | ----------------------------------------------------------------- |
| **Backend**             | Java 21, Spring Boot, Spring Security, Spring Data JPA, Hibernate |
| **Frontend**            | React 18, JavaScript ES6+, HTML5, CSS3, React Router, Axios       |
| **Banco de Dados**      | H2 (desenvolvimento)                                              |
| **Build & Ferramentas** | Maven, Node.js (npm), Git, IntelliJ IDEA, VS Code                 |
| **Arquitetura**         | API RESTful, SPA                                                  |

---

## Arquitetura e Padrões

**Estrutura de Pastas:**

```
/myfood-project
├── /backend/         
│   ├── src/main/java/com/project/myfood/backend
│   │   ├── auth/         # Autenticação
│   │   ├── config/       # Configurações (Security, DataInitializer)
│   │   ├── controller/   # Controladores REST
│   │   ├── dto/          # Data Transfer Objects
│   │   ├── model/        # Entidades JPA
│   │   └── repository/   # Acesso a dados
│   └── pom.xml
│
└── /frontend/        
    ├── public/         
    ├── src/
    │   ├── components/   # Componentes reutilizáveis
    │   ├── layouts/      # Layouts de páginas
    │   ├── pages/        # Páginas completas
    │   └── utils/        # Utilitários (Rotas protegidas)
    └── package.json
```

**Padrões de Projeto (Backend):**

* **MVC (Model-View-Controller):** Este padrão, central no Spring, foi essencial para organizar o backend. O fluxo de uma requisição é claro: ela chega a um @RestController (Controller), que orquestra a chamada para uma classe de @Service (Model, contendo a lógica de negócio). O serviço, por sua vez, utiliza um @Repository para acessar os dados. O resultado é então retornado como JSON (View), mantendo as responsabilidades bem definidas.
* **Injeção de Dependências (DI):** Usada extensivamente pelo Spring para desacoplar os componentes. Em vez de uma classe como AuthController criar uma instância de UserRepository (new UserRepository()), ela simplesmente declara a dependência, e o contêiner do Spring a "injeta". Isso resulta em um código de baixo acoplamento, o que facilita enormemente a escrita de testes unitários (pois podemos "injetar" uma versão falsa do repositório) e a manutenção do sistema.
* **Repository Pattern:** Este padrão abstrai a camada de acesso a dados. Nossas interfaces UserRepository e RestaurantRepository, que estendem JpaRepository, são um exemplo perfeito. A camada de serviço interage com elas através de métodos claros (como findByEmail ou saveAll) sem precisar saber se por baixo dos panos estamos usando H2, PostgreSQL ou qualquer outro banco de dados. Isso torna a aplicação mais flexível e fácil de evoluir.
* **DTO:** Utilizamos DTOs como RegisterRequestDTO e LoginRequestDTO como um "contrato" entre o frontend e o backend. Esta é uma prática crucial por dois motivos: segurança, pois evita que a estrutura interna do nosso banco de dados (nossas entidades @Entity) seja exposta na internet; e flexibilidade, pois podemos mudar a estrutura do banco de dados sem quebrar o frontend, desde que o DTO continue o mesmo.

---

## Como Executar

**Pré-requisitos:**

* Java JDK 21+
* Maven
* Node.js e npm

**1. Backend**

```bash
cd backend
mvn spring-boot:run
Backend rodando em: **[http://localhost:8080](http://localhost:8080)**
```
**2. Frontend**

```bash
cd frontend
npm install
npm start
Frontend disponível em: **[http://localhost:3000](http://localhost:3000)**
```
---

## Autor

**Augusto Ortigoso Barbosa | @supp3rguto**
