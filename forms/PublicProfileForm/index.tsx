import usePublicProfileForm from "@/forms/hooks/usePublicProfileForm";

import PublicProfileForm from "./PublicProfileForm";
import publicProfileSchema from "./publicProfileSchema";

export const PublicProfileFormContainer = ({ ...rest }) => {
  const props = usePublicProfileForm(publicProfileSchema);
  return (
    <PublicProfileForm
      {...props}
      {...rest}
    />
  );
};

export default PublicProfileFormContainer;
