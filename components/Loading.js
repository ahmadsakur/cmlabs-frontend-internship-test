export default function LoadingScreen() {
  return (
    <div className="fixed top-0 left-0 z-50 w-full h-full bg-opacity-40 bg-black">
      {/*?xml version="1.0" encoding="utf-8"?*/}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{
          margin: "auto",
          display: "block",
          shapeRendering: "auto",
        }}
        width="100vw"
        height="100vh"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle cx={30} cy={50} fill="#6366f1" r={5}>
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="1s"
            keyTimes="0;0.5;1"
            values="45;55;45"
            begin="-0.5s"
          />
        </circle>
        <circle cx={70} cy={50} fill="#a855f7" r={5}>
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="1s"
            keyTimes="0;0.5;1"
            values="45;55;45"
            begin="0s"
          />
        </circle>
        <circle cx={30} cy={50} fill="#ec4899" r={5}>
          <animate
            attributeName="cx"
            repeatCount="indefinite"
            dur="1s"
            keyTimes="0;0.5;1"
            values="45;55;45"
            begin="-0.5s"
          />
          <animate
            attributeName="fill-opacity"
            values="0;0;1;1"
            calcMode="discrete"
            keyTimes="0;0.499;0.5;1"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
        {/* [ldio] generated by https://loading.io/ */}
      </svg>
    </div>
  );
}
