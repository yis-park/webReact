import { useEffect, useRef } from "react";

function KakaoMap() {
  const { kakao } = window;
  const mapContainer = useRef(null);
  const mapOption = {
    center: new kakao.maps.LatLng(37.56682, 126.97865),
    level: 3,
  };

  useEffect(() => {
    const map = new kakao.maps.Map(mapContainer.current, mapOption);
    const marker = new kakao.maps.Marker({
      position: new kakao.maps.LatLng(37.56682, 126.97865),
      map: map,
    });
  }, []);

  return (
    <div>
      <div
        id="map"
        style={{ width: 1591, height: 264, borderRadius: 30 }}
        ref={mapContainer}
      ></div>
    </div>
  );
}

export default KakaoMap;
