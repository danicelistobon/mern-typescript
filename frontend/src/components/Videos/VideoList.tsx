import React, { useState, useEffect } from 'react';

import { Video } from './video';
import * as videoService from './videoService';

import VideoItem from './VideoItem';

const VideoList = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  const loadVideos = async () => {
    const res = await videoService.getVideos();
    // ordena videos desde el mas reciente
    /* const sortVideos = res.data.map(video => {
      return {
        ...video,
        createdAt: video.createdAt ? new Date(video.createdAt) : new Date(),
        updatedAt: video.updatedAt ? new Date(video.updatedAt) : new Date()
      };
    })
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()); */
    // res.data o sortVideos
    setVideos(res.data);
    setTimeout(() => {
      setLoading(false);
    }, 800);
  };

  useEffect(() => {
    loadVideos();
  }, []);

  if (loading) {
    return (
      <div className='d-flex justify-content-center mt-5'>
        <div className='spinner-border text-info' style={{ width: '5rem', height: '5rem' }} role='status'>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  if (videos.length === 0) {
    return (
      <div className='col-lg-6 col-md-12 mx-auto'>
        <div className='mt-5 alert alert-danger'>
          <h4 className='alert-heading p-3 mb-0 text-center'>There are no videos yet!</h4>
        </div>
      </div>
    );
  }

  return (
    <div className='row'>
      {videos.map((video) => (
        <VideoItem key={video._id} video={video} loadVideos={loadVideos} />
      ))}
    </div>
  );
};

export default VideoList;
