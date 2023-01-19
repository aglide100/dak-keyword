create table if not exists job
(
    "Id"      varchar not null
        constraint job_pk
            primary key,
    "Status"  varchar,
    "Keyword" varchar,
    "Owner"   varchar,
    "Date"    date
);

alter table job
    owner to table_admin;

create unique index if not exists job_id_uindex
    on job ("Id");

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
    "Update_at" timestamp
);

alter table worker
    owner to table_admin;

create unique index if not exists worker_id_uindex
    on worker ("Worker_id");

create table if not exists article
(
    "Id"                serial
        constraint article_pk
            primary key
        unique,
    "Author"            varchar,
    "Keyword"           varchar,
    "Content"           varchar,
    "Platform"          varchar,
    "Score_happy"       varchar,
    "Score_fear"        varchar,
    "Score_embarrassed" varchar,
    "Score_sad"         varchar,
    "Score_rage"        varchar,
    "Score_hurt"        varchar,
    "Score_max_value"   varchar,
    "Score_max_name"    varchar,
    "Create_at"         varchar,
    "Job_id"            varchar
        constraint "Job_id"
            references job
            on update cascade on delete cascade,
    "Worker_id"         varchar
        constraint "Worker_id"
            references worker
            on update cascade on delete cascade
);

alter table article
    owner to table_admin;

create unique index if not exists article_id_uindex
    on article ("Id");

create table if not exists job_article_count
(
    "Job_Id"      varchar not null
        primary key
        constraint "Job_Id"
            references job
            on update cascade on delete cascade,
    "Total_count" integer,
    "Total_neg"   integer,
    "Total_neut"  integer,
    "Total_pos"   integer
);

alter table job_article_count
    owner to table_admin;

