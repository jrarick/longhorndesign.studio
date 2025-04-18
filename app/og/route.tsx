import { ImageResponse } from "next/og";
import { loadGoogleFont } from "./load-google-font";

export async function GET(request: Request) {
  let url = new URL(request.url);
  let title = url.searchParams.get("title") || "Longhorn Design Studio";

  return new ImageResponse(
    (
      <div
        tw="flex flex-col w-full h-full items-center justify-center px-8"
        style={{
          backgroundColor: "#0c0a09",
        }}
      >
        <div tw="flex flex-col w-full pt-12 md:items-center justify-between max-w-1/2">
          <h2
            tw="flex flex-col text-4xl tracking-tight"
            style={{
              color: "#ffe09e",
            }}
          >
            {title}
          </h2>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Lora",
          data: await loadGoogleFont("Lora", title),
          weight: 700,
          style: "normal",
        },
      ],
    }
  );
}
