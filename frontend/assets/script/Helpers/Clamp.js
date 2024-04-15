export default function Clamp(Value, Min, Max) {
    return Math.min(Math.max(Value, Min), Max)
}