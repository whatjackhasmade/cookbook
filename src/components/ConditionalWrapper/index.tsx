export default function ConditionalWrapper({
  children,
  condition,
  wrapper,
}: {
  children: React.ReactElement;
  condition: boolean;
  wrapper: (children: React.ReactElement) => React.ReactElement;
}): React.ReactElement {
  return condition ? wrapper(children) : children;
}
