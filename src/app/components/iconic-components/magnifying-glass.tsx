export default function MaginifyingGlass({
  className = "",
  size = 0,
  color = "",
}) {
  return (
    <svg
      data-bbox="20 20 160 160"
      viewBox="0 0 200 200"
      height={size}
      width={size}
      xmlns="http://www.w3.org/2000/svg"
      data-type="shape"
      fill={color}
      className={className}
    >
      <g>
        <path d="M176.983 162.412l-43.99-43.99c7.279-10.195 11.605-22.642 11.605-36.123C144.599 47.892 116.706 20 82.299 20S20 47.892 20 82.299s27.892 62.299 62.299 62.299c13.482 0 25.928-4.327 36.123-11.605l43.99 43.99c2.013 2.013 4.647 3.017 7.285 3.017s5.273-1.005 7.285-3.017c4.024-4.026 4.024-10.546.001-14.571zM38.951 82.299c0-23.94 19.408-43.348 43.348-43.348s43.348 19.407 43.348 43.348-19.408 43.348-43.348 43.348-43.348-19.408-43.348-43.348z"></path>
      </g>
    </svg>
  );
}
