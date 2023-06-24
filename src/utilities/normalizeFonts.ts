import { PixelRatio, Dimensions } from "react-native";
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");
const isDesktopOrLaptop = Dimensions.get("window").width >= 720;
export function normalize(size: any, based = "width") {
  const widthBaseScale = isDesktopOrLaptop
    ? SCREEN_WIDTH / 2200
    : SCREEN_WIDTH / 414;
  const heightBaseScale = isDesktopOrLaptop
    ? SCREEN_HEIGHT / 2200
    : SCREEN_HEIGHT / 896;

  const newSize =
    based === "height" ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}
