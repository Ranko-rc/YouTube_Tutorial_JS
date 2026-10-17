import { useWindowsResize } from ".";

export default function UseWindowResizeTest() {
  const { width, height } = useWindowsResize();

  return (
    <div>
      <h1>Window Resize Test</h1>
      <p>
        Width is {width} 
      </p>
      <p>
        Height is {height}
      </p>
    </div>
  );
}
