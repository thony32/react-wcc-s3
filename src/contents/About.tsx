export default function About() {
  return (
    <div className="flex flex-col items-center gap-8  mx-96 p-12 rounded-xl">
      <h1 className="text-4xl first-letter:text-5xl first-letter:text-blue-400">About <span className="text-5xl text-blue-400">Me</span></h1>
      <div className="border-2 border-gray-100 w-1/3"></div>
      <div>
        <p className="text-2xl indent-16">
          My Name is <span className="font-bold">Muriel Arisoa</span>, a passionate developer specializing in web development, mobile app development, and UX/UI design. I excel in creating seamless user experiences by paying close attention to detail and combining form with function.
        </p>
      </div>
      <div>
        <p className="text-2xl indent-16">
          Taking on novel challenges invigorates me. I am motivated by problem-solving and find joy in discovering creative solutions to complex issues. Whether it involves optimizing performance, enhancing user engagement, or streamlining workflows, I continually seek ways to improve the digital experiences 
        </p>
      </div>
      <div>
        <p className="text-2xl indent-16">
         I'm constantly expanding my skill set and staying up to date with emerging technologies and industry best practices. I love taking on new challenges and pushing the boundaries of what's possible. Collaborating with cross-functional teams and clients is something I truly enjoy, as it allows me to leverage my technical skills and creativity to bring innovative solutions to life.
        </p>
      </div>
    </div>
  );
}
