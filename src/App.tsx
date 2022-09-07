import { useEffect, useState } from "react"
import { MatchCard } from "./components/MatchCard";
import { api } from "./services/api";

interface Selection {
  id: string;
  name: string;
  price: number;
}

interface Market {
  id: string;
  name: string;
  selections: Selection[];
}

export interface Match {
  id: string;
  name: string;
  markets: Market[];
}

export function App() {
  const [matches, setMatches] = useState<Match[]>([]);

  useEffect(() => {
    api.get('http://www.mocky.io/v2/59f08692310000b4130e9f71').then(response => {
      const filtered = response.data.filter((match: Match) => match.markets.length > 0);
      setMatches(filtered);
    });
  }, []);

  return (
    <div className="p-3">
      <header className="flex items-center justify-between">
        <h1>Jvbet</h1>
        <button className="space-y-2">
          <div className="w-8 h-0.5 bg-gray-600"></div>
          <div className="w-8 h-0.5 bg-gray-600"></div>
          <div className="w-8 h-0.5 bg-gray-600"></div>
        </button>
      </header>

      <div className="mt-6 flex flex-col gap-6">
        {matches.map(match => (
          <MatchCard match={match} key={match.id} />
        ))}
      </div>
    </div>
  )
}

