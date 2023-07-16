import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-scroll'

export default function Navigation() {
  // * active link
  const [activeSection, setActiveSection] = useState(null);
  const sections: React.MutableRefObject<HTMLElement[]> = useRef([]);

  const handleScroll = () => {
    const pageYOffset = window.pageYOffset;
    let newActiveSection = null;

    sections.current.forEach((section: HTMLElement) => {
      const sectionOffsetTop: number = section.offsetTop;
      const sectionHeight: number = section.offsetHeight;

      if (pageYOffset >= sectionOffsetTop && pageYOffset < sectionOffsetTop + sectionHeight) {
        newActiveSection = section.id;
      }
    });
    setActiveSection(newActiveSection);
  };
  useEffect(() => {
    sections.current = Array.from(document.querySelectorAll('[data-section]'));
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      <div className={
        activeSection === "div_skills"
          ? 'fixed top-[25%] right-5 z-0 duration-[1000ms]'
          : activeSection === "div_graduation"
            ? 'fixed top-[25%] right-5 -translate-x-[200%] z-0 duration-[1000ms]'
            : 'fixed top-[25%] right-5 z-0 duration-[1000ms]'
      }
      >
        <img className={activeSection === "div_skills" ? "w-[600px] opacity-10 duration-300 blur-sm -z-50" : 'w-[600px] opacity-0 duration-300 blur-sm -z-50'} src="/images/coding-animate.svg" alt="coding" />
        <img className={activeSection === "div_graduation" ? "w-[600px] opacity-10 -translate-y-[100%] duration-300 blur-sm -z-50" : 'w-[600px] opacity-0 duration-300 blur-sm -z-50'} src="/images/graduation-animate.svg"  alt="grad" />
      </div>
      <div className="flex flex-row lg:flex-col gap-4 lg:gap-7 bg-base-100 info duration-300 p-3 card">
        {/* Home */}
        {/* {activeSection} */}
        <div className="tooltip tooltip-pink-600 tooltip-left" data-tip="Home">
          <Link to="div_heading" smooth={true} duration={500}>
            <svg
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={activeSection === "div_heading" ? "w-7 cursor-pointer -translate-y-1 duration-300 text-pink-600" : "w-7 cursor-pointer hover:-translate-y-1 duration-300 hover:text-pink-600"}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </Link>
        </div>
        {/* About Me */}
        <div className="tooltip tooltip-pink-600 tooltip-left" data-tip="About me">
          <Link to="div_about" smooth={true} duration={500}>
            <svg
              className={activeSection === "div_about" ? "w-7 cursor-pointer duration-300 stroke-pink-600 rotate-180" : "w-7 cursor-pointer stroke-current duration-300 hover:stroke-pink-600 hover:rotate-180"}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="M12 17V11" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="1" cy="1" r="1" transform="matrix(1 0 0 -1 11 9)" />
              <path
                d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </Link>
        </div>
        {/* Skills */}
        <div
          className="tooltip tooltip-pink-600 tooltip-left group"
          data-tip="Skills"
        >
          <Link to="div_skills" smooth={true} duration={500}>
            <svg
              className={activeSection === "div_skills" ? "w-7 duration-300 stroke-pink-600 cursor-pointer" : "w-7 stroke-current duration-300 hover:stroke-pink-600 cursor-pointer"}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                className={activeSection === "div_skills" ? "-translate-x-[1px] duration-300" : "group-hover:-translate-x-[1px] duration-300"}
                d="M7 8L3 12L7 16"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                className={activeSection === "div_skills" ? "translate-x-[1px] duration-300" : "group-hover:-translate-x-[1px] duration-300"}
                d="M17 8L21 12L17 16"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 4L9.8589 19.4548"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
        {/* Graduation */}
        <div
          className="tooltip tooltip-pink-600 tooltip-left group"
          data-tip="Graduation"
        >
          <Link to="div_graduation" smooth={true} duration={500}>
            <svg
              className={activeSection === "div_graduation" ? "w-7 cursor-pointer rotate-12 duration-300 fill-pink-600" : "w-7 fill-current cursor-pointer hover:rotate-12 duration-300 hover:fill-pink-600"}
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
          </Link>
        </div>
        {/* Experiences */}
        <div
          className="tooltip tooltip-pink-600 tooltip-left group"
          data-tip="Experiences"
        >
          <Link to="div_experience" smooth={true} duration={500}>
            <svg
              className={activeSection === "div_experience" ? "w-7 cursor-pointer scale-110 duration-300 fill-pink-600" : "w-7 fill-current cursor-pointer hover:scale-110 duration-300 hover:fill-pink-600"}
              viewBox="0 0 14 14"

            >
              <path d="M7,1V5h4V1Zm3,3H8V2h2ZM7,7v4h4V7Zm3,3H8V8h2ZM1,1V5H5V1ZM4,4H2V2H4ZM1,7v4H5V7Zm3,3H2V8H4Z" />
            </svg>
          </Link>
        </div>

        {/* Projects */}
        <div
          className="tooltip tooltip-pink-600 tooltip-left group"
          data-tip="Projects"
        >
          <Link to="div_project" smooth={true} duration={500}>
            <svg
              className={activeSection === "div_project" ? "w-7 cursor-pointer stroke-pink-600 duration-300" : "w-7 stroke-current cursor-pointer hover:stroke-pink-600 duration-300"}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                opacity="0.4"
                d="M2.80408 15.4771C2.80408 15.4771 2.94608 17.2151 2.97908 17.7631C3.02308 18.4981 3.30708 19.3191 3.78108 19.8891C4.45008 20.6971 5.23808 20.9821 6.29008 20.9841C7.52708 20.9861 16.5221 20.9861 17.7591 20.9841C18.8111 20.9821 19.5991 20.6971 20.2681 19.8891C20.7421 19.3191 21.0261 18.4981 21.0711 17.7631C21.1031 17.2151 21.2451 15.4771 21.2451 15.4771"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.49597 5.32949V4.95849C8.49597 3.73849 9.48397 2.75049 10.704 2.75049H13.286C14.505 2.75049 15.494 3.73849 15.494 4.95849L15.495 5.32949"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.995 16.6783V15.3843"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.74988 8.38905V11.8561C4.66788 13.1211 6.96588 14.0071 9.48788 14.3581C9.78988 13.2571 10.7829 12.4501 11.9899 12.4501C13.1779 12.4501 14.1909 13.2571 14.4729 14.3681C17.0049 14.0171 19.3119 13.1311 21.2399 11.8561V8.38905C21.2399 6.69505 19.8769 5.33105 18.1829 5.33105H5.81688C4.12288 5.33105 2.74988 6.69505 2.74988 8.38905Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
