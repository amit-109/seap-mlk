import { useMemo, useState } from "react";
import { Play, Video } from "lucide-react";
import PageHero from "../components/PageHero.jsx";
import PortalNotice from "../components/PortalNotice.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { videos } from "../data/videos.js";

const filters = ["Faculty", "Students"];

function isEmbedUrl(url) {
  return /youtube\.com\/embed\/|player\.vimeo\.com\/video\//i.test(url);
}

function VideoPlayer({ video }) {
  if (!video.url) {
    return (
      <div className="video-player__empty">
        <span className="video-player__play"><Play size={21} fill="currentColor" /></span>
        <strong>{video.id} video coming soon</strong>
        <span>Video link pending from the programme team.</span>
      </div>
    );
  }
  if (video.format === "embed" || isEmbedUrl(video.url)) {
    return <iframe className="video-player__media" src={video.url} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" />;
  }
  return <video className="video-player__media" src={video.url} controls preload="metadata">{`Your browser does not support video playback: ${video.title}`}</video>;
}

export default function VideoTutorials() {
  const [filter, setFilter] = useState("Faculty");
  const [selectedId, setSelectedId] = useState("Faculty");
  const filteredVideos = useMemo(() => videos.filter((video) => video.audience === filter), [filter]);
  const selectedVideo = filteredVideos.find((video) => video.id === selectedId) ?? filteredVideos[0];

  function chooseFilter(value) {
    setFilter(value);
    const first = videos.find((video) => video.audience === value);
    if (first) setSelectedId(first.id);
  }

  return (
    <>
      <PageHero eyebrow="VIDEO TUTORIALS" title="See the SEAP journey, step by step" description="Watch the orientation videos for faculty and student workflows." />
      <div className="container page-content" id="page-content">
        <section className="section-block video-section">
          <SectionHeading eyebrow="VIDEO LIBRARY" title="Choose an orientation video">
            Choose a faculty or student login video.
          </SectionHeading>
          <div className="video-filters" role="group" aria-label="Filter videos by audience">
            {filters.map((value) => <button key={value} type="button" className={`filter-chip ${filter === value ? "is-active" : ""}`} aria-pressed={filter === value} onClick={() => chooseFilter(value)}>{value}</button>)}
          </div>
          <div className="row g-4 video-layout">
            <div className="col-12 col-lg-7">
              <div className="video-player" aria-label={selectedVideo ? `Video player for ${selectedVideo.title}` : "Video player"}>
                {selectedVideo && <VideoPlayer video={selectedVideo} />}
              </div>
              {selectedVideo && <div className="video-details"><span className="video-tag">{selectedVideo.id} · {selectedVideo.audience}</span><h2>{selectedVideo.title}</h2><p>{selectedVideo.description}</p></div>}
            </div>
            <div className="col-12 col-lg-5">
              <div className="video-list" aria-label="Video tutorials">
                {filteredVideos.map((video) => (
                  <button type="button" key={video.id} className={`video-list-item ${selectedVideo?.id === video.id ? "is-selected" : ""}`} onClick={() => setSelectedId(video.id)} aria-pressed={selectedVideo?.id === video.id}>
                    <span className="video-list-item__play"><Play size={16} /></span>
                    <span className="video-list-item__text"><strong>{video.id} · {video.title}</strong><small>{video.audience} orientation</small></span>
                    <Video size={17} className="video-list-item__icon" />
                  </button>
                ))}
                {filteredVideos.length === 0 && <p className="empty-state">No videos are available for this filter.</p>}
              </div>
            </div>
          </div>
        </section>
        <PortalNotice />
      </div>
    </>
  );
}
