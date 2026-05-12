import { Link } from 'react-router-dom';

export default function Project() {
  const projects = [
    {
      id: 1,
      title: "Typescript and Rendering",
      description: "Building this student dashboard really showed me how TypeScript keeps a React project structured and manageable. It was a great way to practice using conditional rendering and lists to create a UI that feels clean and efficient.", 
      image: "src/assets/fglab2.png",
      path: "https://jampizan.github.io/FG_LAB2_Pizan/" 
    },
    {
      id: 2,
      title: "React Routes",
      description: "Building this project was a great way to see how client-side routing makes a web app feel seamless by moving between pages without a full browser refresh. Integrating Bootstrap also made it much easier to design a structured navigation system that looks professional and stays organized.",
      image: "src/assets/mglab5.png",
      path: "https://jampizan.github.io/mg-lab5-pizan/"
    },
    {
      id: 3,
      title: "Components in React",
      description: "This project was a great deep dive into how a full-stack application actually communicates, specifically by connecting a React frontend to a MongoDB database. It really helped me understand the flow of data—from capturing user input in a feedback form to ensuring it’s properly stored and managed through a backend API.",
      image: "src/assets/finalslab2.png",
      path: "https://jampizan.github.io/mg-lab5-pizan/"
    },
    {
      id: 4,
      title: "React Routes",
      description: "Building this project really helped me understand how client-side routing creates a seamless experience by letting users navigate without a full page refresh. Integrating Bootstrap was also a huge help in keeping the multi-page layout organized and the navigation system feeling professional.",
      image: "src/assets/mglab6.png",
      path: "https://jampizan.github.io/mg-lab6-pizan/"
    },
    {
      id: 5,
      title: "My Portfolio",
      description: "Building this personal portfolio was a rewarding way to bring together everything I’ve learned about modern front-end development, from TypeScript type safety to seamless React Router navigation. Integrating the EmailJS API was a highlight, as it turned a simple contact form into a functional tool that connects directly to my Gmail, making the whole project feel professional and ready for the real world.",
      image: "src/assets/portfolio.png",
      path: "https://jampizan.github.io/portfolio-app/"
    }
    
  ];

  const styles = {
    container: {
      backgroundColor: "#fdfbd4",
      color: "#000000",
      minHeight: "100vh",
      padding: "80px 10%",
      fontFamily: "Victor mono",
    },
    header: {
      textAlign: "center" as const,
      fontSize: "40px",
      fontWeight: "700",
      letterSpacing: "2px",
      textTransform: "uppercase" as const,
      marginBottom: "80px",
    },
    grid: {
      display: "flex", 
      flexWrap: "wrap" as const,
      justifyContent: "center",
      gap: "60px",
    },
    card: {
      textAlign: "center" as const, 
      display: "flex",
      flexDirection: "column" as const,
      alignItems: "center", 
      maxWidth: "350px", 
    },
    image: {
      width: "100%",
      aspectRatio: "16/9",
      objectFit: "cover" as const,
      marginBottom: "25px",
      border: "5px solid #000000",
    },
    projectTitle: {
      fontSize: "1.1rem",
      fontWeight: "600",
      marginBottom: "10px",
      textTransform: "uppercase" as const,
    },
    projectDescription: {
      fontSize: "0.9rem",
      lineHeight: "1.6",
      color: "#000000",
      marginBottom: "20px",
    },
    viewLink: {
      color: "#be5103",
      textDecoration: "none",
      fontSize: "0.85rem",
      fontWeight: "600",
      textTransform: "uppercase" as const,
      letterSpacing: "1px",
      borderBottom: "1px solid #fed400",
      paddingBottom: "2px",
      transition: "0.3s opacity",
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Projects</h1>
      <div style={styles.grid}>
        {projects.map((project) => (
          <div key={project.id} style={styles.card}>
            <img src={project.image} alt={project.title} style={styles.image} />
            <h3 style={styles.projectTitle}>{project.title}</h3>
            <p style={styles.projectDescription}>{project.description}</p>
            
            <Link to={project.path} style={styles.viewLink}>
              View Project →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}