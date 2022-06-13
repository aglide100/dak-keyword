package models

import (
	pb_unit_article "github.com/aglide100/dak-keyword/pb/unit/article"
)

type Article struct {
	Id string
	Author string
	Keyword string
	Content string
	Platform string
	Score_pos string
	Score_neg string
	Score_neut string
	Score_comp string
	Score_none string
	Score_max_value string
	Score_max_name string
	Job_id string
	Worker_id string	
}

func ArticleToPbUnit(article *Article) (*pb_unit_article.Article) {
	return &pb_unit_article.Article{
		Id: article.Id,
		Author: article.Author,
		Keyword: article.Keyword,
		Content: article.Content,
		Platform: article.Platform,
		ScorePos: article.Score_pos,
		ScoreNeg: article.Score_neg,
		ScoreNeut: article.Score_neut,
		ScoreComp: article.Score_comp,
		ScoreNone: article.Score_none,
		ScoreMaxValue: article.Score_max_value,
		ScoreMaxName: article.Score_max_name,
		JobId: article.Job_id,
		WorkerId: article.Worker_id,
	}
}