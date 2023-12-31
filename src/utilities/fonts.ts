import { normalize } from "./normalizeFonts";
export const fonts = {
  displayLarge: {
    fontFamily: "Jost_700Bold",
    letterSpacing: 0,
    fontWeight: "400",
    lineHeight: normalize(64),
    fontSize: normalize(57),
  },
  displayMedium: {
    fontFamily: "Jost_600SemiBold",
    letterSpacing: 0,
    fontWeight: "400",
    lineHeight: normalize(52),
    fontSize: normalize(45),
  },
  displaySmall: {
    fontFamily: "Jost_500Medium",
    letterSpacing: 0,
    fontWeight: "400",
    lineHeight: normalize(44),
    fontSize: normalize(36),
  },
  headlineLarge: {
    fontFamily: "Jost_600SemiBold",
    letterSpacing: 0,
    fontWeight: "400",
    lineHeight: normalize(40),
    fontSize: normalize(32),
  },
  headlineMedium: {
    fontFamily: "Jost_500Medium",
    letterSpacing: 0,
    fontWeight: "400",
    lineHeight: normalize(36),
    fontSize: normalize(28),
  },
  headlineSmall: {
    fontFamily: "Jost_400Regular",
    letterSpacing: 0,
    fontWeight: "400",
    lineHeight: normalize(32),
    fontSize: normalize(24),
  },
  titleLarge: {
    fontFamily: "Jost_500Medium",
    letterSpacing: 0,
    fontWeight: "400",
    lineHeight: normalize(28),
    fontSize: normalize(22),
  },
  titleMedium: {
    fontFamily: "Jost_500Medium",
    letterSpacing: 0.5,
    fontWeight: "500",
    lineHeight: normalize(22),
    fontSize: normalize(16),
  },
  titleSmall: {
    fontFamily: "Jost_300Light",
    letterSpacing: 0.1,
    fontWeight: "500",
    lineHeight: normalize(20),
    fontSize: normalize(14),
  },
  labelLarge: {
    fontFamily: "Jost_600SemiBold",
    letterSpacing: 0.1,
    fontWeight: "500",
    lineHeight: normalize(20),
    fontSize: normalize(14),
  },
  labelMedium: {
    fontFamily: "Jost_500Medium",
    letterSpacing: 0.5,
    fontWeight: "500",
    lineHeight: normalize(16),
    fontSize: normalize(12),
  },
  labelSmall: {
    fontFamily: "Jost_400Regular",
    letterSpacing: 0.5,
    fontWeight: "500",
    lineHeight: normalize(16),
    fontSize: normalize(11),
  },
  bodyLarge: {
    fontFamily: "Jost_600SemiBold",
    letterSpacing: 0.15,
    fontWeight: "400",
    lineHeight: normalize(24),
    fontSize: normalize(16),
  },
  bodyMedium: {
    fontFamily: "Jost_500Medium",
    letterSpacing: 0.25,
    fontWeight: "400",
    lineHeight: normalize(20),
    fontSize: normalize(14),
  },
  bodySmall: {
    fontFamily: "Jost_400Regular",
    letterSpacing: 0.4,
    fontWeight: "400",
    lineHeight: normalize(16),
    fontSize: normalize(12),
  },
  default: {
    fontFamily: "Jost_400Regular",
    letterSpacing: 0,
    fontWeight: "400",
  },
};
