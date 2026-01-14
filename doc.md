## Instalações
```bash
1. npm init -y
2. npm install
3. npm install cypress --save-dev
4. npm install -g k6-html-reporter
5. npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator

```

## Execução
```bash
1. npx cypress open
2. npx cypress run
3. npm run test:homepage
4. npm run test:search
5. npm run test:smoke
```
---

## Estrutura de Testes para YouTube - Plano de Aula

## **Visão Geral da Aula**
## **Tema: Testes Automatizados em Aplicações Web Complexas - YouTube**
## **Duração: 4 horas**
## **Nível: Avançado**
## **Site para prática: YouTube - Plataforma real com múltiplos desafios de teste**
## **Nota: Testaremos apenas funcionalidades públicas para não violar ToS.*

---
## Teste de Smoke

## Teste: Página inicial do YouTube

- Deve:
1. Abrir o site do YouTube
2. Verificar se o título da página tem "YouTube"
3. Verificar se a barra de pesquisa aparece na tela

## Teste: Pesquisa no YouTube

- Deve:
1. Abrir o site do YouTube
2. Validar se a barra de busca está visível
3. Digitar o termo e buscar
4. Validar que existem resultados
