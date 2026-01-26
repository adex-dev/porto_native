--
-- PostgreSQL database cluster dump
--

-- Started on 2026-01-26 16:45:53

SET default_transaction_read_only = off;

SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;

--
-- Roles
--

CREATE ROLE akmad;
ALTER ROLE akmad WITH SUPERUSER INHERIT CREATEROLE CREATEDB LOGIN REPLICATION BYPASSRLS;

--
-- User Configurations
--








--
-- Databases
--

--
-- Database "template1" dump
--

\connect template1

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.14 (Debian 15.14-1.pgdg13+1)
-- Dumped by pg_dump version 17.0

-- Started on 2026-01-26 16:45:54

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

-- Completed on 2026-01-26 16:45:56

--
-- PostgreSQL database dump complete
--

--
-- Database "porto" dump
--

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.14 (Debian 15.14-1.pgdg13+1)
-- Dumped by pg_dump version 17.0

-- Started on 2026-01-26 16:45:56

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3451 (class 1262 OID 16384)
-- Name: porto; Type: DATABASE; Schema: -; Owner: akmad
--

CREATE DATABASE porto WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'en_US.utf8';


ALTER DATABASE porto OWNER TO akmad;

\connect porto

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 215 (class 1259 OID 16402)
-- Name: case_studies_en; Type: TABLE; Schema: public; Owner: akmad
--

CREATE TABLE public.case_studies_en (
    id integer,
    name character varying(100),
    short_description text,
    long_description text,
    tech character varying
);


ALTER TABLE public.case_studies_en OWNER TO akmad;

--
-- TOC entry 216 (class 1259 OID 16407)
-- Name: case_studies_id; Type: TABLE; Schema: public; Owner: akmad
--

CREATE TABLE public.case_studies_id (
    id integer,
    name character varying(100),
    short_description text,
    long_description text,
    tech character varying
);


ALTER TABLE public.case_studies_id OWNER TO akmad;

--
-- TOC entry 214 (class 1259 OID 16388)
-- Name: profile_en; Type: TABLE; Schema: public; Owner: akmad
--

CREATE TABLE public.profile_en (
    id integer NOT NULL,
    name character varying(100),
    greetings text
);


ALTER TABLE public.profile_en OWNER TO akmad;

--
-- TOC entry 218 (class 1259 OID 16419)
-- Name: profile_experience; Type: TABLE; Schema: public; Owner: akmad
--

CREATE TABLE public.profile_experience (
    id integer NOT NULL,
    name character varying(200),
    periode_start character varying,
    period_end character varying,
    gap_years character varying(50),
    descriptions text
);


ALTER TABLE public.profile_experience OWNER TO akmad;

--
-- TOC entry 219 (class 1259 OID 16426)
-- Name: profile_project; Type: TABLE; Schema: public; Owner: akmad
--

CREATE TABLE public.profile_project (
    id integer NOT NULL,
    name character varying(100),
    short_description text,
    long_description text
);


ALTER TABLE public.profile_project OWNER TO akmad;

--
-- TOC entry 220 (class 1259 OID 16433)
-- Name: profile_project_stack; Type: TABLE; Schema: public; Owner: akmad
--

CREATE TABLE public.profile_project_stack (
    id integer NOT NULL,
    id_project integer,
    name character varying,
    stack character varying
);


ALTER TABLE public.profile_project_stack OWNER TO akmad;

--
-- TOC entry 217 (class 1259 OID 16412)
-- Name: profile_stack; Type: TABLE; Schema: public; Owner: akmad
--

CREATE TABLE public.profile_stack (
    id integer NOT NULL,
    name_header character varying,
    stack character varying(100)
);


ALTER TABLE public.profile_stack OWNER TO akmad;

--
-- TOC entry 3452 (class 0 OID 0)
-- Dependencies: 217
-- Name: COLUMN profile_stack.stack; Type: COMMENT; Schema: public; Owner: akmad
--

COMMENT ON COLUMN public.profile_stack.stack IS 'gunakan coma, javascript,html dll';


