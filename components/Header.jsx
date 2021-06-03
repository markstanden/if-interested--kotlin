function Header(props) {
  return (
    <header className="header">
      <h1 className="main_title">if (interested){props.language == 'python' ? ':' : '{'}</h1>

      {props.children}

      <p className="main_title">{props.language == 'python' ? '' : '}'}</p>

      <style jsx>
        {`
          .main_title {
            font-family: var(--font-primary);
            font-size: 3rem;
            font-weight: 300;

            text-align: left;
            color: var(--color-primary);
            background-color: var(--color-background);
          }
        `}
      </style>
    </header>
  )
}

export default Header
