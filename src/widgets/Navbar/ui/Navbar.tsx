import {classNames} from "shared/lib/classNames/classNames";
import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <ThemeSwitcher/>
            <div className={classNames(cls.navItems)}>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={classNames(cls.item)}>Main Page</AppLink>
                <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'} className={classNames(cls.item)}>About Page</AppLink>
            </div>
        </div>
    );
};

