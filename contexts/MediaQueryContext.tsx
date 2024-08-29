import useMediaQuery from "@/hooks/useMediaQuery";
import { createContext } from "react";

export const MediaQueryContext = createContext<MediaQuery>({} as MediaQuery);

type MediaQueryProviderProps = {
  children: React.ReactNode;
};

export const MediaQueryProvider: React.FC<MediaQueryProviderProps> = ({
  children,
}) => {
  const { screenSize, maxWidth, minWidth } = useMediaQuery();

  return (
    <MediaQueryContext.Provider value={{ screenSize, maxWidth, minWidth }}>
      {children}
    </MediaQueryContext.Provider>
  );
};
