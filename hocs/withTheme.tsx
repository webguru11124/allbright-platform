import React from "react";

import useTheme from "@/hooks/useTheme";

type WithThemeProps = {
  theme: Theme;
};

const withTheme = <T extends WithThemeProps = WithThemeProps>(
  WrappedComponent: React.ComponentType<T>,
): React.ComponentType<Omit<T, keyof WithThemeProps>> => {
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || "Component";

  const ComponentWithTheme = (props: Omit<T, keyof WithThemeProps>) => {
    const theme = useTheme();

    return <WrappedComponent {...(props as T)} theme={theme} />;
  };

  ComponentWithTheme.displayName = `withTheme(${displayName})`;

  return ComponentWithTheme;
};

export default withTheme;
