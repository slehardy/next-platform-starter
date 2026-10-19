'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { getResourceSize } from 'utils';

export function ImageWithSizeOverlay({ src, srcSet, sizes, overlayPosition }) {
    const imageRef = useRef();
    const [imgSize, setImgSize] = useState(undefined);

    const handleImageLoad = useCallback(() => {
        const imgElement = imageRef.current;
        if (imgElement?.complete) {
            const size = getResourceSize(imgElement?.currentSrc);
            setImgSize(size);
        } else {
            setImgSize(undefined);
        }
    }, []);

    useEffect(() => {
        // Cached images may finish before React attaches onLoad. Measure after
        // the first paint, and cancel the pending callback on unmount.
        const frame = requestAnimationFrame(handleImageLoad);
        return () => cancelAnimationFrame(frame);
    }, [handleImageLoad]);

    return (
        <div className="relative">
            {imgSize && (
                <span
                    className={`absolute py-1.5 px-2.5 text-sm rounded bg-neutral-900/70 top-2.5 ${
                        overlayPosition === 'right' ? 'right-2.5' : 'left-2.5'
                    }`}
                >{`Size: ${Math.ceil(imgSize / 1024)}KB`}</span>
            )}

            <img src={src} srcSet={srcSet} sizes={sizes} alt="Corgi" onLoad={handleImageLoad} ref={imageRef} />
        </div>
    );
}
