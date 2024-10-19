import ContentLoader from 'react-content-loader'

type Props = Record<string, unknown>

export function FlagLoader(props: Props) {
  return (
    <ContentLoader
      speed={2}
      width={560}
      viewBox="0 0 560 401"
      backgroundColor="var(--loader-bg)"
      foregroundColor="var(--loader-fg)"
      style={{
        aspectRatio: '560 / 401',
      }}
      {...props}
    >
      <rect x="0" y="0" rx="10" ry="10" width="560" height="401" />
    </ContentLoader>
  )
}

export function TextLoader(props: Props) {
  return (
    <ContentLoader
      speed={2}
      width={560}
      viewBox="0 0 560 323"
      backgroundColor="var(--loader-bg)"
      foregroundColor="var(--loader-fg)"
      style={{
        aspectRatio: '560 / 323',
      }}
      {...props}
    >
      <rect x="0" y="67" rx="10" ry="10" width="150" height="16" />
      <rect x="0" y="91" rx="10" ry="10" width="175" height="16" />
      <rect x="0" y="115" rx="10" ry="10" width="105" height="16" />
      <rect x="0" y="0" rx="2" ry="2" width="300" height="44" />
      <rect x="0" y="139" rx="10" ry="10" width="207" height="16" />
      <rect x="0" y="163" rx="10" ry="10" width="120" height="16" />
      <rect x="0" y="249" rx="10" ry="10" width="128" height="16" />
      <rect x="0" y="281" rx="10" ry="10" width="96" height="16" />
      <rect x="106" y="281" rx="10" ry="10" width="96" height="16" />
      <rect x="212" y="281" rx="10" ry="10" width="96" height="16" />
    </ContentLoader>
  )
}

export function CountryContentLoader(props: Props) {
  return (
    <div
      style={{
        marginTop: 'var(--fluid-64-80)',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 44,
      }}
      {...props}
    >
      <FlagLoader
        style={{
          marginInline: 'auto',
        }}
      />
      <TextLoader
        style={{
          marginInline: 'auto',
        }}
      />
    </div>
  )
}
