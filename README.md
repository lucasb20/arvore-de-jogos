# arvore-de-jogos
Trabalho de estrutura de dados

- Uma implementação de árvore de jogos para o Jogo da Velha, com interface gráfica. Foi utilizado Nextjs para criar a aplicação e implantar na Vercel.

- Site da aplicação: [arvore-de-jogos-ashy.vercel.app](https://arvore-de-jogos-ashy.vercel.app)

## Apresentação

- Uma aplicação de árvores destina-se à execução de jogos por computador. O jogo-da-velha foi usado para essa aplicação. Este jogo possui dois participantes: um jogador e seu oponente. O objetivo é identificar o melhor movimento do jogador a partir de um dado tabuleiro.

## Características de uma Árvore de Jogos

- Posições de partidas devem ser indicadas com o atributo de próximo a jogar, podendo ser '+', de maximização, ou '-', de minimização, para o jogador X e O, respectivamente.

- Cada nó deve ter referências de outros nós.

- A função "buildTree" gera uma de árvore de jogo a partir de uma posição e um inteiro que indica a profundidade da árvore.

- A função "expand" retornará todas as jogadas possíveis a partir da posição entregue.

- A função "bestBranch" recebe uma raiz e retorna o filho dela que tem a maior utilidade para o agente, ou seja, a melhor jogada para aquela raiz.