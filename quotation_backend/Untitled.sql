--
-- PostgreSQL database dump
--

-- Dumped from database version 15.0
-- Dumped by pg_dump version 15.0

-- Started on 2022-11-08 19:49:48 EST

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
-- TOC entry 3740 (class 1262 OID 16390)
-- Name: QuotationDB; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE "QuotationDB" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = icu LOCALE = 'en_US.UTF-8' ICU_LOCALE = 'en-US';


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
-- TOC entry 3741 (class 0 OID 0)
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
    cust_profile character varying
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
    emp_status character varying(2),
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
    updated_date timestamp without time zone
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
    acess character varying
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
    updated_date timestamp without time zone
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
    pin_code numeric
);


ALTER TABLE public.quotation OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16426)
-- Name: quotation_line_item; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.quotation_line_item (
    quotation_id numeric,
    seq_no numeric,
    line_seq_no numeric,
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
    updated_date timestamp without time zone
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
    updated_date timestamp without time zone
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
-- TOC entry 3722 (class 0 OID 16391)
-- Dependencies: 215
-- Data for Name: address; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.address (address_id, address_type, address_category, category_key, address_1, address_2, address_3, city, state, country, start_date, stop_date, inserted_by, inserted_date, updated_by, updated_date, pin_code) FROM stdin;
1	\N	\N	\N	Pitapuram colony,9-40-1,surya residenciey			Visakhapatnam	Andhra Pradesh	India	\N	\N	21	2022-11-06 08:37:56.69	\N	\N	\N
0	\N	\N	\N	address_1	address_2	raddress_3	city1222	state1	IN	\N	\N	inserted_by	2022-11-06 08:12:21.588	21	2022-11-06 08:40:33.685	\N
\.


--
-- TOC entry 3732 (class 0 OID 16479)
-- Dependencies: 225
-- Data for Name: catogeries; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.catogeries (catogerie_id, catogerie_title, catogerie_desc, inserted_by, inserted_date, updated_by, updated_date) FROM stdin;
2	Kitchen1	Kitchen1	21	2022-11-06 07:15:03.534	\N	\N
3	Bed Room	Bed Room	SYSTEM	2022-11-06 07:16:06.653	\N	\N
0	Bed Room	Bed Room1	SYSTEM	2022-10-31 13:48:19.819	21	2022-11-06 07:16:56.807
4	Kitchen13	Kitchen	21	2022-11-06 07:17:08.914	\N	\N
1	Kitchen	Kitchen1	21	2022-11-06 07:13:08.853	21	2022-11-06 07:20:26.646
5	Kitchen	Bed Room1	21	2022-11-06 07:20:34.336	\N	\N
\.


--
-- TOC entry 3723 (class 0 OID 16398)
-- Dependencies: 216
-- Data for Name: company_dtl; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.company_dtl (company_id, company_code, company_name, location, inserted_by, inserted_date, updated_by, updated_date) FROM stdin;
6	ABC	ABC Ltd	HYDERABADS	System	2022-11-06 01:33:04.176	\N	\N
7	ABC	ABC Ltd	HYDERABADS	System	2022-11-06 01:33:47.324	\N	\N
8	ABC	ABC Ltd	HYDERABADS	System	2022-11-06 01:36:25.172	\N	\N
9	ABC	ABC Ltd	HYDERABADS	System	2022-11-06 01:39:44.88	\N	\N
10	hhhh	wdwqdqwd	dwdwdwdwdw	21	2022-11-06 01:45:44.606	\N	\N
0	ABC	ABC Ltd	HYDERABAD	System	2022-11-02 09:59:53.965	21	2022-11-06 01:25:32.089
5	ABC	ABC Ltd	HYDERABADS	System	2022-11-06 01:31:01.384	21	2022-11-06 01:30:34.021
12	wdwdwd	wdwqdqwd	dssad	21	2022-11-06 01:30:45.981	\N	\N
11	wdwdwd	wdwdwdw	1111	21	2022-11-06 01:50:40.766	21	2022-11-06 01:30:51.373
13	wdwdwd	wdwqdqwd	wswsw	21	2022-11-06 01:31:09.104	\N	\N
14	wdwdwd	wdwqdqwd	dwdwdwdwdw	21	2022-11-06 01:34:53.272	\N	\N
15	dwdwdw	dwdwd	wdwdwd	21	2022-11-06 01:37:26.545	\N	\N
16	wdwdwd	wswsw	wswsw	21	2022-11-06 01:38:34.239	\N	\N
\.


--
-- TOC entry 3733 (class 0 OID 16486)
-- Dependencies: 226
-- Data for Name: customer; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.customer (customer_id, address_id, customer_name, customer_email, customer_phone_number, customer_alt_phone_number, inserted_by, inserted_date, updated_by, updated_date, cust_profile) FROM stdin;
1	1	Vikash Mediboina	vikash.mediboina@gmail.com	11111111	1111111111	21	2022-11-06 08:37:56.69	\N	\N	1
0	0	customer_name	rcustomer_email	1111111111	\N	inserted_by	2022-11-06 08:12:21.588	21	2022-11-06 08:40:33.685	na
\.


--
-- TOC entry 3724 (class 0 OID 16405)
-- Dependencies: 217
-- Data for Name: employee; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.employee (employee_id, employee_code, employee_name, employee_email, employee_phone_number, birth_date, gender, past_exp, emp_status, emp_type, reporting_to, inserted_by, inserted_date, updated_by, updated_date) FROM stdin;
1	123	SYSTEM	System1@gmail.com	123345666	\N	\N	\N	\N	\N	\N	SYSTEM	2022-11-02 09:52:52.667	\N	\N
2	123	SYSTEM	System2@gmail.com	123345666	\N	\N	\N	\N	\N	\N	SYSTEM	2022-11-02 09:53:13.972	\N	\N
3	123	SYSTEM	System22@gmail.com	123345666	\N	\N	\N	\N	\N	\N	SYSTEM	2022-11-02 09:54:11.073	\N	\N
4	123	SYSTEM	System223@gmail.com	123345666	\N	\N	\N	\N	\N	\N	SYSTEM	2022-11-02 09:54:59.743	\N	\N
5	123	SYSTEM	System22322@gmail.com	123345666	\N	\N	\N	\N	\N	\N	SYSTEM	2022-11-02 09:55:47.168	\N	\N
6	123	SYSTEM	System223222@gmail.com	123345666	\N	\N	\N	\N	\N	\N	SYSTEM	2022-11-02 09:57:00.729	\N	\N
7	123	SYSTEM	System3222@gmail.com	123345666	\N	\N	\N	\N	\N	\N	SYSTEM	2022-11-02 10:00:05.614	\N	\N
8	123	SYSTEM	12222S@gmail.com	123345666	\N	\N	\N	\N	\N	\N	SYSTEM	2022-11-02 10:03:43.997	\N	\N
9	123	SYSTEM	1222www2S@gmail.com	123345666	\N	\N	\N	\N	\N	\N	SYSTEM	2022-11-02 10:08:50.974	\N	\N
10	123	SYSTEM	emp@gmail.com	123345666	\N	\N	\N	\N	\N	\N	SYSTEM	2022-11-02 10:29:42.315	\N	\N
11	123	SYSTEM	emp2@gmail.com	123345666	\N	\N	\N	\N	\N	\N	SYSTEM	2022-11-03 10:32:15.159	\N	\N
12	123	SYSTEM	emp22@gmail.com	123345666	\N	\N	\N	\N	\N	\N	SYSTEM	2022-11-03 10:32:53.922	\N	\N
13	123	SYSTEM	emps22@gmail.com	123345666	\N	\N	\N	\N	\N	\N	SYSTEM	2022-11-03 10:33:25.241	\N	\N
14	123	SYSTEM	empss22@gmail.com	123345666	\N	\N	\N	\N	\N	\N	SYSTEM	2022-11-03 11:20:52.254	\N	\N
15	123	SYSTEM	epss22@gmail.com	123345666	\N	\N	\N	\N	\N	\N	SYSTEM	2022-11-03 11:25:38.782	\N	\N
16	123	SYSTEM	eps22@gmail.com	123345666	\N	\N	\N	\N	\N	\N	SYSTEM	2022-11-03 11:27:31.515	\N	\N
17	123	SYSTEM	eps2@gmail.com	123345666	\N	\N	\N	\N	\N	\N	SYSTEM	2022-11-03 11:31:30.882	\N	\N
18	123	SYSTEM	ep2s2@gmail.com	123345666	\N	\N	\N	\N	\N	\N	SYSTEM	2022-11-03 11:32:19.628	\N	\N
19	123	SYSTEM	ep2sq2@gmail.com	123345666	\N	\N	\N	\N	\N	\N	SYSTEM	2022-11-03 11:32:51.94	\N	\N
20	123	SYSTEM	ep2@gmail.com	123345666	\N	\N	\N	\N	\N	\N	SYSTEM	2022-11-03 14:01:26.195	\N	\N
21	123	SYSTEM	ep@gmail.com	123345666	\N	\N	\N	\N	\N	\N	SYSTEM	2022-11-03 14:05:12.243	\N	\N
0	123	SYSTEM	System@gmail.com	123345666	\N	\N	\N	\N	\N	0	SYSTEM	2022-11-02 09:52:17.028	21	2022-11-06 06:37:22.768
22	121	full	full@gmail.com	2222222	\N	\N	\N	\N	\N	0	21	2022-11-06 06:50:40.946	\N	\N
23	3323	edqd	fewfwfe	342423	\N	\N	\N	\N	\N	11	21	2022-11-06 06:51:48.175	\N	\N
24	dwdwd	dwdd	dwdwd	112121	\N	\N	\N	\N	\N	10	21	2022-11-06 07:00:14.537	\N	\N
\.


--
-- TOC entry 3729 (class 0 OID 16438)
-- Dependencies: 222
-- Data for Name: employment; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.employment (employment_id, employee_id, company_id, job_code, start_date, stop_date, inserted_by, inserted_date, updated_by, updated_date) FROM stdin;
1	8	0	Sales person	\N	\N	SYSTEM	2022-11-02 10:03:43.997	\N	\N
2	9	0	Sales person	\N	\N	SYSTEM	2022-11-02 10:08:50.974	\N	\N
3	10	0	Sales person	\N	\N	SYSTEM	2022-11-02 10:29:42.315	\N	\N
4	11	0	Sales person	\N	\N	SYSTEM	2022-11-03 10:32:15.159	\N	\N
5	12	0	Sales person	\N	\N	SYSTEM	2022-11-03 10:32:53.922	\N	\N
6	13	0	Sales person	\N	\N	SYSTEM	2022-11-03 10:33:25.241	\N	\N
7	14	0	Sales person	\N	\N	SYSTEM	2022-11-03 11:20:52.254	\N	\N
8	15	0	Sales person	\N	\N	SYSTEM	2022-11-03 11:25:38.782	\N	\N
9	16	0	Sales person	\N	\N	SYSTEM	2022-11-03 11:27:31.515	\N	\N
10	17	0	Sales person	\N	\N	SYSTEM	2022-11-03 11:31:30.882	\N	\N
11	18	0	Sales person	\N	\N	SYSTEM	2022-11-03 11:32:19.628	\N	\N
12	19	0	Sales person	\N	\N	SYSTEM	2022-11-03 11:32:51.94	\N	\N
13	21	0	Sales person	\N	\N	SYSTEM	2022-11-03 14:05:12.243	\N	\N
0	7	\N	Sales person	2022-11-08	\N	SYSTEM	2022-11-02 10:00:05.614	21	2022-11-06 06:37:22.768
14	22	\N	ShopManager	2022-11-07	\N	21	2022-11-06 06:50:40.946	\N	\N
15	23	\N	ShopManager	2022-11-07	\N	21	2022-11-06 06:51:48.175	\N	\N
16	24	0	ShopManager	2022-11-08	\N	21	2022-11-06 07:00:14.537	\N	\N
\.


--
-- TOC entry 3725 (class 0 OID 16412)
-- Dependencies: 218
-- Data for Name: line_item; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.line_item (line_item_id, room_type, line_item_title, line_item_desc, unit_price, inserted_by, inserted_date, updated_by, updated_date) FROM stdin;
0	Bed Room	Bed Room1	Bed Room	2001.00	SYSTEM	2022-10-31 14:31:38.813	21	2022-11-06 07:40:40.692
\.


--
-- TOC entry 3734 (class 0 OID 16499)
-- Dependencies: 227
-- Data for Name: login; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.login (login_id, email, employee_id, password, inserted_by, inserted_date, updated_by, updated_date, acess) FROM stdin;
0	System2@gmail.com	2	{}	SYSTEM	2022-11-02 09:53:13.972-04	\N	\N	\N
1	System22@gmail.com	3	{}	SYSTEM	2022-11-02 09:54:11.073-04	\N	\N	\N
2	System223@gmail.com	4	{}	SYSTEM	2022-11-02 09:54:59.743-04	\N	\N	\N
3	System22322@gmail.com	5	{}	SYSTEM	2022-11-02 09:55:47.168-04	\N	\N	\N
4	System223222@gmail.com	6	{}	SYSTEM	2022-11-02 09:57:00.729-04	\N	\N	\N
5	System3222@gmail.com	7	{}	SYSTEM	2022-11-02 10:00:05.614-04	\N	\N	\N
6	12222S@gmail.com	8	{}	SYSTEM	2022-11-02 10:03:43.997-04	\N	\N	\N
7	1222www2S@gmail.com	9	{}	SYSTEM	2022-11-02 10:08:50.974-04	\N	\N	\N
8	emp@gmail.com	10	[object Promise]	SYSTEM	2022-11-02 10:29:42.315-04	\N	\N	\N
9	emp2@gmail.com	11	[object Promise]	SYSTEM	2022-11-03 10:32:15.159-04	\N	\N	\N
10	emp22@gmail.com	12	[object Promise]	SYSTEM	2022-11-03 10:32:53.922-04	\N	\N	\N
11	emps22@gmail.com	13	[object Promise]	SYSTEM	2022-11-03 10:33:25.241-04	\N	\N	\N
12	empss22@gmail.com	14	{}	SYSTEM	2022-11-03 11:20:52.254-04	\N	\N	\N
13	epss22@gmail.com	15	{}	SYSTEM	2022-11-03 11:25:38.782-04	\N	\N	\N
14	eps22@gmail.com	16	{}	SYSTEM	2022-11-03 11:27:31.515-04	\N	\N	\N
15	eps2@gmail.com	17	{}	SYSTEM	2022-11-03 11:31:30.882-04	\N	\N	\N
16	ep2s2@gmail.com	18	{}	SYSTEM	2022-11-03 11:32:19.628-04	\N	\N	\N
17	ep2sq2@gmail.com	19	{}	SYSTEM	2022-11-03 11:32:51.94-04	\N	\N	\N
18	ep@gmail.com	21	$2a$06$ujO8aceoMbBkVt2Do2yNuuBr8yuNIM9HM7OBNr..KjZem/OT6L1te	SYSTEM	2022-11-03 14:05:12.243-04	\N	\N	\N
19	full@gmail.com	22	$2a$06$2DXQfmBLQBVIwBizujFcTu.SGROtE4bWgPLjIX04oCOb583q4rgqq	21	2022-11-06 06:50:40.946-05	\N	\N	\N
20	fewfwfe	23	$2a$06$1v3Pl4OkvHPIkjiR62o7MuKbX1KVJzd9AzGUEdd8wtdxoi1yzyPCC	21	2022-11-06 06:51:48.175-05	\N	\N	\N
21	dwdwd	24	$2a$06$b616JOs9S0BKrOkYvkjVMeQ0K7UgHDLFkcK5ZRu1e21FUL6TPOmAS	21	2022-11-06 07:00:14.537-05	\N	\N	\N
\.


--
-- TOC entry 3726 (class 0 OID 16419)
-- Dependencies: 219
-- Data for Name: main_item; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.main_item (main_item_id, room_type, main_item_title, main_item_desc, unit_price, inserted_by, inserted_date, updated_by, updated_date) FROM stdin;
0	Bed Room1	Bed Room	Bed Room1	2002.00	SYSTEM	2022-10-31 14:22:37.479	21	2022-11-06 07:59:44.448
1	Bed Room	aza	zaaz	111.00	21	2022-11-06 08:00:04.343	\N	\N
\.


--
-- TOC entry 3731 (class 0 OID 16467)
-- Dependencies: 224
-- Data for Name: quotation; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code) FROM stdin;
0	\N	\N	address_1	address_2	address_3	city	state	2022-02-07	\N	1	0	\N	111111111	122334444	mail@gmail.com	\N	0	2022-11-06 16:47:38.455	\N	\N	0	customer_name	\N
1	\N	\N	address_1	address_2	address_3	city	state	2022-02-07	\N	1	0	\N	111111111	122334444	mail@gmail.com	\N	0	2022-11-06 16:50:26.529	\N	\N	0	customer_name	\N
2	\N	\N	address_1	address_2	address_3	city	state	2022-02-07	\N	1	0	\N	111111111	122334444	mail@gmail.com	\N	0	2022-11-06 16:51:21.292	\N	\N	0	customer_name	\N
3	\N	\N	address_1	address_2	address_3	city	state	2022-02-07	\N	1	0	\N	111111111	122334444	mail@gmail.com	\N	0	2022-11-06 16:51:56.684	\N	\N	0	customer_name	\N
4	\N	\N	address_1	address_2	address_3	city	state	2022-02-07	\N	1	0	\N	111111111	122334444	mail@gmail.com	\N	0	2022-11-06 16:54:14.439	\N	\N	0	customer_name	\N
5	\N	\N	address_1	address_2	address_3	city	state	2022-02-07	\N	1	0	\N	111111111	122334444	mail@gmail.com	\N	0	2022-11-06 16:55:33.18	\N	\N	0	customer_name	\N
6	\N	\N	address_1	address_2	address_3	city	state	2022-02-07	\N	1	0	\N	111111111	122334444	mail@gmail.com	\N	0	2022-11-06 16:56:26.279	\N	\N	0	customer_name	\N
7	\N	\N	address_1	address_2	address_3	city	state	2022-02-07	\N	1	0	\N	111111111	122334444	mail@gmail.com	\N	0	2022-11-06 16:57:49.502	\N	\N	0	customer_name	\N
8	\N	\N	address_1	address_2	address_3	city	state	2022-02-07	\N	1	0	\N	111111111	122334444	mail@gmail.com	\N	0	2022-11-06 16:58:04.697	\N	\N	0	customer_name	\N
9	\N	\N	address_1	address_2	address_3	city	state	2022-02-07	\N	1	0	\N	111111111	122334444	mail@gmail.com	\N	0	2022-11-06 17:00:28.415	\N	\N	0	customer_name	\N
10	\N	\N	address_1	address_2	address_3	city	state	2022-02-07	\N	1	0	\N	111111111	122334444	mail@gmail.com	\N	0	2022-11-06 17:39:05.967	\N	\N	0	customer_name	\N
11	\N	\N	address_1	address_2	address_3	city	state	2022-02-07	\N	1	0	\N	111111111	122334444	mail@gmail.com	\N	0	2022-11-06 17:55:21.756	\N	\N	0	customer_name	\N
12	\N	\N	address_1	address_2	address_3	city	state	2022-02-07	\N	1	0	\N	111111111	122334444	mail@gmail.com	\N	0	2022-11-06 17:56:48.668	\N	\N	0	customer_name	\N
13	\N	\N	address_1	address_2	address_3	city	state	2022-02-07	\N	1	0	\N	111111111	122334444	mail@gmail.com	Drafted	0	2022-11-06 21:34:57.16	\N	\N	0	customer_name	\N
14	\N	\N	address_1	address_2	raddress_3	city1222	state1	2022-11-07	\N	\N	\N	\N	\N	\N	rcustomer_email	Drafted	\N	2022-11-07 00:23:27.137	\N	\N	0	customer_name	\N
15	\N	\N	address_1	address_2	raddress_3	city1222	state1	2022-11-07	\N	\N	\N	\N	\N	\N	rcustomer_email	Drafted	\N	2022-11-07 00:23:57.269	\N	\N	0	customer_name	\N
16	\N	\N	address_1	address_2	address_3	city	state	2022-02-07	\N	1	0	\N	111111111	122334444	mail@gmail.com	Drafted	0	2022-11-07 00:25:44.481	\N	\N	0	customer_name	\N
17	\N	\N	address_1	address_2	address_3	city	state	2022-02-07	\N	1	0	\N	111111111	122334444	mail@gmail.com	Drafted	0	2022-11-07 00:26:42.996	\N	\N	0	customer_name	\N
18	\N	\N	KATIKI STREET			KASHINAGAR	Odisha	2022-11-07	\N	\N	\N	\N	9437658870	\N	mediboina.vikash@gmail.com	Drafted	\N	2022-11-07 09:52:37.371	\N	\N	0	customer_name	\N
19	\N	\N	Pitapuram colony,9-40-1,surya residenciey			Visakhapatnam	Andhra Pradesh	2022-11-07	\N	\N	\N	\N	9437658870	\N	vikash.mediboina@gmail.com	Drafted	\N	2022-11-07 10:24:40.061	\N	\N	0	customer_name	\N
20	\N	\N	Pitapuram colony,9-40-1,surya residenciey			Visakhapatnam	Andhra Pradesh	2022-11-07	\N	\N	\N	\N	9437658870	\N	vikash.mediboina@gmail.com	Drafted	\N	2022-11-07 10:25:04.093	\N	\N	0	customer_name	\N
21	\N	\N	Katiki Street, Gajapathi District			KASHINAGAR	Odisha	2022-11-07	\N	\N	\N	\N	9437658870	\N	mediboina.vikash@gmail.com	Drafted	\N	2022-11-07 10:28:58.089	\N	\N	1	Vikash Mediboina	\N
22	\N	\N	katiki street			Visakhapatnam	Andhra Pradesh	2022-11-07	\N	\N	\N	\N	111106	\N	vikash.mediboina@gmail.com	Drafted	\N	2022-11-07 10:34:30.18	\N	\N	0	customer_name	\N
23	\N	\N	katiki street			kashinagar	odisha	2022-11-07	\N	\N	\N	\N	9100556285	\N	vikash.mediboina2907@gmail.com	Drafted	\N	2022-11-07 10:36:24.55	\N	\N	1	Vikash Mediboina	\N
24	\N	\N	katiki street			kashinagar	odisha	2022-11-07	\N	\N	\N	\N	9100556285	\N	vikash.mediboina2907@gmail.com	Drafted	\N	2022-11-07 10:36:33.095	\N	\N	1	Vikash Mediboina	\N
25	\N	\N	katiki street			kashinagar	odisha	2022-11-07	\N	\N	\N	\N	9100556285	\N	vikash.mediboina2907@gmail.com	Drafted	\N	2022-11-07 10:36:45.268	\N	\N	1	Vikash Mediboina	\N
26	\N	\N	Katiki Street, Gajapathi District			KASHINAGAR	Odisha	2022-11-07	\N	\N	\N	\N	9437658870	\N	mediboina.vikash@gmail.com	Drafted	\N	2022-11-07 11:28:58.742	\N	\N	1	Vikash Mediboina	\N
\.


