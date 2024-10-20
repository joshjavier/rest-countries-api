type Theme = 'light' | 'dark'

function getThemePreference(key = 'theme-preference'): Theme {
  const themePreference = localStorage.getItem(key)
  if (typeof themePreference === 'string') {
    return themePreference as Theme
  } else {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  }
}

function reflectThemeChange() {
  document.documentElement.setAttribute('data-theme', getThemePreference())
}

// Set the `data-theme` attribute early to prevent page flashes
reflectThemeChange()
