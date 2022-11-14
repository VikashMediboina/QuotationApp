--
-- PostgreSQL database dump
--

-- Dumped from database version 15.0
-- Dumped by pg_dump version 15.0

-- Started on 2022-11-14 18:56:41 EST

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE "QuotationDB";
--
-- TOC entry 3759 (class 1262 OID 16390)
-- Name: QuotationDB; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE "QuotationDB" WITH TEMPLATE = template0 ;


ALTER DATABASE "QuotationDB" OWNER TO postgres;

\connect "QuotationDB"

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2 (class 3079 OID 16528)
-- Name: pgcrypto; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS pgcrypto WITH SCHEMA public;


--
-- TOC entry 3760 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION pgcrypto; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION pgcrypto IS 'cryptographic functions';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 215 (class 1259 OID 16391)
-- Name: address; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.address (
    address_id numeric NOT NULL,
    address_type character varying(2),
    address_category character varying(10),
    category_key numeric,
    address_1 character varying(250),
    address_2 character varying(250),
    address_3 character varying(250),
    city character varying(50),
    state character varying(25),
    country character varying,
    start_date date,
    stop_date date,
    inserted_by character varying(50),
    inserted_date timestamp without time zone,
    updated_by character varying(50),
    updated_date timestamp without time zone,
    pin_code numeric
);


ALTER TABLE public.address OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 16479)
-- Name: catogeries; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.catogeries (
    catogerie_id numeric NOT NULL,
    catogerie_title character varying(50),
    catogerie_desc character varying(1000),
    inserted_by character varying(50),
    inserted_date timestamp without time zone,
    updated_by character varying(50),
    updated_date timestamp without time zone
);


ALTER TABLE public.catogeries OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16398)
-- Name: company_dtl; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.company_dtl (
    company_id numeric NOT NULL,
    company_code character varying(25) NOT NULL,
    company_name character varying(250),
    location character varying(50),
    inserted_by character varying(50),
    inserted_date timestamp without time zone,
    updated_by character varying(50),
    updated_date timestamp without time zone
);


ALTER TABLE public.company_dtl OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 16486)
-- Name: customer; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.customer (
    customer_id numeric NOT NULL,
    address_id numeric NOT NULL,
    customer_name character varying(250),
    customer_email character varying(150) NOT NULL,
    customer_phone_number character varying(12) NOT NULL,
    customer_alt_phone_number character varying(12),
    inserted_by character varying(50),
    inserted_date timestamp without time zone,
    updated_by character varying(50),
    updated_date timestamp without time zone,
    cust_profile character varying,
    cust_status character varying(10)
);


ALTER TABLE public.customer OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16405)
-- Name: employee; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.employee (
    employee_id numeric NOT NULL,
    employee_code character varying(25) NOT NULL,
    employee_name character varying(50),
    employee_email character varying(150) NOT NULL,
    employee_phone_number character varying(150) NOT NULL,
    birth_date date,
    gender character(1),
    past_exp character varying(1000),
    emp_status character varying(10),
    emp_type character varying(2),
    reporting_to numeric,
    inserted_by character varying(50),
    inserted_date timestamp without time zone,
    updated_by character varying(50),
    updated_date timestamp without time zone
);


ALTER TABLE public.employee OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 16438)
-- Name: employment; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.employment (
    employment_id numeric NOT NULL,
    employee_id numeric,
    company_id numeric,
    job_code character varying(50),
    start_date date,
    stop_date date,
    inserted_by character varying(50),
    inserted_date timestamp without time zone,
    updated_by character varying(50),
    updated_date timestamp without time zone
);


ALTER TABLE public.employment OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16412)
-- Name: line_item; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.line_item (
    line_item_id numeric NOT NULL,
    room_type character varying(50),
    line_item_title character varying(50),
    line_item_desc character varying(1000),
    unit_price numeric(18,2),
    inserted_by character varying(50),
    inserted_date timestamp without time zone,
    updated_by character varying(50),
    updated_date timestamp without time zone,
    tax_type character varying(20)
);


ALTER TABLE public.line_item OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 16499)
-- Name: login; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.login (
    login_id numeric NOT NULL,
    email character varying(50) NOT NULL,
    employee_id numeric NOT NULL,
    password character varying(1000) NOT NULL,
    inserted_by character varying(50),
    inserted_date timestamp with time zone,
    updated_by character varying(50),
    updated_date time with time zone,
    access json,
    emp_status character varying(10)
);


