 

 export default function Page() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ fontSize: "28px", marginBottom: "10px" }}>
        Helix UI Documentation
      </h1>

      <p style={{ color: "#555", marginBottom: "30px" }}>
        Welcome to Helix UI Docs. This is a clean working build for Vercel.
      </p>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>
          Input Example
        </h2>

        <input
          type="text"
          placeholder="you@example.com"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        />
      </section>

      <section>
        <h2 style={{ fontSize: "20px", marginBottom: "10px" }}>
          Status
        </h2>

        <p style={{ color: "green" }}>
          ✅ Project is successfully deployed on Vercel.
        </p>
      </section>
    </main>
  );
}

