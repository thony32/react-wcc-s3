import { useState } from "react";
import { useSpring, animated, config } from 'react-spring';

export default function Skills() {
    const [react, setReact] = useState(2);
    const [vue, setVue] = useState(2);
    const [tail, setTail] = useState(2);
    const [node, setNode] = useState(2);
    const [spring, setSpring] = useState(2);
    const [ionic, setIonic] = useState(2);
    const [flutter, setFlutter] = useState(2);
    const [kotlin, setKotlin] = useState(2);

    const [laravel, setLaravel] = useState(2);

    const handleHover = (event: any, setValue: any, value: any) => {
        setValue(event.type === 'mouseover' ? value : 2);
    };

    const animatedProps = {
        reactValue: useSpring({ reactValue: react, from: { reactValue: 0 }, config: config.wobbly }),
        vueValue: useSpring({ vueValue: vue, from: { vueValue: 0 }, config: config.wobbly }),
        tailValue: useSpring({ tailValue: tail, from: { tailValue: 0 }, config: config.wobbly }),
        laravelValue: useSpring({ laravelValue: laravel, from: { laravelValue: 0 }, config: config.wobbly }),
        nodeValue: useSpring({ nodeValue: node, from: { nodeValue: 0 }, config: config.wobbly }),
        springValue: useSpring({ springValue: spring, from: { springValue: 0 }, config: config.wobbly }),
        ionicValue: useSpring({ ionicValue: ionic, from: { ionicValue: 0 }, config: config.wobbly }),
        flutterValue: useSpring({ flutterValue: flutter, from: { flutterValue: 0 }, config: config.wobbly }),
        kotlinValue: useSpring({ kotlinValue: kotlin, from: { kotlinValue: 0 }, config: config.wobbly }),
    };
    return (
        <div className="h-screen px-[10%] py-[5%]">
            <div className="grid grid-cols-2 gap-5">
                <div className="space-y-10">
                    <h1 className="text-[5em] first-letter:text-[2em] font-semibold tracking-wider text-primary">Stacks</h1>
                    {/* Front */}
                    <div className="flex gap-16">
                        <div onMouseOver={(event) => handleHover(event, setReact, 80)} onMouseOut={(event) => handleHover(event, setReact, 2)} className="group flex justify-center">
                            <div>
                                <div className="relative">
                                    <svg className="w-28 fill-current group-hover:fill-info duration-200 group-hover:opacity-80 opacity-10" viewBox="0 0 24 24">
                                        <circle cx="12" cy="11.245" r="1.785" />
                                        <path d="m7.002 14.794-.395-.101c-2.934-.741-4.617-2.001-4.617-3.452 0-1.452 1.684-2.711 4.617-3.452l.395-.1.111.391a19.507 19.507 0 0 0 1.136 2.983l.085.178-.085.178c-.46.963-.841 1.961-1.136 2.985l-.111.39zm-.577-6.095c-2.229.628-3.598 1.586-3.598 2.542 0 .954 1.368 1.913 3.598 2.54.273-.868.603-1.717.985-2.54a20.356 20.356 0 0 1-.985-2.542zm10.572 6.095-.11-.392a19.628 19.628 0 0 0-1.137-2.984l-.085-.177.085-.179c.46-.961.839-1.96 1.137-2.984l.11-.39.395.1c2.935.741 4.617 2 4.617 3.453 0 1.452-1.683 2.711-4.617 3.452l-.395.101zm-.41-3.553c.4.866.733 1.718.987 2.54 2.23-.627 3.599-1.586 3.599-2.54 0-.956-1.368-1.913-3.599-2.542a20.683 20.683 0 0 1-.987 2.542z" />
                                        <path d="m6.419 8.695-.11-.39c-.826-2.908-.576-4.991.687-5.717 1.235-.715 3.222.13 5.303 2.265l.284.292-.284.291a19.718 19.718 0 0 0-2.02 2.474l-.113.162-.196.016a19.646 19.646 0 0 0-3.157.509l-.394.098zm1.582-5.529c-.224 0-.422.049-.589.145-.828.477-.974 2.138-.404 4.38.891-.197 1.79-.338 2.696-.417a21.058 21.058 0 0 1 1.713-2.123c-1.303-1.267-2.533-1.985-3.416-1.985zm7.997 16.984c-1.188 0-2.714-.896-4.298-2.522l-.283-.291.283-.29a19.827 19.827 0 0 0 2.021-2.477l.112-.16.194-.019a19.473 19.473 0 0 0 3.158-.507l.395-.1.111.391c.822 2.906.573 4.992-.688 5.718a1.978 1.978 0 0 1-1.005.257zm-3.415-2.82c1.302 1.267 2.533 1.986 3.415 1.986.225 0 .423-.05.589-.145.829-.478.976-2.142.404-4.384-.89.198-1.79.34-2.698.419a20.526 20.526 0 0 1-1.71 2.124z" />
                                        <path d="m17.58 8.695-.395-.099a19.477 19.477 0 0 0-3.158-.509l-.194-.017-.112-.162A19.551 19.551 0 0 0 11.7 5.434l-.283-.291.283-.29c2.08-2.134 4.066-2.979 5.303-2.265 1.262.727 1.513 2.81.688 5.717l-.111.39zm-3.287-1.421c.954.085 1.858.228 2.698.417.571-2.242.425-3.903-.404-4.381-.824-.477-2.375.253-4.004 1.841.616.67 1.188 1.378 1.71 2.123zM8.001 20.15a1.983 1.983 0 0 1-1.005-.257c-1.263-.726-1.513-2.811-.688-5.718l.108-.391.395.1c.964.243 2.026.414 3.158.507l.194.019.113.16c.604.878 1.28 1.707 2.02 2.477l.284.29-.284.291c-1.583 1.627-3.109 2.522-4.295 2.522zm-.993-5.362c-.57 2.242-.424 3.906.404 4.384.825.47 2.371-.255 4.005-1.842a21.17 21.17 0 0 1-1.713-2.123 20.692 20.692 0 0 1-2.696-.419z" />
                                        <path d="M12 15.313c-.687 0-1.392-.029-2.1-.088l-.196-.017-.113-.162a25.697 25.697 0 0 1-1.126-1.769 26.028 26.028 0 0 1-.971-1.859l-.084-.177.084-.179c.299-.632.622-1.252.971-1.858.347-.596.726-1.192 1.126-1.77l.113-.16.196-.018a25.148 25.148 0 0 1 4.198 0l.194.019.113.16a25.136 25.136 0 0 1 2.1 3.628l.083.179-.083.177a24.742 24.742 0 0 1-2.1 3.628l-.113.162-.194.017c-.706.057-1.412.087-2.098.087zm-1.834-.904c1.235.093 2.433.093 3.667 0a24.469 24.469 0 0 0 1.832-3.168 23.916 23.916 0 0 0-1.832-3.168 23.877 23.877 0 0 0-3.667 0 23.743 23.743 0 0 0-1.832 3.168 24.82 24.82 0 0 0 1.832 3.168z" />
                                    </svg>
                                    <animated.progress className="progress progress-info w-28" value={animatedProps.reactValue.reactValue.interpolate((val) => val.toFixed(0))} max="100"></animated.progress>
                                </div>
                                <div className="text-center">
                                    <span className="text-2xl opacity-10 font-extrabold group-hover:text-info group-hover:opacity-80 duration-75">React</span>
                                </div>
                            </div>
                        </div>
                        <div onMouseOver={(event) => handleHover(event, setVue, 70)} onMouseOut={(event) => handleHover(event, setVue, 2)} className="group flex justify-center">
                            <div>
                                <div className="relative">
                                    <svg className="w-28 fill-current group-hover:fill-success duration-200 group-hover:opacity-80 opacity-10" viewBox="0 -2 28 28">
                                        <path
                                            d="m22.313 0h5.688l-14 24-14-24h11l3 5.563 3.5-5.563zm-18.813 2 10.5 18 10.5-18h-3.375l-7.125 12.375-7.125-12.375z" />
                                    </svg>
                                    <animated.progress className="progress progress-success w-28" value={animatedProps.vueValue.vueValue.interpolate((val) => val.toFixed(0))} max="100"></animated.progress>
                                </div>
                                <div className="text-center">
                                    <span className="text-2xl opacity-10 font-extrabold group-hover:text-success group-hover:opacity-80 duration-75">VueJS</span>
                                </div>
                            </div>
                        </div>
                        <div onMouseOver={(event) => handleHover(event, setTail, 90)} onMouseOut={(event) => handleHover(event, setTail, 2)} className="group flex justify-center">
                            <div>
                                <div className="relative">
                                    <svg className="w-28 fill-current group-hover:fill-info duration-200 group-hover:opacity-80 opacity-10" viewBox="0 0 24 24">
                                        <path
                                            d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
                                    </svg>
                                    <animated.progress className="progress progress-info w-28" value={animatedProps.tailValue.tailValue.interpolate((val) => val.toFixed(0))} max="100"></animated.progress>
                                </div>
                                <div className="text-center">
                                    <span className="text-2xl opacity-10 font-extrabold group-hover:text-info group-hover:opacity-80 duration-75">Tailwind</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Back */}
                    <div className="flex gap-16">
                        <div onMouseOver={(event) => handleHover(event, setNode, 40)} onMouseOut={(event) => handleHover(event, setNode, 2)} className="group flex justify-center">
                            <div>
                                <div className="relative">
                                    <div className="flex justify-center">
                                        <svg className="w-24 fill-current group-hover:fill-success duration-200 group-hover:opacity-80 opacity-10" viewBox="0 0 16 16" fill="none">
                                            <path fill-rule="nonzero" clip-rule="nonzero"
                                                d="M7.58638 0.102166C7.8199 -0.0340553 8.10867 -0.0340553 8.34219 0.102166L14.5565 3.72717C14.7869 3.86157 14.9286 4.10825 14.9286 4.375V11.625C14.9286 11.8918 14.7869 12.1384 14.5565 12.2728L8.34219 15.8978C8.10867 16.0341 7.8199 16.0341 7.58638 15.8978L6.03281 14.9916C5.67502 14.7829 5.55417 14.3236 5.76288 13.9658C5.97159 13.6081 6.43083 13.4872 6.78862 13.6959L7.96429 14.3817L13.4286 11.1942V4.80578L7.96429 1.61828L2.5 4.80578V11.1942L3.6168 11.8457C3.96098 11.9561 4.38611 11.9831 4.68576 11.8507C4.82477 11.7893 4.95031 11.6893 5.04968 11.5107C5.15426 11.3227 5.25 11.0098 5.25 10.5V5.25C5.25 4.83579 5.58579 4.5 6 4.5C6.41421 4.5 6.75 4.83579 6.75 5.25V10.5C6.75 11.1902 6.62104 11.7716 6.36047 12.2399C6.09471 12.7176 5.71466 13.036 5.29192 13.2228C4.48562 13.579 3.59523 13.433 3.04999 13.2371C3.00686 13.2216 2.96525 13.2022 2.92567 13.1791L1.3721 12.2728C1.14168 12.1384 1 11.8918 1 11.625V4.375C1 4.10825 1.14168 3.86157 1.3721 3.72717L7.58638 0.102166ZM8.24655 5.28323C8.64339 4.81081 9.26318 4.5 10.1042 4.5C10.8847 4.5 11.4792 4.76756 11.8815 5.19314C12.166 5.49417 12.1527 5.96885 11.8516 6.25338C11.5506 6.53792 11.0759 6.52455 10.7914 6.22352C10.7038 6.13087 10.5202 6 10.1042 6C9.66182 6 9.47952 6.14753 9.39511 6.24802C9.28615 6.37774 9.25 6.54184 9.25 6.625C9.25 6.70816 9.28615 6.87226 9.39511 7.00198C9.47952 7.10247 9.66182 7.25 10.1042 7.25C10.1782 7.25 10.2497 7.26073 10.3173 7.28072C10.9368 7.37001 11.4089 7.64784 11.7326 8.03323C12.1049 8.47643 12.2292 8.99983 12.2292 9.375C12.2292 9.75017 12.1049 10.2736 11.7326 10.7168C11.3358 11.1892 10.716 11.5 9.87501 11.5C9.0945 11.5 8.49996 11.2324 8.09768 10.8069C7.81315 10.5058 7.82652 10.0311 8.12755 9.74662C8.42857 9.46208 8.90325 9.47546 9.18779 9.77648C9.27536 9.86913 9.459 10 9.87501 10C10.3174 10 10.4997 9.85247 10.5841 9.75198C10.693 9.62226 10.7292 9.45816 10.7292 9.375C10.7292 9.29184 10.693 9.12774 10.5841 8.99802C10.4997 8.89753 10.3174 8.75 9.87501 8.75C9.80097 8.75 9.72943 8.73927 9.66188 8.71928C9.04237 8.62999 8.57028 8.35216 8.24655 7.96677C7.87427 7.52357 7.75 7.00017 7.75 6.625C7.75 6.24983 7.87427 5.72643 8.24655 5.28323Z"
                                            />
                                        </svg>
                                    </div>
                                    <animated.progress className="progress progress-success w-28" value={animatedProps.nodeValue.nodeValue.interpolate((val) => val.toFixed(0))} max="100"></animated.progress>
                                </div>
                                <div className="text-center">
                                    <span className="text-2xl opacity-10 font-extrabold group-hover:text-success group-hover:opacity-80 duration-75">NodeJS</span>
                                </div>
                            </div>
                        </div>
                        <div onMouseOver={(event) => handleHover(event, setLaravel, 60)} onMouseOut={(event) => handleHover(event, setLaravel, 2)} className="group flex justify-center">
                            <div>
                                <div className="relative">
                                    <div className="flex justify-center">
                                        <svg className="w-24 fill-current group-hover:fill-error duration-200 group-hover:opacity-80 opacity-10" viewBox="0 0 32 32">
                                            <path
                                                d="M13.143 23.585l10.46-5.97-4.752-2.736-10.453 6.019zM24.084 11.374l-4.757-2.736v5.417l4.758 2.737zM24.559 5.078l-4.756 2.736 4.756 2.736 4.755-2.737zM9.911 18.928l2.76-1.589v-11.934l-4.758 2.738v11.934zM7.437 1.846l-4.756 2.737 4.756 2.737 4.753-2.737zM2.204 5.406v18.452l10.464 6.022v-5.471l-5.472-3.096c-0.018-0.013-0.032-0.027-0.051-0.039-0.014-0.013-0.030-0.023-0.044-0.034l-0.001-0.003c-0.015-0.015-0.028-0.031-0.039-0.049l-0.001-0.001c-0.014-0.013-0.025-0.028-0.035-0.045l-0.001-0.001h-0.003c-0.008-0.015-0.016-0.035-0.024-0.055l-0.001-0.004c-0.007-0.015-0.015-0.032-0.022-0.051l-0.001-0.003c-0.004-0.020-0.008-0.045-0.010-0.070l-0-0.002c-0.003-0.015-0.006-0.033-0.008-0.051l-0-0.001v-12.759l-2.757-1.59zM24.085 23.857v-5.422l-10.464 5.974v5.47zM29.789 14.055v-5.417l-4.756 2.737v5.417zM30.725 7.69c0.011 0.038 0.018 0.081 0.018 0.126v0 6.513c-0 0.176-0.095 0.329-0.237 0.411l-0.002 0.001-5.468 3.149v6.241c-0 0.175-0.095 0.328-0.236 0.411l-0.002 0.001-11.416 6.57c-0.024 0.013-0.052 0.025-0.081 0.033l-0.003 0.001-0.030 0.013c-0.036 0.011-0.078 0.017-0.121 0.017s-0.085-0.006-0.125-0.018l0.003 0.001c-0.015-0.004-0.027-0.009-0.039-0.016l0.001 0.001c-0.031-0.011-0.057-0.021-0.082-0.033l0.004 0.002-11.413-6.57c-0.144-0.084-0.239-0.237-0.239-0.412v0-19.548c0-0.044 0.007-0.087 0.019-0.127l-0.001 0.003c0.004-0.015 0.013-0.025 0.018-0.040 0.009-0.029 0.019-0.053 0.030-0.076l-0.001 0.003c0.008-0.016 0.018-0.030 0.029-0.042l-0 0 0.042-0.057 0.047-0.034c0.018-0.015 0.034-0.030 0.052-0.043h0.001l5.708-3.285c0.068-0.040 0.15-0.064 0.237-0.064s0.169 0.024 0.239 0.065l-0.002-0.001 5.71 3.285c0.019 0.013 0.035 0.027 0.051 0.042l-0-0 0.048 0.034c0.016 0.018 0.025 0.038 0.042 0.057 0.012 0.012 0.022 0.026 0.031 0.041l0.001 0.001c0.010 0.020 0.020 0.044 0.029 0.069l0.001 0.004 0.016 0.040c0.011 0.035 0.018 0.076 0.018 0.118 0 0.002 0 0.004-0 0.006v-0 12.208l4.756-2.737v-6.241c0-0.001 0-0.002 0-0.002 0-0.043 0.006-0.085 0.017-0.125l-0.001 0.003c0.004-0.013 0.013-0.025 0.016-0.040 0.010-0.030 0.020-0.054 0.032-0.078l-0.002 0.004c0.009-0.015 0.023-0.025 0.032-0.042 0.015-0.019 0.027-0.038 0.042-0.054 0.014-0.013 0.029-0.025 0.045-0.035l0.001-0.001c0.018-0.013 0.033-0.029 0.052-0.040h0.001l5.708-3.286c0.068-0.040 0.15-0.064 0.237-0.064s0.169 0.024 0.239 0.065l-0.002-0.001 5.708 3.286c0.020 0.013 0.034 0.027 0.053 0.039 0.015 0.013 0.032 0.023 0.046 0.035 0.016 0.018 0.028 0.038 0.043 0.056 0.011 0.012 0.021 0.026 0.030 0.040l0.001 0.001c0.012 0.022 0.022 0.047 0.030 0.073l0.001 0.003c0.008 0.012 0.014 0.025 0.019 0.039l0 0.001z">
                                            </path>
                                        </svg>
                                    </div>
                                    <animated.progress className="progress progress-error w-28" value={animatedProps.laravelValue.laravelValue.interpolate((val) => val.toFixed(0))} max="100"></animated.progress>
                                </div>
                                <div className="text-center">
                                    <span className="text-2xl opacity-10 font-extrabold group-hover:text-error group-hover:opacity-80 duration-75">Laravel</span>
                                </div>
                            </div>
                        </div>
                        <div onMouseOver={(event) => handleHover(event, setSpring, 30)} onMouseOut={(event) => handleHover(event, setSpring, 2)} className="group flex justify-center">
                            <div>
                                <div className="relative">
                                    <div className="flex justify-center">
                                        <svg className="w-24 fill-current group-hover:fill-success duration-200 group-hover:opacity-80 opacity-10" viewBox="0 0 32 32">

                                            <path
                                                d="M5.466 27.993c.586.473 1.446.385 1.918-.202.475-.585.386-1.445-.2-1.92-.585-.474-1.444-.383-1.92.202-.45.555-.392 1.356.115 1.844l-.266-.234C1.972 24.762 0 20.597 0 15.978 0 7.168 7.168 0 15.98 0c4.48 0 8.53 1.857 11.435 4.836.66-.898 1.232-1.902 1.7-3.015 2.036 6.118 3.233 11.26 2.795 15.31-.592 8.274-7.508 14.83-15.93 14.83-3.912 0-7.496-1.416-10.276-3.757l-.238-.21zm23.58-4.982c4.01-5.336 1.775-13.965-.085-19.48-1.657 3.453-5.738 6.094-9.262 6.93-3.303.788-6.226.142-9.283 1.318-6.97 2.68-6.86 10.992-3.02 12.86.002 0 .23.124.227.12 0-.002 5.644-1.122 8.764-2.274 4.56-1.684 9.566-5.835 11.213-10.657-.877 5.015-5.182 9.84-9.507 12.056-2.302 1.182-4.092 1.445-7.88 2.756-.464.158-.828.314-.828.314.96-.16 1.917-.212 1.917-.212 5.393-.255 13.807 1.516 17.745-3.73z" />
                                        </svg>
                                    </div>
                                    <animated.progress className="progress progress-success w-28" value={animatedProps.springValue.springValue.interpolate((val) => val.toFixed(0))} max="100"></animated.progress>
                                </div>
                                <div className="text-center">
                                    <span className="text-2xl opacity-10 font-extrabold group-hover:text-success group-hover:opacity-80 duration-75">Spring</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Mobile */}
                    <div className="flex gap-16">
                        <div onMouseOver={(event) => handleHover(event, setIonic, 65)} onMouseOut={(event) => handleHover(event, setIonic, 2)} className="group flex justify-center">
                            <div>
                                <div className="relative space-y-4">
                                    <div className="flex justify-center">
                                        <svg className="w-20 fill-current group-hover:fill-info duration-200 group-hover:opacity-80 opacity-10" viewBox="0 0 32 32">
                                            <path
                                                d="M30.563 9.369l-0.136-0.307-0.229 0.249c-0.541 0.62-1.233 1.095-2.004 1.381l-0.215 0.083 0.089 0.208c0.661 1.589 1.005 3.292 1 5.011 0 7.208-5.86 13.073-13.073 13.073s-13.068-5.86-13.068-13.068c0-7.208 5.871-13.073 13.073-13.073 1.959 0 3.844 0.423 5.599 1.261l0.208 0.099 0.089-0.204c0.323-0.76 0.828-1.421 1.473-1.937l0.261-0.213-0.297-0.156c-2.265-1.172-4.781-1.781-7.333-1.776-8.823 0-16 7.177-16 16 0 8.828 7.177 16 16 16 8.828 0 16-7.172 16-16 0-2.307-0.479-4.536-1.437-6.631zM16 8.708c-4.027 0.005-7.287 3.265-7.292 7.292 0.005 4.027 3.265 7.287 7.292 7.292 4.027-0.005 7.287-3.265 7.292-7.292-0.005-4.027-3.265-7.287-7.292-7.292zM29.792 6.031c0 1.839-1.489 3.324-3.323 3.324-1.839 0-3.329-1.485-3.329-3.324 0-4.432 6.652-4.432 6.652 0z" />
                                        </svg>
                                    </div>
                                    <animated.progress className="progress progress-info w-28" value={animatedProps.ionicValue.ionicValue.interpolate((val) => val.toFixed(0))} max="100"></animated.progress>
                                </div>
                                <div className="text-center">
                                    <span className="text-2xl opacity-10 font-extrabold group-hover:text-info group-hover:opacity-80 duration-75">Ionic</span>
                                </div>
                            </div>
                        </div>
                        <div onMouseOver={(event) => handleHover(event, setFlutter, 40)} onMouseOut={(event) => handleHover(event, setFlutter, 2)} className="group flex justify-center">
                            <div>
                                <div className="relative space-y-4">
                                    <div className="flex justify-center">
                                        <svg className="w-20 fill-current group-hover:fill-info duration-200 group-hover:opacity-80 opacity-10" viewBox="0 0 32 32">
                                            <path
                                                d="M18.909 14.84l-8.086 8.070 8.085 8.085h9.214l-8.073-8.083 8.073-8.073h-9.212zM18.892 1.004l-15.013 14.996 4.624 4.624 19.599-19.603h-9.194z">
                                            </path>
                                        </svg>
                                    </div>
                                    <animated.progress className="progress progress-info w-28" value={animatedProps.flutterValue.flutterValue.interpolate((val) => val.toFixed(0))} max="100"></animated.progress>
                                </div>
                                <div className="text-center">
                                    <span className="text-2xl opacity-10 font-extrabold group-hover:text-info group-hover:opacity-80 duration-75">Flutter</span>
                                </div>
                            </div>
                        </div>
                        <div onMouseOver={(event) => handleHover(event, setKotlin, 25)} onMouseOut={(event) => handleHover(event, setKotlin, 2)} className="group flex justify-center">
                            <div>
                                <div className="relative space-y-4">
                                    <div className="flex justify-center">
                                        <svg className="w-20 fill-current group-hover:fill-info duration-200 group-hover:opacity-80 opacity-10" viewBox="0 0 32 32">
                                            <path d="M1.734 32l15.068-15.333 15.198 15.333zM0 0h16l-16 16.667zM17.865 0l-17.865 18.667v13.333l32-32z" />
                                        </svg>
                                    </div>
                                    <animated.progress className="progress progress-info w-28" value={animatedProps.kotlinValue.kotlinValue.interpolate((val) => val.toFixed(0))} max="100"></animated.progress>
                                </div>
                                <div className="text-center">
                                    <span className="text-2xl opacity-10 font-extrabold group-hover:text-info group-hover:opacity-80 duration-75">Kotlin</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-[3em] first-letter:text-[1.6em] font-semibold tracking-wider text-primary">Knowledge</h1>
                    <h1 className="text-[3em] first-letter:text-[1.6em] font-semibold tracking-wider text-primary">Language</h1>
                </div>
            </div>
        </div>
    )
}
