import {create} from 'zustand';

interface Food {
  name: string;
  category: string;
  calories: string;
  description: string;
}

interface FoodState {
  foods: Food[];
  addFood: (food: Food) => void;
  getFoods: () => void;
}

const useFoodStore = create<FoodState>((set) => ({
  foods: [],
  addFood: (food) => {
    set((state) => ({ foods: [...state.foods, food] }));
    // Save the food data to localStorage
    localStorage.setItem('foods', JSON.stringify([...useFoodStore.getState().foods]));
  },
  getFoods: () => {
    // Get the food data from localStorage
    const storedFoods = JSON.parse(localStorage.getItem('foods') || '[]');
    set({ foods: storedFoods });
  }
}));

export default useFoodStore;
