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
	Score_happy string
	Score_fear string
	Score_embarrassed string
	Score_sad string
	Score_rage string
	Score_hurt string
	Score_max_value string
	Score_max_name string
	Create_at string
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
		ScoreHappy: article.Score_happy,
		ScoreFear: article.Score_fear,
		ScoreEmbarrassed: article.Score_embarrassed,
		ScoreSad: article.Score_sad,
		ScoreRage: article.Score_rage,
		ScoreHurt: article.Score_hurt,
		ScoreMaxValue: article.Score_max_value,
		ScoreMaxName: article.Score_max_name,
		CreateAt: article.Create_at,
		JobId: article.Job_id,
		WorkerId: article.Worker_id,
	}
}