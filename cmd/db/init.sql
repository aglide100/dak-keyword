create table if not exists job
(
    id     varchar not null
        constraint job_pk
            primary key,
    status varchar
);

alter table job
    owner to table_admin;

create unique index if not exists job_id_uindex
    on job (id);

create table if not exists related_keyword_job
(
    job_id  varchar
        constraint job_id
            references job
            on update cascade on delete cascade,
    keyword varchar
);

alter table related_keyword_job
    owner to table_admin;

create unique index if not exists related_keyword_job_keyword_uindex
    on related_keyword_job (keyword);

create unique index if not exists related_keyword_job_job_id_uindex
    on related_keyword_job (job_id);

create table if not exists article
(
    keyword         varchar
        constraint keyword
            references related_keyword_job (keyword)
            on update cascade on delete cascade,
    content         varchar,
    platform        varchar,
    score_pos       integer,
    score_neg       integer,
    score_neut      integer,
    score_comp      integer,
    score_none      integer,
    score_max_value varchar,
    score_max_scroe integer,
    job_id          varchar
        constraint job_id
            references related_keyword_job (job_id)
            on update cascade on delete cascade
);

alter table article
    owner to table_admin;

