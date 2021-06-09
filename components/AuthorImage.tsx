type AuthorImageProps = {
  authorName: string
  authorImagePath?: string
  postDate: string
}

const AuthorImage: React.FC<AuthorImageProps> = ({ authorName, authorImagePath, postDate }: AuthorImageProps) => {
  const authorDirectory = '/assets/blog/author'

  return (
    <div className="author_image__wrapper">
      <img src={authorDirectory + authorImagePath} alt={authorName} />
      <div className="caption">
        <address className="author">{authorName}</address>
        <span className="date">{postDate}</span>
      </div>
      <style jsx>{`
        img {
          width: 75px;
          height: 75px;
          border-radius: 50%;
          border: var(--border-size) solid var(--color-primary);
        }

        .caption {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: center;
        }

        .author_image__wrapper {
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }
        .author {
          margin-left: 1rem;
          font-size: 1rem;
        }
      `}</style>
    </div>
  )
}

export default AuthorImage
