import AppStartImg from "@/features/AppStart/partials/AppStartImg";
import { BackgroundImageMasonryProps } from "@/features/AppStart/types";

const BackgroundImageMasonry = ({ store, heightOffset }: BackgroundImageMasonryProps) =>
  store.map((el, idx) => (
    <AppStartImg
      elm={el}
      idx={idx}
      heightOffsetPercent={heightOffset}
      key={`${el.img}`}
    />
  ));

export default BackgroundImageMasonry;
