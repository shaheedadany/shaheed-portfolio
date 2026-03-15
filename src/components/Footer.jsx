function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>© {currentYear} Muhammed Shaheed. All rights reserved.</p>
          <p>Made with <span className="heart">❤️</span> in India</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;