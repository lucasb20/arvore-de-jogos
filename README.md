# arvore-de-jogos
Trabalho de estrutura de dados, orientado por Otávio Alcântara.

- Uma implementação de árvore de jogos para o Jogo da Velha, com interface gráfica. Foi utilizado Nextjs para criar a aplicação e implantar na Vercel.

## links

- Site da aplicação: https://www.google.com.br/
- Relatório Técnico: https://www.google.com.br/

## Apresentação

- Uma aplicação de árvores destina-se à execução de jogos por computador. O jogo-da-velha foi usado para essa aplicação. Este jogo possui dois participantes: um jogador e seu oponente. O objetivo é identificar o melhor movimento do jogador a partir de um dado tabuleiro.

- A lógica do algoritmo é mostrado em https://github.com/lucasb20/velha_master.

## Requisitos de uma Árvore de Jogos

- Posições de partidas devem ser indicadas com o atributo de próximo a jogar, podendo ser '+', de maximização, ou '-', de minimização, para o jogador X e O, respectivamente.

- Cada nó deve ter referências de estrutura em árvore, como filho, próximo, e outros. Por exemplo:

```python
class Node:
    def __init__(self, next=None, son=None, turn=0):
        self.board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
        self.next = next
        self.son = son
        self.turn = turn
```

- Haverá uma função "buildTree", que gera uma função de árvore de jogo a partir de uma posição e um inteiro que indica a profundidade da árvore. Essa função deverá ter um método "expand", que retornará todas as jogadas possíveis a partir da posição entregue.

- Haverá uma função de impressão de árvore, que imprimirá todos os nós de uma árvore até suas folhas. Obs: Uma folha é sempre uma posição de vitória de algum jogador ou de empate.

- Haverá uma função "bestBranch", que recebe uma raiz e retorna o filho dela que tem a melhor avaliação, ou seja, a melhor jogada para aquela raiz.