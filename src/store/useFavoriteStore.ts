import { create } from "zustand";
import { persist } from "zustand/middleware";
import { IProduct } from "../types/product";

type FavoriteProduct = Pick<IProduct, "id" | "title" | "image">;

type State = {
  favoriteProducts: FavoriteProduct[];
};

type Action = {
  addFavorite: (fav: FavoriteProduct) => void;
  deleteFavorite: (id: FavoriteProduct["id"]) => void;
};

const useFavoriteStore = create<State & Action>()(
  persist(
    (set) => ({
      favoriteProducts: [],
      addFavorite: (fav) =>
        set((state) => ({
          favoriteProducts: [...state.favoriteProducts, fav],
        })),
      deleteFavorite: (id) =>
        set((state) => ({
          favoriteProducts: state.favoriteProducts.filter(
            (fav) => fav.id !== id
          ),
        })),
    }),
    {
      name: "favoriteProducts",
    }
  )
);

export { useFavoriteStore };
export type { Action as FavoriteAction, FavoriteProduct };
