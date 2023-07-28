import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Oswald } from 'next/font/google';
import { ThemeProvider } from 'next-themes';

const oswald = Oswald({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider attribute="class">
            <main className={oswald.className}>
                <Component {...pageProps} />
            </main>
        </ThemeProvider>
    );
}
