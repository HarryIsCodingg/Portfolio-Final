import { createContext, useState } from "react";
import homePhoto from "../images/project-images/home.png";

const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [backgroundImage, setBackgroundImage] = useState(homePhoto);

  return (
    <PortfolioContext.Provider
      value={{
        backgroundImage,
        setBackgroundImage,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export default PortfolioContext;
