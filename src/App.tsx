import { useListStore } from "./store"

export function App() {
  const { list } = useListStore();

  console.log(list);

  return (
    <h1>Hello world</h1>
  )
}

