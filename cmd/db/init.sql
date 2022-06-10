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
    "Id"             varchar not null
        constraint worker_pk
            primary key,
    "Keyword"        varchar,
    "Parent_keyword" varchar,
    "Status"         varchar,
    "Job_id"         varchar
        constraint "Job_id"
            references job
            on update cascade on delete cascade
);

alter table worker
    owner to table_admin;

create unique index if not exists worker_id_uindex
    on worker ("Id");

create table if not exists article
(
    "Content"         varchar,
    "Platform"        varchar,
    "Score_pos"       varchar,
    "Score_neg"       varchar,
    "Score_neut"      varchar,
    "Score_comp"      varchar,
    "Score_none"      varchar,
    "Score_max_value" varchar,
    "Score_max_name"  varchar,
    "Job_id"          varchar
        constraint "Job_id"
            references job
            on update cascade on delete cascade,
    "Author"          varchar,
    "Keyword"         varchar,
    "Worker_id"       varchar
        constraint "Worker_id"
            references worker
            on update cascade on delete cascade,
    "Id"              serial
        constraint article_pk
            primary key
);

alter table article
    owner to table_admin;

create unique index if not exists article_id_uindex
    on article ("Id");

