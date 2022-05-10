import { createContext, useContext } from "react";

export const UserContext = createContext({
    user: null,
    setUser: () => {}
})

export default function useUser() {
    return useContext(UserContext)
} 