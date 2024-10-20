declare global {
  function getThemePreference(key?: string): Theme
  function reflectThemeChange(): void
}

export {}
