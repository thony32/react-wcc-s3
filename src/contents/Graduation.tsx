export default function Graduation() {
  return (
    <div id="schools">
      <section>
        <div className="py-8">
          <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
            <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
              <p className="text-[2em] text-center lg:text-left first-letter:text-6xl lg:text-[4em] lg:first-letter:text-[1.5em] 2xl:text-[5em] 2xl:first-letter:text-[2em] font-semibold  text-primary">
                Graduation
              </p>
              <p className="text-sm md:text-xl first-letter:text-2xl mb-4 indent-4 lg:indent-10 text-justify">
                Feel free to explore my academic background and educational achievements, which encompass the institutions I have attended and the degrees I have obtained. These experiences provide valuable insights into my knowledge and expertise.
              </p>
            </div>
            <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
              <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                  <div className="border-2-2 border-yellow-555 absolute h-full border right-[50%] rounded-sm border-primary"></div>
                  <div className="border-2-2 border-yellow-555 absolute h-full border left-[50%] rounded-sm border-primary"></div>
                  {/* qsdlkn */}
                  <div uk-parallax="opacity: 0,1,1; y: 100,0,0; x: 100,100,0; scale: 0.5,1,1; end: 50vh + 50%;" className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>

                    <div className="order-1  w-5/12 px-1 py-4">
                      <p className="mb-3 font-bold text-primary text-3xl">
                        2022 - Nowadays
                      </p>
                      <h4 className="mb-3 font-bold  text-lg md:text-4xl text-current text-left">
                        ENI, Fianarantsoa
                      </h4>
                      <p className="text-sm md:text-base">
                        Third year of bachelor’s degree in computer science
                      </p>
                    </div>
                  </div>
                  {/* qsdlkn */}
                  <div uk-parallax="opacity: 0,1,1; y: 100,0,0; x: -100,-100,0; scale: 0.5,1,1; end: 50vh + 50%;" className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 font-bold text-primary text-3xl">2021 - 2022</p>
                      <h4 className="mb-3 font-bold text-lg md:text-4xl text-current">
                        ENI, Fianarantsoa
                      </h4>
                      <p className="text-sm md:text-base ">
                        Second year of bachelor’s degree in computer science
                      </p>
                    </div>
                  </div>
                  {/* qsddcdqs */}
                  <div uk-parallax="opacity: 0,1,1; y: 100,0,0; x: 100,100,0; scale: 0.5,1,1; end: 50vh + 50%;" className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1  w-5/12 px-1 py-4 text-left">
                      <p className="mb-3 font-bold text-primary text-3xl">2020 - 2021</p>
                      <h4 className="mb-3 font-bold text-lg md:text-4xl text-current">
                        ENI, Fianarantsoa
                      </h4>
                      <h4 className="mb-3 font-bold text-lg md:text-2xl"></h4>
                      <p className="text-sm md:text-base ">
                        First year of bachelor’s degree in computer science
                      </p>
                    </div>
                  </div>
                  {/* qsdfqs */}
                  <div uk-parallax="opacity: 0,1,1; y: 100,0,0; x: -100,-100,0; scale: 0.5,1,1; end: 50vh + 50%;" className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <p className="mb-3 font-bold text-primary text-3xl">2018 - 2019</p>
                      <h4 className="mb-3 font-bold text-lg md:text-4xl text-current">
                        LSJC, Fianarantsoa
                      </h4>
                      <p className="text-sm md:text-base">
                        Baccalaureate , SERIE C
                      </p>
                    </div>
                  </div>


                  {/* sdfksdf */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
