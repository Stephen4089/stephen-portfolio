const Footer = () => (
  <footer className="py-8 px-6 border-t border-border">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} — Designed with intention.
      </p>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        Back to top ↑
      </button>
    </div>
  </footer>
);

export default Footer;
