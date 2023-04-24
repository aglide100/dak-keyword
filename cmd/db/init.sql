create table public.job
(
    "Id"        varchar not null
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

create unique index job_id_uindex
    on public.job ("Id");

create table public.worker
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

create unique index worker_id_uindex
    on public.worker ("Worker_id");

create table public.article
(
    "Id"                   serial
        constraint article_pk
            primary key
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

create unique index article_id_uindex
    on public.article ("Id");

create table public.cosine_similarity
(
    id      integer default nextval('tfidf_id_seq'::regclass) not null
        constraint tfidf_pkey
            primary key,
    doc1_id integer                                           not null
        constraint doc1_id
            references public.article
            on update cascade on delete cascade,
    doc2_id integer
        constraint doc2_id
            references public.article
            on update cascade on delete cascade,
    score   double precision                                  not null,
    date    date                                              not null
);

alter table public.cosine_similarity
    owner to table_admin;

create table public.word
(
    id   serial
        primary key,
    text character varying[] not null
        unique,
    date date
);

alter table public.word
    owner to table_admin;

create table public.tfidf
(
    word_id   serial
        constraint word_id
            references public.word
            on update cascade on delete cascade,
    values    double precision[] not null,
    date      date,
    worker_id varchar
        constraint worker_id
            references public.worker
            on update cascade on delete cascade
);

alter table public.tfidf
    owner to table_admin;

