// src/components/UI/LanguageSelector.tsx

import React from 'react';

type LanguageSelectorProps = {
  languages: string[];
  selectedLanguage: string;
  onSelectLanguage: (language: string) => void;
};

const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  languages,
  selectedLanguage,
  onSelectLanguage,
}) => {
  return (
    <select
      value={selectedLanguage}
      onChange={(e) => onSelectLanguage(e.target.value)}
      className="border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:border-blue-500"
    >
      {languages.map((language) => (
        <option key={language} value={language}>
          {language}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;
