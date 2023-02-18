import { useTranslation } from 'react-i18next';

function AboutPage() {
    const { t } = useTranslation('about');
    return (
        <div>
            {t('About Page', { ns: 'about' })}
        </div>
    );
}

export default AboutPage;
