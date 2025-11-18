# Task List — Projeto de Estudo

Este é um projeto simples de lista de tarefas criado para treinar os conceitos básicos de HTML, CSS e JavaScript. A ideia é manter a implementação inicial intencionalmente enxuta e estática para focar nos fundamentos antes de adicionar frameworks, tipagem e back-end.

## O que este projeto contém (visão inicial)

- Uma lista de tarefas exibida em HTML puro.
- Estilização com CSS para organizar o layout (cards de tarefas, formulário, etc.).
- Lógica em JavaScript para um CRUD simples (criar, ler, atualizar, deletar) implementado de forma estática no navegador (sem banco de dados).
- Uso do Vite apenas como servidor de desenvolvimento para facilitar o fluxo `npm run dev` durante o desenvolvimento.

Funcionalidade inicial: um CRUD básico para gerenciar tarefas localmente (no runtime do navegador). Cada tarefa terá pelo menos: nome, descrição e status (ex.: pending, in development, done). Também haverá ícones/ações para editar e deletar cada tarefa.

## Por que usar o Vite

O Vite é usado apenas como servidor de desenvolvimento para prover hot-reload e uma experiência de desenvolvimento mais fluida. Não há configuração complexa: o Vite facilita rodar a aplicação com `npm run dev` enquanto mantemos o projeto baseado em HTML/CSS/JS puro.

## Plano / Roadmap (futuro)

1. Começar com HTML, CSS e JavaScript puro (esta versão).
2. Adicionar TypeScript para maior segurança de tipos.
3. Migrar a interface para React (ou outro framework) e organizar componentes.
4. Integrar bibliotecas quando necessário (estado, form handling, UI library).
5. Subir para um back-end real ou API e persistir tarefas em um banco de dados.
6. Fazer build e deploy para disponibilizar a aplicação a usuários.

## Como rodar (desenvolvimento)

1. Instale dependências:

```bash
npm install
```

2. Rode o servidor de desenvolvimento (Vite):

```bash
npm run dev
```

Abra o endereço mostrado pelo Vite (normalmente `http://localhost:5173`) no navegador para ver a aplicação.

## Contrato mínimo da funcionalidade inicial

- Inputs: campos do formulário (nome, descrição, status).
- Outputs: lista de tarefas atualizada no DOM.
- Modo de erro: validação simples (ex.: nome não vazio). Alterações são em memória — recarregar a página resetará os dados.

## Casos de borda (considerados inicialmente)

- Formulário com campos vazios: validar nome mínimo.
- Deleção de uma tarefa: confirmar a ação (opcional).
- Edição: atualizar apenas os campos necessários.

