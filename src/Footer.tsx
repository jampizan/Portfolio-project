export default function Footer() {
  const styles = {
    footer: {
      backgroundColor: "#000000",
      color: "#ffffff",
      padding: "40px 60px",
      borderTop: "1px solid rgba(250, 245, 245, 0.1)",
      textAlign: "center" as const,
      fontFamily: "'Inter', sans-serif",
    },
    text: {
      fontSize: "0.9rem",
      opacity: 0.6,
      marginBottom: "10px",
    },
    location: {
      fontSize: "0.85rem",
      color: "#f6d158", 
      fontWeight: "500",
    }
  };

  return (
    <footer style={styles.footer}>
      <p style={{ fontWeight: "bold", marginBottom: "15px" }}>Mai Portfolio</p>
      <p style={styles.text}>© 2026 | Visual Storyteller & Multimedia Arts Student</p>
      <p style={styles.location}>Based in Baguio City, Philippines</p>
    </footer>
  );
}