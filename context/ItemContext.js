import { createContext, useContext } from "react";

export const ItemContext = createContext({
    items: null,
    setItems: () => {}
})

export default function useItems() {
    return useContext(ItemContext)
}