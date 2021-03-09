export default function Footer() {
  return (
    <>
      <footer>by Monica Powell</footer>

      <style jsx>{`
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          color: black;
          text-decoration: none;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .logo {
          height: 1em;
        }
      `}</style>
    </>
  );
}
