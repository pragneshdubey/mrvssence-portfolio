import React, { forwardRef, useState } from 'react';
import { media } from '../data/media';

interface SafeVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster: string;
  className?: string;
}

/**
 * Wraps <video> with guaranteed graceful degradation:
 * remote clip fails -> show poster image -> if poster also fails,
 * show a cinematic gradient. A broken video element is never shown.
 */
const SafeVideo = forwardRef<HTMLVideoElement, SafeVideoProps>(
  ({ src, poster, className = '', ...rest }, ref) => {
    const [videoFailed, setVideoFailed] = useState(false);
    const [posterFailed, setPosterFailed] = useState(false);

    if (videoFailed) {
      if (posterFailed) {
        return (
          <div
            className={className}
            style={{ background: media.fallbackGradient }}
            aria-hidden="true"
          />
        );
      }
      return (
        <img
          src={poster}
          alt=""
          className={className}
          onError={() => setPosterFailed(true)}
        />
      );
    }

    return (
      <video
        ref={ref}
        className={className}
        poster={poster}
        onError={() => setVideoFailed(true)}
        {...rest}
      >
        <source src={src} type="video/mp4" />
      </video>
    );
  }
);

SafeVideo.displayName = 'SafeVideo';
export default SafeVideo;
