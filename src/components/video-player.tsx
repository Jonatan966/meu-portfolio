"use client";
import { ComponentProps, useEffect, useRef } from "react";
import videojs from "video.js";
import Player from "video.js/dist/types/player";
import "video.js/dist/video-js.css";

type VideoPlayerParams = ComponentProps<"div"> & {
  options: {
    autoplay?: boolean;
    controls?: boolean;
    responsive?: boolean;
    fluid?: boolean;
    sources: {
      src: string;
      type: string;
    }[];
  };
  onReady?: (player: Player) => void;
};

export function VideoPlayer({ options, onReady, ...props }: VideoPlayerParams) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const playerRef = useRef<Player | null>(null);

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }

    playerRef.current = videojs(videoRef.current, options);
  }, [options, onReady]);

  return (
    <div {...props}>
      <div data-vjs-player className="h-full">
        <video ref={videoRef} className="video-js h-full w-full" />
      </div>
    </div>
  );
}
