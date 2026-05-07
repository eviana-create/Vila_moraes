function Container({ children }) {
    return (
        <div style={{
            paddingTop: "100px",
            paddingLeft: "16px",
            paddingRight: "16px",
            maxWidth: "700px",
            margin: "0 auto",
            width: "100%"
        }}>
            {children}
        </div>
    )
}

export default Container;