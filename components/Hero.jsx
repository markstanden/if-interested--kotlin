function Hero(props) {
  return (
    <>
      <p className="hero__subtitle">plug me back into the matrix.</p>
      <pre className="language-python"><code className="code">
        def plug_me_back_in(had_enough: bool) -> None:
            """Returns you to ignorant bliss"
            if had_enough:
                # arrange meeting with smith
                # kill neo
                # steak for breakfast
            else:
                # Wear leather trenchcoats
                # use banana phones
                # learn kung-fu
      </code></pre>
      {/* <h1 className={`${styles.hero__title} ${styles.hero__title_closing}`}>{'}'}</h1> */}
      {/* <picture>
        <!-- 1380px / 16 -->
        <source
          srcset="assets/images/hero--large.jpg 1920w, assets/images/hero--large-hi-dpi.jpg 3840w"
          media="(min-width: 86.25em)"
        />
        <!-- 990px /16 -->
        <source
          srcset="assets/images/hero--medium.jpg 1380w, assets/images/hero--medium-hi-dpi.jpg 2760w"
          media="(min-width: 61.875em)"
        />
        <!-- 640px/16 -->
        <source
          srcset="assets/images/hero--small.jpg 990w, assets/images/hero--small-hi-dpi.jpg 1980w"
          media="(min-width: 40em)"
        />
        <!-- smaller than 640 px -->
        <img
          srcset="
            assets/images/hero--smaller.jpg         640w,
            assets/images/hero--smaller-hi-dpi.jpg 1280w
          "
          ,
          alt="Coastal View of ocean and cliffs"
          class="large-hero__image"
        />
      </picture>
    */}

      <style jsx>{`
        .hero__subtitle {
          font-family: var(--font-primary);
          font-weight: 600;
          font-size: 2rem;
          color: var(--color-secondary);
        }

        .hero__title {
          font-size: 4rem;
          color: indigo;
        }
      `}</style>
    </>
  )
}

export default Hero
