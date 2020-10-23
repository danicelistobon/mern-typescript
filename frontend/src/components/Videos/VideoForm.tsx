import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Video } from './video';
import * as videoService from './videoService';

interface Params {
  id?: string;
}

const VideoForm = () => {
  const initialState = { title: '', url: '', description: '' };

  const [video, setVideo] = useState<Video>(initialState);

  const history = useHistory();
  const params = useParams<Params>();

  const getVideo = async (id: string) => {
    const res = await videoService.getVideo(id);
    const { title, url, description } = res.data;
    setVideo({ title, url, description });
  };

  useEffect(() => {
    if (params.id) {
      getVideo(params.id);
    }
  }, [params.id]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setVideo({ ...video, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!params.id) {
      await videoService.createVideo(video);
      setVideo(initialState);
      toast.success('Video created');
    } else {
      await videoService.updateVideo(params.id, video);
      toast.success('Video updated');
    }
    history.push('/');
  };

  return (
    <div className='row'>
      <div className='col-lg-4 col-md-6 offset-md-4'>
        <div className='card mt-2'>
          <div className='card-body'>
            {params.id
              ? (<h3 className='text-center m-3'>Update video</h3>)
              : (<h3 className='text-center m-3'>New video</h3>)
            }
            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <input type='text' name='title' placeholder='Write a title for this video' className='form-control' autoFocus onChange={handleInputChange} value={video.title} />
              </div>
              <div className='form-group'>
                <input type='text' name='url' placeholder='https://somesite.com' className='form-control' onChange={handleInputChange} value={video.url} />
              </div>
              <div className='form-group'>
                <textarea rows={3} name='description' placeholder='Write a description' className='form-control' onChange={handleInputChange} value={video.description} />
              </div>
              {params.id
                ? (<div className='text-center'><button className='btn btn-outline-danger'>Update</button></div>)
                : (<div className='text-center'><button className='btn btn-outline-info'>Create</button></div>)
              }
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoForm;
