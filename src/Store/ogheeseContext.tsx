import React, {
     createContext,
     ReactNode,
     Dispatch,
     SetStateAction,
     useContext,
   } from "react";
   
   // Define the type for the context value
   interface OgheeseContextProps {
     connect: boolean;
     setConnect: Dispatch<SetStateAction<boolean>>;
   }
   
   // Create the context with a default value for setMode
   export const OgheeseContext = createContext<OgheeseContextProps | undefined>(
     undefined
   );
   
   const OgheeseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
     const [connect, setConnect] = React.useState<boolean>(false);
   
     return (
       <div>
         <OgheeseContext.Provider
           value={{
             connect,
             setConnect,
           }}
         >
           {children}
         </OgheeseContext.Provider>
       </div>
     );
   };
   
   const UseOgheeseContext = () => {
     const context = useContext(OgheeseContext);
     if (!context) {
       throw new Error("useOgheeseContext must be within a provider");
     }
     return context;
   };
   
   export { OgheeseProvider, UseOgheeseContext };
   