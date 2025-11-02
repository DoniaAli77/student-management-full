// app/error-test/page.tsx
export default function ErrorTestPage() {
  // This will immediately trigger error.tsx
  throw new Error("Intentional error on /error-test route");

  // This won't render because of the throw
  return <div>You should never see this!</div>;
}
