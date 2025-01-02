import { ImageResponse } from "next/og";
import { loadGoogleFont } from "./og/load-google-font";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default async function Icon() {
  const content = "L";

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 26,
          background: "#0c0a09",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fee19e",
          borderRadius: "4px",
        }}
      >
        {content}
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Lora",
          data: await loadGoogleFont("Lora", content),
          weight: 700,
          style: "normal",
        },
      ],
    }
  );
}
