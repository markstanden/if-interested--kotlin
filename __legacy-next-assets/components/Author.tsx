type AuthorProps = {
   authorName: string;
   authorImagePath?: string;
   postDate: string;
};

const Author: React.FC<AuthorProps> = ({
   authorName,
   authorImagePath,
   postDate,
}) => {
   const authorDirectory = '/assets/blog/author';

   return (
      <div className="author_wrapper">
         <img
            className="author_image"
            src={authorDirectory + authorImagePath}
            alt={authorName}
         />
         <div className="post_caption">
            <address className="author_name">{authorName}</address>
            <span className="post_date">{postDate}</span>
         </div>
         <style jsx>{`
            .author_image {
               width: 75px;
               height: 75px;
               border-radius: 50%;
               border: var(--border-size) solid var(--color-primary);
            }

            .post_caption {
               display: flex;
               flex-direction: column;
               justify-content: space-between;
               align-items: center;
            }

            .author_wrapper {
               display: flex;
               align-items: center;
               justify-content: flex-end;
            }
            .author_name {
               margin-left: 1rem;
               font-size: 1rem;
            }
         `}</style>
      </div>
   );
};

export { Author };
