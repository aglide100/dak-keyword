module.exports = {
  future: {},
  important: true,
  purge: [],
  variants: {
    extend: {
      rotate: ["hover", "group-hover"],
      textColor: ["responsive", "hover", "focus", "group-hover"],
    },
  },
  theme: {
    extend: {
      width: {
        1.25: "0.3125rem",
        2.25: "0.5625rem",
        4.5: "1.125rem",
        7.5: "1.875rem",
        10.25: "2.5625rem",
        11.5: "2.875rem",
        12.5: "3.125rem",
        14.25: "3.5625rem",
        16.75: "4.1875rem",
        17.5: "4.375rem",
        18.5: "4.625rem",
        19.75: "4.9375rem",
        22.5: "5.625rem",
        22.75: "5.6875rem",
        23.5: "5.875rem",
        26.75: "6.6875rem",
        32.5: "8.125rem",
        38: "9.5rem",
        42.5: "10.625rem",
        50: "12.5rem",
        55.78: "13.945rem",
        57.5: "14.375rem",
        75: "18.75rem",
        76: "19rem",
        83.75: "20.9375rem",
        96.75: "24.18rem",
        117: "31.25rem",
        127: "31.75rem",
        160: "40rem",
        360: "90rem",
        169.75: "42.4375rem",
        200: "56rem",
        "57%": "57%",
        "90%": "90%",
        "99%": "99%",
        "99vw": "99vw",
        "120vw": "120vw",
      },
      height: {
        3.5: "0.875rem",
        4.5: "1.125rem",
        5.25: "1.3125rem",
        7.25: "1.8125rem",
        7.5: "1.875rem",
        9.5: "2.375rem",
        10.5: "2.625rem",
        11.5: "2.875rem",
        12.5: "3.125rem",
        17.5: "4.375rem",
        19.25: "4.8125rem",
        19.5: "4.875rem",
        66.5: "16.624rem",
        73: "18.25rem",
        82: "20.5rem",
        150.75: "37.6875rem",
        275: "68.75rem",
        maxContent: "max-content",
        "110vh": "110vh",
      },
      maxWidth: {
        48: "12rem",
        "1/2": "50%",
      },
      maxHeight: {
        275: "68.75rem",
      },
      padding: {
        7.5: "1.875rem",
      },
      margin: {
        1.23: "0.3075rem",
        1.25: "0.3125rem",
        3.75: "0.9375rem",
        4.5: "1.125rem",
        5: "1.25rem",
        6.25: "1.5625rem",
        7.5: "1.875rem",
        8.75: "2.1875rem",
        10: "2.5rem",
        12.4: "3.1rem",
        12.5: "3.125rem",
        13: "3.25rem",
        15: "3.75rem",
        15.6: "3.9rem",
        17.5: "4.375rem",
        18.4: "4.6rem",
        19.8: "4.95rem",
        41.25: "10.3125rem",
        "2%": "2%",
        "10%": "10%",
        "24%": "24%",
      },
      inset: {
        0.8: "0.2rem",
        1.025: "0.25625rem",
        1.75: "0.4375rem",
        "-3.25": "-0.8125rem",
        7.75: "1.9375rem",
        8.8: "2.2rem",
        12.4: "3.1rem",
        12.8: "3.2rem",
        13.2: "3.3rem",
        14.8: "3.7rem",
        29.75: "7.4375rem",
        18: "9rem",
        41.25: "10.3125rem",
        63.25: "15.8125rem",
        70: "17.5rem",
        100.4: "25.1rem",
        109.5: "27.375rem",
        135.5: "33.875rem",
        162.75: "40.6875rem",
        181.75: "45.4375rem",
        182.75: "45.6875rem",
        189.75: "47.4375rem",
        219.25: "54.81225rem",
        273.5: "68.375rem",
        290.75: "78.6875rem",
        "5%": "5%",
        "-5%": "-5%",
        "6%": "6%",
        "10%": "10%",
        "-12%": "-12%",
        "12%": "12%",
        "13%": "13%",
        "14%": "14%",
        "15%": "15%",
        "16%": "16%",
        "-20%": "-20%",
        "20%": "20%",
        "25%": "25%",
        "-25%": "-25%",
        "30%": "30%",
        "35%": "35%",
        "-35%": "-35%",
        "50%": "50%",
        "-63%": "-63%",
        "-90%": "-90%",
        "100%": "100%",
        "-110%": "-110%",
        "2vw": "2vw",
        "65vw": "65vw",
      },
      borderRadius: {
        "2px": "2px",
        1.25: "0.3125rem",
        5.625: "90px",
        "10px": "0.625rem",
        "15px": "0.9375rem",
        "20px": "1.25rem",
      },
      minWidth: {
        50: "12.5rem",
        83.75: "20.9375rem",
        97.03: "24.2475rem",
      },
      fontSize: {
        "11px": "0.6875rem",
        "13px": "0.8215rem",
        "15px": "0.9375rem",
        "17px": "1.0625rem",
        "32px": "2rem",
      },

      boxShadow: {
        dashBoard: "0px 2px 20px rgba(0, 0, 0, 0.08)",
        rectangle: "0px 12px 30px rgba(0, 0, 0, 0.08)",
        header: "0px 2px 6px rgba(0, 0, 0, 0.08)",
        footer: "0px 2px 6px rgba(0, 0, 0, 0.12)",
      },

      screens: {
        over_mobile: "580px",
        tablet: "800px",
      },

      colors: {
        keyword_purple: {
          1: "#F9F6FE",
          2: "#C6B4FA",
          3: "#9E83F8",
          4: "#8163F6",
          5: "#674FC5",
          6: "#4D3B94",
          7: "#342863",
        },

        keyword_gray: {
          1: "#F6F8F9",
          2: "#DCE1E7",
          3: "#C4CBD3",
          4: "#ADB5BD",
          5: "#8A9197",
          6: "#686D71",
          7: "#45484C",
          8: "#232426",
        },

        keyword_green: {
          1: "#219653",
          2: "#27AE60",
          3: "#6FCF97",
          4: "#0ECB9D",
        },

        keyword_blue: {
          1: "#2F80ED",
          2: "#2D9CDB",
          3: "#56CCF2",
          4: "#83CEF8",
        },

        keyword_red: {
          1: "#FA5252",
        },

        keyword_orange: {
          1: "#F2994A",
        },

        keyword_yellow: {
          1: "#F2C94C",
        },

        keyword_pink: {
          1: "#F883AD",
        },
      },
      letterSpacing: {
        moreWidest: "0.2em",
      },
      lineHeight: {
        "extra-loose": "3.5625",
        "extra-medium": "1.3125",
        "extra-moreMedium": "1.8125",

        19.5: "4.875rem",
      },
      backgroundOpacity: {
        0.08: "0.08",
      },
    },
  },

  plugins: [],
};