--
-- TOC entry 3440 (class 0 OID 16402)
-- Dependencies: 215
-- Data for Name: case_studies_en; Type: TABLE DATA; Schema: public; Owner: akmad
--

COPY public.case_studies_en (id, name, short_description, long_description, tech) FROM stdin;
\.


--
-- TOC entry 3441 (class 0 OID 16407)
-- Dependencies: 216
-- Data for Name: case_studies_id; Type: TABLE DATA; Schema: public; Owner: akmad
--

COPY public.case_studies_id (id, name, short_description, long_description, tech) FROM stdin;
\.


--
-- TOC entry 3439 (class 0 OID 16388)
-- Dependencies: 214
-- Data for Name: profile_en; Type: TABLE DATA; Schema: public; Owner: akmad
--

COPY public.profile_en (id, name, greetings) FROM stdin;
\.


--
-- TOC entry 3443 (class 0 OID 16419)
-- Dependencies: 218
-- Data for Name: profile_experience; Type: TABLE DATA; Schema: public; Owner: akmad
--

COPY public.profile_experience (id, name, periode_start, period_end, gap_years, descriptions) FROM stdin;
\.


--
-- TOC entry 3444 (class 0 OID 16426)
-- Dependencies: 219
-- Data for Name: profile_project; Type: TABLE DATA; Schema: public; Owner: akmad
--

COPY public.profile_project (id, name, short_description, long_description) FROM stdin;
\.


--
-- TOC entry 3445 (class 0 OID 16433)
-- Dependencies: 220
-- Data for Name: profile_project_stack; Type: TABLE DATA; Schema: public; Owner: akmad
--

COPY public.profile_project_stack (id, id_project, name, stack) FROM stdin;
\.


--
-- TOC entry 3442 (class 0 OID 16412)
-- Dependencies: 217
-- Data for Name: profile_stack; Type: TABLE DATA; Schema: public; Owner: akmad
--

COPY public.profile_stack (id, name_header, stack) FROM stdin;
\.


--
-- TOC entry 3291 (class 2606 OID 16425)
-- Name: profile_experience profile_experience_pk; Type: CONSTRAINT; Schema: public; Owner: akmad
--

ALTER TABLE ONLY public.profile_experience
    ADD CONSTRAINT profile_experience_pk PRIMARY KEY (id);


--
-- TOC entry 3287 (class 2606 OID 16394)
-- Name: profile_en profile_pk; Type: CONSTRAINT; Schema: public; Owner: akmad
--

ALTER TABLE ONLY public.profile_en
    ADD CONSTRAINT profile_pk PRIMARY KEY (id);


--
-- TOC entry 3293 (class 2606 OID 16432)
-- Name: profile_project profile_project_pk; Type: CONSTRAINT; Schema: public; Owner: akmad
--

ALTER TABLE ONLY public.profile_project
    ADD CONSTRAINT profile_project_pk PRIMARY KEY (id);


--
-- TOC entry 3296 (class 2606 OID 16439)
-- Name: profile_project_stack profile_project_stack_pk; Type: CONSTRAINT; Schema: public; Owner: akmad
--

ALTER TABLE ONLY public.profile_project_stack
    ADD CONSTRAINT profile_project_stack_pk PRIMARY KEY (id);


--
-- TOC entry 3289 (class 2606 OID 16418)
-- Name: profile_stack profile_stack_pk; Type: CONSTRAINT; Schema: public; Owner: akmad
--

ALTER TABLE ONLY public.profile_stack
    ADD CONSTRAINT profile_stack_pk PRIMARY KEY (id);


--
-- TOC entry 3294 (class 1259 OID 16440)
-- Name: profile_project_stack_id_project_idx; Type: INDEX; Schema: public; Owner: akmad
--

CREATE INDEX profile_project_stack_id_project_idx ON public.profile_project_stack USING btree (id_project);


-- Completed on 2026-01-26 16:45:57

--
-- PostgreSQL database dump complete
--

-- Completed on 2026-01-26 16:45:57

--
-- PostgreSQL database cluster dump complete
--

