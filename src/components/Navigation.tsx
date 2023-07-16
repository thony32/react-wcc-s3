export default function Navigation() {
  return (
    <div className="flex flex-row lg:flex-col gap-4 lg:gap-7 bg-base-100 info duration-300 p-3 card">
      {/* Home */}
      <div className="tooltip tooltip-primary tooltip-left" data-tip="Home">
        <a href="#home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 cursor-pointer hover:-translate-y-1 duration-300 hover:text-primary"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
        </a>
      </div>
      {/* About Me */}
      <div className="tooltip tooltip-primary tooltip-left" data-tip="About me">
        <a href="#AboutMe">
          <svg
            className="w-7 cursor-pointer stroke-current duration-300 hover:stroke-primary hover:rotate-180"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path d="M12 17V11" stroke-width="1.5" stroke-linecap="round" />
            <circle cx="1" cy="1" r="1" transform="matrix(1 0 0 -1 11 9)" />
            <path
              d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </a>
      </div>
      {/* Skills */}
      <div
        className="tooltip tooltip-primary tooltip-left group"
        data-tip="Skills"
      >
        <a href="#skills">
          <svg
            className="w-7 stroke-current duration-300 hover:stroke-primary cursor-pointer"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              className="group-hover:-translate-x-[1px] duration-300"
              d="M7 8L3 12L7 16"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              className="group-hover:translate-x-[1px] duration-300"
              d="M17 8L21 12L17 16"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14 4L9.8589 19.4548"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>
      {/* Graduation */}
      <div
        className="tooltip tooltip-primary tooltip-left group"
        data-tip="Graduation"
      >
        <a href="#schools">
          <svg
            className="w-7 fill-current cursor-pointer hover:rotate-12 duration-300 hover:fill-primary"
            viewBox="0 0 92 92"
          >
            <path
              id="XMLID_1705_"
              d="M89.6,31.5l-42-18.9c-1.1-0.5-2.3-0.5-3.3,0l-42,18.9C1,32.2,0,33.5,0,35.1c0,1.5,1,2.9,2.4,3.6L6,40.4v14
	c0,1.4,1.1,2.5,2.5,2.5s2.5-1.1,2.5-2.5V43l6,3.2v17c0,0.7,0.2,1.3,0.6,1.9c0.4,0.6,9.5,14.2,27.9,14.2c18.9,0,27.6-13.7,28-14.2
	c0.3-0.5,0.6-1.2,0.6-1.8V46.7l15.9-8.1c1.4-0.7,2.2-2.1,2.2-3.6C92,33.5,91,32.2,89.6,31.5z M67,62.1c-2,2.4-8.8,10.2-21.5,10.2
	C33.1,72.3,26,64.6,24,62.1V49.7L44.2,60c0.6,0.3,1.2,0.4,1.8,0.4s1.3-0.1,1.9-0.4L67,50.3V62.1z M46,52L13.2,35.4L46,20.6
	l32.8,14.8L46,52z M11,60.3c0.7,0.7,1.2,1.8,1.2,2.8c0,1-0.4,2.1-1.2,2.8c-0.7,0.7-1.8,1.2-2.8,1.2s-2.1-0.4-2.8-1.2
	c-0.7-0.7-1.2-1.8-1.2-2.8c0-1,0.4-2.1,1.2-2.8c0.7-0.7,1.8-1.2,2.8-1.2S10.2,59.5,11,60.3z"
            />
          </svg>
        </a>
      </div>
      {/* Experiences */}
      <div
        className="tooltip tooltip-primary tooltip-left group"
        data-tip="Experiences"
      >
        <a href="#Exp">
          <svg
            className="w-7 fill-current cursor-pointer hover:scale-110 duration-300 hover:fill-primary"
            viewBox="0 0 14 14"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7,1V5h4V1Zm3,3H8V2h2ZM7,7v4h4V7Zm3,3H8V8h2ZM1,1V5H5V1ZM4,4H2V2H4ZM1,7v4H5V7Zm3,3H2V8H4Z" />
          </svg>
        </a>
      </div>

      {/* Projects */}
      <div
        className="tooltip tooltip-primary tooltip-left group"
        data-tip="Projects"
      >
        <a href="#Projects">
          <svg
            className="w-7 stroke-current cursor-pointer hover:stroke-primary duration-300"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              opacity="0.4"
              d="M2.80408 15.4771C2.80408 15.4771 2.94608 17.2151 2.97908 17.7631C3.02308 18.4981 3.30708 19.3191 3.78108 19.8891C4.45008 20.6971 5.23808 20.9821 6.29008 20.9841C7.52708 20.9861 16.5221 20.9861 17.7591 20.9841C18.8111 20.9821 19.5991 20.6971 20.2681 19.8891C20.7421 19.3191 21.0261 18.4981 21.0711 17.7631C21.1031 17.2151 21.2451 15.4771 21.2451 15.4771"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.49597 5.32949V4.95849C8.49597 3.73849 9.48397 2.75049 10.704 2.75049H13.286C14.505 2.75049 15.494 3.73849 15.494 4.95849L15.495 5.32949"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.995 16.6783V15.3843"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.74988 8.38905V11.8561C4.66788 13.1211 6.96588 14.0071 9.48788 14.3581C9.78988 13.2571 10.7829 12.4501 11.9899 12.4501C13.1779 12.4501 14.1909 13.2571 14.4729 14.3681C17.0049 14.0171 19.3119 13.1311 21.2399 11.8561V8.38905C21.2399 6.69505 19.8769 5.33105 18.1829 5.33105H5.81688C4.12288 5.33105 2.74988 6.69505 2.74988 8.38905Z"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
