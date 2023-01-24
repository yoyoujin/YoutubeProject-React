export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  // 공개함수
  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  async channelImageURL(id) {
    return this.apiClient
      .channels({
        params: { part: 'snippet', id },
      })
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }

  async relatedVideos(id) {
    return this.apiClient
      .search({
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          relatedToVideoId: id,
        },
      })
      .then((res) => res.data.items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  // 프라이빗함수 - 외부 인스턴스에서 접근 불가
  async #searchByKeyword(keyword) {
    return this.apiClient
      .search({
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          q: keyword,
        },
      })
      .then((res) => res.data.items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  // 프라이빗함수 - 외부 인스턴스에서 접근 불가
  async #mostPopular() {
    return this.apiClient
      .videos({
        params: {
          part: 'snippet',
          maxResults: 25,
          chart: 'mostPopular',
        },
      })
      .then((res) => res.data.items);
  }
}
