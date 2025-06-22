import { useEffect, useState } from 'react';

export default function useElementHeight<T extends HTMLElement = HTMLElement>(
    ref: React.RefObject<T|null>
): number {
    const [height, setHeight] = useState(0);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const updateHeight = () => setHeight(el.offsetHeight);

        updateHeight(); // initial height

        const resizeObserver = new ResizeObserver(() => {
            updateHeight();
        });

        resizeObserver.observe(el);

        return () => {
            resizeObserver.disconnect();
        };
    }, [ref]);

    return height;
}
