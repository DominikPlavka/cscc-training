import { createContext, useReducer, useEffect } from "react";

export const ThemeContext = createContext();

export const themeReducer = (state, action) => {
    switch (action.type) {
        case 'SET_DARK':
            return { theme: action.payload, checked: true };
        case 'SET_BRIGHT':
            return { theme: action.payload, checked: false };
        default:
            return state;
    }
};

export const ThemeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(themeReducer, {
        theme: JSON.parse(localStorage.getItem('theme')), checked: JSON.parse(localStorage.getItem('checked'))
    });

    return (
        <ThemeContext.Provider value={{ state, dispatch }}>
            {children}
        </ThemeContext.Provider>
    );
}