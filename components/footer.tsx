export default function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto flex justify-center font-bold px-4 py-6 text-sm">
        © {new Date().getFullYear()} HeinzenBooks
      </div>
    </footer>
  );
}
