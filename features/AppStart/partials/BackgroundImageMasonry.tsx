import AppStartImg from "@/features/AppStart/partials/AppStartImg";
import { BackgroundImageMasonryProps } from "@/features/AppStart/types";

export default function BackgroundImageMasonry({
  store,
  heightOffset,
}: BackgroundImageMasonryProps) {
  return store.map((el, idx) => (
    <AppStartImg
      elm={el}
      idx={idx}
      heightOffsetPercent={heightOffset}
      key={`${el.img}`}
    />
  ));
}
