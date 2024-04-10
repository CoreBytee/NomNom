export default function EaseOutCirc(x) {
    return Math.sqrt(1 - Math.pow(x - 1, 2));
}