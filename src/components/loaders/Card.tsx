import ContentLoader from 'react-content-loader'

type Props = Record<string, unknown>

export function CardLoader(props: Props) {
  return (
    <ContentLoader
      speed={2}
      viewBox="0 0 264 336"
      backgroundColor="var(--loader-bg)"
      foregroundColor="var(--loader-fg)"
      style={{ width: '100%', aspectRatio: '264 / 336', maxWidth: 264 }}
      {...props}
    >
      <rect x="0" y="0" rx="5" ry="5" width="264" height="160" />
      <rect x="24" y="184" rx="2" ry="2" width="200" height="26" />
      <rect x="24" y="226" rx="10" ry="10" width="150" height="16" />
      <rect x="24" y="250" rx="10" ry="10" width="150" height="16" />
      <rect x="24" y="274" rx="10" ry="10" width="150" height="16" />
    </ContentLoader>
  )
}

export function generateCardLoaders(count: number) {
  return (
    <>
      {Array.from(Array(count).keys()).map((_, i) => <CardLoader key={i} />)}
    </>
  )
}
