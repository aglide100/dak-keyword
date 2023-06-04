package similarity

import "math"

func cosineSimilarity(vec1 []float64, vec2 []float64) float64 {
    var vec1Size float64 = 0.0
    var vec2Size float64 = 0.0

    for _, val := range vec1 {
        vec1Size += val * val
    }
    vec1Size = math.Sqrt(vec1Size)

    for _, val := range vec2 {
        vec2Size += val * val
    }
    vec2Size = math.Sqrt(vec2Size)

    dotProduct := 0.0
    for i, val := range vec1 {
        dotProduct += val * vec2[i]
    }

    return dotProduct / (vec1Size * vec2Size)
}