--
-- TOC entry 3727 (class 0 OID 16426)
-- Dependencies: 220
-- Data for Name: quotation_line_item; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.quotation_line_item (quotation_id, seq_no, line_seq_no, line_item_id, line_item_title, line_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date) FROM stdin;
12	1	1	\N	Bed Room	Bed Room	\N	\N	\N	\N	1	\N	28.00	28.00	\N	\N	0.00	0.00	0.00	0	2022-11-06 22:56:48.683	\N	\N
13	1	1	\N	Bed Room	Bed Room	\N	\N	\N	\N	1	\N	28.00	28.00	\N	\N	0.00	0.00	0.00	0	2022-11-07 02:34:57.187	\N	\N
\.


--
-- TOC entry 3728 (class 0 OID 16431)
-- Dependencies: 221
-- Data for Name: quotation_main_item; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.quotation_main_item (quotation_id, seq_no, main_item_id, room_type, main_item_title, main_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date) FROM stdin;
6	1	0	0	Bed Room	Bed Room	1.00	2.00	3.00	6.00	1	\N	12.00	72.00	0.00	0.00	2.00	3.00	0.00	0	2022-11-06 21:56:26.301	\N	\N
8	1	0	Bed Room	Bed Room	Bed Room	1.00	2.00	3.00	6.00	1	\N	12.00	72.00	0.00	0.00	2.00	3.00	0.00	0	2022-11-06 21:58:04.713	\N	\N
9	1	0	Bed Room	Bed Room11	Bed Room1111	1.00	2.00	3.00	6.00	1	\N	12.00	72.00	0.00	0.00	2.00	3.00	0.00	0	2022-11-06 22:00:28.432	\N	\N
10	1	0	Bed Room	Bed Room11	Bed Room1111	1.00	2.00	3.00	6.00	1	\N	12.00	72.00	0.00	0.00	2.00	3.00	0.00	0	2022-11-06 22:39:05.979	\N	\N
11	1	0	Bed Room	Bed Room11	Bed Room1111	1.00	2.00	3.00	6.00	1	\N	12.00	72.00	0.00	0.00	2.00	3.00	0.00	0	2022-11-06 22:55:21.777	\N	\N
12	1	0	Bed Room	Bed Room11	Bed Room1111	1.00	2.00	3.00	6.00	1	\N	12.00	72.00	0.00	0.00	2.00	3.00	0.00	0	2022-11-06 22:56:48.68	\N	\N
13	1	0	Bed Room	Bed Room11	Bed Room1111	1.00	2.00	3.00	6.00	1	\N	12.00	72.00	0.00	0.00	2.00	3.00	0.00	0	2022-11-07 02:34:57.186	\N	\N
\.


