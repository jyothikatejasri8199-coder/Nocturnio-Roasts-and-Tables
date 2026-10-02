import { useRef, useState } from "react";

function AmbientPlayer() {
  const audioRef = useRef(null);

  const [currentTrack, setCurrentTrack] = useState("cafe");
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState("");

  const tracks = {
    cafe: "/audio/cafe.mp3",
    table: "/audio/table.mp3",
  };

  const playTrack = async (track) => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      setError("");

      audio.pause();

      audio.src = tracks[track];

      audio.load();

      await audio.play();

      setCurrentTrack(track);
      setIsPlaying(true);
    } catch (error) {
      console.error("Audio error:", error);

      setIsPlaying(false);

      setError(
        `Cannot play ${tracks[track]}`
      );
    }
  };

  const togglePlay = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    try {
      setError("");

      if (audio.paused) {
        await audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    } catch (error) {
      console.error("Audio error:", error);

      setIsPlaying(false);

      setError(
        `Cannot play ${tracks[currentTrack]}`
      );
    }
  };

  return (
    <div className="ambient-player">

      <audio
        ref={audioRef}
        loop
        preload="auto"
      />

      <div className="ambient-title">
        <span>♪</span>
        Ambient Vibe
      </div>

      <div className="ambient-buttons">

        <button
          type="button"
          className={
            currentTrack === "cafe"
              ? "active"
              : ""
          }
          onClick={() => playTrack("cafe")}
        >
          ☕ Cafe
        </button>

        <button
          type="button"
          className={
            currentTrack === "table"
              ? "active"
              : ""
          }
          onClick={() => playTrack("table")}
        >
          🕯️ Tables
        </button>

        <button
          type="button"
          className="play-button"
          onClick={togglePlay}
        >
          {isPlaying ? "❚❚" : "▶"}
        </button>

      </div>

      {error && (
        <p className="audio-error">
          {error}
        </p>
      )}

    </div>
  );
}

export default AmbientPlayer;