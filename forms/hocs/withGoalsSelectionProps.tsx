import goals from "@/utils/data/goals";
import { useGoalState } from "../hooks/useGoalState";

// TODO: Replace 'any' in React.ComponentType<any> with LoginFormProps
const withGoalsSelectionProps = (
  WrappedComponent: React.ComponentType<any>
): React.ComponentType<{
  updateField: (value: (typeof goals)[number][]) => void;
}> => {
  const WC = ({ updateField, ...rest }: any) => {
    const props = useGoalState({ updateField: updateField });

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

export default withGoalsSelectionProps;
