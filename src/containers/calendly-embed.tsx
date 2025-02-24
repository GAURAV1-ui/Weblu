import { useEffect } from "react";

interface CalendlyEmbedProps {
  url: string;
}

const CalendlyEmbed: React.FC<CalendlyEmbedProps> = ({ url }) => {
  useEffect(() => {
    const head = document.querySelector("head");
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    head?.appendChild(script);

    return () => {
      head?.removeChild(script);
    };
  }, []);

  return (
    <div className="h-full w-full flex items-center justify-center">
      <div
        className="calendly-inline-widget w-full h-full"
        data-url={url}
        style={{ width: "100vw", height: "100vh" }}
      ></div>
    </div>
  );
};

export default CalendlyEmbed;