import honeyLogo from '../../imports/header-study-abroad.png';

type HeaderBrandLogoProps = {
  className?: string;
};

export function HeaderBrandLogo({ className = '' }: HeaderBrandLogoProps) {
  return (
    <img
      src={honeyLogo.src}
      alt="Honey Study Abroad Services"
      className={`h-24 w-auto max-w-[210px] object-contain ${className}`}
    />
  );
}
