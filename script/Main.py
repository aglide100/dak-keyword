import pandas as pd
from konlpy.tag import Kkma
import re
from Data import Collector

def preprocessing(text):
    text = text.rstrip().lstrip()
    return re.sub('[/[\{\}\[\]\/?|\)*~`!\-_+<>@\#$%&\\\=\(\'\"]+', '', text)


def get_score_from_chunks(chunks, lexicons):
    print(chunks)
    scores = {'POS': 0, 'NEG': 0, 'NEUT': 0, 'COMP': 0, 'None': 0}
    for chunk in chunks:
        for index, row in lexicons.iterrows():
            if row['ngram'] in chunk:
                scores[row['max.value']] += row['max.prop']
            
    return scores_to_percentiles(scores)

def scores_to_percentiles(scores):
    
    sum_of_scores = sum(scores.values())

    for category in scores:
        # print(category)
        # print(sum_of_scores)
        scores[category] = scores[category] / sum_of_scores

    return scores

def analyze_sentences_into_chunks(sentences):
    kkma = Kkma()
    analyzed_words = []

    for str in sentences:
        str = preprocessing(str)
        analyzed_str = kkma.pos(str)
        tmp_arr = []

        for word in analyzed_str:
            tmp_arr.append("/".join(word))
        analyzed_words.append(";".join(tmp_arr))

    return analyzed_words

def analyze_sentence_from_array(sentences):
    lexicon_dictionary = pd.read_csv('lexicon/polarity.csv')

    for str in sentences:
        print(str)

        word_chunks = analyze_sentences_into_chunks(str)
        # print("word_chunks: ", word_chunks)
        categorized_scores = get_score_from_chunks(word_chunks, lexicon_dictionary)
        # print("categorized_scores: ", categorized_scores)

        print(categorized_scores)
    return 

raw_data = Collector.get_mock_raw_data()
# print(raw_data)

analyze_sentence_from_array(raw_data)


# print(categorized_scores)