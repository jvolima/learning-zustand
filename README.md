# Aprendendo a utilizar o Zustand
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