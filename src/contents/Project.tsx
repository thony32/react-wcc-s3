export default function Project() {
  return (
    <div className="flex flex-col gap-8 justify-center items-center">
      <div>
        <h1 className="text-4xl font-bold text-center uppercase">
          My academic Projects
        </h1>
      </div>
      <div
        className="flex flex-col gap-8 items-center lg:p-8 2xl:p-32"
        uk-filter="target: .js-filter"
      >
        <ul className="flex gap-8">
          <li className="uk-active" uk-filter-control>
            <a className="btn btn-primary hover:text-current hover:no-underline" href="#">
              All
            </a>
          </li>
          <li uk-filter-control="[data-content='web']">
            <a className="btn btn-info hover:text-current hover:no-underline" href="#">
              Web
            </a>
          </li>
          <li uk-filter-control="[data-content='mobile']">
            <a className="btn btn-accent hover:text-current hover:no-underline" href="#">
              Mobile
            </a>
          </li>
          <li uk-filter-control="[data-content='desktop']">
            <a className="btn btn-secondary hover:text-current hover:no-underline" href="#">
              Desktop
            </a>
          </li>
        </ul>

        <ul
          className="js-filter flex flex-col lg:flex-row lg:flex-wrap gap-12"
          uk-grid
        >
          <li data-content="web">
            <div uk-parallax="opacity: 0,1,1; y: 100,0,0; x: -100,-100,0; scale: 0.5,1,1; end: 50vh + 50%;" className="card shadow-lg shadow-info w-[370px] h-[280px]">
              <div className="card-body ">
                <div className="text-2xl font-semibold text-center">
                  VueJS-Laravel stack
                </div>
                <h1>Gestion de comptes bancaires</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officiis dicta eligendi cupiditate explicabo, nesciunt nihil,
                  mollitia soluta ab repellat, fuga illo. Optio recusandae ipsam
                  accusamus inventore in labore necessitatibus blanditiis!
                </p>
              </div>
            </div>
          </li>
          <li data-content="mobile">
            <div uk-parallax="opacity: 0,1,1; y: 100,0,0; x: -100,-100,0; scale: 0.5,1,1; end: 50vh + 50%;" className="card shadow-lg shadow-accent w-[370px] h-[280px]">
              <div className="card-body ">
                <div className="text-2xl font-semibold text-center">
                  Ionic-Laravel stack
                </div>
                <h1>Gestion de stock de produits alimentaires</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officiis dicta eligendi cupiditate explicabo, nesciunt nihil,
                  mollitia soluta ab repellat, fuga illo. Optio recusandae ipsam
                  accusamus inventore in labore necessitatibus blanditiis!
                </p>
              </div>
            </div>
          </li>
          <li data-content="desktop">
            <div uk-parallax="opacity: 0,1,1; y: 100,0,0; x: -100,-100,0; scale: 0.5,1,1; end: 50vh + 50%;" className="card shadow-lg shadow-secondary w-[370px] h-[280px]">
              <div className="card-body ">
                <div className="text-2xl font-semibold text-center">
                  Java Swing stack
                </div>
                <h1>Gestion de Location de voiture</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officiis dicta eligendi cupiditate explicabo, nesciunt nihil,
                  mollitia soluta ab repellat, fuga illo. Optio recusandae ipsam
                  accusamus inventore in labore necessitatibus blanditiis!
                </p>
              </div>
            </div>
          </li>
          <li data-content="web">
            <div uk-parallax="opacity: 0,1,1; y: 100,0,0; x: -100,-100,0; scale: 0.5,1,1; end: 50vh + 50%;" className="card shadow-lg shadow-info w-[370px] h-[280px]">
              <div className="card-body">
                <div className="text-2xl font-semibold text-center">
                  TailwindCSS-PHP stack
                </div>
                <h1>Gestion de notes</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officiis dicta eligendi cupiditate explicabo, nesciunt nihil,
                  mollitia soluta ab repellat, fuga illo. Optio recusandae ipsam
                  accusamus inventore in labore necessitatibus blanditiis!
                </p>
              </div>
            </div>
          </li>
          <li data-content="web">
            <div uk-parallax="opacity: 0,1,1; y: 100,0,0; x: -100,-100,0; scale: 0.5,1,1; end: 50vh + 50%;" className="card shadow-lg shadow-info w-[370px] h-[280px]">
              <div className="card-body ">
                <div className="text-2xl font-semibold text-center">
                  ReactTS-NodeJS stack
                </div>
                <h1>Gestion de Location de voiture</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Officiis dicta eligendi cupiditate explicabo, nesciunt nihil,
                  mollitia soluta ab repellat, fuga illo. Optio recusandae ipsam
                  accusamus inventore in labore necessitatibus blanditiis!
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
