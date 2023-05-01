create table if not exists public.job
(
    "Job_id"    varchar not null
        constraint job_pk
            primary key,
    "Status"    varchar,
    "Keyword"   varchar,
    "Owner"     varchar,
    "Date"      date,
    "AutoReRun" boolean default false
);

alter table public.job
    owner to table_admin;

create unique index if not exists job_id_uindex
    on public.job ("Job_id");

create table if not exists public.worker
(
    "Worker_id" varchar not null
        constraint worker_pk
            primary key,
    "Keyword"   varchar,
    "Status"    varchar,
    "Job_id"    varchar
        constraint "Job_id"
            references public.job
            on update cascade on delete cascade,
    "Update_at" timestamp
);

alter table public.worker
    owner to table_admin;

create unique index if not exists worker_id_uindex
    on public.worker ("Worker_id");

create table if not exists public.article
(
    "Article_id"           integer default nextval('"article_Id_seq"'::regclass) not null
        constraint article_pk
            primary key
        constraint "article_Id_key"
            unique,
    "Author"               varchar,
    "Keyword"              varchar,
    "Content"              varchar,
    "Platform"             varchar,
    "Score_happy"          varchar,
    "Score_fear"           varchar,
    "Score_embarrassed"    varchar,
    "Score_sad"            varchar,
    "Score_rage"           varchar,
    "Score_hurt"           varchar,
    "Score_max_value"      varchar,
    "Score_max_name"       varchar,
    "Create_at"            varchar,
    "Job_id"               varchar
        constraint "Job_id"
            references public.job
            on update cascade on delete cascade,
    "Worker_id"            varchar
        constraint "Worker_id"
            references public.worker
            on update cascade on delete cascade,
    "Preprocessed_content" varchar,
    "Translated_content"   varchar
);

alter table public.article
    owner to table_admin;

create unique index if not exists article_id_uindex
    on public.article ("Article_id");

create table if not exists public.cosine_similarity
(
    id        integer default nextval('tfidf_id_seq'::regclass) not null
        constraint tfidf_pkey
            primary key,
    "Doc1_id" integer                                           not null
        constraint doc1_id
            references public.article
            on update cascade on delete cascade,
    "Doc2_id" integer
        constraint doc2_id
            references public.article
            on update cascade on delete cascade,
    "Score"   double precision                                  not null,
    "Date"    date                                              not null
);

alter table public.cosine_similarity
    owner to table_admin;

create table if not exists public.vocab_list
(
    id           integer default nextval('word_id_seq'::regclass) not null
        constraint word_pkey
            primary key,
    "Words"      character varying[]                              not null
        constraint word_text_key
            unique,
    "Date"       date,
    "Article_id" integer
        constraint article_id
            references public.article
            on update cascade on delete cascade
);

alter table public.vocab_list
    owner to table_admin;

create table if not exists public.tfidf
(
    "Score"      double precision[]                                 not null,
    "Date"       date,
    "Worker_id"  varchar
        constraint worker_id
            references public.worker
            on update cascade on delete cascade,
    "Article_id" integer                                            not null
        constraint article_id
            references public.article
            on update cascade on delete cascade,
    id           integer default nextval('tfidf_id_seq1'::regclass) not null
        constraint tfidf_pkey1
            primary key
        unique,
    "Word_id"    integer
        constraint word_id
            references public.vocab_list
            on update cascade on delete cascade
);

alter table public.tfidf
    owner to table_admin;

