import styled from "styled-components/native";

type StyleProps = {
  backgroundColour?: string;
  backgroundPattern?: string;
  textColour?: string;
  color?: string;
  weight?: number;
  fontStyle?: string;
  textAlign?: "left" | "center" | "right";
  opacity?: number;
  letterSpacing?: number;
};

function base(p: StyleProps) {
  let formatting = "";
  formatting += `color: ${p.color};`;
  if (p.weight) formatting += `font-weight: ${p.weight}px;`;
  if (p.fontStyle) formatting += `font-style: ${p.fontStyle};`;
  if (p.textAlign) formatting += `text-align: ${p.textAlign};`;
  if (p.opacity) formatting += `opacity: ${p.opacity};`;
  return formatting;
}

export const H1 = styled.Text<StyleProps>`
  ${base}
  font-family: 'HK Grotesk, Sans-Serif';
  font-size: 48px;
`;

export const H2 = styled.Text<StyleProps>`
  ${base}
  font-family: 'HK Grotesk, Sans-Serif';
  font-size: 32px;
  font-weight: ${(p) => p?.weight ?? "bold"};
`;

export const H3 = styled.Text<StyleProps>`
  ${base}
  font-family: 'HK Grotesk, Sans-Serif';
  font-size: 24px;
  font-weight: ${(p) => p?.weight ?? "bold"};
`;

export const H4 = styled.Text<StyleProps>`
  ${base}
  font-family: 'HK Grotesk, Sans-Serif';
  font-size: 20px;
  font-weight: ${(p) => p?.weight ?? "bold"};
`;

export const H5 = styled.Text<StyleProps>`
  ${base}
  font-family: 'HK Grotesk, Sans-Serif';
  font-size: 16px;
  font-weight: ${(p) => p?.weight ?? "bold"};
`;

export const H6 = styled.Text<StyleProps>`
  ${base}
  font-family: 'HK Grotesk, Sans-Serif';
  font-size: 12px;
  font-weight: ${(p) => p?.weight ?? "bold"};
`;

export const H1Rox = styled.Text<StyleProps>`
  ${base}
  font-family: Roxborough CF;
  font-size: 64px;
`;

export const H2Rox = styled.Text<StyleProps>`
  ${base}
  font-family: Roxborough CF;
  font-size: 32px;
`;

export const H3Rox = styled.Text<StyleProps>`
  ${base}
  font-family: Roxborough CF;
  font-size: 24px;
`;

export const CXXL = styled.Text<StyleProps>`
  ${base}
  font-family: 'HK Grotesk, Sans-Serif';
  font-size: 24px;
`;

export const CXL = styled.Text<StyleProps>`
  ${base}
  font-family: 'HK Grotesk, Sans-Serif';
  font-size: 18px;
`;

export const CL = styled.Text<StyleProps>`
  ${base}
  font-family: 'HK Grotesk, Sans-Serif';
  font-size: 16px;
`;

export const CM = styled.Text<StyleProps>`
  ${base}
  font-family: 'HK Grotesk, Sans-Serif';
  font-size: 14px;
`;

export const CS = styled.Text<StyleProps>`
  ${base}
  font-family: 'HK Grotesk, Sans-Serif';
  font-size: 12px;
  flex-shrink: 1;
`;

export const CXS = styled.Text<StyleProps>`
  ${base}
  font-family: 'HK Grotesk, Sans-Serif';
  font-size: 10px;
`;

export const Link = styled(CS)`
  text-decoration: underline;
`;

// old: to be removed
export const H1C = styled.Text<StyleProps>`
  ${base}
  font-family: 'HK Grotesk, Sans-Serif';
  font-weight: bold;
  font-size: 30px;
  line-height: 38px;
`;

export const CMX = styled.Text<StyleProps>`
  ${base}
  font-family: 'HK Grotesk, Sans-Serif';
  font-size: 15px;
  ${(p) => (p.letterSpacing ? `letter-spacing: ${p.letterSpacing}px;` : "")}
`;
