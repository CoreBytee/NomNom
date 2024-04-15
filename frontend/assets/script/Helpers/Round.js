export default function Round(Value, Decimals) {
    return Math.round(Value * Math.pow(10, Decimals)) / Math.pow(10, Decimals)
}