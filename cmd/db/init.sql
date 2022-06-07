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

create table if not exists article
(
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
            references job
            on update cascade on delete cascade,
    author          varchar,
    keyword         varchar
);

alter table article
    owner to table_admin;

