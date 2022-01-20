export default function Logo({ type }) {
  if (type === "muted") {
    return (
      <img alt="logo" src="/images/logo-muted.svg" width="90" height="50" />
    );
  } else {
    return <img alt="logo" src="/images/logo.svg" width="90" height="50" />;
  }
}
