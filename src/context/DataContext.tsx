import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

interface DataContextType {
    rawData: any[];
    setRawData: (data: any[]) => void;
    transformedData: any[];
    setTransformedData: (data: any[]) => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
    const [rawData, setRawData] = useState<any[]>([]);
    const [transformedData, setTransformedData] = useState<any[]>([]);

    return (
        <DataContext.Provider value={{ rawData, setRawData, transformedData, setTransformedData }}>
            {children}
        </DataContext.Provider>
    );
}

export function useData() {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error("useData must be used within a DataProvider");
    }
    return context;
}
