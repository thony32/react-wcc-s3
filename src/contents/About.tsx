export default function About() {
  return (
    <div className="relative h-full  lg:mx-48 2xl:mx-96 rounded-xl  ">
      <div className="opacity-20 absolute  w-full h-full flex justify-end items-center"><h1 className="text-9xl font-bold">WHO AM I ?</h1></div>
      <div className="z-10 object-cover  flex flex-col items-center gap-8 p-6 lg:p-12 ">
        <div  uk-parallax="opacity: 0,1; y: -100,0; scale: 2,1; end: 50vh + 50%;" className="flex gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-16 h-14"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>

          <h1 className="font-bold text-4xl text-center first-letter:text-5xl first-letter:text-primary uppercase">
            About <span className="text-5xl text-primary">Me</span>
          </h1>
        </div>
        <div className="border-2 border-gray-100 w-2/3 lg:w-1/3"></div>
        <div uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; end: 50vh + 50%;">
          <p className="text-2xl indent-4 lg:indent-16 first-letter:text-4xl">
            My Name is{" "}
            <span className="font-bold text-3xl text-info">Muriel Arisoa</span>,
            a passionate developer specializing in{" "}
            <span className="italic font-semibold">web development</span>,
            <span className="italic font-semibold">mobile app development</span>{" "}
            , and <span className="italic font-semibold">UX/UI design</span>. I
            excel in creating seamless user experiences by paying close
            attention to detail and combining form with function.
          </p>
        </div>
        <div uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; end: 50vh + 50%;">
          <p className="text-2xl indent-4 lg:indent-16 first-letter:text-4xl">
            Taking on novel challenges invigorates me. I am motivated by
            problem-solving and find joy in discovering creative solutions to
            complex issues. Whether it involves optimizing performance,
            enhancing user engagement, or streamlining workflows, I continually
            seek ways to improve the digital experiences
          </p>
        </div>
        <div uk-parallax="opacity: 0,1; y: 100,0; scale: 0.5,1; end: 50vh + 50%;">
          <p className="text-2xl indent-4 lg:indent-16 first-letter:text-4xl">
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
  );
}
