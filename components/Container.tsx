import React from 'react'

type ContainerProps = {}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <article className="container">
      {children}
      <style jsx>
        {`
          .container {
            border: var(--border-size) solid var(--color-primary);
            border-radius: 1.3rem;
            box-shadow: 0.5px 0.5px 20px var(--color-shadow);
            background-color: var(--color-background);

            margin: var(--margin-base);
            padding: var(--padding-base);
          }
        `}
      </style>
    </article>
  )
}

export default Container
