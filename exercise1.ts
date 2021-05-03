export function quarterOf(month: number): number {
    return month < 4 ? 1 : month < 7 ? 2 : month < 10 ? 3 : 4
}