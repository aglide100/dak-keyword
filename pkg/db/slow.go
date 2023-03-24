package db

import (
	"fmt"
)

func (db *Database) GetSimilarity(jobId string) (error) {
	const q =`
	WITH article_duplicates AS (
        SELECT n1."Id" AS id1, n2."Id" AS id2, similarity(n1."Content", n2."Content") AS sim, n1."Content", n2."Content"
        FROM article n1
                 JOIN article n2 ON n1."Content" <> n2."Content"
            AND n1."Content" % n2."Content"
            AND n1."Worker_id" = n2."Worker_id"
        WHERE n1."Worker_id" = $1
        ORDER BY n2."Create_at", sim DESC
    ) 
    DELETE FROM article USING article_duplicates
    WHERE article."Id" = article_duplicates.id1;`

	rows, err := db.Conn.Query(q, jobId)
    if err != nil {
        return err
    }
    defer rows.Close()

    var res []string
    for rows.Next() {
        var id1, id2 string
        var sim float64
        var content1, content2 string
        err = rows.Scan(&id1, &id2, &sim, &content1, &content2)
        if err != nil {
            return err
        }
        res = append(res, fmt.Sprintf("%s %s %f %s %s", id1, id2, sim, content1, content2))
    }
    if err := rows.Err(); err != nil {
        return err
    }

    return nil
}