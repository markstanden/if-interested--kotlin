import React from 'react'

type ContainerProps = {
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <article className="container">
      {children}
      <style jsx>
        {`
          .container {
            border: var(--size-border) solid var(--color-primary);
            border-radius: 1.3rem;
            box-shadow: 0.5px 0.5px 20px var(--color-shadow);
            background-color: var(--color-background);

            margin: 2rem 1rem 2rem 1rem;
            padding: 1rem 2rem 1rem 2rem;
          }
        `}
      </style>
    </article>
  )
}

export default Container
