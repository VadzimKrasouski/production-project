import { useTranslation } from 'react-i18next';

function MainPage() {
    const { t } = useTranslation('main');

    return (
        <div>
            {t('Main Page', { ns: 'main' })}
        </div>
    );
}

export default MainPage;
