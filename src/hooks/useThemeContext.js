import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const useThemeContext = () => {
    const context = useContext(ThemeContext);


    if (!context) {
        throw new Error('useCitiesContext must be used inside CitiesContextProvider component')
    }

    return context;
}