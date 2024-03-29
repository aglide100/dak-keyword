import { useState } from "react";
import { useEffect } from "react";

export type UseScrollHooksProps = {
    receivedRef: React.RefObject<HTMLDivElement | null>;
};

export type direction = "down" | "up";

const useScrollHooks = ({ receivedRef }: UseScrollHooksProps) => {
    const node = receivedRef;

    const [lastScrollTop, setLastScrollTop] = useState<number>(0);
    const [scrollY, setScrollY] = useState<number>(0);
    const [scrollDirection, setScrollDirection] = useState<direction>();
    const [isShow, setIsShow] = useState<boolean>();

    const callBackFunction = (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries;
        setIsShow(entry.isIntersecting);
    };
    // const callBackFunction = useCallback(([entry]) => {
    //     const { current } = node;
    //     if (entry.isIntersecting) {
    //         setIsShow(true);
    //     } else {
    //         setIsShow(false);
    //     }
    // }, []);

    const listener = () => {
        const rect = document.body.getBoundingClientRect();
        setScrollY(-rect.top);
        setScrollDirection(lastScrollTop > -rect.top ? "down" : "up");
        setLastScrollTop(-rect.top);
    };

    useEffect(() => {
        window.addEventListener("scroll", listener);
        const observer = new IntersectionObserver(callBackFunction);
        if (node.current) observer.observe(node.current);

        return () => {
            if (node.current) observer.unobserve(node.current);
            window.removeEventListener("scroll", listener);
        };
    });

    return { isShow, scrollDirection, scrollY };
};

export default useScrollHooks;
