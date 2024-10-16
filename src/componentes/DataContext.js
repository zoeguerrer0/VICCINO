import React,{Children, createContext} from "react";

const DataContext = createContext();

const DataProvider=({children})=>{
    return <DataContext.Provider>
        {Children}
    </DataContext.Provider>
}
export default DataProvider;