ALTER TABLE public.login OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16419)
-- Name: main_item; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.main_item (
    main_item_id numeric NOT NULL,
    room_type character varying(50),
    main_item_title character varying(50),
    main_item_desc character varying(1000),
    unit_price numeric(18,2),
    inserted_by character varying(50),
    inserted_date timestamp without time zone,
    updated_by character varying(50),
    updated_date timestamp without time zone,
    main_item_depth numeric(18,2),
    tax_type character varying(20)
);


ALTER TABLE public.main_item OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 16467)
-- Name: quotation; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.quotation (
    quotation_id numeric NOT NULL,
    quotation_code character varying(25),
    shop_detail_id numeric,
    address_1 character varying(250),
    address_2 character varying(250),
    address_3 character varying(250),
    city character varying(50),
    state character varying(25),
    quotation_date date,
    gene_by numeric,
    shop_manager_id numeric,
    lead_by numeric,
    reference character varying(50),
    mobile_1 numeric,
    mobile_2 numeric,
    mail_id character varying(50),
    quot_status character varying(25),
    inserted_by character varying(50),
    inserted_date timestamp without time zone,
    updated_by character varying(50),
    updated_date timestamp without time zone,
    customer_id numeric,
    customer_name character varying,
    pin_code numeric,
    lead_by_name character varying,
    country character varying(30)
);


ALTER TABLE public.quotation OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16426)
-- Name: quotation_line_item; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.quotation_line_item (
    quotation_id numeric NOT NULL,
    seq_no numeric NOT NULL,
    line_seq_no numeric NOT NULL,
    line_item_id numeric,
    line_item_title character varying(50),
    line_item_desc character varying(1000),
    length numeric(6,2),
    height numeric(6,2),
    depth numeric(6,2),
    tot_area numeric(6,2),
    quantity numeric,
    org_unit_price numeric(18,2),
    unit_price numeric(18,2),
    tot_price numeric(18,2),
    disc_price numeric(18,2),
    net_price numeric(18,2),
    cgst numeric(18,2),
    sgst numeric(18,2),
    igst numeric(18,2),
    inserted_by character varying(50),
    inserted_date timestamp without time zone,
    updated_by character varying(50),
    updated_date timestamp without time zone,
    tax_type character varying(20),
    room_type character varying(30)
);


ALTER TABLE public.quotation_line_item OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16431)
-- Name: quotation_main_item; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.quotation_main_item (
    quotation_id numeric NOT NULL,
    seq_no numeric NOT NULL,
    main_item_id numeric,
    room_type character varying(30),
    main_item_title character varying(50),
    main_item_desc character varying(1000),
    length numeric(6,2),
    height numeric(6,2),
    depth numeric(6,2),
    tot_area numeric(6,2),
    quantity numeric,
    org_unit_price numeric(18,2),
    unit_price numeric(18,2),
    tot_price numeric(18,2),
    disc_price numeric(18,2),
    net_price numeric(18,2),
    cgst numeric(18,2),
    sgst numeric(18,2),
    igst numeric(18,2),
    inserted_by character varying(50),
    inserted_date timestamp without time zone,
    updated_by character varying(50),
    updated_date timestamp without time zone,
    main_item_depth numeric(18,2),
    tax_type character varying(20)
);


ALTER TABLE public.quotation_main_item OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 16455)
-- Name: shop_detail; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.shop_detail (
    shop_detail_id numeric NOT NULL,
    shop_code character varying(25),
    shop_name character varying(50),
    manager_id numeric,
    inserted_by character varying(50),
    inserted_date timestamp without time zone,
    updated_by character varying(50),
    updated_date timestamp without time zone
);


ALTER TABLE public.shop_detail OWNER TO postgres;

--
-- TOC entry 3741 (class 0 OID 16391)
-- Dependencies: 215
-- Data for Name: address; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.address (address_id, address_type, address_category, category_key, address_1, address_2, address_3, city, state, country, start_date, stop_date, inserted_by, inserted_date, updated_by, updated_date, pin_code) FROM stdin;
0	\N	\N	\N	katiki street			kashinagar	odisha	India	\N	\N	0	2022-11-14 04:32:04.586	\N	\N	\N
1	\N	\N	\N	katiki street			kashinagar	odisha	India	\N	\N	0	2022-11-14 04:33:42.957	\N	\N	761206
2	\N	\N	\N	katiki street			kashinagar	odisha	India	\N	\N	0	2022-11-14 04:34:33.088	\N	\N	761206
3	\N	\N	\N	Katiki Street, Gajapathi District			Kashinagar	Odisha	India	\N	\N	0	2022-11-14 10:37:17.305	\N	\N	761206
\.


