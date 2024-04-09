export default function Range(From, To, Step) {
    const OutputRange = []
    for (let Index = From; Index < To; Index += Step) {
        OutputRange.push(Index)
    }
    return OutputRange
}