import Image from "next/image";

type LogoMarkProps = {
  className?: string;
  priority?: boolean;
};

export function LogoMark({ className = "", priority = false }: LogoMarkProps) {
  return (
    <div className={`logoMark ${className}`} role="img" aria-label="Elemental Utopia logo">
      <Image
        className="logoImage logoImageDark"
        src="/images/logo-dark.jpg"
        alt=""
        width={1243}
        height={1243}
        sizes="(max-width: 700px) 68vw, 280px"
        priority={priority}
      />
      <Image
        className="logoImage logoImageLight"
        src="/images/logo-light.jpg"
        alt=""
        width={1243}
        height={1243}
        sizes="(max-width: 700px) 68vw, 280px"
        priority={priority}
      />
    </div>
  );
}