--
-- TOC entry 3751 (class 0 OID 16479)
-- Dependencies: 225
-- Data for Name: catogeries; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.catogeries (catogerie_id, catogerie_title, catogerie_desc, inserted_by, inserted_date, updated_by, updated_date) FROM stdin;
0	Kitchen	Kitchen	0	2022-11-14 04:36:12.864	\N	\N
\.


--
-- TOC entry 3742 (class 0 OID 16398)
-- Dependencies: 216
-- Data for Name: company_dtl; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.company_dtl (company_id, company_code, company_name, location, inserted_by, inserted_date, updated_by, updated_date) FROM stdin;
0	Rochan	Rochan Ltd	HYDERABAD	SYSTEM	2022-11-12 19:07:31.449	\N	\N
\.


--
-- TOC entry 3752 (class 0 OID 16486)
-- Dependencies: 226
-- Data for Name: customer; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.customer (customer_id, address_id, customer_name, customer_email, customer_phone_number, customer_alt_phone_number, inserted_by, inserted_date, updated_by, updated_date, cust_profile, cust_status) FROM stdin;
0	2	mediboin vikash	vikash.mediboina@gmail.com	09100556285	09100556285	0	2022-11-14 04:34:33.088	\N	\N	na	ACTIVE
1	3	Mediboina Guravaji	kurma.mediboina@gmail.com	09100556285	437658870	0	2022-11-14 10:37:17.305	\N	2022-11-14 10:42:00.012	na	NOT ACTIVE
\.


--
-- TOC entry 3743 (class 0 OID 16405)
-- Dependencies: 217
-- Data for Name: employee; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.employee (employee_id, employee_code, employee_name, employee_email, employee_phone_number, birth_date, gender, past_exp, emp_status, emp_type, reporting_to, inserted_by, inserted_date, updated_by, updated_date) FROM stdin;
1	234	mediboin vikash	vikash.mediboina@gmail.com	09100556285	\N	\N	\N	ACTIVE	\N	0	0	2022-11-14 10:43:23.353	\N	2022-11-14 10:43:32.644
0	0	SYSTEM	system@rochana.com	9100556285	\N	\N	\N	ACTIVE	\N	0	SYSTEM	2022-11-12 19:09:31.849	0	2022-11-14 18:33:05.419
2	1	admin	admin@rochana.com	09100556285	\N	\N	\N	ACTIVE	\N	2	0	2022-11-14 18:19:56.683	0	2022-11-14 18:41:18.27
\.


--
-- TOC entry 3748 (class 0 OID 16438)
-- Dependencies: 222
-- Data for Name: employment; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.employment (employment_id, employee_id, company_id, job_code, start_date, stop_date, inserted_by, inserted_date, updated_by, updated_date) FROM stdin;
1	1	0	ShopManager	2022-11-14	\N	0	2022-11-14 10:43:23.353	\N	\N
0	0	0	admin	2022-11-14	\N	SYSTEM	2022-11-12 19:09:31.849	0	2022-11-14 18:33:05.419
2	2	0	MD	2022-11-14	\N	0	2022-11-14 18:19:56.683	0	2022-11-14 18:41:18.27
\.


--
-- TOC entry 3744 (class 0 OID 16412)
-- Dependencies: 218
-- Data for Name: line_item; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.line_item (line_item_id, room_type, line_item_title, line_item_desc, unit_price, inserted_by, inserted_date, updated_by, updated_date, tax_type) FROM stdin;
0	Kitchen	Line 1	Line Desc	2000.00	0	2022-11-14 04:37:23.445	\N	\N	type_1
\.


