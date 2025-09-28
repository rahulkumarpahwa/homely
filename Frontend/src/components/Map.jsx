export const Map = ({ markerLat, markerLon }) => {
  return (
    <div className="w-full h-full">
      <iframe
        className="border-4 rounded-xl pointer-events-none"
        src={`https://maps.google.com/maps?q=${markerLat},${markerLon}&z=16&output=embed`}
        width="100%"
        height="100%"
        allowFullScreen="no"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
