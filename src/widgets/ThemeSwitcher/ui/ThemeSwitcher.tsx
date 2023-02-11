import {classNames} from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss'
import {useTheme} from "app/providers/ThemeProvider";
import ThemeIcon from "shared/assets/icons/theme-icon.svg"
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {toggleTheme} = useTheme();
//#0115C6
    return (
        <Button className={classNames(cls.themeSwitcher, {}, [className])}
                onClick={toggleTheme}
                theme={ThemeButton.CLEAR}
        >
            <ThemeIcon className={classNames(cls.icon, {}, [className])}/>
        </Button>
    );
};

