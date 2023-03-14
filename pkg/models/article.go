package models

import (
	"fmt"
	"time"

	pb_unit_article "github.com/aglide100/dak-keyword/pb/unit/article"
	"github.com/go-playground/validator/v10"
)

var validate *validator.Validate

type Article struct {
	Id string 					`validate:"required"`
	Author string				`validate:"required"`
	Keyword string				`validate:"required"`
	Content string				`validate:"required"`
	Platform string				`validate:"required"`
	Score_happy string			`validate:"gte=-50,lte=50"`
	Score_fear string			`validate:"gte=-50,lte=50"`
	Score_embarrassed string	`validate:"gte=-50,lte=50"`
	Score_sad string			`validate:"gte=-50,lte=50"`
	Score_rage string			`validate:"gte=-50,lte=50"`
	Score_hurt string			`validate:"gte=-50,lte=50"`
	Score_max_value string		`validate:"gte=-50,lte=50"`
	Score_max_name string
	Create_at string			`validate:"required"`
	Job_id string				`validate:"required,uuid"`
	Worker_id string			`validate:"required,uuid"`
}

type ArticleCount struct {
	Create_at_time string
	Count string
	Score_max_name string
}

func ValidateArticle(article *Article) (err error) {
	validate = validator.New()

	const layout = "2006-01-02T03:04:05.999Z"

	_, err = time.Parse(layout, article.Create_at)
	if err != nil {
		fmt.Println(err)
		return err
	}

	err = validate.Struct(article)
	if err != nil {
		if _, ok := err.(*validator.InvalidValidationError); ok {
			fmt.Println(err)
			return err
		}

		for _, err := range err.(validator.ValidationErrors) {
			fmt.Println(err.Namespace())
			fmt.Println(err.Field())
			fmt.Println(err.StructNamespace())
			fmt.Println(err.StructField())
			fmt.Println(err.Tag())
			fmt.Println(err.ActualTag())
			fmt.Println(err.Kind())
			fmt.Println(err.Type())
			fmt.Println(err.Value())
			fmt.Println(err.Param())
			fmt.Println()
		}

	}

	return err
}

func ArticleCountToPbUnit(article *ArticleCount) (*pb_unit_article.ArticleCount) {
	return &pb_unit_article.ArticleCount{
		CreateAtTime: article.Create_at_time,
		Count: article.Count,
		ScoreMaxName: article.Score_max_name,
	}
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