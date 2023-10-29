import React, { createContext, ReactNode, Dispatch, SetStateAction, useContext } from "react";



export interface OgheeseContextProps {
  active: boolean | undefined;
  connectStarket: string;
  setConnectStarket: Dispatch<SetStateAction<string>>;
  addressActive: string;
  setAddressActive: Dispatch<SetStateAction<string>>;
  setActive: Dispatch<SetStateAction<boolean | undefined>>;
  chain: string;
  setChain: Dispatch<SetStateAction<string>>;
}

const OgheeseContext = createContext<OgheeseContextProps>({
  connectStarket: "",
  setConnectStarket: () => {},
  active: false, 
  addressActive: "",
  setAddressActive: () => {},
  setActive: () => {},
  chain: "",
  setChain: () => {},
});



const OgheeseProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [active, setActive] = React.useState<boolean | undefined>(undefined);
  const [chain, setChain] = React.useState<string>("");
  const [addressActive, setAddressActive] = React.useState<string>("");
  const [connectStarket, setConnectStarket] = React.useState<string>("");


  return (
    <div>
      <OgheeseContext.Provider
        value={{
          connectStarket,
          setConnectStarket,
          active,
          setActive,
          addressActive,
          setAddressActive,
          chain,
          setChain,
        }}
      >
        {children}
      </OgheeseContext.Provider>
    </div>
  );
};

const   UseOgheeseContext = () => useContext(OgheeseContext);

export { OgheeseProvider, UseOgheeseContext };
