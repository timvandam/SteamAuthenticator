export default function concatClasses(...styles: unknown[]): string {
	return styles.filter((style) => typeof style === 'string').join(' ')
}
