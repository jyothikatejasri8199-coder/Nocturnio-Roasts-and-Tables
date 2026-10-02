function Footer() {
  return (
    <footer className="footer">

      <h2>
        NOCTURNIO
      </h2>

      <p>
        Roast & Tables — where coffee meets culinary elegance.
      </p>

      <p className="copyright">
        © {new Date().getFullYear()}
        {" "}
        Nocturnio Roast & Tables.
        All rights reserved.
      </p>

    </footer>
  );
}

export default Footer;