--
-- TOC entry 3753 (class 0 OID 16499)
-- Dependencies: 227
-- Data for Name: login; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.login (login_id, email, employee_id, password, inserted_by, inserted_date, updated_by, updated_date, access, emp_status) FROM stdin;
1	vikash.mediboina@gmail.com	1	$2a$06$q2yBthhpkfz1VZ2JcKPKy.ndranc1MAcakiyNOLOEunjz/kDQkVdy	0	2022-11-14 10:43:23.353-05	\N	\N	{"q_add":false,"q_edit":true,"q_view":true,"q_delete":false,"c_add":false,"c_edit":false,"c_view":true,"c_delete":false,"company_add":false,"company_edit":false,"company_view":true,"company_delete":false,"emp_add":false,"emp_edit":true,"emp_view":true,"emp_delete":false,"cat_add":false,"cat_edit":false,"cat_view":false,"cat_delete":false,"main_add":false,"main_edit":false,"main_view":false,"main_delete":false,"line_add":false,"line_edit":false,"line_view":false,"line_delete":false}	ACTIVE
0	system@rochana.com	0	$2a$06$Z2u2BHQPVdJa8b923wi61ehxsa7e5dZn8ttaOlXvLvTdC17ghevCG	SYSTEM	2022-11-12 19:09:31.849-05	\N	\N	{"q_add":true,"q_edit":true,"q_view":true,"q_delete":true,"c_add":true,"c_edit":true,"c_view":true,"c_delete":true,"company_add":true,"company_edit":true,"company_view":true,"company_delete":true,"emp_add":true,"emp_edit":true,"emp_view":true,"emp_delete":true,"cat_add":true,"cat_edit":true,"cat_view":true,"cat_delete":true,"main_add":true,"main_edit":true,"main_view":true,"main_delete":true,"line_add":true,"line_edit":true,"line_view":true,"line_delete":true}	ACTIVE
2	admin@rochana.com	2	$2a$06$Dw1Flf0boP7gk7nUPyqb.uItCmAWt/4Oj.hOnOLFc.HIdWIIUkrJe	0	2022-11-14 18:19:56.683-05	\N	\N	{"q_add":true,"q_edit":true,"q_view":true,"q_delete":true,"c_add":true,"c_edit":true,"c_view":true,"c_delete":true,"company_add":true,"company_edit":true,"company_view":true,"company_delete":true,"emp_add":true,"emp_edit":true,"emp_view":true,"emp_delete":true,"cat_add":true,"cat_edit":true,"cat_view":true,"cat_delete":true,"main_add":true,"main_edit":true,"main_view":true,"main_delete":true,"line_add":true,"line_edit":true,"line_view":true,"line_delete":true}	ACTIVE
\.


--
-- TOC entry 3745 (class 0 OID 16419)
-- Dependencies: 219
-- Data for Name: main_item; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.main_item (main_item_id, room_type, main_item_title, main_item_desc, unit_price, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) FROM stdin;
0	Kitchen	item 1	item	2000.00	0	2022-11-14 04:36:59.451	\N	\N	200.00	type_1
\.


--
-- TOC entry 3750 (class 0 OID 16467)
-- Dependencies: 224
-- Data for Name: quotation; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name, country) FROM stdin;
0	0	\N	Katiki Street, Gajapathi District			Visakhapatnam	Andhra Pradesh	2022-11-14	\N	0	0	\N	9100556285	\N	vikash.mediboina@gmail.com	Active	0	2022-11-14 04:35:06.669	0	2022-11-14 11:14:01.28	0	mediboin vikash	530003	SYSTEM	India
\.


--
-- TOC entry 3746 (class 0 OID 16426)
-- Dependencies: 220
-- Data for Name: quotation_line_item; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.quotation_line_item (quotation_id, seq_no, line_seq_no, line_item_id, line_item_title, line_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, tax_type, room_type) FROM stdin;
0	0	0	0	Line 1	Line Desc	\N	\N	\N	\N	1	0.00	2000.00	2000.00	0.00	2000.00	\N	\N	0.00	0	2022-11-14 09:37:49.117	\N	\N	type_1	Kitchen
\.


--
-- TOC entry 3747 (class 0 OID 16431)
-- Dependencies: 221
-- Data for Name: quotation_main_item; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.quotation_main_item (quotation_id, seq_no, main_item_id, room_type, main_item_title, main_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) FROM stdin;
0	0	0	Kitchen	item 1	item	1.00	\N	200.00	1.00	1	0.00	2000.00	2000.00	0.00	2000.00	\N	\N	0.00	0	2022-11-14 09:37:40.124	\N	\N	200.00	type_1
\.


--
-- TOC entry 3749 (class 0 OID 16455)
-- Dependencies: 223
-- Data for Name: shop_detail; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.shop_detail (shop_detail_id, shop_code, shop_name, manager_id, inserted_by, inserted_date, updated_by, updated_date) FROM stdin;
\.


