//
export function getRefPosition(ref) {
  const position = { top: 0, left: 0 };
  if (!ref || !ref.current) return position;

  return {
    top: ref.current.offsetTop,
    left: ref.current.offsetLeft
  };
}
