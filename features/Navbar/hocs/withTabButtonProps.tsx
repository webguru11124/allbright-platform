import useTabButton from "@/features/Navbar/hooks/useTabButton";
import { Props } from "@/features/Navbar/partials/TabButton";

const withTabButtonProps = (WrappedComponent: React.FC<Props>) => {
  const WC = ({
    href,
    children,
    ...rest
  }: Pick<Props, "href" | "children">) => {
    const { isActive, widthAnim, onHoverIn, onHoverOut } = useTabButton({
      href: href,
    });

    return (
      <WrappedComponent
        isActive={isActive}
        widthAnim={widthAnim}
        href={href}
        onHoverIn={onHoverIn}
        onHoverOut={onHoverOut}
        {...rest}>
        {children}
      </WrappedComponent>
    );
  };

  WC.displayName = "TabButton";
  return WC;
};

export default withTabButtonProps;
