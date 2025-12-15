"use client"
import { createContext, useState } from "react";

// Create the context
export const LoadingContext = createContext();

// Provider component
export const LoadingProvider = ({ children }) => {
    const [loading, setLoading] = useState(true); // global loading state

    return (
        <LoadingContext.Provider value={{ loading, setLoading }}>
            {children}
        </LoadingContext.Provider>
    );
};
