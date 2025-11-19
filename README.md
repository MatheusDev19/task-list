# Task List — Projeto de Estudo

Este é um projeto simples de lista de tarefas criado para treinar os conceitos básicos de HTML, CSS e JavaScript. A ideia é manter a implementação inicial intencionalmente enxuta e estática para focar nos fundamentos antes de adicionar frameworks, tipagem e back-end.

## 📋 O que este projeto contém

- **Lista de tarefas** exibida em HTML puro com cards interativos
- **Estilização modular** com CSS organizado em componentes reutilizáveis
- **CRUD completo** em JavaScript puro (Criar, Ler, Atualizar, Deletar)
- **Sistema de modais** para criar, editar, visualizar e confirmar exclusão de tarefas
- **Menu dropdown** com ações (editar/deletar) em cada card
- **Status coloridos** com badges semânticos (To Do, Pending, In Development, Finish)
- **Vite** como servidor de desenvolvimento com hot-reload

## 🚀 Como rodar (desenvolvimento)

### 1. Instale as dependências:

```bash
npm install
```

### 2. Rode o servidor de desenvolvimento (Vite):

```bash
npm run dev
```

### 3. Acesse no navegador:

Abra o endereço mostrado pelo Vite (normalmente `http://localhost:5173`) no navegador para ver a aplicação.

## 🌿 Workflow de Branches (Git Flow)

Este projeto segue um workflow de branches organizado para facilitar o desenvolvimento colaborativo e deploys automáticos.

### Estrutura de Branches

```
main (produção)
  └── dev (desenvolvimento)
      └── [seu-nome] (branch pessoal)
          └── feat/[nome-da-feature] (branches de tarefas)
```

### 📋 Descrição das Branches

#### 🔴 `main` - Branch Principal (Produção)
- **Objetivo**: Código estável e pronto para produção
- **Deploy**: Todo commit na `main` fará deploy automático (futuramente)
- **Regra**: Apenas merge de branches `dev` após aprovação
- **Proteção**: Não fazer commits diretos na `main`

#### 🟢 `dev` - Branch de Desenvolvimento
- **Objetivo**: Branch de integração para desenvolvimento
- **Uso**: Base para criar branches pessoais
- **Regra**: Sempre atualizada com as últimas features aprovadas
- **Proteção**: Não fazer commits diretos na `dev`

#### 🟡 `[seu-nome]` - Branch Pessoal
- **Objetivo**: Branch individual de cada desenvolvedor
- **Exemplo**: `matheus`, `joao`, `maria`
- **Uso**: Base para criar branches de features
- **Criação**: A partir da `dev` atualizada

#### 🔵 `feat/[nome-da-feature]` - Branch de Feature
- **Objetivo**: Desenvolvimento de uma funcionalidade específica
- **Exemplo**: `feat/task-card`, `feat/login-page`, `feat/api-integration`
- **Uso**: Trabalho em uma tarefa/feature específica
- **Criação**: A partir da sua branch pessoal

### 🔄 Fluxo de Trabalho Completo

#### 1. Configuração Inicial

```bash
# Clone o repositório
git clone https://github.com/MatheusDev19/task-list.git
cd task-list

# Veja as branches disponíveis
git branch -a
```

#### 2. Criar sua Branch Pessoal

```bash
# Entre na branch dev e atualize
git checkout dev
git pull origin dev

# Crie sua branch pessoal (substitua 'seu-nome' pelo seu nome)
git checkout -b seu-nome

# Exemplo:
git checkout -b matheus
```

#### 3. Finalizar Feature e Fazer Merge

```bash
# Após concluir a feature, volte para sua branch pessoal
git checkout matheus

# Faça merge da feature na sua branch pessoal
git merge feat/task-card

# Push da sua branch pessoal
git push origin matheus

# Crie um Pull Request da sua branch pessoal para 'dev'
# (Fazer via GitHub/GitLab interface)
```

#### 4. Atualizar sua Branch Pessoal

```bash
# Periodicamente, atualize sua branch pessoal com a dev
git checkout matheus
git pull origin dev
git push origin matheus
```

### 📝 Convenção de Nomes de Branches
```

#### Branches de Features
```
feat/[nome-da-feature]     # Nova funcionalidade
fix/[nome-do-bug]          # Correção de bug
refactor/[nome]            # Refatoração
docs/[nome]                # Documentação
style/[nome]               # Estilização
test/[nome]                # Testes
```

**Exemplos:**
```bash
feat/task-card
feat/login-page
feat/user-authentication
fix/delete-button
fix/modal-close
refactor/css-structure
docs/readme-update
style/button-colors
```

### 📌 Convenção de Commits

Siga o padrão **Conventional Commits**:

```bash
# Formato
tipo(escopo): descrição curta

# Tipos principais
feat:      # Nova feature
fix:       # Correção de bug
docs:      # Documentação
style:     # Formatação, CSS
refactor:  # Refatoração de código
test:      # Adicionar testes
chore:     # Tarefas de manutenção

# Exemplos
git commit -m "feat: add task card component"
git commit -m "fix: resolve modal close issue"
git commit -m "docs: update README with git workflow"
git commit -m "style: improve button hover effect"
git commit -m "refactor: reorganize CSS structure"
```

### ⚠️ Regras Importantes

1. **Nunca commitar direto na `main`**: Sempre passar por `dev` → branch pessoal → PR
2. **Nunca commitar direto na `dev`**: Sempre trabalhar em sua branch pessoal
3. **Sempre atualizar antes de criar feature**: `git pull origin dev` antes de criar nova branch
4. **Uma feature por branch**: Cada tarefa deve ter sua própria branch
5. **Deletar branches após merge**: Limpar branches de features após o merge
6. **Pull Requests obrigatórios**: Todo merge para `dev` deve passar por PR e revisão

### 🚦 Checklist Antes de Criar PR

- [ ] Código testado localmente
- [ ] Sem erros no console
- [ ] Commits seguem convenção
- [ ] Branch atualizada com `dev`
- [ ] Código formatado e limpo
- [ ] README atualizado (se necessário)

### 📊 Fluxo Visual

```
┌─────────┐
│  main   │ ◄── Deploy Automático (Produção)
└────┬────┘
     │ PR (após aprovação)
┌────▼────┐
│   dev   │ ◄── Integração de Features
└────┬────┘
     │ git pull
┌────▼────────┐
│  matheus    │ ◄── Branch Pessoal
└────┬────────┘
     │ checkout -b
┌────▼──────────────┐
│ feat/task-card    │ ◄── Trabalho em Feature
└───────────────────┘
```

## 🔄 Plano / Roadmap (futuro)

### ✅ Fase 1 - Fundamentos (Concluída)
- [x] HTML, CSS e JavaScript puro
- [] CRUD completo estático
- [x] Estrutura CSS modular
- [] Sistema de modais e dropdown menu

### 📋 Fase 2 - Persistência (Próxima)
- [ ] LocalStorage para salvar tarefas
- [ ] Recuperar dados ao recarregar página

### 🔷 Fase 3 - TypeScript
- [ ] Migrar JavaScript para TypeScript
- [ ] Adicionar types e interfaces

### ⚛️ Fase 4 - React
- [ ] Migrar para React
- [ ] Componentizar UI

### 🔌 Fase 5 - Backend & Deploy
- [ ] API REST com Node.js
- [ ] Banco de dados
- [ ] Deploy automático na `main`

## 📄 Licença

Este é um projeto de estudo livre para uso educacional.

---

**Status do Projeto**: ✅ Fase 1 Completa - CRUD Funcional com CSS Modular

