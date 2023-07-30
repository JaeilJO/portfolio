import Link from 'next/link';
import Navigation from '../Header/Navigation';

function Footer() {
    return (
        <footer className="h-[100px] flex-col max-sm:h-[5em] border-t-2 flex justify-center items-center font-thin gap-3 text-stone-500">
            <div className="font-medium">JAEIL JO</div>
            <ul className="flex gap-2 text-sm underline">
                <li>
                    <Link href={'https://github.com/'}>github</Link>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
