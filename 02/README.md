

# Projeto: Sistema de Imagens com Funcionalidades Específicas

Este repositório contém a implementação das questões 08, 09 e 10, desenvolvidas para criar um sistema de imagens com funcionalidades específicas, como cache de dados, atualização da interface com dados da API, e sistema de avaliações com estrelas.


## Questão 01: Paginação de Imagens

### Problema

Como exibir 100 imagens divididas em páginas de 20 imagens cada?

### Tarefa

Modifique o [código](https://github.com/wwagner33/visualizador-de-imagens) (ver acima “visualizador-de-imagens”) para buscar 100 imagens e implementar um sistema de paginação. Vocês devem criar botões “Próxima” e “Anterior” que, ao serem clicados, atualizam o grid com as imagens correspondentes.

### Explicação

A ideia aqui é aprimorar a experiência do usuário, permitindo que ele navegue por um conjunto grande de imagens sem sobrecarregar a página. Para isso, usamos a técnica de paginação. Em vez de exibir todas as 100 imagens de uma vez, você busca apenas um "pedaço" (20 imagens) por vez. Assim, o carregamento fica mais rápido e a interface mais organizada.

### Conceitos Trabalhados

- **fetch() e response.json:** São usados para realizar a requisição à API e converter a resposta em JSON, que é um formato leve e fácil de manipular.
- **Async Functions & try...catch():** Permitem que o código assíncrono seja escrito de forma mais legível e tratem erros de maneira elegante.

### Pontos Importantes

- **Assincronicidade:** A função é `async`, o que permite o uso de `await` para esperar a conclusão de operações assíncronas (como a requisição à API).
- **Reutilização:** A função pode ser chamada com diferentes valores de `page` e `limit` para carregar diferentes conjuntos de imagens.
- **Interatividade:** As imagens são clicáveis, abrindo um lightbox com a imagem em tamanho original. As estrelas permitem a avaliação das imagens, com os dados sendo salvos no `localStorage`.

### Resumo do Fluxo

1. A função `loadImages` é chamada com os parâmetros `page` e `limit`.
2. Faz uma requisição à API para obter as imagens.
3. Limpa o conteúdo atual do grid.
4. Para cada imagem retornada pela API:
   - Cria um contêiner (`div`) para a imagem e as estrelas de avaliação.
   - Adiciona a imagem e as estrelas ao contêiner.
   - Adiciona o contêiner ao grid.
   - Atualiza a exibição das avaliações.
5. Se ocorrer um erro, ele é capturado e exibido no console.

## Questão 02: Transformando a Visualização em Carrossel

### Problema

Como converter a visualização de imagens (atualmente com lightbox) para um formato de carrossel?

### Tarefa

Utilize uma biblioteca de carrossel (como [Slick](https://kenwheeler.github.io/slick/)) ou crie uma lógica simples que permita a navegação entre imagens em um "slider".

### Explicação

O carrossel oferece uma experiência interativa onde o usuário pode navegar pelas imagens deslizando para os lados.

### Conceitos

- **Manipulação do DOM:** Alterar classes e estruturas HTML com `element.classList.add()` para iniciar animações ou transições.
- **Async Functions:** Caso o carrossel precise buscar novas imagens durante a navegação.

## Questão 03: Persistência do Rating com IndexedDB

### Problema

Como salvar a avaliação das imagens (rating) usando IndexedDB em vez de localStorage?

### Tarefa

Implemente uma solução que crie um banco de dados no navegador, armazene os ratings e recupere-os na inicialização da página.

### Explicação

O IndexedDB é uma API de armazenamento mais robusta que o localStorage, permitindo o armazenamento de dados estruturados e transações assíncronas. Essa abordagem é ideal quando você precisa gerenciar dados mais complexos e de maior volume.

### Conceitos

- **IndexedDB:** Permite criar e manipular um banco de dados no navegador de forma assíncrona.
- **Async Functions & try...catch():** Garantem que as operações assíncronas sejam tratadas corretamente.

## Questão 04: Tooltip com Informações da Imagem

### Problema

Como inserir um tooltip nas thumbnails que exiba o autor da imagem e suas dimensões originais?

### Tarefa

Utilize a API do [Lorem Picsum](https://picsum.photos/) para obter detalhes de cada imagem e, em seguida, adicione um tooltip (com CSS e JavaScript) que apareça ao passar o mouse.

### Explicação

A ideia é melhorar a experiência do usuário oferecendo informações adicionais sem poluir a interface. Ao passar o mouse sobre uma imagem, um tooltip aparece mostrando detalhes como o autor e o tamanho original da imagem. Isso envolve uma nova chamada à API para obter os dados detalhados da imagem.

### Conceitos

- **fetch() e response.json:** Buscar informações adicionais usando endpoints específicos.
- **Manipulação do DOM:** Criar e posicionar o tooltip.
- **Eventos do Mouse:** Para controlar a exibição do tooltip.

## Questão 05: Reforçando o Uso de Async Functions

### Problema

Como garantir que todas as operações assíncronas do código sejam tratadas corretamente?

### Tarefa

Refatore o código de carregamento das imagens (e de outras operações, como a busca de detalhes) para usar funções `async/await`, combinadas com `try...catch()` para tratamento de erros.

### Explicação

Às vezes, a complexidade das operações assíncronas pode deixar o código confuso e suscetível a erros. Refatorar funções para usar `async/await` torna o fluxo do código mais linear e fácil de entender, além de facilitar o tratamento de erros com blocos `try...catch()`.

### Conceitos

- **Async/Await:** Simplifica o código assíncrono, fazendo com que pareça sincrônico.
- **try...catch():** Para capturar e tratar possíveis erros durante a execução assíncrona.

## Questão 06: Animações com element.classList.add()

### Problema

Como aplicar animações ou efeitos de transição ao carregar as imagens?

### Tarefa

Utilize o método `element.classList.add()` para adicionar classes que ativem transições CSS (por exemplo, fade-in ou slide-in) quando as imagens forem inseridas no grid.

### Explicação

Adicionar efeitos visuais melhora a experiência do usuário e dá um toque de modernidade à interface. Ao usar `element.classList.add()`, você pode dinamicamente aplicar classes que definem animações CSS (como fade-in ou slide-in), tornando a inserção de imagens mais suave e agradável.

### Conceitos

- **Manipulação do DOM:** Uso do `classList` para adicionar e remover classes dinamicamente.
- **Transições CSS e Animações:** Definir animações suaves no arquivo CSS. Permitem criar efeitos visuais sem sobrecarregar o JavaScript.

## Questão 07: Implementando Filtros de Busca

### Problema

Como permitir que o usuário filtre as imagens por autor?

### Tarefa

Implemente um campo de pesquisa que, ao receber o nome do autor, filtre as imagens exibidas no grid.

### Explicação

Implementar filtros melhora a usabilidade, permitindo que os usuários encontrem rapidamente o que procuram. Neste caso, a busca por autor pode ser feita utilizando atributos de dados (data-attributes) ou integrando a lógica de filtragem com os dados retornados pela API.

### Conceitos

- **Manipulação do DOM:** Para atualizar dinamicamente quais imagens são exibidas.
- **Eventos e atributos customizados:** Usar `data-attributes` para armazenar informações (como o autor).

## Questão 08: Cache de Dados com LocalStorage ou IndexedDB

### Problema

Como implementar um mecanismo de cache para armazenar detalhes das imagens, evitando múltiplas chamadas à API?

### Tarefa

Criamos uma função para verificar se os dados da imagem já estão armazenados no cache (**localStorage** ou **IndexedDB**) e, se não estiverem, realizar a requisição e armazenar os dados.

### Explicação

Cachear dados é uma ótima prática para melhorar a performance da aplicação. Em vez de fazer uma requisição para a API toda vez que o usuário interage com uma imagem, você armazena os detalhes localmente (no **localStorage** ou **IndexedDB**) e os reutiliza.

### Implementação

- **HTML**: Estrutura básica contendo os botões de adição de imagens e a área de exibição das imagens.
- **CSS**: Estilo para o layout da aplicação, garantindo uma interface visual agradável.
- **JavaScript**: Funções para adicionar imagens, cachear detalhes usando `localStorage`, e buscar detalhes cacheados.

#### Exemplo de Função em JavaScript

```javascript
async function getCachedImageInfo(id) {
    const cached = localStorage.getItem(`imgInfo_${id}`);
    if (cached) {
        return JSON.parse(cached);
    }
    try {
        const info = await fetchImageInfo(id);
        localStorage.setItem(`imgInfo_${id}`, JSON.stringify(info));
        return info;
    } catch (error) {
        console.error("Erro ao obter ou cachear info da imagem:", error);
        return null;
    }
}

Exploramos temas como animações, filtros de busca, cache de dados, modais e reset de avaliações.


## **Questão 6: Animações com `element.classList.add()`**

### **Objetivo**
Adicionar efeitos visuais na interface para melhorar a experiência do usuário ao carregar imagens.

### **Implementação**
- **HTML**: Estrutura do container das imagens.
- **CSS**: Definição das animações.
- **JavaScript**: Adicionar classes dinâmicas ao inserir imagens.

### **Código**

#### **CSS** (Animação `fade-in`):
```css
.fade-in {
  animation: fadeIn 0.5s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

#### **JavaScript** (Adicionar classe ao inserir imagem):
```js
function addImageWithAnimation(imageHTML) {
  const div = document.createElement("div");
  div.innerHTML = imageHTML;
  div.classList.add("fade-in");
  document.getElementById("grid").appendChild(div);
}
```

## **Questão 7: Implementando Filtros de Busca**

### **Objetivo**
Permitir que o usuário filtre imagens com base no nome do autor.

### **Implementação**
- **HTML**: Campo de pesquisa.
- **CSS**: Estilização básica do campo de busca.
- **JavaScript**: Filtragem baseada em `data-attributes`.

### **Código**

#### **HTML** (Campo de busca):
```html
<input type="text" id="search" placeholder="Buscar por autor" onkeyup="filterImages(this.value)">
```

#### **JavaScript** (Filtrar imagens pelo autor):
```js
function filterImages(authorName) {
  const containers = document.querySelectorAll(".image-container");
  containers.forEach(container => {
    if (container.dataset.author.toLowerCase().includes(authorName.toLowerCase())) {
      container.style.display = "block";
    } else {
      container.style.display = "none";
    }
  });
}
```

---

Este repositório contém a implementação das questões 08, 09 e 10, desenvolvidas para criar um sistema de imagens com funcionalidades específicas, como cache de dados, atualização da interface com dados da API, e sistema de avaliações com estrelas.

## Questão 08: Cache de Dados com LocalStorage ou IndexedDB

### Problema

Como implementar um mecanismo de cache para armazenar detalhes das imagens, evitando múltiplas chamadas à API?
Evitar chamadas repetitivas à API armazenando dados localmente.

### Tarefa

Criamos uma função para verificar se os dados da imagem já estão armazenados no cache (**localStorage** ou **IndexedDB**) e, se não estiverem, realizar a requisição e armazenar os dados.

### Explicação

Cachear dados é uma ótima prática para melhorar a performance da aplicação. Em vez de fazer uma requisição para a API toda vez que o usuário interage com uma imagem, você armazena os detalhes localmente (no **localStorage** ou **IndexedDB**) e os reutiliza.

### Implementação

- **HTML**: Estrutura básica contendo os botões de adição de imagens e a área de exibição das imagens.
- **CSS**: Estilo para o layout da aplicação, garantindo uma interface visual agradável.
- **JavaScript**: Funções para adicionar imagens, cachear detalhes usando `localStorage`, e buscar detalhes cacheados.

#### Exemplo de Função em JavaScript

```javascript
async function getCachedImageInfo(id) {
    const cached = localStorage.getItem(`imgInfo_${id}`);
    if (cached) {
        return JSON.parse(cached);
    }
    try {
        const info = await fetchImageInfo(id);
        localStorage.setItem(`imgInfo_${id}`, JSON.stringify(info));
        return info;
    } catch (error) {
        console.error("Erro ao obter ou cachear info da imagem:", error);
        return null;
    }
}
