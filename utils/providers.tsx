import { MediaQueryProvider } from "@/contexts/MediaQueryContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { DefaultTheme } from "@/theme";
import { ThemeProvider } from "@react-navigation/native";

type Props = {
  children: React.ReactNode;
};

const Providers = ({ children }: Props) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <ThemeProvider value={DefaultTheme}>
        <MediaQueryProvider>{children}</MediaQueryProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default Providers;
