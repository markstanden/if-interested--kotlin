type PostTitleProps = {
   children: React.ReactNode;
};

const PostTitle: React.FC<PostTitleProps> = ({ children }: PostTitleProps) => {
   return (
      <h1 className="post_title">
         {children}
         <style jsx>{`
            .post_title {
               border-bottom: calc(var(--border-size) / 2) solid
                  var(--color-primary);
            }
         `}</style>
      </h1>
   );
};

export { PostTitle };
