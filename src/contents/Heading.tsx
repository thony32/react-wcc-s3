import Wordz from "../components/Wordz";

export default function Heading() {
  return (
    <div className="h-screen relative">
      <div className="fixed top-0 left-0 w-full flex justify-center">
        <img className="w-[40%] opacity-30 rounded-full shadow-lg" src="/images/IMG_20230715_101821.png" alt="me" />
      </div>
      <Wordz />
    </div>
  )
}
