export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="prose prose-stone mx-auto my-24 prose-invert">
      {children}
    </article>
  );
}
