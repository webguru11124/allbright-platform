import usePledgeForm from "@/forms/hooks/usePledgeForm";

import PledgeForm from "./PledgeForm";
import pledgeSchema from "./pledgeSchema";

export const PledgeFormContainer = ({ ...rest }) => {
  const props = usePledgeForm(pledgeSchema);
  return (
    <PledgeForm
      {...props}
      {...rest}
    />
  );
};

export default PledgeFormContainer;
