import { lazy, Suspense } from "react";

const Earth = lazy(() => import("./Earth"));
const Ball = lazy(() => import("./Ball"));
const Computers = lazy(() => import("./Computers"));
const Stars = lazy(() => import("./Stars"));

const EarthCanvas = (props) => (
  <Suspense fallback={null}>
    <Earth {...props} />
  </Suspense>
);

const BallCanvas = (props) => (
  <Suspense fallback={null}>
    <Ball {...props} />
  </Suspense>
);

const ComputersCanvas = (props) => (
  <Suspense fallback={null}>
    <Computers {...props} />
  </Suspense>
);

const StarsCanvas = (props) => (
  <Suspense fallback={null}>
    <Stars {...props} />
  </Suspense>
);

export { EarthCanvas, BallCanvas, ComputersCanvas, StarsCanvas };
