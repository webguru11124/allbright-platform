import useLoginForm from "@/forms/hooks/useLoginForm";
import loginSchema from "@/forms/LoginForm/loginSchema";

// TODO: Replace 'any' in React.ComponentType<any> with LoginFormProps
const withLoginFormProps = (
  WrappedComponent: React.ComponentType<any>,
): React.ComponentType => {
  const WC = ({ ...rest }) => {
    const props = useLoginForm(loginSchema);

    return <WrappedComponent {...props} {...rest} />;
  };

  WC.displayName = WrappedComponent.displayName || WrappedComponent.name;
  return WC;
};

export default withLoginFormProps;
