create table if not exists job
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

alter table job
    owner to table_admin;

create unique index if not exists job_id_uindex
    on job ("Job_id");

create table if not exists worker
(
    "Worker_id" varchar not null
        constraint worker_pk
            primary key,
    "Keyword"   varchar,
    "Status"    varchar,
    "Job_id"    varchar
        constraint "Job_id"
            references job
            on update cascade on delete cascade,
    "Update_at" timestamp,
    "Create_at" timestamp
);

alter table worker
    owner to table_admin;

create unique index if not exists worker_id_uindex
    on worker ("Worker_id");

create table if not exists article
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
            references job
            on update cascade on delete cascade,
    "Worker_id"            varchar
        constraint "Worker_id"
            references worker
            on update cascade on delete cascade,
    "Preprocessed_content" varchar,
    "Translated_content"   varchar
);

alter table article
    owner to table_admin;

create unique index if not exists article_id_uindex
    on article ("Article_id");

create table if not exists vocab_list
(
    id          integer default nextval('word_id_seq'::regclass) not null
        constraint word_pkey
            primary key,
    "Words"     varchar(500)[]                                   not null,
    "Worker_id" varchar
        unique
        constraint "Worker_id"
            references worker
            on update cascade on delete cascade,
    "Job_id"    varchar
        constraint "Job_id"
            references job
            on update cascade on delete cascade
);

alter table vocab_list
    owner to table_admin;

create table if not exists tfidf
(
    "Worker_id"    varchar
        constraint worker_id
            references worker
            on update cascade on delete cascade,
    "Article_id"   integer                                            not null
        unique
        constraint article_id
            references article
            on update cascade on delete cascade,
    "Vocab_column" integer[],
    "Score"        double precision[],
    id             integer default nextval('tfidf_id_seq1'::regclass) not null
        constraint tfidf_pkey1
            primary key
        unique,
    "Vocab_id"     integer
        constraint vocab_id
            references vocab_list
            on update cascade on delete cascade
);

alter table tfidf
    owner to table_admin;

create table if not exists cosine_similarity
(
    id          integer default nextval('cosine_similarity_id_seq'::regclass) not null
        constraint tfidf_pkey
            primary key
        unique,
    "Worker_id" varchar
        unique
        constraint "Worker_id"
            references worker
            on update cascade on delete cascade,
    "Column_id" integer[],
    "Score"     double precision[],
    "Row_id"    integer[],
    "Job_id"    varchar
        constraint "Job_id"
            references job
            on update cascade on delete cascade
);

alter table cosine_similarity
    owner to table_admin;

