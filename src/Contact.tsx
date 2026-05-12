import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!formData.name || !formData.email || !formData.message) return "Please fill in all fields.";
    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(formData.email)) return "Invalid email format.";
    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const error = validate();
    if (error) {
      setStatus(error);
      return;
    }

    setLoading(true);
    setStatus("");

    try {;

      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  const styles = {
    container: {
        backgroundColor: "#000000",
      maxWidth: "500px",
      margin: "60px auto",
      padding: "30px",
      borderRadius: "15px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    },
    input: {
      width: "100%",
      marginBottom: "15px",
      padding: "12px",
      borderRadius: "8px",
      border: "1px solid #000000",
      outlineColor: "#000000", 
      boxSizing: "border-box" as const
    },
    button: {
      width: "100%",
      padding: "12px",
      borderRadius: "8px",
      border: "none",
      backgroundColor: "#4e4c45", 
      color: "white",
      fontWeight: "bold" as const,
      cursor: loading ? "not-allowed" : "pointer",
      transition: "0.3s"
    },
    status: {
      marginTop: "15px",
      fontSize: "0.9rem",
      color: status.includes("successfully") ? "#446344" : "#ae5251",
      textAlign: "center" as const
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={{ color: "#ffffff", textAlign: "center", marginBottom: "20px" }}>Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{ ...styles.input, height: "120px", resize: "none" as const }}
        />
        <button type="submit" disabled={loading} style={styles.button}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
      {status && <p style={styles.status}>{status}</p>}
    </div>
  );
}
