/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },

            keyframes: {
                increase_width: {
                    '0%': {
                        opacity: `0`,
                        width: '0%',
                    },

                    '60%': {
                        width: '110%',
                    },

                    '100%': {
                        opacity: `1`,
                        width: '100%',
                    },
                },

                projects_portofoliosite_view_up_box_key: {
                    '100%': { left: `-10px`, top: `-12px` },
                },
                projects_portofoliosite_view_down_box_key: {
                    '100%': { right: `-10px`, bottom: `-5px` },
                },

                hamburgerBar_appear_key: {
                    '0%': { opacity: '0', right: '-10px' },
                    '60%': { opacity: '1', right: '5px' },
                    '100%': { opacity: '1', right: '0px' },
                },
                hamburgerBar_clicked_top_key: {
                    '0%': { transform: 'rotate(0deg) ' },
                    '100%': { transform: 'rotate(45deg) translate(3px,6px)' },
                },
                hamburgerBar_clicked_middle_key: {
                    '0%': { opacity: '1' },
                    '100%': { opacity: '0' },
                },
                hamburgerBar_clicked_bottom_key: {
                    '0%': { transform: 'rotate(0deg) ' },
                    '100%': { transform: 'rotate(-45deg) translate(3px,-6px)' },
                },

                mobile_menu_bar_open_key: {
                    '0%': { height: '0%' },
                    '60%': { height: '420%' },
                    '100%': { height: '400%' },
                },

                mobile_menu_bar_close_key: {
                    '0%': { height: '400%' },
                    '100%': { height: '0%', opacity: '0' },
                },

                section_home_bar_key: {
                    '0%': { width: '0px', height: '0px' },
                    '30%': { width: '10px', height: '20px' },
                    '60%': { width: '90%', height: '10px' },
                    '100%': { width: '80%', height: '10px' },
                },
                section_home_subtitle_key: {
                    '0%': { top: '20%', opacity: '0' },
                    '100%': { top: '0px', opacity: '1' },
                },

                section_about_before_key: {
                    '0%': { width: '0%', opacity: '0' },
                    '60%': { width: '110%', opacity: '1' },
                    '100%': { width: '100%' },
                },
                section_about_title_key: {
                    '0%': { right: '100%', opacity: '0' },
                    '60%': { right: '-10%', opacity: '1' },
                    '100%': { right: '0%', opacity: '1' },
                },

                section_skill_animation_key: {
                    '50%': {
                        transform: 'rotate(-30deg) skew(25deg) translate(15px,-15px)',
                        boxShadow: '-50px 50px 30px rgba(0,0,0,0.5)',
                    },
                },
                section_skill_button_cover_key: {
                    '50%': {
                        opacity: '30%',
                    },
                },

                section_project_click_key: {
                    '0%': {
                        opacity: '0',
                        right: '-200%',
                    },

                    '60%': {
                        opacity: '1',
                        right: '20px',
                    },
                    '100%': {
                        right: '0',
                    },
                },
                section_project_non_click_key: {
                    '10%': {
                        right: '0',
                    },
                    '50%': {
                        right: '20px',
                    },
                    '100%': {
                        right: '-200%',
                    },
                },
                section_skill_click_animation_key: {
                    '50%': {
                        transform: 'scale(0.8) translate(-50%,-50%)',
                    },
                },
                section_skill_click_round_animation_key: {
                    '100%': {
                        transform: 'scale(20.5) translate(20%,-30%)',
                        left: '50%',
                        right: '50%',

                        opacity: '0',
                    },
                },
                section_project_opening_animation_key: {
                    '0%': {
                        transform: 'scaleY(100%) translateY(0)',
                    },

                    '30%': {
                        transform: 'scaleY(110%) translateY(-50px)',
                    },

                    '60%': {
                        transform: 'scaleY(90%) translateY(0px)',
                    },

                    '100%': {
                        transform: 'scaleY(100%) translateY(0px)',
                    },
                },
                navigation_alert_bar_key: {
                    '30%': { transform: 'translate(-50%,120px)', opacity: '0' },
                    '40%': { transform: 'translate(-50%,110px)', opacity: '1' },
                    '90%': { transform: 'translate(-50%,110px)', opacity: '1' },
                    '100%': { transform: 'translate(-50%,110px)', opacity: '0' },
                },
            },

            animation: {
                increase_width: 'increase_width 0.3s ease-in-out',

                hamburgerBar_top_appear: 'hamburgerBar_appear_key .4s ease-in-out forwards',
                hamburgerBar_middle_appear: 'hamburgerBar_appear_key .4s .2s ease-in-out forwards',
                hamburgerBar_bottom_appear: 'hamburgerBar_appear_key .4s .3s ease-in-out forwards',

                navigation_alert_bar: 'navigation_alert_bar_key 5s ease-in-out forwards',

                hamburgerBar_clicked_top: 'hamburgerBar_clicked_top_key .4s ease-in-out forwards',
                hamburgerBar_clicked_middle: 'hamburgerBar_clicked_middle_key .4s ease-in-out forwards',
                hamburgerBar_clicked_bottom: 'hamburgerBar_clicked_bottom_key .4s ease-in-out forwards',

                mobile_menu_bar_open: 'mobile_menu_bar_open_key .4s ease-in-out forwards',
                mobile_menu_bar_close: 'mobile_menu_bar_close_key .4s ease-in-out forwards',

                section_home_bar: 'section_home_bar_key .4s ease-in-out forwards',
                section_home_subtitle: 'section_home_subtitle_key .8s .5s ease-in-out forwards',

                section_about_before: 'section_about_before_key .4s .8s ease-in-out forwards',
                section_about_title: 'section_about_title_key .8s ease-in-out forwards',

                section_skill_animation: 'section_skill_animation_key .4s ease forwards',
                section_skill_round_animation: 'section_skill_click_round_animation_key 2s 1s ease infinite',
                section_skill_click_animation: 'section_skill_click_animation_key 2s ease infinite',

                section_project_opening_animation: 'section_project_opening_animation_key 1s ease-in-out forwards',
                section_project_click: 'section_project_click_key .4s ease forwards',
                section_project_non_click: 'section_project_non_click_key .4s ease forwards',
            },
        },
    },
    plugins: [],
    darkMode: 'class',
};
