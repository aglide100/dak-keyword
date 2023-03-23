package db

func (db *Database) GetSimilarity(jobId string) error {
	const q =`
	WITH article_duplicates AS (
        SELECT n1."Id" AS id1, n2."Id" AS id2, similarity(n1."Content", n2."Content") AS sim, n1."Content", n2."Content"
        FROM article n1
                 JOIN article n2 ON n1."Content" <> n2."Content"
            AND n1."Content" % n2."Content"
            AND n1."Worker_id" = n2."Worker_id"
        WHERE n1."Worker_id" = $1
        ORDER BY n2."Create_at", sim DESC
    ) SELECT id1, id2 FROM article_duplicates`

	rows, err := db.conn.Query(q, jobId)
    if err != nil {
        log.Fatal(err)
    }
    defer rows.Close()

    var res []string
    for rows.Next() {
        var id1, id2 string
        var sim float64
        var content1, content2 string
        err = rows.Scan(&id1, &id2, &sim, &content1, &content2)
        if err != nil {
            log.Fatal(err)
        }
        res = append(res, fmt.Sprintf("%s %s %f %s %s", id1, id2, sim, content1, content2))
    }
    if err := rows.Err(); err != nil {
        log.Fatal(err)
    }

    results <- res
}