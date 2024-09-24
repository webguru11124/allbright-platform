import useRegisterForm from "../hooks/useRegisterForm";
import registerSchema from "@/forms/RegisterForm/registerSchema";

// TODO: Replace 'any' in React.ComponentType<any> with RegisterFormProps
const withRegisterFormProps = (
  WrappedComponent: React.ComponentType<any>
): React.ComponentType => {
  const WC = ({ ...rest }) => {
    const props = useRegisterForm(registerSchema);

    return (
      <WrappedComponent
        {...props}
        {...rest}
      />
    );
  };

  WC.displayName = WrappedComponent.displayName || WrappedComponent.name;
  return WC;
};

export default withRegisterFormProps;
