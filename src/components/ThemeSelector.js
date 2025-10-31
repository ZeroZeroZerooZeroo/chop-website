import React from 'react';
import { themes } from '../styles/themes';
import './ThemeSelector.css';

const ThemeSelector = ({ currentTheme, onThemeChange }) => {
  return (
    <div className="theme-selector">
      <h3>Выберите дизайн:</h3>
      <div className="theme-options">
        {Object.keys(themes).map(themeKey => (
          <div 
            key={themeKey}
            className={`theme-option ${currentTheme === themeKey ? 'active' : ''}`}
            onClick={() => onThemeChange(themeKey)}
          >
            <div 
              className="theme-preview"
              style={{
                background: `linear-gradient(135deg, ${themes[themeKey].primary} 0%, ${themes[themeKey].secondary} 100%)`
              }}
            ></div>
            <span>{themes[themeKey].name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;