package db

func (db *Database) GetSimilarity(workerId string) (error) {
	const q =`
	WITH article_duplicates AS (
        SELECT n1."Id" AS id1, n2."Id" AS id2, similarity(n1."Content", n2."Content") AS sim, n1."Content", n2."Content"
        FROM article n1
                 JOIN article n2 ON n1."Content" <> n2."Content"
            AND n1."Content" % n2."Content"
            AND n1."Worker_id" = n2."Worker_id"
        WHERE n1."Worker_id" = $1
        AND similarity(n1."Content", n2."Content") >= 0.8
        ORDER BY n2."Create_at", sim DESC
    )
    DELETE FROM article USING article_duplicates
    WHERE article."Id" = article_duplicates.id1;`

	_, err := db.Conn.Query(q, workerId)
    if err != nil {
        return err
    }

    return nil
}