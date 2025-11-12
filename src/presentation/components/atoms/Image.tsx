
type Props = React.ImgHTMLAttributes<HTMLImageElement> & { fallback?: string }
export default function Image({ src, alt, fallback, ...rest }: Props) {
  return (
    <img src={src || fallback} alt={alt} {...rest} loading="lazy" />
  )
}
