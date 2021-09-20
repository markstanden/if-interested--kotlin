import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { useState } from 'react';
//import SearchBar from './SearchBar'

type HeaderProps = {
   language: string;
};

const Header: React.FC<HeaderProps> = ({ language }) => {
   const upperThreshold = 0;

   const [downPage, setDownPage] = useState(false);

   // Find scroll position of page report if down the page (not at the top)
   useScrollPosition(
      ({ currPos }) => {
         setDownPage(currPos.y < upperThreshold);
         console.log(currPos);
      },
      [downPage],
      this,
      false,
      300,
   );

    return (
        <>
            <header className="header">
                <h1 className={`main_title main_title__top top left ${ downPage ? ' small' : ' full'}`} >
                    if (interested){language == 'python' ? ':' : ' {'}
                </h1>
                {/* <p className={`main_title__top top right ${downPage ? ' small' : ''}`}>
                <SearchBar />
                </p> */}
                <p className={`main_title main_title__bottom bottom left ${downPage ? ' small' : ' full'}`}>
                    {language == 'python' ? '' : '}'}
                </p>
            </header>

            <style jsx> {`
                .header {
                    height: calc(var(--header-size) * 1.7);
                    margin-bottom: 2rem;
                }

                .main_title {
                    width: 100%;
                    white-space: nowrap;

                    position: fixed;
                    display: block;

                    padding: var(--padding-header);

                    font-family: var(--font-primary);
                    font-size: var(--header-size);
                    font-weight: 300;

                    color: var(--color-primary);
                    background-color: var(--color-background);

                    transition: font-size 0.15s;
                }


                .left {
                    left: 0;
                    text-align: left;
                    border-right: var(--border-size) solid var(--color-primary);
                }

                .right {
                    right: 0;
                    text-align: right;
                    border-left: var(--border-size) solid var(--color-primary);
                }

                .top {
                    top: 0;
                    margin-top: 0;
                    border-bottom: var(--border-size) solid var(--color-primary);
                }

                .bottom{
                    bottom: 0;
                    margin-bottom:0;
                    border-top: var(--border-size) solid var(--color-primary);
                }

                .bottom.left {
                    border-top-right-radius: 1rem;
                    width: auto;
                }

                .top.left {
                    border-bottom-right-radius: 1rem;
                }

                .full {
                    box-shadow: none;
                }

                .small {
                    font-size: calc(var(--header-size) * 0.5);
                    padding: 0.4rem 0.6rem 0.4rem 0.4rem;
                    width: auto;

                    box-shadow: 1px 1px 12px var(--color-shadow);

                    transition: all 0.2s;
                }

                .small.left.top {
                    border-bottom-right-radius: 1rem;
                    border-right: var(--border-size) solid var(--color-primary);
                }

                .small.left.bottom {
                    border-right: var(--border-size) solid var(--color-primary);
                }

                .small.right.top {
                    border-bottom-left-radius: 1rem;
                    border-left: var(--border-size) solid var(--color-primary);
                }

                @media only screen and (min-width: 56.25em) {
                    .main_title {
                        left: var(--padding-header);
                    }
                }

            `} </style>
        </>
    );
};

export default Header;
