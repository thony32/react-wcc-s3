import { useEffect, useState } from "react";
import Wordz from "../components/Wordz";

export default function Heading() {
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    setScrollTop(scrollTop);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="h-screen relative">
      <div className="fixed top-0 left-0 w-full flex justify-center">
        <img className={scrollTop > 200 ? "w-[15%] translate-x-[250%] duration-1000 opacity-30 rounded-full shadow-lg" : "w-[40%] duration-1000 opacity-30 rounded-full shadow-lg"} src="/images/IMG_20230715_101821.png" alt="me" />
      </div>
      <Wordz />
      <div className="absolute top-0 h-full px-[10%] py-[5%] w-full left-0">
        <div className="h-full relative">
          {/* Personal Info */}
          <div className={scrollTop > 200 ? "fixed duration-500 top-3 left-3" : "fixed duration-500 top-[10%] left-[10%] space-y-3"}>
            <div className={scrollTop > 200 ? "shadow-2xl card bg-base-100 duration-300 scale-75 group info" : "shadow-2xl card bg-base-100 duration-300 group info"}>
              <div className="flex gap-5 p-5">
                <svg className="w-7 fill-current group-hover:fill-primary duration-75" viewBox="0 0 24 24" fill="none">
                  <path className="group-hover:-translate-x-[2.5px] duration-300" fill-rule="evenodd" clip-rule="evenodd"
                    d="M4.7177 3.0919C5.94388 1.80096 7.9721 2.04283 8.98569 3.47641L10.2467 5.25989C11.0574 6.40656 10.9889 8.00073 10.0214 9.0194L9.7765 9.27719C9.77582 9.27897 9.7751 9.2809 9.77436 9.28299C9.76142 9.31935 9.7287 9.43513 9.7609 9.65489C9.82765 10.1104 10.1793 11.0361 11.607 12.5392C13.0391 14.0469 13.9078 14.4023 14.3103 14.4677C14.484 14.4959 14.5748 14.4714 14.6038 14.4612L15.0124 14.031C15.8862 13.111 17.2485 12.9298 18.347 13.5621L20.2575 14.6617C21.8904 15.6016 22.2705 17.9008 20.9655 19.2747L19.545 20.7703C19.1016 21.2371 18.497 21.6355 17.75 21.7092C15.9261 21.8893 11.701 21.6548 7.27161 16.9915C3.13844 12.64 2.35326 8.85513 2.25401 7.00591L2.92011 6.97016L2.25401 7.00591C2.20497 6.09224 2.61224 5.30855 3.1481 4.7444L4.7177 3.0919ZM7.7609 4.34237C7.24855 3.61773 6.32812 3.57449 5.80528 4.12493L4.23568 5.77743C3.90429 6.12632 3.73042 6.52621 3.75185 6.92552C3.83289 8.43533 4.48307 11.8776 8.35919 15.9584C12.4234 20.2373 16.1676 20.3581 17.6026 20.2165C17.8864 20.1885 18.1783 20.031 18.4574 19.7373L19.8779 18.2417C20.4907 17.5965 20.3301 16.4342 19.5092 15.9618L17.5987 14.8621C17.086 14.567 16.4854 14.6582 16.1 15.064L15.6445 15.5435L15.1174 15.0428C15.6445 15.5435 15.6438 15.5442 15.6432 15.545L15.6417 15.5464L15.6388 15.5495L15.6324 15.556L15.6181 15.5701C15.6078 15.5801 15.5959 15.591 15.5825 15.6028C15.5556 15.6264 15.5223 15.6533 15.4824 15.6816C15.4022 15.7384 15.2955 15.8009 15.1606 15.8541C14.8846 15.963 14.5201 16.0214 14.0699 15.9483C13.1923 15.8058 12.0422 15.1755 10.5194 13.5722C8.99202 11.9642 8.40746 10.7645 8.27675 9.87234C8.21022 9.41827 8.26346 9.05468 8.36116 8.78011C8.40921 8.64508 8.46594 8.53742 8.51826 8.45566C8.54435 8.41489 8.56922 8.38075 8.5912 8.35298C8.60219 8.33909 8.61246 8.32678 8.62182 8.31603L8.63514 8.30104L8.64125 8.29441L8.64415 8.2913L8.64556 8.2898C8.64625 8.28907 8.64694 8.28835 9.17861 8.79333L8.64695 8.28834L8.93376 7.98637C9.3793 7.51731 9.44403 6.72292 9.02189 6.12586L7.7609 4.34237Z"
                  />
                  <g className="group-hover:translate-x-[1px] group-hover:-translate-y-[1px] duration-300">
                    <path
                      d="M13.2595 1.87983C13.3257 1.47094 13.7122 1.19357 14.1211 1.25976C14.1464 1.26461 14.2279 1.27983 14.2705 1.28933C14.3559 1.30834 14.4749 1.33759 14.6233 1.38082C14.9201 1.46726 15.3347 1.60967 15.8323 1.8378C16.8286 2.29456 18.1544 3.09356 19.5302 4.46936C20.906 5.84516 21.705 7.17097 22.1617 8.16725C22.3899 8.66487 22.5323 9.07947 22.6187 9.37625C22.6619 9.52466 22.6912 9.64369 22.7102 9.72901C22.7197 9.77168 22.7267 9.80594 22.7315 9.83125L22.7373 9.86245C22.8034 10.2713 22.5286 10.6739 22.1197 10.7401C21.712 10.8061 21.3279 10.53 21.2601 10.1231C21.258 10.1121 21.2522 10.0828 21.2461 10.0551C21.2337 9.9997 21.2124 9.91188 21.1786 9.79572C21.1109 9.56339 20.9934 9.21806 20.7982 8.79238C20.4084 7.94207 19.7074 6.76789 18.4695 5.53002C17.2317 4.29216 16.0575 3.59117 15.2072 3.20134C14.7815 3.00618 14.4362 2.88865 14.2038 2.82097C14.0877 2.78714 13.9417 2.75363 13.8863 2.7413C13.4793 2.67347 13.1935 2.28755 13.2595 1.87983Z"
                    />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M13.4861 5.32931C13.5999 4.93103 14.015 4.70041 14.4133 4.81421L14.2072 5.53535C14.4133 4.81421 14.4136 4.81431 14.414 4.81441L14.4147 4.81462L14.4162 4.81506L14.4196 4.81604L14.4273 4.81835L14.4471 4.82451C14.4622 4.82934 14.481 4.83562 14.5035 4.84358C14.5484 4.85952 14.6077 4.88218 14.6805 4.91339C14.8262 4.97582 15.0253 5.07224 15.2698 5.21695C15.7593 5.50664 16.4275 5.98781 17.2124 6.77279C17.9974 7.55776 18.4786 8.22595 18.7683 8.71541C18.913 8.95992 19.0094 9.15899 19.0718 9.30467C19.103 9.37748 19.1257 9.43683 19.1416 9.48175C19.1496 9.5042 19.1559 9.52303 19.1607 9.5381L19.1669 9.55789L19.1692 9.56564L19.1702 9.56898L19.1706 9.57051L19.1708 9.57124C19.1709 9.5716 19.171 9.57195 18.4499 9.77799L19.171 9.57195C19.2848 9.97023 19.0542 10.3853 18.6559 10.4991C18.261 10.612 17.8496 10.3862 17.7317 9.99414L17.728 9.98336C17.7227 9.96833 17.7116 9.93875 17.6931 9.89555C17.6561 9.80921 17.589 9.66798 17.4774 9.47939C17.2544 9.10265 16.8517 8.5334 16.1518 7.83345C15.4518 7.13349 14.8826 6.73079 14.5058 6.50782C14.3172 6.3962 14.176 6.32911 14.0897 6.2921C14.0465 6.27359 14.0169 6.26256 14.0019 6.25722L13.9911 6.25353C13.599 6.13565 13.3733 5.7242 13.4861 5.32931Z"
                    />
                  </g>
                </svg>
                <div className="flex flex-col">
                  <span className="text-xs">Phone</span>
                  <label className="font-bold">+261 34 66 857 21</label>
                </div>
              </div>
            </div>
            <div className={scrollTop > 200 ? "shadow-2xl card bg-base-100 duration-300 scale-75 group info" : "shadow-2xl card bg-base-100 duration-300 group info"}>
              <div className="flex gap-5 p-5">
                <svg className="w-7 stroke-current group-hover:stroke-primary duration-75" viewBox="-0.5 0 25 25" fill="none">
                  <path
                    d="M22.0098 12.39V7.39001C22.0098 6.32915 21.5883 5.31167 20.8382 4.56152C20.0881 3.81138 19.0706 3.39001 18.0098 3.39001H6.00977C4.9489 3.39001 3.93148 3.81138 3.18134 4.56152C2.43119 5.31167 2.00977 6.32915 2.00977 7.39001V17.39C2.00977 18.4509 2.43119 19.4682 3.18134 20.2184C3.93148 20.9685 4.9489 21.39 6.00977 21.39H12.0098"
                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M21.209 5.41992C15.599 16.0599 8.39906 16.0499 2.78906 5.41992" stroke-width="1.5"
                    stroke-linecap="round" stroke-linejoin="round" />
                  <g className="group-hover:translate-x-[2px] duration-300">
                    <path d="M15.0098 18.39H23.0098" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                    <path d="M20.0098 15.39L23.0098 18.39L20.0098 21.39" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" />
                  </g>
                </svg>
                <div className="flex flex-col">
                  <span className="text-xs">Mail</span>
                  <label className="font-bold">murielarisoaran@gmail.com</label>
                </div>
              </div>
            </div>
            <div className={scrollTop > 200 ? "shadow-2xl card bg-base-100 duration-300 scale-75 group info" : "shadow-2xl card bg-base-100 duration-300 group info"}>
              <div className="flex gap-5 p-5">
                <svg className="w-7 stroke-current group-hover:stroke-primary duration-300 group-hover:-translate-y-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>

                <div className="flex flex-col">
                  <span className="text-xs">Location</span>
                  <label className="font-bold">Fianarantsoa , 301</label>
                </div>
              </div>
            </div>
          </div>
          {/* Contact */}
          <div className={scrollTop > 200 ? "fixed duration-500 bottom-3 right-3" : "fixed duration-500 bottom-[10%] right-[10%]"}>
            <div className="flex gap-2 justify-center">
              <span className="bg-base-100 shadow-lg card p-3 cursor-pointer duration-300 facebook group">
                <svg className={scrollTop > 200 ? "w-5 fill-current group-hover:!fill-blue-500 duration-300" : "w-7 fill-current group-hover:!fill-blue-500 duration-300"} viewBox="0 0 1920 1920">
                  <path
                    d="m1416.013 791.915-30.91 225.617h-371.252v789.66H788.234v-789.66H449.808V791.915h338.426V585.137c0-286.871 176.207-472.329 449.09-472.329 116.87 0 189.744 6.205 231.822 11.845l-3.272 213.66-173.5.338c-4.737-.451-117.771-9.25-199.332 65.655-52.568 48.169-79.191 117.433-79.191 205.65v181.96h402.162Zm-247.276-304.018c44.446-41.401 113.71-36.889 118.787-36.663l289.467-.113 6.204-417.504-43.544-10.717C1511.675 16.02 1426.053 0 1237.324 0 901.268 0 675.425 235.206 675.425 585.137v93.97H337v451.234h338.425V1920h451.234v-789.66h356.7l61.932-451.233H1126.66v-69.152c0-54.937 14.214-96 42.078-122.058Z"
                    fillRule="evenodd"
                  />
                </svg>
              </span>
              <span className="bg-base-100 shadow-lg card p-3 cursor-pointer duration-300 linkdin group">
                <svg className={scrollTop > 200 ? "w-5 fill-current group-hover:!fill-sky-500 duration-300" : "w-7 fill-current group-hover:!fill-sky-500 duration-300"} viewBox="0 0 1920 1920">
                  <path
                    d="M1168 601.321v74.955c72.312-44.925 155.796-71.11 282.643-71.11 412.852 0 465.705 308.588 465.705 577.417v733.213L1438.991 1920v-701.261c0-117.718-42.162-140.06-120.12-140.06-74.114 0-120.12 23.423-120.12 140.06V1920l-483.604-4.204V601.32H1168Zm-687.52-.792v1318.918H0V600.53h480.48Zm-120.12 120.12H120.12v1078.678h240.24V720.65Zm687.52.792H835.267v1075.316l243.364 2.162v-580.18c0-226.427 150.51-260.18 240.24-260.18 109.55 0 240.24 45.165 240.24 260.18v580.18l237.117-2.162v-614.174c0-333.334-93.573-457.298-345.585-457.298-151.472 0-217.057 44.925-281.322 98.98l-16.696 14.173H1047.88V721.441ZM240.24 0c132.493 0 240.24 107.748 240.24 240.24 0 132.493-107.747 240.24-240.24 240.24C107.748 480.48 0 372.733 0 240.24 0 107.748 107.748 0 240.24 0Zm0 120.12c-66.186 0-120.12 53.934-120.12 120.12s53.934 120.12 120.12 120.12 120.12-53.934 120.12-120.12-53.934-120.12-120.12-120.12Z"
                    fillRule="evenodd"
                  />
                </svg>
              </span>
              <span className="bg-base-100 shadow-lg card p-3 cursor-pointer duration-300 gitlab group">
                <svg className={scrollTop > 200 ? "w-5 fill-current group-hover:!fill-orange-500 duration-300" : "w-7 fill-current group-hover:!fill-orange-500 duration-300"} viewBox="0 0 24 24">
                  <path d="M4.844.904a1.007 1.007 0 00-.955.692l-2.53 7.783c0 .007-.005.012-.007.02L.07 13.335a1.437 1.437 0 00.522 1.607l11.072 8.045a.566.566 0 00.67-.004l11.074-8.04a1.436 1.436 0 00.522-1.61l-1.26-3.867a.547.547 0 00-.031-.104l-2.526-7.775a1.004 1.004 0 00-.957-.684.987.987 0 00-.949.69l-2.406 7.408H8.203l-2.41-7.408a.987.987 0 00-.943-.69h-.006zm-.006 1.42l2.174 6.678H2.674l2.164-6.678zm14.328 0l2.168 6.678h-4.342l2.174-6.678zm-10.594 7.81h6.862l-2.15 6.618L12 20.693 8.572 10.135zm-5.515.005h4.322l3.086 9.5-7.408-9.5zm13.568 0h4.326l-6.703 8.588-.709.914 2.959-9.108.127-.394zM2.1 10.762l6.978 8.947-7.818-5.682a.305.305 0 01-.112-.341l.952-2.924zm19.8 0l.952 2.922a.305.305 0 01-.11.341v.002l-7.82 5.68.025-.035 6.953-8.91Z" />
                </svg>
              </span>
              <span className="bg-base-100 shadow-lg card p-3 cursor-pointer duration-300 github group">
                <svg
                  className={scrollTop > 200 ? "w-5 stroke-current group-hover:!stroke-gray-500 duration-300" : "w-7 stroke-current group-hover:!stroke-gray-500 duration-300"}
                  viewBox="0 0 192 192"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="12"
                    d="M120.755 170c.03-4.669.059-20.874.059-27.29 0-9.272-3.167-15.339-6.719-18.41 22.051-2.464 45.201-10.863 45.201-49.067 0-10.855-3.824-19.735-10.175-26.683 1.017-2.516 4.413-12.63-.987-26.32 0 0-8.296-2.672-27.202 10.204-7.912-2.213-16.371-3.308-24.784-3.352-8.414.044-16.872 1.14-24.785 3.352C52.457 19.558 44.162 22.23 44.162 22.23c-5.4 13.69-2.004 23.804-.987 26.32C36.824 55.498 33 64.378 33 75.233c0 38.204 23.149 46.603 45.2 49.067-3.551 3.071-6.719 9.138-6.719 18.41 0 6.416.03 22.621.059 27.29M27 130c9.939.703 15.67 9.735 15.67 9.735 8.834 15.199 23.178 10.803 28.815 8.265"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
