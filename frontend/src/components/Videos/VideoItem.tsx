import React from 'react';
import { useHistory } from 'react-router-dom';
import ReactPlayer from 'react-player';

import { Video } from './video';
import * as videoService from './videoService';

import './VideoItem.css';

interface Props {
  video: Video;
  loadVideos: () => void;
}

const VideoItem = ({ video, loadVideos }: Props) => {
  const history = useHistory();

  const handleDelete = async (id: string) => {
    await videoService.deleteVideo(id);
    loadVideos();
  };

  return (
    <div className='col-lg-4 col-md-6'>
      <div className='card mt-2 mb-3 video-card animate__animated animate__backInUp'>
        <div className='card-header d-flex justify-content-between'>
          <h5 className='font-weight-normal mb-0' onClick={() => history.push(`/update/${video._id}`)}>{video.title}</h5>
          <span className='text-danger font-weight-bold' title='Delete' onClick={() => video._id && handleDelete(video._id)}>X</span>
        </div>
        <div className='card-body'>
          <p className='text-justify'>{video.description}</p>
          <div className='embed-responsive embed-responsive-4by4'>
            <ReactPlayer url={video.url} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
