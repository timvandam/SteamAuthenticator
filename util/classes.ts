export default function classes(classes: Record<string, boolean>): string {
	return Object.entries(classes)
		.filter(([style, bool]) => bool)
		.map(([style, bool]) => style)
		.join(' ')
}
