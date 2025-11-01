import tokens from './token.json' assert { type: "json" };

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        RPrimary: tokens["RazeWebsite"].RPrimary.value,
        RonPrimary: tokens["RazeWebsite"].RonPrimary.value,
        RSecondary: tokens["RazeWebsite"].RSecondary.value,
        border: {
          dark: tokens["RazeWebsite"].RBorderDark.value.color,
          light: tokens["RazeWebsite"].RBorderLight.value.color,
        },
      },

      opacity: {
        ROpacity1: tokens["RazeWebsite"].ROpacity1.value,
      },

      borderRadius: {
        RButton: `${tokens["RazeWebsite"].RButtonCorner.value}px`,
        RSkill: `${tokens["RazeWebsite"].RSkillcorner.value}px`,
      },

      borderWidth: {
        RBorderDark: `${tokens["RazeWebsite"].RBorderDark.value.width}px`,
        RBorderLight: `${tokens["RazeWebsite"].RBorderLight.value.width}px`,
      },

      spacing: {
        RMobilePadding: `${tokens["RazeWebsite"].RMobilePadding.value}px`,
        RButtonMobilePX: `${tokens["RazeWebsite"].RButtonMobilePX.value}px`,
        RButtonMobilePY: `${tokens["RazeWebsite"].RButtonMobilePY.value}px`,
        RTabletPadding: `${tokens["RazeWebsite"].RTabletPadding.value}px`,
        RButtonTabletPX: `${tokens["RazeWebsite"].RButtonTabletPX.value}px`,
        RButtonTabletPY: `${tokens["RazeWebsite"].RButtonTabletPY.value}px`,
        RLaptopPadding: `${tokens["RazeWebsite"].RLaptopPadding.value}px`,
        RButtonLaptopPX: `${tokens["RazeWebsite"].RButtonLaptopPX.value}px`,
        RButtonLaptopPY: `${tokens["RazeWebsite"].RButtonLaptopPY.value}px`,
      },

      fontFamily: {
        RMontserrat: [tokens["RazeWebsite"].RHeader1.value.fontFamily, 'sans-serif'],
      },

      fontSize: {
  RHeader1: [
    tokens["RazeWebsite"].RHeader1.value.fontSize,
    {
      lineHeight: tokens["RazeWebsite"].RHeader1.value.lineHeight,
      letterSpacing: tokens["RazeWebsite"].RHeader1.value.letterSpacing,
      fontWeight: tokens["RazeWebsite"].RHeader1.value.fontWeight,
    },
  ],
  RHeader2: [
    tokens["RazeWebsite"].RHeader2.value.fontSize,
    {
      lineHeight: tokens["RazeWebsite"].RHeader2.value.lineHeight,
      letterSpacing: tokens["RazeWebsite"].RHeader2.value.letterSpacing,
      fontWeight: tokens["RazeWebsite"].RHeader2.value.fontWeight,
    },
  ],
  RHeader3: [
    tokens["RazeWebsite"].RHeader3.value.fontSize,
    {
      lineHeight: tokens["RazeWebsite"].RHeader3.value.lineHeight,
      letterSpacing: tokens["RazeWebsite"].RHeader3.value.letterSpacing,
      fontWeight: tokens["RazeWebsite"].RHeader3.value.fontWeight,
    },
  ],
  RHeader4: [
    tokens["RazeWebsite"].RHeader4.value.fontSize,
    {
      lineHeight: tokens["RazeWebsite"].RHeader4.value.lineHeight,
      letterSpacing: tokens["RazeWebsite"].RHeader4.value.letterSpacing,
      fontWeight: tokens["RazeWebsite"].RHeader4.value.fontWeight,
    },
  ],
  RTitle: [
    tokens["RazeWebsite"].RTitle.value.fontSize,
    {
      lineHeight: tokens["RazeWebsite"].RTitle.value.lineHeight,
      letterSpacing: tokens["RazeWebsite"].RTitle.value.letterSpacing,
      fontWeight: tokens["RazeWebsite"].RTitle.value.fontWeight,
    },
  ],
  RParagraph1: [
    tokens["RazeWebsite"].RParagraph1.value.fontSize,
    {
      lineHeight: tokens["RazeWebsite"].RParagraph1.value.lineHeight,
      letterSpacing: tokens["RazeWebsite"].RParagraph1.value.letterSpacing,
      fontWeight: tokens["RazeWebsite"].RParagraph1.value.fontWeight,
    },
  ],
  RParagraph2: [
    tokens["RazeWebsite"].RParagraph2.value.fontSize,
    {
      lineHeight: tokens["RazeWebsite"].RParagraph2.value.lineHeight,
      letterSpacing: tokens["RazeWebsite"].RParagraph2.value.letterSpacing,
      fontWeight: tokens["RazeWebsite"].RParagraph2.value.fontWeight,
    },
  ],
  RButtonText: [
    tokens["RazeWebsite"].RButtonText.value.fontSize,
    {
      lineHeight: tokens["RazeWebsite"].RButtonText.value.lineHeight,
      letterSpacing: tokens["RazeWebsite"].RButtonText.value.letterSpacing,
      fontWeight: tokens["RazeWebsite"].RButtonText.value.fontWeight,
    },
  ],
},
    },
  },
  plugins: [],
};