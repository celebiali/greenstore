interface LanguageProps  {
    languages:String,
    i18n:Number,
}
const LanguageSelect = ({ languages, i18n }:LanguageProps) => {
    return (
        <select
            name={i18n.language.toUpperCase()}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            className="language-select"
        >
            {languages.map(({ key, value }, index) => (
                <option key={index} value={key} className="language-option">
                    {value}
                </option>
            ))}
        </select>
    );
};

export default LanguageSelect;
    