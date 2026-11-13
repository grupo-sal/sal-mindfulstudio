import { useEffect, useRef, useState } from 'react';

type GalleryImageProps = {
  photo: { src: string; srcSet: string; fallback: string; alt: string };
};

export function GalleryImage({ photo }: GalleryImageProps) {
  const [useFallback, setUseFallback] = useState(false);
  const image = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // An image can fail before hydration attaches its error handler.
    if (image.current?.complete && image.current.naturalWidth === 0) {
      setUseFallback(true);
    }
  }, []);

  return (
    <img
      ref={image}
      src={useFallback ? photo.fallback : photo.src}
      srcSet={useFallback ? undefined : photo.srcSet}
      sizes="(max-width: 700px) calc(100vw - 64px), (max-width: 1180px) calc((100vw - 82px) / 2), 549px"
      alt={photo.alt}
      loading="lazy"
      decoding="async"
      width={1080}
      height={1440}
      onError={useFallback ? undefined : () => setUseFallback(true)}
    />
  );
}