--
-- TOC entry 3546 (class 2606 OID 16397)
-- Name: address address_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.address
    ADD CONSTRAINT address_pk PRIMARY KEY (address_id);


--
-- TOC entry 3577 (class 2606 OID 16612)
-- Name: catogeries cat_title_uniq; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.catogeries
    ADD CONSTRAINT cat_title_uniq UNIQUE (catogerie_title);


--
-- TOC entry 3579 (class 2606 OID 16485)
-- Name: catogeries catogerie_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.catogeries
    ADD CONSTRAINT catogerie_pk PRIMARY KEY (catogerie_id);


--
-- TOC entry 3548 (class 2606 OID 16404)
-- Name: company_dtl company_dtl_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.company_dtl
    ADD CONSTRAINT company_dtl_pk PRIMARY KEY (company_id);


--
-- TOC entry 3581 (class 2606 OID 16492)
-- Name: customer customer_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer
    ADD CONSTRAINT customer_pk PRIMARY KEY (customer_id);


--
-- TOC entry 3550 (class 2606 OID 16527)
-- Name: employee employee_employee_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employee
    ADD CONSTRAINT employee_employee_email_key UNIQUE (employee_email);


--
-- TOC entry 3552 (class 2606 OID 16411)
-- Name: employee employee_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employee
    ADD CONSTRAINT employee_pk PRIMARY KEY (employee_id);


--
-- TOC entry 3569 (class 2606 OID 16444)
-- Name: employment employment_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employment
    ADD CONSTRAINT employment_pk PRIMARY KEY (employment_id);


--
-- TOC entry 3555 (class 2606 OID 16418)
-- Name: line_item line_item_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.line_item
    ADD CONSTRAINT line_item_pk PRIMARY KEY (line_item_id);


--
-- TOC entry 3584 (class 2606 OID 16505)
-- Name: login login_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.login
    ADD CONSTRAINT login_pk PRIMARY KEY (login_id);


--
-- TOC entry 3558 (class 2606 OID 16425)
-- Name: main_item main_item_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.main_item
    ADD CONSTRAINT main_item_pk PRIMARY KEY (main_item_id);


--
-- TOC entry 3562 (class 2606 OID 16626)
-- Name: quotation_line_item quot_line_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quotation_line_item
    ADD CONSTRAINT quot_line_pk PRIMARY KEY (quotation_id, seq_no, line_seq_no);


--
-- TOC entry 3567 (class 2606 OID 16437)
-- Name: quotation_main_item quot_main_item_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quotation_main_item
    ADD CONSTRAINT quot_main_item_pk PRIMARY KEY (quotation_id, seq_no);


--
-- TOC entry 3575 (class 2606 OID 16473)
-- Name: quotation quot_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quotation
    ADD CONSTRAINT quot_pk PRIMARY KEY (quotation_id);


--
-- TOC entry 3571 (class 2606 OID 16461)
-- Name: shop_detail shop_detail_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.shop_detail
    ADD CONSTRAINT shop_detail_pk PRIMARY KEY (shop_detail_id);


--
-- TOC entry 3553 (class 1259 OID 16624)
-- Name: fki_cat_line_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_cat_line_fk ON public.line_item USING btree (room_type);


--
-- TOC entry 3556 (class 1259 OID 16618)
-- Name: fki_cat_main_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_cat_main_fk ON public.main_item USING btree (room_type);


--
-- TOC entry 3582 (class 1259 OID 16511)
-- Name: fki_login_fk1; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_login_fk1 ON public.login USING btree (employee_id);


--
-- TOC entry 3572 (class 1259 OID 16570)
-- Name: fki_quit_cust_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_quit_cust_fk ON public.quotation USING btree (customer_id);


--
-- TOC entry 3573 (class 1259 OID 16606)
-- Name: fki_quot_emp_fk1; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_quot_emp_fk1 ON public.quotation USING btree (lead_by);


--
-- TOC entry 3559 (class 1259 OID 16594)
-- Name: fki_quot_id_fk1; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_quot_id_fk1 ON public.quotation_line_item USING btree (quotation_id);


--
-- TOC entry 3563 (class 1259 OID 16600)
-- Name: fki_quot_id_fk2; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_quot_id_fk2 ON public.quotation_main_item USING btree (quotation_id);


