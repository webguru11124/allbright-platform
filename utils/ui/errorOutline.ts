import colours from "./colours";

export const errorOutline = `
  -webkit-box-shadow:
    -2px 0 0 ${colours.errorYellow},
    2px 0 0 ${colours.errorYellow},
    0 -2px 0 ${colours.errorYellow},
    0 2px 0 ${colours.errorYellow};
  -moz-box-shadow:
    -2px 0 0 ${colours.errorYellow},
    2px 0 0 ${colours.errorYellow},
    0 -2px 0 ${colours.errorYellow},
    0 2px 0 ${colours.errorYellow};
  box-shadow:
    -2px 0 0 ${colours.errorYellow},
    2px 0 0 ${colours.errorYellow},
    0 -2px 0 ${colours.errorYellow},
    0 2px 0 ${colours.errorYellow};
` as const;
