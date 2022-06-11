module.exports = {
  style: {
    postcss: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        117: "31.25rem",
        200: "56rem",
      },
      height: {
        "110vh": "110vh",
      },
      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
      },
      color: {
        ds_gray: {
          1: "#545454",
          2: "#4d4d4d",
        },
        ds_red: {
          1: "#d1112c",
        },
      },

      textColor: {
        ds_gray: {
          1: "#545454",
          2: "#4d4d4d",
        },
        ds_red: {
          1: "#d1112c",
        },
      },

      gradientColorStops: {
        ds_gray: {
          1: "#545454",
          2: "#4d4d4d",
        },
        ds_red: {
          1: "#d1112c",
        },
      },

      fontSize: {
        bg: "12vw",
      },

      boxShadow: {
        'self': '0 30px 45px -12px rgba(0, 0, 0, 0.75)',
      },
      
    },
  },
  variants: {
    extend: {
      maxWidth: ["active", "responsive", "hover", "focus", "group-hover"],
      width: ["active", "responsive", "hover", "focus", "group-hover"],
      textColor: ["active", "responsive", "hover", "focus", "group-hover"],
      boxShadow: ['active'],
    },
  },
  important: true,
  plugins: [],
};
