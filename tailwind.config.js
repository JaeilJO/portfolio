/** @type {import('tailwindcss').Config} */
module.exports = {
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
            colors: {
                react_color: '#5ED3F3',
                nextjs_color: '#282828',
                styled_components_color: '#BF7196',
                tailwind_color: '#37BCF8',
                zustand_color: '#433E38',
                redux_color: '#7248B6',
                html_color: '#DD4B25',
                css_color: '#126EB0',
                javascript_color: '#DE9D27',
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

                mobile_appear_key: {
                    '0%': {
                        left: '0',
                        opacity: '0',
                    },
                    '60%': {
                        left: '-70px',
                        opacity: '1',
                    },
                    '100%': {
                        left: '-64px',
                        opacity: '1',
                    },
                },

                mobile_close_button_key: {
                    '0%': {
                        transform: 'translateX(-55%)',
                    },
                    '40%': {
                        transform: 'translateX(-45%)',
                    },
                },

                close_mobile_menu_key: {
                    '0%': { right: '0px' },
                    '100%': {
                        right: '-60px',
                    },
                },
                open_mobile_menu_key: {
                    '100%': {
                        right: '0px',
                    },
                },

                mobile_open_button_key: {
                    '0%': {
                        left: '-40px',
                    },
                    '50%': {
                        left: '-43px',
                    },
                },

                section_about_title_animation_key: {
                    '0%': { width: '0px' },
                    '60%': { width: '15%' },
                    '100%': { width: '10%' },
                },

                section_skill_background_main_key: {
                    '0%': { transform: `translate(-30%,-70%)` },
                },
                section_skill_background_sub_key: {
                    '0%': { transform: `translate(-70%,-30%)` },
                },
                projects_portofoliosite_view_up_box_key: {
                    '100%': { left: `-10px`, top: `-12px` },
                },
                projects_portofoliosite_view_down_box_key: {
                    '100%': { right: `-10px`, bottom: `-5px` },
                },
            },

            animation: {
                increase_width: 'increase_width 0.3s ease-in-out',
                mobile_appear: 'mobile_appear_key .4s ease-in-out forwards',
                mobile_close_button: 'mobile_close_button_key 1.5s ease-in-out infinite',
                mobile_open_button: 'mobile_open_button_key 1.5s ease-in-out infinite',
                close_mobile_menu: 'close_mobile_menu_key .4s ease-in-out forwards',
                open_mobile_menu: 'open_mobile_menu_key .4s  forwards',
                section_about_title_animation: 'section_about_title_animation_key .8s forwards',
                section_skill_background_main: 'section_skill_background_main_key .4s forwards',
                section_skill_background_sub: 'section_skill_background_sub_key .4s forwards',
                projects_portofoliosite_view_up_box: 'projects_portofoliosite_view_up_box_key 1s forwards',
                projects_portofoliosite_view_down_box: 'projects_portofoliosite_view_down_box_key 1s forwards',
            },
        },
    },
    plugins: [],
    darkMode: 'class',
};
