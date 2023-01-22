import { createContext, useContext } from 'react';
import FakeYoutube from '../api/fakeyoutube';
import Youtube from '../api/youtube';

export const YoutubeApiContext = createContext();

const youtube = new FakeYoutube();
// new Youtube();
// 인스턴스를 한 번 만들어서 value에 한 번 저장하게된다

export const YoutubeApiProvider = ({ children }) => {
  return <YoutubeApiContext.Provider value={{ youtube }}>{children}</YoutubeApiContext.Provider>;
};

export const useYoutubeApi = () => {
  return useContext(YoutubeApiContext);
};
