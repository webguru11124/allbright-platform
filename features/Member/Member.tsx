import { router } from "expo-router";
import { useEffect } from "react";

import { BioField } from "@/features/Member/types";

type Props = {
  lightBackground: string;
  id?: string;
  name?: string;
  imageSrc?: string | undefined | null;
  firstName?: string;
  lastName?: string;
  occupation: string;
  location: string;
  bioFields: BioField[];
  theme: Theme;
};

const Member = ({ name }: Props) => {
  useEffect(() => {
    router.navigate("/home");
  }, []);

  return `${name}`;
};

export default Member;
