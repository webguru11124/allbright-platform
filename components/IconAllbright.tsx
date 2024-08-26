import React from "react";
import styled from "styled-components/native";

type Props = {
  color?: string;
  width?: number;
};

function IconAllBright(props: Props) {
  return (
    <svg
      viewBox="0 0 124 15"
      fill="none"
      width={props.width || 125}
      color="charcoal">
      <path
        d="M9.068.414c1.969 4.854 3.934 9.715 5.918 14.556-1.097.06-2.316.01-3.46.026-.383-1.029-.784-2.038-1.164-3.066H4.545c-.45.976-.813 2.039-1.214 3.066H0C1.992 10.142 3.936 5.244 5.946.414h3.122zm86.678.003v5.627h6.265c.064-1.823.009-3.76.027-5.627h3.225V15h-3.225V8.87h-6.292V15h-3.224V.497c0-.038-.004-.075.025-.08h3.2zm24.936 0v2.826h-4.705c-.061 3.868-.009 7.847-.026 11.757h-3.226V3.272c-1.516-.065-3.144-.011-4.705-.029V.497c-.002-.038-.005-.075.027-.08h12.635zm-47.174 0V15h-3.223V.497c-.001-.038-.007-.075.026-.08h3.197zm-52.504 0v11.727c2.079.066 4.275.01 6.399.03V15h-9.624V.497c-.003-.038-.004-.075.027-.08h3.198zm12.203 0v11.727c2.08.066 4.276.01 6.4.03V15h-9.623V.497c-.001-.038-.004-.075.029-.08h3.194zm32.35 1.19c1.027.79 1.576 2.168 1.374 3.83-.203 1.69-1.324 2.904-2.881 3.381 1.238 2.045 2.799 4.145 4.046 6.181h-3.65c-1.31-1.862-2.464-3.875-3.754-5.76H59.32v5.76h-3.224V.497c-.002-.038-.005-.075.025-.08 3.559.068 7.356-.413 9.438 1.19zm23.697-.513V4.29c-.134.026-.329-.135-.504-.236-1.15-.68-2.769-1.35-4.678-1.11-1.85.229-3.22 1.359-3.78 2.958-.684 1.958.006 4.038 1.138 5.073 1.132 1.034 3.246 1.64 5.154.925V9.707h-2.537V7.038h5.681v6.791c-2.183 1.365-6.237 1.586-8.774.397-2.377-1.12-4.169-3.361-4.176-6.632-.007-2.348.955-4.152 2.22-5.39 1.31-1.283 2.987-2.08 5.39-2.193a9.203 9.203 0 014.866 1.083zm-37.42.598c.545.487.894 1.242.953 2.032.127 1.716-.815 2.86-2.195 3.278 1.41.5 2.412 1.202 2.697 2.747.666 3.65-2.306 4.976-5.472 5.203-1.67.12-3.55-.034-5.392.027V.478c-.003-.04-.005-.077.026-.08 3.53.06 7.49-.402 9.383 1.294zM45.675 8.64c-.03.005-.028.041-.027.077v3.515c1.595-.085 3.486.2 4.204-.712.566-.723.279-1.966-.318-2.404-.844-.622-2.469-.457-3.859-.476zM7.43 4.112c-.583 1.812-1.284 3.505-1.906 5.283 1.28-.017 2.625.037 3.86-.028-.687-1.715-1.26-3.546-1.954-5.255zm51.916-.869c-.03.006-.029.045-.026.08v3.515c1.366-.033 2.997.132 3.832-.475.505-.369.823-1.34.451-2.117-.558-1.16-2.503-.98-4.257-1.003zm-13.67-.098c-.03.002-.028.041-.027.079v3.194c1.354.006 2.917.135 3.568-.604.441-.501.487-1.549 0-2.064-.67-.715-2.147-.566-3.54-.605zM120.939 14.827c1.133.55 2.488-.272 2.47-1.577-.012-.95-.84-1.81-1.988-1.637-.724.112-1.299.617-1.405 1.38-.098.734.269 1.511.923 1.834z"
        fill="currentColor"
        {...props}
      />
    </svg>
  );
}

const StyledIconAllBright = styled(IconAllBright)`
  color: #414143;
`;

export default StyledIconAllBright;
