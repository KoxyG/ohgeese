import React, { createContext, ReactNode, Dispatch, SetStateAction, useContext } from "react";



interface OgheeseContextProps extends Iterable<[string, Dispatch<SetStateAction<string>>]>{
  active: boolean | undefined; 
  setActive: Dispatch<SetStateAction<boolean | undefined>>;

  address: string; 
  setAddress: Dispatch<SetStateAction<string>>;
}



export const OgheeseContext = createContext<OgheeseContextProps | undefined>(undefined);

const OgheeseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  
  const [active, setActive] = React.useState<boolean>(); 
  const [address, setAddress] = React.useState<string>("");



  return (
    <div>
      <OgheeseContext.Provider
        value={{

          active,
          setActive,
          address,
          setAddress,
          [Symbol.iterator]: function* () {
            yield ["address", setAddress];
          },
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
