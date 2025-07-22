export default function getInitials(name) {
  if (!name) return "";
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
  return initials;
}