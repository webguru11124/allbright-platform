import usePublicProfileForm from "../hooks/usePublicProfileForm";
import publicProfileSchema from "@/forms/PublicProfileForm/publicProfileSchema";

const withPublicProfileFormProps = (
  WrappedComponent: React.ComponentType<any>
): React.ComponentType => {
  const WC = ({ ...rest }) => {
    const props = usePublicProfileForm(publicProfileSchema);

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

export default withPublicProfileFormProps;
