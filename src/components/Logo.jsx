import Image from "next/image";

export default function Logo({ type }) {
  if (type === "default") {
    return <Image alt="logo" src="/images/logo.svg" width={90} height={50} />;
  } else {
    return (
      <Image alt="logo" src="/images/logo-muted.svg" width={90} height={50} />
    );
  }
}
