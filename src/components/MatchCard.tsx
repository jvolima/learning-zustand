import { useState } from "react";
import { Match, Selection } from "../App"
import { useBetStore } from "../store";

interface MatchCardProps {
  match: Match;
}

export function MatchCard({ match }: MatchCardProps) {
  const [team1, team2] = match.name.split("vs");

  const { betList, addToList } = useBetStore();

  function isOnBetList(selection: Selection) {
    const alreadyOnTheList = betList.find(bet => bet.id === selection.id);

    return alreadyOnTheList ? true : false
  }

  return (
    <div className="w-full">
      <header className="border-2 flex items-center justify-between p-4">
        <h2>{team1}</h2>
        <span>vs</span>
        <h2>{team2}</h2>
      </header>
      <main>
        {match.markets.map(market => (
          <div className="border-2 p-4" key={market.id}>
            <h2>{market.name}</h2>
            <div className="mt-2 flex items-center justify-between">
              {market.selections.map(selection => (
                <button 
                  className={`py-2 px-4 flex flex-col justify-center items-center border rounded-md ${isOnBetList(selection) === true && 'bg-green-400'}`} 
                  key={selection.id}
                  onClick={() => addToList({
                    id: selection.id,
                    name: selection.name,
                    price: selection.price,
                    bet_category_id: market.id,
                    bet_category_name: market.name
                  })}
                >
                  <h3>{selection.name}</h3>
                  <span>{selection.price}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  )
}