--
-- TOC entry 3560 (class 1259 OID 16588)
-- Name: fki_quot_line_fk1; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_quot_line_fk1 ON public.quotation_line_item USING btree (line_item_id);


--
-- TOC entry 3564 (class 1259 OID 16576)
-- Name: fki_quot_main_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_quot_main_fk ON public.quotation_main_item USING btree (main_item_id);


--
-- TOC entry 3565 (class 1259 OID 16582)
-- Name: fki_quot_main_fk1; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_quot_main_fk1 ON public.quotation_main_item USING btree (main_item_id);


--
-- TOC entry 3585 (class 2606 OID 16619)
-- Name: line_item cat_line_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.line_item
    ADD CONSTRAINT cat_line_fk FOREIGN KEY (room_type) REFERENCES public.catogeries(catogerie_title) NOT VALID;


--
-- TOC entry 3586 (class 2606 OID 16613)
-- Name: main_item cat_main_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.main_item
    ADD CONSTRAINT cat_main_fk FOREIGN KEY (room_type) REFERENCES public.catogeries(catogerie_title) NOT VALID;


--
-- TOC entry 3597 (class 2606 OID 16493)
-- Name: customer cust_comp_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer
    ADD CONSTRAINT cust_comp_fk FOREIGN KEY (address_id) REFERENCES public.address(address_id);


--
-- TOC entry 3591 (class 2606 OID 16445)
-- Name: employment empl_comp_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employment
    ADD CONSTRAINT empl_comp_fk FOREIGN KEY (company_id) REFERENCES public.company_dtl(company_id);


--
-- TOC entry 3592 (class 2606 OID 16450)
-- Name: employment empl_emp_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employment
    ADD CONSTRAINT empl_emp_fk FOREIGN KEY (employee_id) REFERENCES public.employee(employee_id);


--
-- TOC entry 3598 (class 2606 OID 16506)
-- Name: login login_fk1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.login
    ADD CONSTRAINT login_fk1 FOREIGN KEY (employee_id) REFERENCES public.employee(employee_id) NOT VALID;


--
-- TOC entry 3594 (class 2606 OID 16565)
-- Name: quotation quit_cust_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quotation
    ADD CONSTRAINT quit_cust_fk FOREIGN KEY (customer_id) REFERENCES public.customer(customer_id) NOT VALID;


--
-- TOC entry 3595 (class 2606 OID 16601)
-- Name: quotation quot_emp_fk1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quotation
    ADD CONSTRAINT quot_emp_fk1 FOREIGN KEY (lead_by) REFERENCES public.employee(employee_id) NOT VALID;


--
-- TOC entry 3587 (class 2606 OID 16589)
-- Name: quotation_line_item quot_id_fk1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quotation_line_item
    ADD CONSTRAINT quot_id_fk1 FOREIGN KEY (quotation_id) REFERENCES public.quotation(quotation_id) NOT VALID;


--
-- TOC entry 3589 (class 2606 OID 16627)
-- Name: quotation_main_item quot_id_fk1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quotation_main_item
    ADD CONSTRAINT quot_id_fk1 FOREIGN KEY (quotation_id) REFERENCES public.quotation(quotation_id) ON UPDATE RESTRICT ON DELETE RESTRICT NOT VALID;


--
-- TOC entry 3588 (class 2606 OID 16583)
-- Name: quotation_line_item quot_line_fk1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quotation_line_item
    ADD CONSTRAINT quot_line_fk1 FOREIGN KEY (line_item_id) REFERENCES public.line_item(line_item_id) NOT VALID;


--
-- TOC entry 3590 (class 2606 OID 16577)
-- Name: quotation_main_item quot_main_fk1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quotation_main_item
    ADD CONSTRAINT quot_main_fk1 FOREIGN KEY (main_item_id) REFERENCES public.main_item(main_item_id) NOT VALID;


--
-- TOC entry 3596 (class 2606 OID 16474)
-- Name: quotation quot_shop_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quotation
    ADD CONSTRAINT quot_shop_fk FOREIGN KEY (shop_detail_id) REFERENCES public.shop_detail(shop_detail_id);


--
-- TOC entry 3593 (class 2606 OID 16462)
-- Name: shop_detail shop_empl_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.shop_detail
    ADD CONSTRAINT shop_empl_fk FOREIGN KEY (manager_id) REFERENCES public.employee(employee_id);


-- Completed on 2022-11-14 18:56:41 EST

--
-- PostgreSQL database dump complete
--

