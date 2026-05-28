declare const _default: {
    darkMode: "class";
    content: string[];
    theme: {
        container: {
            center: true;
            padding: {
                DEFAULT: string;
                sm: string;
                lg: string;
            };
        };
        extend: {
            fontFamily: {
                sans: [string, string, string];
                mono: [string, string];
            };
            colors: {
                brand: {
                    indigo: string;
                    cyan: string;
                    violet: string;
                };
                navy: string;
            };
            keyframes: {
                float: {
                    '0%, 100%': {
                        transform: string;
                    };
                    '50%': {
                        transform: string;
                    };
                };
                'fade-in': {
                    '0%': {
                        opacity: string;
                        transform: string;
                    };
                    '100%': {
                        opacity: string;
                        transform: string;
                    };
                };
                'cursor-blink': {
                    '0%, 100%': {
                        opacity: string;
                    };
                    '50%': {
                        opacity: string;
                    };
                };
            };
            animation: {
                float: string;
                'float-delayed': string;
                'float-slow': string;
                'fade-in': string;
                'cursor-blink': string;
            };
        };
    };
    plugins: never[];
};
export default _default;
