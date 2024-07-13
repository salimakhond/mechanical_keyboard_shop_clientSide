export interface TProduct {
  _id: string;
  image: string;
  name: string;
  brand: string;
  quantity: number;
  price: number;
  rating: number;
  description: string;
}

export type TFiltersSlice = {
  searchTerm: string | null;
  sort: string | null;
};

interface ICartItem extends TProduct {
  quantity: number;
}
export type TCartInitialState = {
  items: ICartItem[];
};
