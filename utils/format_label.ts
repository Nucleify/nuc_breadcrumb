export const format_label = (segment: string) => {
  return segment.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}
