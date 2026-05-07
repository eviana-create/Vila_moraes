function Card ({ children }) {
    return (
        <div style={{
            background: "#1f1f1f",
            padding: "20px",
            borderRadius: "12px",
            marginTop: "20px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
        }}>
            {children}
        </div>
    );
}

export default Card;