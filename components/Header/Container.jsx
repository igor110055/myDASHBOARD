export default function Container({children}) {
  return (
    <main className="main-container">
      <div className="main-content">{children}</div>
    </main>
  );
}
