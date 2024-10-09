import { React } from 'react';
import { useState, useRef, useEffect } from 'react';

function Logo() {
  return (
    <div className="logo">
      <a href="#" className="text-white font-bold text-2xl">
        calc
      </a>
    </div>
  );
}

function ThemeSwitcher() {
  const themeOptions = useRef(null);

  useEffect(() => {
    
  })

  return (
    <div className="flex justify-center flex-col items-center">
      <div className="theme_options flex items-center gap-4 relative" ref={themeOptions}>
        <span className=
          "text-xs text-white font-bold">
          1</span>

        <span className=
          "text-xs text-white font-bold">
          2</span>

        <span className=
          "text-xs text-white font-bold">
          3</span>
      </div>
      <span className="switcher">
        <div className=
          "switcher_ball absolute"
        >
        </div>
      </span>
    </div>
  );
}

function ThemeChangeComponent() {
  return (
    <div className="flex items-end gap-7">
      <h4 className="text-white font-bold text-xs tracking-widest">THEME</h4>

      <ThemeSwitcher />
    </div>
  );
}

function Header() {
  return (
    <header className="flex items-center justify-between">
      <Logo />
      <ThemeChangeComponent />
    </header>
  );
}

export default Header;