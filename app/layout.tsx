 import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Helix UI Docs",
  description: "Documentation for Helix UI components",
};

const nav = [
  { name: "Home", href: "/" },
  { name: "Button", href: "/button" },
  { name: "Input", href: "/input" },
  { name: "Card", href: "/card" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        <div style={{ display: "flex", minHeight: "100vh" }}>
          {/* Sidebar */}
          <aside
            style={{
              width: "260px",
              background: "#0f172a",
              color: "white",
              padding: "22px 18px",
            }}
          >
            <div style={{ marginBottom: "18px" }}>
              <div style={{ fontSize: "20px", fontWeight: 700 }}>Helix UI</div>
              <div style={{ opacity: 0.8, fontSize: "12px" }}>
                Documentation
              </div>
            </div>

            <nav>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {nav.map((item) => (
                  <li key={item.href} style={{ marginBottom: "10px" }}>
                    <Link
                      href={item.href}
                      style={{
                        display: "block",
                        padding: "10px 12px",
                        borderRadius: "10px",
                        textDecoration: "none",
                        color: "white",
                        background: "rgba(255,255,255,0.06)",
                      }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div style={{ marginTop: "18px", opacity: 0.7, fontSize: "12px" }}>
              v1 preview • content in progress
            </div>
          </aside>

          {/* Main */}
          <main style={{ flex: 1, padding: "34px" }}>{children}</main>
        </div>
      </body>
    </html>
  );
}

