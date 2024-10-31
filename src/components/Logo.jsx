export function Logo({ src, href, alt, className }) {
  return (
    <a href={href} target="_blank">
      <img src={src} className={`logo ${className}`} alt={alt} />
    </a>
  );
}