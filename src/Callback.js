import { useEffect } from "react";

function Callback() {
  useEffect(() => {
    window.close();
  }, []);

  return <p>Logging you into Spotify...</p>;
}

export default Callback;