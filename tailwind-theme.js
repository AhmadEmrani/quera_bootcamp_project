/** @type {import('tailwindcss').Config} */
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        yekan: ["YekanBakh-Regular", "sans-serif"],
        yekanBlack: ["YekanBakh-Black", "sans-serif"],
        yekanSemi: ["YekanBakh-SemiBold", "sans-serif"],
        yekanBold: ["YekanBakh-Bold", "sans-serif"],
        kalameh: ["Kalameh-Regular", "sans-serif"],
        kalamehBold: ["Kalameh-Bold", "sans-serif"],
      },

      fontSize: {
        /* ---------------------------
         *  YEKAN BAKH TYPOGRAPHY
         * ---------------------------
         */

        // Regular
        "reg-20": [
          "20px",
          {
            lineHeight: "normal",
            fontFamily: "YekanBakh-Regular, sans-serif",
          },
        ],
        "reg-18": [
          "18px",
          {
            lineHeight: "normal",
            fontFamily: "YekanBakh-Regular, sans-serif",
          },
        ],
        "reg-16": [
          "16px",
          {
            lineHeight: "normal",
            fontFamily: "YekanBakh-Regular, sans-serif",
          },
        ],
        "reg-15": [
          "15px",
          {
            lineHeight: "normal",
            fontFamily: "YekanBakh-Regular, sans-serif",
          },
        ],
        "reg-14": [
          "14px",
          {
            lineHeight: "normal",
            fontFamily: "YekanBakh-Regular, sans-serif",
          },
        ],
        "reg-13": [
          "13px",
          {
            lineHeight: "normal",
            fontFamily: "YekanBakh-Regular, sans-serif",
          },
        ],
        "reg-12": [
          "12px",
          {
            lineHeight: "normal",
            fontFamily: "YekanBakh-Regular, sans-serif",
          },
        ],
        "reg-11": [
          "11px",
          {
            lineHeight: "normal",
            fontFamily: "YekanBakh-Regular, sans-serif",
          },
        ],
        "reg-10": [
          "10px",
          {
            lineHeight: "normal",
            fontFamily: "YekanBakh-Regular, sans-serif",
          },
        ],

        // Medium
        "med-28": [
          "28px",
          {
            lineHeight: "normal",
            fontFamily: "YekanBakh-Black, sans-serif",
          },
        ],
        "med-24": [
          "24px",
          {
            lineHeight: "normal",
            fontFamily: "YekanBakh-Black, sans-serif",
          },
        ],
        "med-20": [
          "20px",
          {
            lineHeight: "normal",
            fontFamily: "YekanBakh-Black, sans-serif",
          },
        ],
        "med-18": [
          "18px",
          {
            lineHeight: "normal",
            fontFamily: "YekanBakh-Black, sans-serif",
          },
        ],
        "med-16": [
          "16px",
          {
            lineHeight: "normal",
            fontFamily: "YekanBakh-Black, sans-serif",
          },
        ],
        "med-15": [
          "15px",
          {
            lineHeight: "normal",
            fontFamily: "YekanBakh-Black, sans-serif",
          },
        ],
        "med-14": [
          "14px",
          {
            lineHeight: "normal",
            fontFamily: "YekanBakh-Black, sans-serif",
          },
        ],
        "med-13": [
          "13px",
          {
            lineHeight: "normal",
            fontFamily: "YekanBakh-Black, sans-serif",
          },
        ],
        "med-12": [
          "12px",
          {
            lineHeight: "normal",
            fontFamily: "YekanBakh-Black, sans-serif",
          },
        ],
        "med-11": [
          "11px",
          {
            lineHeight: "normal",
            fontFamily: "YekanBakh-Black, sans-serif",
          },
        ],
        "med-10": [
          "10px",
          {
            lineHeight: "normal",
            fontFamily: "YekanBakh-Black, sans-serif",
          },
        ],

        // SemiBold
        "semi-42": [
          "42px",
          { lineHeight: "normal", fontFamily: "YekanBakh-SemiBold" },
        ],
        "semi-36": [
          "36px",
          { lineHeight: "normal", fontFamily: "YekanBakh-SemiBold" },
        ],
        "semi-32": [
          "32px",
          { lineHeight: "normal", fontFamily: "YekanBakh-SemiBold" },
        ],
        "semi-28": [
          "28px",
          { lineHeight: "normal", fontFamily: "YekanBakh-SemiBold" },
        ],
        "semi-24": [
          "24px",
          { lineHeight: "normal", fontFamily: "YekanBakh-SemiBold" },
        ],
        "semi-20": [
          "20px",
          { lineHeight: "normal", fontFamily: "YekanBakh-SemiBold" },
        ],
        "semi-18": [
          "18px",
          { lineHeight: "normal", fontFamily: "YekanBakh-SemiBold" },
        ],
        "semi-16": [
          "16px",
          { lineHeight: "normal", fontFamily: "YekanBakh-SemiBold" },
        ],
        "semi-14": [
          "14px",
          { lineHeight: "normal", fontFamily: "YekanBakh-SemiBold" },
        ],
        "semi-13": [
          "13px",
          { lineHeight: "normal", fontFamily: "YekanBakh-SemiBold" },
        ],
        "semi-12": [
          "12px",
          { lineHeight: "normal", fontFamily: "YekanBakh-SemiBold" },
        ],
        "semi-11": [
          "11px",
          { lineHeight: "normal", fontFamily: "YekanBakh-SemiBold" },
        ],
        "semi-10": [
          "10px",
          { lineHeight: "normal", fontFamily: "YekanBakh-SemiBold" },
        ],

        // Bold
        "bold-42": [
          "42px",
          {
            lineHeight: "normal",
            fontFamily: "YekanBakh-Bold, sans-serif",
          },
        ],
        "bold-36": [
          "36px",
          {
            lineHeight: "normal",
            fontFamily: "YekanBakh-Bold, sans-serif",
          },
        ],
        "bold-32": [
          "32px",
          {
            lineHeight: "normal",
            fontFamily: "YekanBakh-Bold, sans-serif",
          },
        ],
        "bold-28": [
          "28px",
          {
            lineHeight: "normal",
            fontFamily: "YekanBakh-Bold, sans-serif",
          },
        ],
        "bold-24": [
          "24px",
          {
            lineHeight: "normal",
            fontFamily: "YekanBakh-Bold, sans-serif",
          },
        ],
        "bold-20": [
          "20px",
          {
            lineHeight: "normal",
            fontFamily: "YekanBakh-Bold, sans-serif",
          },
        ],
        "bold-18": [
          "18px",
          {
            lineHeight: "normal",
            fontFamily: "YekanBakh-Bold, sans-serif",
          },
        ],
        "bold-16": [
          "16px",
          {
            lineHeight: "normal",
            fontFamily: "YekanBakh-Bold, sans-serif",
          },
        ],
        "bold-14": [
          "14px",
          {
            lineHeight: "normal",
            fontFamily: "YekanBakh-Bold, sans-serif",
          },
        ],
        "bold-13": [
          "13px",
          {
            lineHeight: "normal",
            fontFamily: "YekanBakh-Bold, sans-serif",
          },
        ],
        "bold-12": [
          "12px",
          {
            lineHeight: "normal",
            fontFamily: "YekanBakh-Bold, sans-serif",
          },
        ],
        "bold-11": [
          "11px",
          {
            lineHeight: "normal",
            fontFamily: "YekanBakh-Bold, sans-serif",
          },
        ],
        "bold-10": [
          "10px",
          {
            lineHeight: "normal",
            fontFamily: "YekanBakh-Bold, sans-serif",
          },
        ],

        /* ---------------------------
         *  KALAMEH TYPOGRAPHY (BIG)
         * ---------------------------
         */
        "kalameh-80": [
          "80px",
          {
            lineHeight: "normal",
            fontFamily: "Kalameh-Bold",
          },
        ],
        "kalameh-72": [
          "72px",
          {
            lineHeight: "normal",
            fontFamily: "Kalameh-Bold",
          },
        ],
        "kalameh-64": [
          "64px",
          {
            lineHeight: "normal",
            fontFamily: "Kalameh-Bold",
          },
        ],
        "kalameh-56": [
          "56px",
          {
            lineHeight: "normal",
            fontFamily: "Kalameh-Bold",
          },
        ],
        "kalameh-48": [
          "48px",
          {
            lineHeight: "normal",
            fontFamily: "Kalameh-Bold",
          },
        ],
        "kalameh-40": [
          "40px",
          {
            lineHeight: "normal",
            fontFamily: "Kalameh-Bold",
          },
        ],
        "kalameh-36": [
          "36px",
          {
            lineHeight: "normal",
            fontFamily: "Kalameh-Bold",
          },
        ],
        "kalameh-32": [
          "32px",
          {
            lineHeight: "normal",
            fontFamily: "Kalameh-Bold",
          },
        ],
        "kalameh-28": [
          "28px",
          {
            lineHeight: "normal",
            fontFamily: "Kalameh-Bold",
          },
        ],
        "kalameh-24": [
          "24px",
          {
            lineHeight: "normal",
            fontFamily: "Kalameh-Bold",
          },
        ],
      },

      colors: {
        primary: {
          light: "#2C7EF8",
          "hover-light": "#075CD9",
          "on-primary-light": "#FFFFFF",

          dark: "#3A86F8",
          "hover-dark": "#6BA4FA",
        },

        background: {
          light: "#FFFFFF",
          "on-background-light": "#191C1E",
          "surface-light": "#FFFFFF",

          dark: "#040810",
          "on-background-dark": "#E6E9EF",
          "surface-dark": "#E6E9EF",
        },

        "neutral-light": {
          1: "#FEFEFE",
          2: "#F5F6F8",
          3: "#E1E0E5",
          4: "#C8C7CB",
          5: "#AFAEB2",
          6: "#7D7D7F",
          7: "#646466",
          8: "#323233",
          9: "#191C1E",
          10: "#000000",
        },

        "neutral-dark": {
          1: "#FFFFFF",
          2: "#FEFEFE",
          3: "#F5F6F8",
          4: "#E1E0E5",
          5: "#C8C7CB",
          6: "#AFAEB2",
          7: "#7D7D7F",
          8: "#646466",
          9: "#323233",
        },

        success: "#90F677",
        errors: "#E63946",
      },

      boxShadow: {
        cards: "0 4px 63px 0 rgba(0,0,0,0.03)",
        "header-mobile": "0 4px 18px 0 rgba(24, 72, 144, 0.06)",
      },
    },
  },
};
