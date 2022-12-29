import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export interface CartState {
    products: Product[];
}

const initialState: CartState = {
    products: []
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state: CartState, action: PayloadAction<Product>) => {
            state.products = [...state.products, action.payload];
        },
        removeFromCart: (state: CartState, action: PayloadAction<{ id: string }>) => {
            const index = state.products.findIndex(
                (product: Product) => product._id === action.payload.id
            );

            let newCart = [...state.products];

            if (index >= 0) newCart.splice(index, 1);
            else
                console.log(
                    `Can't remove product (id: ${action.payload.id}) as its not in Cart!`
                );

            state.products = newCart;
        }
    }
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectCartProducts = (state: RootState) => state.cart.products;
export const selectCartProductsWithId = (state: RootState, id: string) => {
    state.cart.products.filter((product: Product) => product._id === id);
};
export const selectCartTotal = (state: RootState) =>
    state.cart.products.reduce(
        (total: number, product: Product) => (total += product.price),
        0
    );

export default cartSlice.reducer;
