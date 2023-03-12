import { useTranslation } from 'react-i18next';
import { BugButton } from 'app/providers/providers/ErrorBoundary';

function MainPage() {
    const { t } = useTranslation('main');

    return (
        <div>
            <BugButton />
            {t('Main Page', { ns: 'main' })}
        </div>
    );
}

export default MainPage;
