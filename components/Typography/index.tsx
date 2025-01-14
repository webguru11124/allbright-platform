import { StyleProp, StyleSheet, Text, TextStyle } from "react-native";

type Props = TextStyle & {
  style?: StyleProp<TextStyle>;
  testID?: string;
  children: React.ReactNode;
};

export const H1 = (p: Props) => <Text style={[styles(p).h1, p.style]}>{p.children}</Text>;
export const H2 = (p: Props) => <Text style={[styles(p).h2, p.style]}>{p.children}</Text>;
export const H3 = (p: Props) => <Text style={[styles(p).h3, p.style]}>{p.children}</Text>;
export const H4 = (p: Props) => <Text style={[styles(p).h4, p.style]}>{p.children}</Text>;
export const H5 = (p: Props) => <Text style={[styles(p).h5, p.style]}>{p.children}</Text>;
export const H6 = (p: Props) => <Text style={[styles(p).h6, p.style]}>{p.children}</Text>;

export const H1Rox = (p: Props) => <Text style={[styles(p).h1Rox, p.style]}>{p.children}</Text>;
export const H2Rox = (p: Props) => <Text style={[styles(p).h2Rox, p.style]}>{p.children}</Text>;
export const H3Rox = (p: Props) => <Text style={[styles(p).h3Rox, p.style]}>{p.children}</Text>;

export const CXXL = (p: Props) => <Text style={[styles(p).cxxl, p.style]}>{p.children}</Text>;
export const CXL = (p: Props) => <Text style={[styles(p).cxl, p.style]}>{p.children}</Text>;
export const CL = (p: Props) => <Text style={[styles(p).cl, p.style]}>{p.children}</Text>;
export const CM = (p: Props) => <Text style={[styles(p).cm, p.style]}>{p.children}</Text>;
export const CS = (p: Props) => <Text style={[styles(p).cs, p.style]}>{p.children}</Text>;
export const A = (p: Props) => <Text style={[styles(p).a, p.style]}>{p.children}</Text>;

const styles = (p: TextStyle) =>
  StyleSheet.create({
    h1: {
      fontFamily: "HK Grotesk, Sans-Serif",
      fontSize: 48,
      fontWeight: p?.fontWeight || "bold",
    },
    h2: {
      fontFamily: "HK Grotesk, Sans-Serif",
      fontSize: 32,
      fontWeight: p?.fontWeight || "bold",
    },
    h3: {
      fontFamily: "HK Grotesk, Sans-Serif",
      fontSize: 24,
      fontWeight: p?.fontWeight || "bold",
    },
    h4: {
      fontFamily: "HK Grotesk, Sans-Serif",
      fontSize: 20,
      fontWeight: p?.fontWeight || "bold",
    },
    h5: {
      fontFamily: "HK Grotesk, Sans-Serif",
      fontSize: 16,
      fontWeight: p?.fontWeight || "bold",
    },
    h6: {
      fontFamily: "HK Grotesk, Sans-Serif",
      fontSize: 12,
      fontWeight: p?.fontWeight || "bold",
    },
    h1Rox: {
      fontFamily: "Roxborough CF",
      fontSize: 64,
    },
    h2Rox: {
      fontFamily: "Roxborough CF",
      fontSize: 32,
    },
    h3Rox: {
      fontFamily: "Roxborough CF",
      fontSize: 24,
    },
    cxxl: {
      fontFamily: "HK Grotesk, Sans-Serif",
      fontSize: 24,
    },
    cxl: {
      fontFamily: "HK Grotesk, Sans-Serif",
      fontSize: 18,
    },
    cl: {
      fontFamily: "HK Grotesk, Sans-Serif",
      fontSize: 16,
    },
    cm: {
      fontFamily: "HK Grotesk, Sans-Serif",
      fontSize: 14,
    },
    cs: {
      fontFamily: "HK Grotesk, Sans-Serif",
      fontSize: 12,
      flexShrink: 1,
    },
    a: {
      fontFamily: "HK Grotesk, Sans-Serif",
      fontSize: 12,
      color: "#007AFF",
      textDecorationLine: "underline",
    },
  });
