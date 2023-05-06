package matrix

func SparseMatrixFloat64(n int, m int, array [][]float64) ([]int, []int, []float64) {
	row := make([]int, 0, n*m)
	column := make([]int, 0, n*m)
	value := make([]float64, 0, n*m)

	i := 0
	for i < n {
		j := 0
		for j < m {
			if array[i][j] != 0 {
				row = append(row, i)
				column = append(column, j)
				value = append(value, array[i][j])
			}
			j++
		}
		i++
	}

	return row, column, value
}

func SparseMatrixFloat32(n int, m int, array [][]float32) ([]int, []int, []float32) {
	row := make([]int, 0, n*m)
	column := make([]int, 0, n*m)
	value := make([]float32, 0, n*m)

	i := 0
	for i < n {
		j := 0
		for j < m {
			if array[i][j] != 0 {
				row = append(row, i)
				column = append(column, j)
				value = append(value, array[i][j])
			}
			j++
		}
		i++
	}

	return row, column, value
}