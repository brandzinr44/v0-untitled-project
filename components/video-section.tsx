"use client"

import type React from "react"

import { useRef, useState, useEffect } from "react"

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isInView, setIsInView] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const textSectionRef = useRef<HTMLDivElement>(null)

  const videoUrl = "#"

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handlePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation()
    handleVideoClick()
  }

  const handleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (videoRef.current) {
      const newMutedState = !isMuted
      videoRef.current.muted = newMutedState
      setIsMuted(newMutedState)
      if (!newMutedState && videoRef.current.volume === 0) {
        videoRef.current.volume = 0.5
        setVolume(0.5)
      }
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    const newVolume = Number.parseFloat(e.target.value)
    setVolume(newVolume)
    if (videoRef.current) {
      videoRef.current.volume = newVolume
      if (newVolume > 0 && videoRef.current.muted) {
        videoRef.current.muted = false
        setIsMuted(false)
      }
    }
  }

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()
    const newTime = Number.parseFloat(e.target.value)
    setCurrentTime(newTime)
    if (videoRef.current) {
      videoRef.current.currentTime = newTime
    }
  }

  const handleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (containerRef.current?.requestFullscreen) {
      containerRef.current.requestFullscreen()
    }
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedMetadata = () => {
      setDuration(video.duration)
    }

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime)
    }

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    video.addEventListener("loadedmetadata", handleLoadedMetadata)
    video.addEventListener("timeupdate", handleTimeUpdate)
    video.addEventListener("play", handlePlay)
    video.addEventListener("pause", handlePause)

    return () => {
      video.removeEventListener("loadedmetadata", handleLoadedMetadata)
      video.removeEventListener("timeupdate", handleTimeUpdate)
      video.removeEventListener("play", handlePlay)
      video.removeEventListener("pause", handlePause)
    }
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.3 },
    )

    if (textSectionRef.current) {
      observer.observe(textSectionRef.current)
    }

    return () => {
      if (textSectionRef.current) {
        observer.unobserve(textSectionRef.current)
      }
    }
  }, [])

  const formatTime = (time: number) => {
    if (!time) return "0:00"
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
  }

  return (
    <section className="w-full bg-[#0b0b0b] py-0 md:py-28">
      {/* Text Header */}
      <div className="max-w-full mx-auto px-3 md:px-6 lg:px-8 mb-6 fade-in-up" style={{ animationDelay: "0s" }}>
        <p className="text-lg md:text-2xl lg:text-[28px] font-regular tracking-tight text-white leading-relaxed">
          We are a branding studio that helps businesses.
        </p>
      </div>

      {/* Video Container */}
      <div className="w-full px-3 md:px-6 lg:px-0 fade-in-up" style={{ animationDelay: "0.2s" }}>
        <div
          ref={containerRef}
          className="max-w-full mx-auto bg-gray-900 overflow-hidden relative group cursor-pointer aspect-[9/16] md:aspect-video"
          onClick={handleVideoClick}
        >
          <video ref={videoRef} className="w-full h-full object-cover" playsInline>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Video Controls - Slides up on hover */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
            {/* Progress Bar */}
            <div className="mb-3">
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleProgressChange}
                className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-white"
              />
            </div>

            {/* Controls Row */}
            <div className="flex items-center justify-between gap-4">
              {/* Left side - Play and Time */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePlayPause}
                  className="text-white hover:opacity-80 transition-opacity flex-shrink-0"
                >
                  {isPlaying ? (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="6" y="4" width="4" height="16" />
                      <rect x="14" y="4" width="4" height="16" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21" />
                    </svg>
                  )}
                </button>

                {/* Time Display */}
                <span className="text-white text-sm font-medium whitespace-nowrap flex-shrink-0">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>

              {/* Right side - Volume, Fullscreen, Menu */}
              <div className="flex items-center gap-3">
                {/* Volume Control */}
                <div className="flex items-center gap-2 bg-gray-800/50 px-3 py-2 rounded-full">
                  <button onClick={handleMute} className="text-white hover:opacity-80 transition-opacity flex-shrink-0">
                    {isMuted ? (
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                        <line x1="23" y1="9" x2="17" y2="15" />
                        <line x1="17" y1="9" x2="23" y2="15" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                      </svg>
                    )}
                  </button>

                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-20 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-white"
                  />
                </div>

                {/* Fullscreen Button */}
                <button
                  onClick={handleFullscreen}
                  className="text-white hover:opacity-80 transition-opacity flex-shrink-0"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                  </svg>
                </button>

                {/* Menu Button */}
                <button className="text-white hover:opacity-80 transition-opacity flex-shrink-0">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="5" r="1" />
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="19" r="1" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
