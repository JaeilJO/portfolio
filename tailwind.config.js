/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        react_color: "#5ED3F3",
        nextjs_color: "#282828",
        styled_components_color: "#BF7196",
        tailwind_color: "#37BCF8",
        zustand_color: "#433E38",
        redux_color: "#7248B6",
        html_color: "#DD4B25",
        css_color: "#126EB0",
        javascript_color: "#DE9D27",
      },

      keyframes: {
        increase_width: {
          "0%": {
            opacity: `0`,
            width: "0%",
          },

          "60%": {
            width: "110%",
          },

          "100%": {
            opacity: `1`,
            width: "100%",
          },
        },

        projects_portofoliosite_view_up_box_key: {
          "100%": { left: `-10px`, top: `-12px` },
        },
        projects_portofoliosite_view_down_box_key: {
          "100%": { right: `-10px`, bottom: `-5px` },
        },

        hamburgerBar_appear_key: {
          "0%": { opacity: "0", right: "-10px" },
          "60%": { opacity: "1", right: "5px" },
          "100%": { opacity: "1", right: "0px" },
        },
        hamburgerBar_clicked_top_key: {
          "0%": { transform: "rotate(0deg) " },
          "100%": { transform: "rotate(45deg) translate(3px,6px)" },
        },
        hamburgerBar_clicked_middle_key: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        hamburgerBar_clicked_bottom_key: {
          "0%": { transform: "rotate(0deg) " },
          "100%": { transform: "rotate(-45deg) translate(3px,-6px)" },
        },

        mobile_menu_bar_open_key: {
          "0%": { height: "0%" },
          "60%": { height: "410%" },
          "100%": { height: "400%" },
        },

        mobile_menu_bar_close_key: {
          "0%": { height: "410%" },
          "100%": { height: "0%", opacity: "0" },
        },

        section_home_bar_key: {
          "0%": { width: "0px", height: "0px" },
          "30%": { width: "10px", height: "20px" },
          "60%": { width: "90%", height: "10px" },
          "100%": { width: "80%", height: "10px" },
        },
        section_home_subtitle_key: {
          "0%": { top: "20%", opacity: "0" },
          "100%": { top: "0px", opacity: "1" },
        },

        section_about_before_key: {
          "0%": { width: "0%", opacity: "0" },
          "60%": { width: "110%", opacity: "1" },
          "100%": { width: "100%" },
        },
        section_about_title_key: {
          "0%": { right: "100%", opacity: "0" },
          "60%": { right: "-10%", opacity: "1" },
          "100%": { right: "0%", opacity: "1" },
        },

        section_skill_animation_key: {
          "0%": {
            width: "50%",
          },
          "50%": {
            transform: "rotate(-30deg) skew(25deg) translate(20px,-20px)",
            boxShadow: "-50px 50px 50px rgba(0,0,0,0.5)",
          },
        },
      },

      animation: {
        increase_width: "increase_width 0.3s ease-in-out",

        hamburgerBar_top_appear:
          "hamburgerBar_appear_key .4s ease-in-out forwards",
        hamburgerBar_middle_appear:
          "hamburgerBar_appear_key .4s .2s ease-in-out forwards",
        hamburgerBar_bottom_appear:
          "hamburgerBar_appear_key .4s .3s ease-in-out forwards",

        hamburgerBar_clicked_top:
          "hamburgerBar_clicked_top_key .4s ease-in-out forwards",
        hamburgerBar_clicked_middle:
          "hamburgerBar_clicked_middle_key .4s ease-in-out forwards",
        hamburgerBar_clicked_bottom:
          "hamburgerBar_clicked_bottom_key .4s ease-in-out forwards",

        mobile_menu_bar_open:
          "mobile_menu_bar_open_key .4s ease-in-out forwards",
        mobile_menu_bar_close:
          "mobile_menu_bar_close_key .4s ease-in-out forwards",

        section_home_bar: "section_home_bar_key .4s ease-in-out forwards",
        section_home_subtitle:
          "section_home_subtitle_key .8s .5s ease-in-out forwards",

        section_about_before:
          "section_about_before_key .4s .8s ease-in-out forwards",
        section_about_title: "section_about_title_key .8s ease-in-out forwards",

        section_skill_animation:
          "section_skill_animation_key .8s ease-in-out forwards",

        projects_portofoliosite_view_up_box:
          "projects_portofoliosite_view_up_box_key 1s forwards",
        projects_portofoliosite_view_down_box:
          "projects_portofoliosite_view_down_box_key 1s forwards",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
