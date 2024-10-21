import useProfileGoalsForm from "@/forms/hooks/useProfileGoalsForm";

import ProfileGoalsForm from "./ProfileGoalsForm";
import careerGoalsSchema from "./careerGoalsSchema";

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
