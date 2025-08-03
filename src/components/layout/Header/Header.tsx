import type { ReactNode } from "react";

type HeaderProps = {
    children: ReactNode;
};

const Header = ({ children }: HeaderProps) => {

    return (
        <header
            className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow"
        >
            {children}
        </header>
    );
};

export default Header;
