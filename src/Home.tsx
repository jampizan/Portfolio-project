
export default function Home() {
  const styles = {
    container: {
      backgroundColor: "#fdfbd4",
      color: "#000000",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center", 
      padding: "0 10%",
      fontFamily: "Victor mono",
    },
    content: {
      maxWidth: "750px", 
      textAlign: "center" as const,
    },
   header: {
        fontFamily: "'Victor mono",
        fontSize: "52px",
        color: "#000000", 
        marginBottom: "20px",
        fontWeight: "bold",
    },
    paragraph: {
      fontSize: "1.2rem",
      lineHeight: "1.8",
      marginBottom: "25px",
      color: "#000000",
      fontWeight: "300",
    },
    subHeader: {
      fontSize: "0.85rem",
      fontWeight: "700",
      textTransform: "uppercase" as const,
      letterSpacing: "3px",
      marginTop: "60px",
      marginBottom: "25px",
      opacity: 0.4,
    },
    skillList: {
      listStyle: "none",
      padding: 0,
      display: "flex",
      flexWrap: "wrap" as const,
      justifyContent: "center",
      gap: "15px",
    },
    skillItem: {
      fontSize: "0.9rem",
      fontWeight: "500",
      textTransform: "uppercase" as const,
      letterSpacing: "1px",
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.header}>Hi, I'm Mai.</h1>
        
        <p style={styles.paragraph}>
          I’m a <strong>Multimedia Arts student</strong> living in <strong>Baguio</strong>, and honestly, 
          I just love taking captures of everything. Whether it’s the way the fog rolls over the 
          mountains or a small detail in a busy street, I always have a camera or a phone ready 
          to document the moment.
        </p>

        <p style={styles.paragraph}>
          That habit of "capturing everything" is what led me here. I don't just take photos; 
          I love turning those moments into something more—whether that’s a cinematic vlog 
          edited in Premiere Pro or a clean, simple website built with code. I like the challenge 
          of taking a raw memory and turning it into a digital story.
        </p>

        <h2 style={styles.subHeader}>What I use to create</h2>
        <ul style={styles.skillList}>
          <li style={styles.skillItem}>Nature Photography</li>
          <li style={styles.skillItem}>&</li>
          <li style={styles.skillItem}>Video Editing</li>
        </ul>
      </div>
    </div>
  );
}