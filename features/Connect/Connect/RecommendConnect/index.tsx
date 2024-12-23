import RecommendConnectMobile from "./RecommendConnect_Mobile";

type Props = {
  hitComponent: React.ComponentType<any>;
};

function RecommendConnect(props: Props) {
  return <RecommendConnectMobile {...props} />;
}

export default RecommendConnect;
