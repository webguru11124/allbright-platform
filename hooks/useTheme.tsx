import { useTheme as useRnTheme } from "@react-navigation/native";

const useTheme = (): Theme => {
  const theme: any = useRnTheme();

  return theme;
};

export default useTheme;
