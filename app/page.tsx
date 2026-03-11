export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#322B39",
        color: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "32px 20px 40px",
        textAlign: "center",
      }}
    >
      <header className="pt-16 lg:pt-20" style={{ paddingTop: "20px" }}>
        <img src="/Lag_1.svg"></img>
      </header>

      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "14px",
          marginTop: "-40px",
        }}
      >
        <p
          style={{
            fontSize: "18px",
            opacity: 0.8,
            margin: 0,
          }}
        >
          Vi har skiftet navn
        </p>

        <h2
          style={{
            fontSize: "55px",
            fontWeight: 100,
            lineHeight: 1.2,
            letterSpacing: "0.2px",
            margin: 0,
            maxWidth: "1500px",
          }}
        >
          Smile Studio er blevet til FORMATET
        </h2>

        <a
          href="#"
          style={{
            marginTop: "9px",
            backgroundColor: "#f5f5f5",
            color: "#2d2737",
            textDecoration: "none",
            padding: "10px 18px",
            borderRadius: "6px",
            fontSize: "0.82rem",
            fontWeight: 500,
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          Besøg Formatet <span>→</span>
        </a>
      </section>

      <footer
        style={{
          fontSize: "16px",
          opacity: 0.20,
          lineHeight: 1.5,
          maxWidth: "620px",

          
        }}
      >
        <p style={{ margin: 0 }}>
          Smile Branding Studio er vokset videre og er i dag blevet til FORMATET.
          <br />
          Et branding, design og digitalt bureau i København.
        </p>
      </footer>
    </main>
  );
}