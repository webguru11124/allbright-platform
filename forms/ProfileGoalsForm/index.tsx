import useProfileGoalsForm from "@/forms/hooks/useProfileGoalsForm";

import careerGoalsSchema from "./careerGoalsSchema";
import ProfileGoalsForm from "./ProfileGoalsForm";

export const ProfileGoalsFormContainer = ({ ...rest }) => {
  const props = useProfileGoalsForm(careerGoalsSchema);
  return (
    <ProfileGoalsForm
      {...props}
      {...rest}
    />
  );
};

export default ProfileGoalsFormContainer;
