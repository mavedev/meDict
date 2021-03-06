import React from 'react';

/* Styles. */
import cn from 'styles/TitleBar.module.scss';

/*
  Webpack is not configured to deal with Electron.
  Need to load electron module dynamically using global
  window object.
 */
const app = window.require('electron').remote;

/**
 * Custom frame of the window.
 */
const TitleBar = () => (
  <div className={cn['TitleBar']}>
    <nav className={cn['TitleBar__Nav']}>
      {/*
        Default buttons for closing and minimizing.
        Maximizing is not present due to unsupportability
        of frameless Electron windows to be resized.
        */}
      <div className={cn['TitleBar__Buttons']}>
        <div
          /* To avoid '(...) require a role' warning. */
          role='button'
          /* To avoid '(...) must be focusable' warning. */
          tabIndex={0}
          onClick={() => app.getCurrentWindow().minimize()}
          onKeyDown={() => app.getCurrentWindow().minimize()}
          className={cn['TitleBar__Minimize']}
        >
          <span>-</span>
        </div>
        <div
          /* To avoid '(...) require a role' warning. */
          role='button'
          /* To avoid '(...) must be focusable' warning. */
          tabIndex={0}
          onClick={() => app.getCurrentWindow().close()}
          onKeyDown={() => app.getCurrentWindow().close()}
          className={cn['TitleBar__Close']}
        >
          <span>&times;</span>
        </div>
      </div>
    </nav>
  </div>
);

export default TitleBar;
