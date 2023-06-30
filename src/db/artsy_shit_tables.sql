-- Database: artsy_shit

-- DROP DATABASE IF EXISTS artsy_shit;

CREATE DATABASE artsy_shit
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Spanish_Spain.1252'
    LC_CTYPE = 'Spanish_Spain.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

-- This script was generated by the ERD tool in pgAdmin 4.
-- Please log an issue at https://redmine.postgresql.org/projects/pgadmin4/issues/new if you find any bugs, including reproduction steps.
BEGIN;


CREATE TABLE IF NOT EXISTS public.creator
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    name character varying(100) COLLATE pg_catalog."default" NOT NULL,
    "createdAt" timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_by bigint NOT NULL DEFAULT 0,
    "updatedAt" timestamp without time zone,
    updated_by bigint DEFAULT 0,
    "deletedAt" timestamp without time zone,
    deleted_by bigint DEFAULT 0,
    CONSTRAINT creator_pkey PRIMARY KEY (id),
    CONSTRAINT unique_creator UNIQUE (name)
);

CREATE TABLE IF NOT EXISTS public.excerpt
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    excerpt character varying(500) COLLATE pg_catalog."default" NOT NULL,
    media bigint NOT NULL,
    "createdAt" timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_by bigint NOT NULL DEFAULT 0,
    "updatedAt" timestamp without time zone,
    updated_by bigint DEFAULT 0,
    "deletedAt" timestamp without time zone,
    deleted_by bigint DEFAULT 0,
    CONSTRAINT excerpt_pkey PRIMARY KEY (id),
    CONSTRAINT unique_excerpt UNIQUE (excerpt)
);

CREATE TABLE IF NOT EXISTS public.media
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    name character varying(200) COLLATE pg_catalog."default" NOT NULL,
    type bigint,
    creator bigint NOT NULL,
    featuring bigint,
    belongs_to bigint,
    "createdAt" timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_by bigint NOT NULL DEFAULT 0,
    "updatedAt" timestamp without time zone,
    updated_by bigint DEFAULT 0,
    "deletedAt" timestamp without time zone,
    deleted_by bigint DEFAULT 0,
    CONSTRAINT media_pkey PRIMARY KEY (id),
    CONSTRAINT unique_creator_media UNIQUE (name, creator, featuring)
);

CREATE TABLE IF NOT EXISTS public.media_type
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    type character varying(100) COLLATE pg_catalog."default" NOT NULL,
    "createdAt" timestamp without time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_by bigint NOT NULL DEFAULT 0,
    "updatedAt" timestamp without time zone,
    updated_by bigint DEFAULT 0,
    "deletedAt" timestamp without time zone,
    deleted_by bigint DEFAULT 0,
    CONSTRAINT media_type_pkey PRIMARY KEY (id),
    CONSTRAINT unique_type UNIQUE (type)
);

ALTER TABLE IF EXISTS public.excerpt
    ADD CONSTRAINT "excerpt_mediaFK" FOREIGN KEY (media)
    REFERENCES public.media (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION;


ALTER TABLE IF EXISTS public.media
    ADD CONSTRAINT "feat_creatorFK" FOREIGN KEY (featuring)
    REFERENCES public.creator (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.media
    ADD CONSTRAINT "media_creatorFK" FOREIGN KEY (creator)
    REFERENCES public.creator (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.media
    ADD CONSTRAINT "media_typeFK" FOREIGN KEY (type)
    REFERENCES public.media_type (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.media
    ADD CONSTRAINT "parent_mediaFK" FOREIGN KEY (belongs_to)
    REFERENCES public.media (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

END;