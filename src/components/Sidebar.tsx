import { useBetStore } from "../store";

interface SidebarProps {
  isSidebarOpen: boolean;
  closeSidebar: () => void;
}

export function Sidebar({ isSidebarOpen, closeSidebar }: SidebarProps) {
  const { betList, removeBet } = useBetStore();

  if (!isSidebarOpen) {
    return (
      <>
      </>
    )
  } 

  return (
    <>
      <button
        className="flex text-4xl text-white items-center cursor-pointer fixed right-6 top-2 z-50"
        onClick={closeSidebar}
      >
        x
      </button>
      <div className="top-0 right-0 w-[80vw] bg-green-400 p-10 px-6 text-white fixed h-full">
        <div className="mt-4 flex flex-col gap-8">
          {betList.map(bet => (
            <div key={bet.id} className="flex flex-col gap-4 justify-center items-center pb-8 border-b-2 border-b-white">
              <h1 className="text-lg font-bold">{bet.name} {bet.bet_category_name}</h1>
              <span className="text-2xl font-bold">{bet.price}</span>
              <button onClick={() => removeBet(bet.id)} className="py-1 px-4 bg-white text-green-800 flex flex-col justify-center items-center border rounded-md">
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>  
    </>
  )
}