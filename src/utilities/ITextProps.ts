export interface TextWithDefaultProps extends Text {
  defaultProps?: {
    allowFontScaling?: boolean;
    adjustsFontSizeToFit?: boolean;
    maxFontSizeMultiplier?: number;
  };
}
