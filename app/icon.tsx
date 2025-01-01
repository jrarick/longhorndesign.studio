import { ImageResponse } from "next/og";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

async function loadGoogleFont(font: string, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${font}&text=${encodeURIComponent(
    text
  )}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/
  );

  if (resource) {
    const response = await fetch(resource[1]);
    if (response.status == 200) {
      return await response.arrayBuffer();
    }
  }

  throw new Error("failed to load font data");
}

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