--
-- TOC entry 3730 (class 0 OID 16455)
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
-- TOC entry 3567 (class 2606 OID 16485)
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
-- TOC entry 3569 (class 2606 OID 16492)
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
-- TOC entry 3560 (class 2606 OID 16444)
-- Name: employment employment_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employment
    ADD CONSTRAINT employment_pk PRIMARY KEY (employment_id);


--
-- TOC entry 3554 (class 2606 OID 16418)
-- Name: line_item line_item_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.line_item
    ADD CONSTRAINT line_item_pk PRIMARY KEY (line_item_id);


--
-- TOC entry 3572 (class 2606 OID 16505)
-- Name: login login_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.login
    ADD CONSTRAINT login_pk PRIMARY KEY (login_id);


--
-- TOC entry 3556 (class 2606 OID 16425)
-- Name: main_item main_item_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.main_item
    ADD CONSTRAINT main_item_pk PRIMARY KEY (main_item_id);


--
-- TOC entry 3558 (class 2606 OID 16437)
-- Name: quotation_main_item quot_main_item_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quotation_main_item
    ADD CONSTRAINT quot_main_item_pk PRIMARY KEY (quotation_id, seq_no);


--
-- TOC entry 3565 (class 2606 OID 16473)
-- Name: quotation quot_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quotation
    ADD CONSTRAINT quot_pk PRIMARY KEY (quotation_id);


