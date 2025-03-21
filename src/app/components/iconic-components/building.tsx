export default function Building({
  size,
  color,
}: {
  size: number;
  color: string;
}) {
  return (
    <svg
      preserveAspectRatio="xMidYMid meet"
      data-bbox="53.245 47.211 93.512 105.578"
      viewBox="53.245 47.211 93.512 105.578"
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      data-type="tint"
      role="presentation"
      aria-hidden="true"
      aria-label=""
    >
      <g>
        <path
          d="M100 47.211L53.245 79.502v10.287H61.5v7h4.104v36.003l6.376-10.255 6.417 10.647V96.789H82.5v-7h7v7h4.104v36.003l6.376-10.255 6.417 10.647V96.789h4.104v-7h7v7h4.104v36.003l6.376-10.255 6.417 10.647V96.789h4.104v-7h8.255V79.501L100 47.211zm-24.604 75.183l-3.376-5.603-3.417 5.495V96.789h6.793v25.605zM79.5 93.789h-15v-4h15v4zm23.896 28.605l-3.376-5.603-3.417 5.495V96.789h6.793v25.605zm4.104-28.605h-15v-4h15v4zm23.896 28.605l-3.376-5.603-3.417 5.495V96.789h6.793v25.605zm4.104-28.605h-15v-4h15v4zm8.255-7h-87.51v-5.713L100 50.856l43.755 30.219v5.714z"
          fill={color}
        ></path>
        <path
          d="M141.5 135.789h-83v7h-5v10h93v-10h-5v-7zm-80 3h77v4h-77v-4zm82 7v4h-87v-4h87z"
          fill={color}
        ></path>
        <path
          d="M93.5 72.289c0 3.584 2.916 6.5 6.5 6.5s6.5-2.916 6.5-6.5-2.916-6.5-6.5-6.5-6.5 2.916-6.5 6.5zm10 0c0 1.93-1.57 3.5-3.5 3.5s-3.5-1.57-3.5-3.5 1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5z"
          fill={color}
        ></path>
      </g>
    </svg>
  );
}
