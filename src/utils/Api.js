class HotelsApi {
    constructor({ url }) {
      this._url = url;
    }
  
    checRes(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  
    getHotels(city, checkIn, checkOut) {
      return fetch(`${this._url}/cache.json?location=${city}&currency=rub&checkIn=${checkIn}&&checkOut=${checkOut}&limit=10`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((res) => this.checRes(res));
    }
  }
  
  const hotelsApi = new HotelsApi({
    url: 'https://engine.hotellook.com/api/v2',
  });
  
  export default hotelsApi;