--
-- TOC entry 3562 (class 2606 OID 16461)
-- Name: shop_detail shop_detail_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.shop_detail
    ADD CONSTRAINT shop_detail_pk PRIMARY KEY (shop_detail_id);


--
-- TOC entry 3570 (class 1259 OID 16511)
-- Name: fki_login_fk1; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_login_fk1 ON public.login USING btree (employee_id);


--
-- TOC entry 3563 (class 1259 OID 16570)
-- Name: fki_quit_cust_fk; Type: INDEX; Schema: public; Owner: postgres
--

CREATE INDEX fki_quit_cust_fk ON public.quotation USING btree (customer_id);


--
-- TOC entry 3578 (class 2606 OID 16493)
-- Name: customer cust_comp_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.customer
    ADD CONSTRAINT cust_comp_fk FOREIGN KEY (address_id) REFERENCES public.address(address_id);


--
-- TOC entry 3573 (class 2606 OID 16445)
-- Name: employment empl_comp_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employment
    ADD CONSTRAINT empl_comp_fk FOREIGN KEY (company_id) REFERENCES public.company_dtl(company_id);


--
-- TOC entry 3574 (class 2606 OID 16450)
-- Name: employment empl_emp_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.employment
    ADD CONSTRAINT empl_emp_fk FOREIGN KEY (employee_id) REFERENCES public.employee(employee_id);


--
-- TOC entry 3579 (class 2606 OID 16506)
-- Name: login login_fk1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.login
    ADD CONSTRAINT login_fk1 FOREIGN KEY (employee_id) REFERENCES public.employee(employee_id) NOT VALID;


--
-- TOC entry 3576 (class 2606 OID 16565)
-- Name: quotation quit_cust_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quotation
    ADD CONSTRAINT quit_cust_fk FOREIGN KEY (customer_id) REFERENCES public.customer(customer_id) NOT VALID;


--
-- TOC entry 3577 (class 2606 OID 16474)
-- Name: quotation quot_shop_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.quotation
    ADD CONSTRAINT quot_shop_fk FOREIGN KEY (shop_detail_id) REFERENCES public.shop_detail(shop_detail_id);


--
-- TOC entry 3575 (class 2606 OID 16462)
-- Name: shop_detail shop_empl_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.shop_detail
    ADD CONSTRAINT shop_empl_fk FOREIGN KEY (manager_id) REFERENCES public.employee(employee_id);


-- Completed on 2022-11-08 19:49:48 EST

--
-- PostgreSQL database dump complete
--

