import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'VBWEB, Consultant SEO à Rennes'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#1A2C45',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Glow effect */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(78,186,236,0.12) 0%, transparent 70%)',
          }}
        />

        {/* Logo icon */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 80,
            height: 80,
            borderRadius: 20,
            background: '#4EBAEC',
            marginBottom: 32,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            width={40}
            height={40}
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
          </svg>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: 'white',
            textAlign: 'center',
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
          }}
        >
          VBWEB
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 24,
            color: '#4EBAEC',
            marginTop: 16,
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase' as const,
          }}
        >
          Consultant SEO a Rennes
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: 18,
            color: 'rgba(255,255,255,0.45)',
            marginTop: 20,
            textAlign: 'center',
            maxWidth: 600,
            lineHeight: 1.5,
          }}
        >
          Referencement naturel, creation de sites & applications web
        </div>

        {/* Bottom bar */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: 'linear-gradient(90deg, transparent, #4EBAEC, transparent)',
          }}
        />
      </div>
    ),
    { ...size }
  )
}
