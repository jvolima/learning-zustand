# Aprendendo a utilizar o Zustand

## Sobre a aplicação
- Fiz uma aplicação bem simples com o intuito de aprender a utilizar o básico do Zustand, a aplicação consiste um site com uma listagem de partidas de futebol, e cada partida tem as suas apostas, o usuário pode adicionar uma aposta e ver a lista de todas suas apostas na sidebar, na sidebar também tem a opção de deletar uma aposta.
- Basicamente a aplicação atinge o objetivo que é compartilhar um estado entre diversos componentes, que é a função do Zustand.

## O que é o Zustand e para que serve?
- O Zustand é uma ferramenta que serve para compartilhar estados dentro de uma aplicaçã.
- Parte do mesmo problema que o Redux e outras ferramentas buscam resolver.
- É uma ferramenta de fácil utilização, não dita como devemos deixar a estrutura da aplicação como o Redux faz por exemplo, não necessita de providers, entre outras vantagens.


## Como funciona
- Essa ferramenta utiliza o conceito de store, parecido com o Redux.
- Precisamos apenas criar uma store, definir o que ela vai ter e pronto, já podemos sair usando!
- Exemplo de como criar uma store:
```
  export const useExampleStore = create((set) => ({
    exampleList: [],
    addExampleToList: (example) => set(state => ({ exampleList: [...state, example] }))
  }));
```
- Exemplo de como usar uma store em outro componente:
```
  const { exampleList } = useExampleStore();
```

## Considerações finais
- Bom, esse é um resumo bem rápido da ferramenta, eu particularmente gostei bastante e se você se interessou eu sugiro dar uma conferida na [documentação oficial](https://docs.pmnd.rs/zustand/getting-started/introduction) do Zustand e começar os estudos, obrigado!
