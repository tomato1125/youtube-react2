import axios from 'axios'

const KEY = 'AIzaSyDUogYYfFjrRfYaG1fOglqeI909vxKPTpc'

// axiosのcreateメソッドに追加し、youtubu用のHTTPインスタンスを生成する。
const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3'
})

export const fetchPopularData = async () => {
  return await youtube.get('/videos', {
    params: {
      part: 'snippet',
      maxResults: 40,
      key: KEY,
      regionCode: 'JP',
      type: 'video',
      chart: 'mostPopular'
    }
  })
}