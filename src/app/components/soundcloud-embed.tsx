interface SoundCloudEmbedProps {
  url: string;
  height?: number;
}

export default function SoundCloudEmbed({
  url,
  height = 300,
}: SoundCloudEmbedProps) {
  return (
    <div>
      <iframe
        width="100%"
        height={height}
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={url}
      ></iframe>
    </div>
  );
}
