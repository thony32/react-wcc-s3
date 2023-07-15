import { useEffect, useRef } from "react";

import '../Wordz.css'
export default function Wordz() {
    const wordInterval = useRef<number>();
    const currentWord = useRef(0);
    const words = useRef<HTMLElement[]>([]);
    const wordArray = useRef<any[]>([]);

    useEffect(() => {
        startWords();

        return () => {
            clearInterval(wordInterval.current) ;
        };
    }, []);

    function startWords() {
        words.current = Array.from(document.getElementsByClassName('word') as HTMLCollectionOf<HTMLElement>);
        currentWord.current = 0;
        wordArray.current = [];

        if (words.current.length === 0) {
            // Ruh-roh - there are no words
            // No worries
            return;
        }

        for (let i = 0; i < words.current.length; i++) {
            splitLetters(words.current[i]);
        }

        changeWord();
        clearInterval(wordInterval.current);
        wordInterval.current = setInterval(changeWord, 4000);
    }

    function changeWord() {
        const cw = wordArray.current[currentWord.current];
        const nw = currentWord.current === words.current.length - 1 ? wordArray.current[0] : wordArray.current[currentWord.current + 1];

        for (let i = 0; i < cw.length; i++) {
            animateLetterOut(cw, i);
        }

        for (let i = 0; i < nw.length; i++) {
            nw[i].className = 'letter behind';
            nw[0].parentElement.style.opacity = '1';
            animateLetterIn(nw, i);
        }

        currentWord.current = currentWord.current === wordArray.current.length - 1 ? 0 : currentWord.current + 1;
    }

    function animateLetterOut(cw: HTMLElement[], i: number) {
        setTimeout(() => {
            cw[i].className = 'letter out';
        }, i * 80);
    }

    function animateLetterIn(nw: HTMLElement[], i: number) {
        setTimeout(() => {
            nw[i].className = 'letter in';
        }, 340 + i * 80);
    }

    function splitLetters(word: HTMLElement) {
        const content = word.innerText;
        word.innerText = '';
        const letters = [];

        for (let i = 0; i < content.length; i++) {
            const letter = document.createElement('span');
            letter.className = 'letter';
            letter.innerText = content.charAt(i);
            word.appendChild(letter);
            letters.push(letter);
        }

        wordArray.current.push(letters);
    }
    return (
        <div className="relative h-[100%] flex items-center">
            <div className="bannertxt text-xl sm:text-[7vw]">
                <h1>
                    <span className="word text-primary">Web &nbsp; developer. &nbsp; </span>
                    <span className="word text-primary">Muriel &nbsp; Arisoa</span>
                    <span className="word text-primary">Mobile &nbsp; developer. &nbsp; </span>
                    <span className="word text-primary">UX &nbsp; / &nbsp; UI &nbsp; Designer.</span>
                </h1>
            </div>
        </div>
    )
}
