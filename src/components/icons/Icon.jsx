const paths = {
  mail: (
    <>
      <rect x="2.5" y="4.5" width="19" height="15" rx="1" />
      <path d="M3.5 6l8.5 7 8.5-7" />
    </>
  ),
  phone: (
    <path d="M6.5 3.5c1 0 1.4.3 1.7 1l1 2.4c.3.7.1 1.5-.4 2L7.5 10c.9 2.6 2.9 4.6 5.5 5.5l1.1-1.3c.5-.5 1.3-.7 2-.4l2.4 1c.7.3 1 .7 1 1.7v2c0 1-.8 1.8-1.8 1.8C10.8 20.3 4.2 13.7 4.2 6.8 4.2 5.3 5 4.5 6 4.5h.5z" />
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="1.5" />
      <path d="M7.8 10v7M7.8 7.2v.01M12 17v-4c0-1.5.9-2.5 2.2-2.5 1.3 0 1.8 1 1.8 2.5V17M12 13v4" />
    </>
  ),
  github: (
    <path d="M12 2.5c-5.2 0-9.5 4.3-9.5 9.6 0 4.2 2.7 7.8 6.5 9.1.5.1.6-.2.6-.5v-1.9c-2.6.6-3.2-1.2-3.2-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.4-1.1.6-1.4-2.1-.2-4.3-1-4.3-4.6 0-1 .4-1.8 1-2.5-.1-.2-.4-1.2.1-2.6 0 0 .8-.3 2.7 1a9.1 9.1 0 0 1 4.9 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.6.6.7 1 1.5 1 2.5 0 3.6-2.2 4.4-4.3 4.6.3.3.6.9.6 1.9v2.8c0 .3.2.6.6.5 3.8-1.3 6.5-4.9 6.5-9.1 0-5.3-4.3-9.6-9.5-9.6z" />
  ),
  arrowUpRight: <path d="M7 17 17 7M9 7h8v8" />,
  arrowUp: <path d="M12 19V5M6 11l6-6 6 6" />,
  lock: (
    <>
      <rect x="5.5" y="10.5" width="13" height="9" rx="1.2" />
      <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21.5s6.5-6.2 6.5-11.2a6.5 6.5 0 1 0-13 0c0 5 6.5 11.2 6.5 11.2z" />
      <circle cx="12" cy="10.2" r="2.2" />
    </>
  ),
  book: (
    <>
      <path d="M4 5.2c2.3-1.1 5-1.1 8 0v14c-3-1.1-5.7-1.1-8 0V5.2z" />
      <path d="M20 5.2c-2.3-1.1-5-1.1-8 0v14c3-1.1 5.7-1.1 8 0V5.2z" />
    </>
  ),
  flask: (
    <>
      <path d="M10 3h4M10 3v5.5L5.6 17a2 2 0 0 0 1.8 2.9h9.2a2 2 0 0 0 1.8-2.9L14 8.5V3" />
      <path d="M8.2 14.5h7.6" />
    </>
  ),
  ball: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5 15.8 10l-1.5 4.4h-4.6L8.2 10zM12 7.5V4M14.3 14.4l2.9 2.3M9.7 14.4l-2.9 2.3M5.6 9l-2.3-.9M18.4 9l2.3-.9" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3z" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.5v2.4M12 19.1v2.4M4.5 12H2.1M21.9 12h-2.4M5.8 5.8l1.7 1.7M16.5 16.5l1.7 1.7M18.2 5.8l-1.7 1.7M7.5 16.5l-1.7 1.7" />
    </>
  ),
  moon: <path d="M20 13.8A8.2 8.2 0 1 1 10.2 4a6.6 6.6 0 0 0 9.8 9.8z" />,
  play: <path d="M9 7.2v9.6l8-4.8-8-4.8z" />,
  chevronDown: <path d="M5 8.5 12 15l7-6.5" />,
  menu: (
    <>
      <rect x="4.5" y="4.5" width="6" height="6" />
      <rect x="13.5" y="4.5" width="6" height="6" />
      <rect x="4.5" y="13.5" width="6" height="6" />
      <rect x="13.5" y="13.5" width="6" height="6" />
    </>
  ),
  close: <path d="M6 6l12 12M18 6 6 18" />,
  upload: (
    <>
      <path d="M12 15.5V4M7.5 8.5 12 4l4.5 4.5" />
      <path d="M4.5 15.5v3a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-3" />
    </>
  ),
}

export function Icon({ name, size = 18, strokeWidth = 1.6, className = '' }) {
  const path = paths[name]
  if (!path) return null
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {path}
    </svg>
  )
}
