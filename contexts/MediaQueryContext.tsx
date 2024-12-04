import { createContext } from "react";

import useMediaQuery from "@/hooks/useMediaQuery";

export const MediaQueryContext = createContext<MediaQuery>({} as MediaQuery);

type MediaQueryProviderProps = {
  children: React.ReactNode;
};

export const MediaQueryProvider: React.FC<MediaQueryProviderProps> = ({ children }) => {
  const { screenSize, currentWidth, maxWidth, minWidth } = useMediaQuery();

  return (
    <MediaQueryContext.Provider value={{ screenSize, currentWidth, maxWidth, minWidth }}>
      {children}
    </MediaQueryContext.Provider>
  );
};
