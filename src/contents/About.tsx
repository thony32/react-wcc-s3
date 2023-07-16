export default function About() {
  return (
    <div id="AboutMe" className="relative h-screen flex items-center lg:mx-48 2xl:mx-96 rounded-xl  ">
      <div>
        <div className="opacity-10 text-current absolute w-full h-full flex justify-end items-center"><h1 className="text-9xl font-bold text-pink-500 bordered-text">WHO AM I ?</h1></div>
        <div className="z-10 object-cover flex flex-col items-center gap-16 p-6 lg:p-12 ">
          <div uk-parallax="opacity: 0,1; y: 100,0; scale: 2,1; end: 50vh + 50%;" className="flex gap-4">
            <h1 className="font-bold text-[3em] lg:text-[5em] text-center first-letter:text-[1em] lg:first-letter:text-[1.5em] text-pink-500">
              About me
            </h1>
          </div>
          <div className="space-y-2 lg:space-y-3">
            <div uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; end: 60vh + 60%;">
              <p className="text-xl first-letter:text-4xl lg:text-2xl indent-4 lg:indent-16 lg:first-letter:text-4xl">
                My Name is{" "}
                <span className="font-bold text-2xl lg:text-[2em] text-pink-600">Muriel Arisoa RANAIVOSON</span>,
                a passionate developer specializing in{" "}
                <span className="font-semibold">web development</span>,
                <span className="font-semibold">mobile app development</span>{" "}
                , and <span className="font-semibold">UX/UI design</span>. I
                excel in creating seamless user experiences by paying close
                attention to detail and combining form with function.
              </p>
            </div>
            <div uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; end: 60vh + 60%;">
              <p className="text-xl first-letter:text-4xl lg:text-2xl indent-4 lg:indent-16 lg:first-letter:text-4xl">
                Taking on novel challenges invigorates me. I am motivated by
                problem-solving and find joy in discovering creative solutions to
                complex issues. Whether it involves optimizing performance,
                enhancing user engagement, or streamlining workflows, I continually
                seek ways to improve the digital experiences
              </p>
            </div>
            <div uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; end: 60vh + 60%;">
              <p className="text-xl first-letter:text-4xl lg:text-2xl indent-4 lg:indent-16 lg:first-letter:text-4xl">
                I'm constantly expanding my skill set and staying up to date with
                emerging technologies and industry best practices. I love taking on
                new challenges and pushing the boundaries of what's possible.
                Collaborating with cross-functional teams and clients is something I
                truly enjoy, as it allows me to leverage my technical skills and
                creativity to bring innovative solutions to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
