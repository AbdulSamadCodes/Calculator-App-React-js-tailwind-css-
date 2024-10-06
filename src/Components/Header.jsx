import { React } from 'react';
import { useState } from 'react';

function Logo() {
  return (
    <div className="logo">
      <a href="#" className="text-white font-bold text-2xl">
        calc
      </a>
    </div>
  );
}

function ThemeOptions() {
  return (
    <div className="theme_options flex items-center gap-4">
      <span className="text-xs text-white font-bold">1</span>
      <span className="text-xs text-white font-bold">2</span>
      <span className="text-xs text-white font-bold">3</span>
    </div>
  );
}

function ThemeSwitcher() {
  return (
    <div className="flex justify-center flex-col items-center">
      <ThemeOptions />

      <span className="switcher">
        <div className="switcher_ball"></div>
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