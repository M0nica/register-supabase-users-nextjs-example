export default function Header() {
  return (
    <>
      <div>
        {" "}
        <h1 className="title">
          <a href="/">Supabase App Example</a>
        </h1>
        <p className="description">Register a User</p>
      </div>

      <style jsx>{`
        div {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          color: #0070f3;
          text-decoration: none;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          color: #ffa84d;
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }
      `}</style>
    </>
  );
}
