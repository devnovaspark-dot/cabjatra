import { ImageResponse } from "next/og";

export const size = {
  width: 48,
  height: 48,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0A2B8C 0%, #001162 50%, #000B3B 100%)",
          borderRadius: "12px",
          border: "2px solid #FEC401",
        }}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Konark Wheel Rim */}
          <circle cx="32" cy="32" r="22" stroke="#F9D468" strokeWidth="3" />
          <circle cx="32" cy="32" r="16" stroke="#FEC401" strokeWidth="1.5" />
          
          {/* 8 Cardinal Spokes */}
          <line x1="32" y1="10" x2="32" y2="54" stroke="#FFF9E6" strokeWidth="2.5" />
          <line x1="10" y1="32" x2="54" y2="32" stroke="#FFF9E6" strokeWidth="2.5" />
          <line x1="16.4" y1="16.4" x2="47.6" y2="47.6" stroke="#F9D468" strokeWidth="2" />
          <line x1="16.4" y1="47.6" x2="47.6" y2="16.4" stroke="#F9D468" strokeWidth="2" />
          
          {/* Inner Golden Center Hub */}
          <circle cx="32" cy="32" r="8" fill="#000B3B" stroke="#FFF9E6" strokeWidth="2" />
          <circle cx="32" cy="32" r="3" fill="#FEC401" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}

