import create from "zustand";

interface Bet {
  id: string;
  name: string;
  price: number;
  bet_category_name: string;
  bet_category_id: string;
}

interface ListState {
  betList: Bet[];
  addToList: (bet: Bet) => void;
}

export const useBetStore = create<ListState>((set, state) => ({
  betList: [],
  addToList: (bet) => {
    const list = state().betList;

    const alreadyBetCategoryOnTheList = list.find(state => state.bet_category_id === bet.bet_category_id);

    if (alreadyBetCategoryOnTheList) {
      const betIndex = list.findIndex(state => state.bet_category_id === bet.bet_category_id);
      const newList = list.splice(betIndex, 1);
      set({ betList: [...newList, bet] })
    }

    set({ betList: [...list, bet] });
  }
}));
