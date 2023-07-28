import Navigation from '../Header/Navigation';

function Footer() {
    return (
        <footer className="h-[250px] flex justify-between max-sm:justify-center border-t-2 p-10 ">
            <div className="flex items-center text-7xl">JAEIL</div>
            <div className="flex flex-col justify-center gap-3 max-sm:hidden">
                <div className="font-light text-right">Email</div>
                <hr />
                <div className="font-thin text-right ">whwodlf97@gmail.com</div>
            </div>
        </footer>
    );
}

export default Footer;
