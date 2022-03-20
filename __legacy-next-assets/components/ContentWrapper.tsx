import React from "react"

interface PageWrapperProps {

};

const ContentWrapper: React.FC<PageWrapperProps> = ({ children }) => {
    return (
       <>
          <div className="content-wrapper">{children}</div>
          <style jsx>
             {`
                .content-wrapper {
                   max-width: var(--content-width);
                   margin-left: calc((100vw - var(--content-width)) / 2);
                }
             `}
          </style>
       </>
    );
}

export { ContentWrapper };