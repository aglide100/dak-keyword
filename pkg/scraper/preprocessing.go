package scraper

import (
	"regexp"
	"unicode"
	"unicode/utf8"
)

func Preprocessing(text string) string {
	var validRunes []rune

    for _, r := range text {
        if unicode.IsLetter(r) || unicode.IsNumber(r) || unicode.IsSpace(r) || unicode.IsPunct(r) {
            validRunes = append(validRunes, r)
        }
    }

	content := string(validRunes)
	// remove URL
	regex := regexp.MustCompile(`(?i)(http|https|ftp|ftps)\://[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(/\S*)?`)
	content = regex.ReplaceAllString(content, "")

	// remove hash tag
	regex = regexp.MustCompile(`#(\S+)`)
    content = regex.ReplaceAllString(content, "")
	
	// remove other character
	regex = regexp.MustCompile(`[^\p{Hangul}\s]+`)
	content = regex.ReplaceAllString(content, "")

	// remove space
	regex = regexp.MustCompile(`\s+`)
    content = regex.ReplaceAllString(content, "")
	
	return content
}

func GetTextLength(text string) int {
	return utf8.RuneCountInString(text)
}