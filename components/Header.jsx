function Header(props) {
  return (
    <header className="header">
      <div className="title_block">
        <h1 className="main_title main_title__top">if (interested){props.language == 'python' ? ':' : '{'}</h1>
      </div>

      {props.children}

      <p className="main_title">{props.language == 'python' ? '' : '}'}</p>

      <style jsx>
        {`
          .title_block {
            margin-top: 1rem;
            padding-left: 1rem;
            border-top: var(--size-border) solid var(--color-primary);
          }

          .main_title__top {
            margin-top: 0;
            width: max-content;
            padding: 2rem;
            border-bottom-left-radius: 1rem;
            border-bottom-right-radius: 1rem;
            border: var(--size-border) solid var(--color-primary);
            border-top: none;
          }

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
