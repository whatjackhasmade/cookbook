export default function ConditionalWrapper({
	children,
	condition,
	wrapper,
}: {
	children: React.ReactNode;
	condition: boolean;
	wrapper: (children: React.ReactNode) => React.ReactNode;
}) {
	return condition ? wrapper(children) : children;
}
