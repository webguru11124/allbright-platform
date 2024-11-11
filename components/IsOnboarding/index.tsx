import { router } from "expo-router";
import React from "react";

import { useUserProfile } from "@/hooks/resources/useUserProfile";

type Props = {
    children: React.ReactNode;
};

const IsOnboarding = (props: Props) => {
    const { data } = useUserProfile();
    React.useEffect(() => {
      if(data){
        if(!data?.agreedToPledge)
            router.navigate('onboarding/welcome');
      }
    }, [data]);

    return props.children;
};

export default IsOnboarding;
