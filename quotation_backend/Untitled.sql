--
-- PostgreSQL database dump
--

-- Dumped from database version 15.0
-- Dumped by pg_dump version 15.0

-- Started on 2022-11-11 04:14:15 EST

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
    lead_by_name character varying
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
    updated_date timestamp without time zone,
    tax_type character varying(20)
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
-- TOC entry 3722 (class 0 OID 16391)
-- Dependencies: 215
-- Data for Name: address; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.address (address_id, address_type, address_category, category_key, address_1, address_2, address_3, city, state, country, start_date, stop_date, inserted_by, inserted_date, updated_by, updated_date, pin_code) VALUES (1, NULL, NULL, NULL, 'Pitapuram colony,9-40-1,surya residenciey', '', '', 'Visakhapatnam', 'Andhra Pradesh', 'India', NULL, NULL, '21', '2022-11-06 08:37:56.69', NULL, NULL, NULL);
INSERT INTO public.address (address_id, address_type, address_category, category_key, address_1, address_2, address_3, city, state, country, start_date, stop_date, inserted_by, inserted_date, updated_by, updated_date, pin_code) VALUES (0, NULL, NULL, NULL, 'address_1', 'address_2', 'raddress_3', 'city1222', 'state1', 'IN', NULL, NULL, 'inserted_by', '2022-11-06 08:12:21.588', '21', '2022-11-06 08:40:33.685', NULL);


--
-- TOC entry 3732 (class 0 OID 16479)
-- Dependencies: 225
-- Data for Name: catogeries; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.catogeries (catogerie_id, catogerie_title, catogerie_desc, inserted_by, inserted_date, updated_by, updated_date) VALUES (2, 'Kitchen1', 'Kitchen1', '21', '2022-11-06 07:15:03.534', NULL, NULL);
INSERT INTO public.catogeries (catogerie_id, catogerie_title, catogerie_desc, inserted_by, inserted_date, updated_by, updated_date) VALUES (3, 'Bed Room', 'Bed Room', 'SYSTEM', '2022-11-06 07:16:06.653', NULL, NULL);
INSERT INTO public.catogeries (catogerie_id, catogerie_title, catogerie_desc, inserted_by, inserted_date, updated_by, updated_date) VALUES (0, 'Bed Room', 'Bed Room1', 'SYSTEM', '2022-10-31 13:48:19.819', '21', '2022-11-06 07:16:56.807');
INSERT INTO public.catogeries (catogerie_id, catogerie_title, catogerie_desc, inserted_by, inserted_date, updated_by, updated_date) VALUES (4, 'Kitchen13', 'Kitchen', '21', '2022-11-06 07:17:08.914', NULL, NULL);
INSERT INTO public.catogeries (catogerie_id, catogerie_title, catogerie_desc, inserted_by, inserted_date, updated_by, updated_date) VALUES (1, 'Kitchen', 'Kitchen1', '21', '2022-11-06 07:13:08.853', '21', '2022-11-06 07:20:26.646');
INSERT INTO public.catogeries (catogerie_id, catogerie_title, catogerie_desc, inserted_by, inserted_date, updated_by, updated_date) VALUES (5, 'Kitchen', 'Bed Room1', '21', '2022-11-06 07:20:34.336', NULL, NULL);


--
-- TOC entry 3723 (class 0 OID 16398)
-- Dependencies: 216
-- Data for Name: company_dtl; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.company_dtl (company_id, company_code, company_name, location, inserted_by, inserted_date, updated_by, updated_date) VALUES (6, 'ABC', 'ABC Ltd', 'HYDERABADS', 'System', '2022-11-06 01:33:04.176', NULL, NULL);
INSERT INTO public.company_dtl (company_id, company_code, company_name, location, inserted_by, inserted_date, updated_by, updated_date) VALUES (7, 'ABC', 'ABC Ltd', 'HYDERABADS', 'System', '2022-11-06 01:33:47.324', NULL, NULL);
INSERT INTO public.company_dtl (company_id, company_code, company_name, location, inserted_by, inserted_date, updated_by, updated_date) VALUES (8, 'ABC', 'ABC Ltd', 'HYDERABADS', 'System', '2022-11-06 01:36:25.172', NULL, NULL);
INSERT INTO public.company_dtl (company_id, company_code, company_name, location, inserted_by, inserted_date, updated_by, updated_date) VALUES (9, 'ABC', 'ABC Ltd', 'HYDERABADS', 'System', '2022-11-06 01:39:44.88', NULL, NULL);
INSERT INTO public.company_dtl (company_id, company_code, company_name, location, inserted_by, inserted_date, updated_by, updated_date) VALUES (10, 'hhhh', 'wdwqdqwd', 'dwdwdwdwdw', '21', '2022-11-06 01:45:44.606', NULL, NULL);
INSERT INTO public.company_dtl (company_id, company_code, company_name, location, inserted_by, inserted_date, updated_by, updated_date) VALUES (0, 'ABC', 'ABC Ltd', 'HYDERABAD', 'System', '2022-11-02 09:59:53.965', '21', '2022-11-06 01:25:32.089');
INSERT INTO public.company_dtl (company_id, company_code, company_name, location, inserted_by, inserted_date, updated_by, updated_date) VALUES (5, 'ABC', 'ABC Ltd', 'HYDERABADS', 'System', '2022-11-06 01:31:01.384', '21', '2022-11-06 01:30:34.021');
INSERT INTO public.company_dtl (company_id, company_code, company_name, location, inserted_by, inserted_date, updated_by, updated_date) VALUES (12, 'wdwdwd', 'wdwqdqwd', 'dssad', '21', '2022-11-06 01:30:45.981', NULL, NULL);
INSERT INTO public.company_dtl (company_id, company_code, company_name, location, inserted_by, inserted_date, updated_by, updated_date) VALUES (11, 'wdwdwd', 'wdwdwdw', '1111', '21', '2022-11-06 01:50:40.766', '21', '2022-11-06 01:30:51.373');
INSERT INTO public.company_dtl (company_id, company_code, company_name, location, inserted_by, inserted_date, updated_by, updated_date) VALUES (13, 'wdwdwd', 'wdwqdqwd', 'wswsw', '21', '2022-11-06 01:31:09.104', NULL, NULL);
INSERT INTO public.company_dtl (company_id, company_code, company_name, location, inserted_by, inserted_date, updated_by, updated_date) VALUES (14, 'wdwdwd', 'wdwqdqwd', 'dwdwdwdwdw', '21', '2022-11-06 01:34:53.272', NULL, NULL);
INSERT INTO public.company_dtl (company_id, company_code, company_name, location, inserted_by, inserted_date, updated_by, updated_date) VALUES (15, 'dwdwdw', 'dwdwd', 'wdwdwd', '21', '2022-11-06 01:37:26.545', NULL, NULL);
INSERT INTO public.company_dtl (company_id, company_code, company_name, location, inserted_by, inserted_date, updated_by, updated_date) VALUES (16, 'wdwdwd', 'wswsw', 'wswsw', '21', '2022-11-06 01:38:34.239', NULL, NULL);


--
-- TOC entry 3733 (class 0 OID 16486)
-- Dependencies: 226
-- Data for Name: customer; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.customer (customer_id, address_id, customer_name, customer_email, customer_phone_number, customer_alt_phone_number, inserted_by, inserted_date, updated_by, updated_date, cust_profile) VALUES (1, 1, 'Vikash Mediboina', 'vikash.mediboina@gmail.com', '11111111', '1111111111', '21', '2022-11-06 08:37:56.69', NULL, NULL, '1');
INSERT INTO public.customer (customer_id, address_id, customer_name, customer_email, customer_phone_number, customer_alt_phone_number, inserted_by, inserted_date, updated_by, updated_date, cust_profile) VALUES (0, 0, 'customer_name', 'rcustomer_email', '1111111111', NULL, 'inserted_by', '2022-11-06 08:12:21.588', '21', '2022-11-06 08:40:33.685', 'na');


--
-- TOC entry 3724 (class 0 OID 16405)
-- Dependencies: 217
-- Data for Name: employee; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.employee (employee_id, employee_code, employee_name, employee_email, employee_phone_number, birth_date, gender, past_exp, emp_status, emp_type, reporting_to, inserted_by, inserted_date, updated_by, updated_date) VALUES (1, '123', 'SYSTEM', 'System1@gmail.com', '123345666', NULL, NULL, NULL, NULL, NULL, NULL, 'SYSTEM', '2022-11-02 09:52:52.667', NULL, NULL);
INSERT INTO public.employee (employee_id, employee_code, employee_name, employee_email, employee_phone_number, birth_date, gender, past_exp, emp_status, emp_type, reporting_to, inserted_by, inserted_date, updated_by, updated_date) VALUES (2, '123', 'SYSTEM', 'System2@gmail.com', '123345666', NULL, NULL, NULL, NULL, NULL, NULL, 'SYSTEM', '2022-11-02 09:53:13.972', NULL, NULL);
INSERT INTO public.employee (employee_id, employee_code, employee_name, employee_email, employee_phone_number, birth_date, gender, past_exp, emp_status, emp_type, reporting_to, inserted_by, inserted_date, updated_by, updated_date) VALUES (3, '123', 'SYSTEM', 'System22@gmail.com', '123345666', NULL, NULL, NULL, NULL, NULL, NULL, 'SYSTEM', '2022-11-02 09:54:11.073', NULL, NULL);
INSERT INTO public.employee (employee_id, employee_code, employee_name, employee_email, employee_phone_number, birth_date, gender, past_exp, emp_status, emp_type, reporting_to, inserted_by, inserted_date, updated_by, updated_date) VALUES (4, '123', 'SYSTEM', 'System223@gmail.com', '123345666', NULL, NULL, NULL, NULL, NULL, NULL, 'SYSTEM', '2022-11-02 09:54:59.743', NULL, NULL);
INSERT INTO public.employee (employee_id, employee_code, employee_name, employee_email, employee_phone_number, birth_date, gender, past_exp, emp_status, emp_type, reporting_to, inserted_by, inserted_date, updated_by, updated_date) VALUES (5, '123', 'SYSTEM', 'System22322@gmail.com', '123345666', NULL, NULL, NULL, NULL, NULL, NULL, 'SYSTEM', '2022-11-02 09:55:47.168', NULL, NULL);
INSERT INTO public.employee (employee_id, employee_code, employee_name, employee_email, employee_phone_number, birth_date, gender, past_exp, emp_status, emp_type, reporting_to, inserted_by, inserted_date, updated_by, updated_date) VALUES (6, '123', 'SYSTEM', 'System223222@gmail.com', '123345666', NULL, NULL, NULL, NULL, NULL, NULL, 'SYSTEM', '2022-11-02 09:57:00.729', NULL, NULL);
INSERT INTO public.employee (employee_id, employee_code, employee_name, employee_email, employee_phone_number, birth_date, gender, past_exp, emp_status, emp_type, reporting_to, inserted_by, inserted_date, updated_by, updated_date) VALUES (7, '123', 'SYSTEM', 'System3222@gmail.com', '123345666', NULL, NULL, NULL, NULL, NULL, NULL, 'SYSTEM', '2022-11-02 10:00:05.614', NULL, NULL);
INSERT INTO public.employee (employee_id, employee_code, employee_name, employee_email, employee_phone_number, birth_date, gender, past_exp, emp_status, emp_type, reporting_to, inserted_by, inserted_date, updated_by, updated_date) VALUES (8, '123', 'SYSTEM', '12222S@gmail.com', '123345666', NULL, NULL, NULL, NULL, NULL, NULL, 'SYSTEM', '2022-11-02 10:03:43.997', NULL, NULL);
INSERT INTO public.employee (employee_id, employee_code, employee_name, employee_email, employee_phone_number, birth_date, gender, past_exp, emp_status, emp_type, reporting_to, inserted_by, inserted_date, updated_by, updated_date) VALUES (9, '123', 'SYSTEM', '1222www2S@gmail.com', '123345666', NULL, NULL, NULL, NULL, NULL, NULL, 'SYSTEM', '2022-11-02 10:08:50.974', NULL, NULL);
INSERT INTO public.employee (employee_id, employee_code, employee_name, employee_email, employee_phone_number, birth_date, gender, past_exp, emp_status, emp_type, reporting_to, inserted_by, inserted_date, updated_by, updated_date) VALUES (10, '123', 'SYSTEM', 'emp@gmail.com', '123345666', NULL, NULL, NULL, NULL, NULL, NULL, 'SYSTEM', '2022-11-02 10:29:42.315', NULL, NULL);
INSERT INTO public.employee (employee_id, employee_code, employee_name, employee_email, employee_phone_number, birth_date, gender, past_exp, emp_status, emp_type, reporting_to, inserted_by, inserted_date, updated_by, updated_date) VALUES (11, '123', 'SYSTEM', 'emp2@gmail.com', '123345666', NULL, NULL, NULL, NULL, NULL, NULL, 'SYSTEM', '2022-11-03 10:32:15.159', NULL, NULL);
INSERT INTO public.employee (employee_id, employee_code, employee_name, employee_email, employee_phone_number, birth_date, gender, past_exp, emp_status, emp_type, reporting_to, inserted_by, inserted_date, updated_by, updated_date) VALUES (12, '123', 'SYSTEM', 'emp22@gmail.com', '123345666', NULL, NULL, NULL, NULL, NULL, NULL, 'SYSTEM', '2022-11-03 10:32:53.922', NULL, NULL);
INSERT INTO public.employee (employee_id, employee_code, employee_name, employee_email, employee_phone_number, birth_date, gender, past_exp, emp_status, emp_type, reporting_to, inserted_by, inserted_date, updated_by, updated_date) VALUES (13, '123', 'SYSTEM', 'emps22@gmail.com', '123345666', NULL, NULL, NULL, NULL, NULL, NULL, 'SYSTEM', '2022-11-03 10:33:25.241', NULL, NULL);
INSERT INTO public.employee (employee_id, employee_code, employee_name, employee_email, employee_phone_number, birth_date, gender, past_exp, emp_status, emp_type, reporting_to, inserted_by, inserted_date, updated_by, updated_date) VALUES (14, '123', 'SYSTEM', 'empss22@gmail.com', '123345666', NULL, NULL, NULL, NULL, NULL, NULL, 'SYSTEM', '2022-11-03 11:20:52.254', NULL, NULL);
INSERT INTO public.employee (employee_id, employee_code, employee_name, employee_email, employee_phone_number, birth_date, gender, past_exp, emp_status, emp_type, reporting_to, inserted_by, inserted_date, updated_by, updated_date) VALUES (15, '123', 'SYSTEM', 'epss22@gmail.com', '123345666', NULL, NULL, NULL, NULL, NULL, NULL, 'SYSTEM', '2022-11-03 11:25:38.782', NULL, NULL);
INSERT INTO public.employee (employee_id, employee_code, employee_name, employee_email, employee_phone_number, birth_date, gender, past_exp, emp_status, emp_type, reporting_to, inserted_by, inserted_date, updated_by, updated_date) VALUES (16, '123', 'SYSTEM', 'eps22@gmail.com', '123345666', NULL, NULL, NULL, NULL, NULL, NULL, 'SYSTEM', '2022-11-03 11:27:31.515', NULL, NULL);
INSERT INTO public.employee (employee_id, employee_code, employee_name, employee_email, employee_phone_number, birth_date, gender, past_exp, emp_status, emp_type, reporting_to, inserted_by, inserted_date, updated_by, updated_date) VALUES (17, '123', 'SYSTEM', 'eps2@gmail.com', '123345666', NULL, NULL, NULL, NULL, NULL, NULL, 'SYSTEM', '2022-11-03 11:31:30.882', NULL, NULL);
INSERT INTO public.employee (employee_id, employee_code, employee_name, employee_email, employee_phone_number, birth_date, gender, past_exp, emp_status, emp_type, reporting_to, inserted_by, inserted_date, updated_by, updated_date) VALUES (18, '123', 'SYSTEM', 'ep2s2@gmail.com', '123345666', NULL, NULL, NULL, NULL, NULL, NULL, 'SYSTEM', '2022-11-03 11:32:19.628', NULL, NULL);
INSERT INTO public.employee (employee_id, employee_code, employee_name, employee_email, employee_phone_number, birth_date, gender, past_exp, emp_status, emp_type, reporting_to, inserted_by, inserted_date, updated_by, updated_date) VALUES (19, '123', 'SYSTEM', 'ep2sq2@gmail.com', '123345666', NULL, NULL, NULL, NULL, NULL, NULL, 'SYSTEM', '2022-11-03 11:32:51.94', NULL, NULL);
INSERT INTO public.employee (employee_id, employee_code, employee_name, employee_email, employee_phone_number, birth_date, gender, past_exp, emp_status, emp_type, reporting_to, inserted_by, inserted_date, updated_by, updated_date) VALUES (20, '123', 'SYSTEM', 'ep2@gmail.com', '123345666', NULL, NULL, NULL, NULL, NULL, NULL, 'SYSTEM', '2022-11-03 14:01:26.195', NULL, NULL);
INSERT INTO public.employee (employee_id, employee_code, employee_name, employee_email, employee_phone_number, birth_date, gender, past_exp, emp_status, emp_type, reporting_to, inserted_by, inserted_date, updated_by, updated_date) VALUES (21, '123', 'SYSTEM', 'ep@gmail.com', '123345666', NULL, NULL, NULL, NULL, NULL, NULL, 'SYSTEM', '2022-11-03 14:05:12.243', NULL, NULL);
INSERT INTO public.employee (employee_id, employee_code, employee_name, employee_email, employee_phone_number, birth_date, gender, past_exp, emp_status, emp_type, reporting_to, inserted_by, inserted_date, updated_by, updated_date) VALUES (0, '123', 'SYSTEM', 'System@gmail.com', '123345666', NULL, NULL, NULL, NULL, NULL, 0, 'SYSTEM', '2022-11-02 09:52:17.028', '21', '2022-11-06 06:37:22.768');
INSERT INTO public.employee (employee_id, employee_code, employee_name, employee_email, employee_phone_number, birth_date, gender, past_exp, emp_status, emp_type, reporting_to, inserted_by, inserted_date, updated_by, updated_date) VALUES (22, '121', 'full', 'full@gmail.com', '2222222', NULL, NULL, NULL, NULL, NULL, 0, '21', '2022-11-06 06:50:40.946', NULL, NULL);
INSERT INTO public.employee (employee_id, employee_code, employee_name, employee_email, employee_phone_number, birth_date, gender, past_exp, emp_status, emp_type, reporting_to, inserted_by, inserted_date, updated_by, updated_date) VALUES (23, '3323', 'edqd', 'fewfwfe', '342423', NULL, NULL, NULL, NULL, NULL, 11, '21', '2022-11-06 06:51:48.175', NULL, NULL);
INSERT INTO public.employee (employee_id, employee_code, employee_name, employee_email, employee_phone_number, birth_date, gender, past_exp, emp_status, emp_type, reporting_to, inserted_by, inserted_date, updated_by, updated_date) VALUES (24, 'dwdwd', 'dwdd', 'dwdwd', '112121', NULL, NULL, NULL, NULL, NULL, 10, '21', '2022-11-06 07:00:14.537', NULL, NULL);


--
-- TOC entry 3729 (class 0 OID 16438)
-- Dependencies: 222
-- Data for Name: employment; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.employment (employment_id, employee_id, company_id, job_code, start_date, stop_date, inserted_by, inserted_date, updated_by, updated_date) VALUES (1, 8, 0, 'Sales person', NULL, NULL, 'SYSTEM', '2022-11-02 10:03:43.997', NULL, NULL);
INSERT INTO public.employment (employment_id, employee_id, company_id, job_code, start_date, stop_date, inserted_by, inserted_date, updated_by, updated_date) VALUES (2, 9, 0, 'Sales person', NULL, NULL, 'SYSTEM', '2022-11-02 10:08:50.974', NULL, NULL);
INSERT INTO public.employment (employment_id, employee_id, company_id, job_code, start_date, stop_date, inserted_by, inserted_date, updated_by, updated_date) VALUES (3, 10, 0, 'Sales person', NULL, NULL, 'SYSTEM', '2022-11-02 10:29:42.315', NULL, NULL);
INSERT INTO public.employment (employment_id, employee_id, company_id, job_code, start_date, stop_date, inserted_by, inserted_date, updated_by, updated_date) VALUES (4, 11, 0, 'Sales person', NULL, NULL, 'SYSTEM', '2022-11-03 10:32:15.159', NULL, NULL);
INSERT INTO public.employment (employment_id, employee_id, company_id, job_code, start_date, stop_date, inserted_by, inserted_date, updated_by, updated_date) VALUES (5, 12, 0, 'Sales person', NULL, NULL, 'SYSTEM', '2022-11-03 10:32:53.922', NULL, NULL);
INSERT INTO public.employment (employment_id, employee_id, company_id, job_code, start_date, stop_date, inserted_by, inserted_date, updated_by, updated_date) VALUES (6, 13, 0, 'Sales person', NULL, NULL, 'SYSTEM', '2022-11-03 10:33:25.241', NULL, NULL);
INSERT INTO public.employment (employment_id, employee_id, company_id, job_code, start_date, stop_date, inserted_by, inserted_date, updated_by, updated_date) VALUES (7, 14, 0, 'Sales person', NULL, NULL, 'SYSTEM', '2022-11-03 11:20:52.254', NULL, NULL);
INSERT INTO public.employment (employment_id, employee_id, company_id, job_code, start_date, stop_date, inserted_by, inserted_date, updated_by, updated_date) VALUES (8, 15, 0, 'Sales person', NULL, NULL, 'SYSTEM', '2022-11-03 11:25:38.782', NULL, NULL);
INSERT INTO public.employment (employment_id, employee_id, company_id, job_code, start_date, stop_date, inserted_by, inserted_date, updated_by, updated_date) VALUES (9, 16, 0, 'Sales person', NULL, NULL, 'SYSTEM', '2022-11-03 11:27:31.515', NULL, NULL);
INSERT INTO public.employment (employment_id, employee_id, company_id, job_code, start_date, stop_date, inserted_by, inserted_date, updated_by, updated_date) VALUES (10, 17, 0, 'Sales person', NULL, NULL, 'SYSTEM', '2022-11-03 11:31:30.882', NULL, NULL);
INSERT INTO public.employment (employment_id, employee_id, company_id, job_code, start_date, stop_date, inserted_by, inserted_date, updated_by, updated_date) VALUES (11, 18, 0, 'Sales person', NULL, NULL, 'SYSTEM', '2022-11-03 11:32:19.628', NULL, NULL);
INSERT INTO public.employment (employment_id, employee_id, company_id, job_code, start_date, stop_date, inserted_by, inserted_date, updated_by, updated_date) VALUES (12, 19, 0, 'Sales person', NULL, NULL, 'SYSTEM', '2022-11-03 11:32:51.94', NULL, NULL);
INSERT INTO public.employment (employment_id, employee_id, company_id, job_code, start_date, stop_date, inserted_by, inserted_date, updated_by, updated_date) VALUES (13, 21, 0, 'Sales person', NULL, NULL, 'SYSTEM', '2022-11-03 14:05:12.243', NULL, NULL);
INSERT INTO public.employment (employment_id, employee_id, company_id, job_code, start_date, stop_date, inserted_by, inserted_date, updated_by, updated_date) VALUES (0, 7, NULL, 'Sales person', '2022-11-08', NULL, 'SYSTEM', '2022-11-02 10:00:05.614', '21', '2022-11-06 06:37:22.768');
INSERT INTO public.employment (employment_id, employee_id, company_id, job_code, start_date, stop_date, inserted_by, inserted_date, updated_by, updated_date) VALUES (14, 22, NULL, 'ShopManager', '2022-11-07', NULL, '21', '2022-11-06 06:50:40.946', NULL, NULL);
INSERT INTO public.employment (employment_id, employee_id, company_id, job_code, start_date, stop_date, inserted_by, inserted_date, updated_by, updated_date) VALUES (15, 23, NULL, 'ShopManager', '2022-11-07', NULL, '21', '2022-11-06 06:51:48.175', NULL, NULL);
INSERT INTO public.employment (employment_id, employee_id, company_id, job_code, start_date, stop_date, inserted_by, inserted_date, updated_by, updated_date) VALUES (16, 24, 0, 'ShopManager', '2022-11-08', NULL, '21', '2022-11-06 07:00:14.537', NULL, NULL);


--
-- TOC entry 3725 (class 0 OID 16412)
-- Dependencies: 218
-- Data for Name: line_item; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.line_item (line_item_id, room_type, line_item_title, line_item_desc, unit_price, inserted_by, inserted_date, updated_by, updated_date, tax_type) VALUES (0, 'Bed Room', 'Bed Room1', 'Bed Room', 2001.00, 'SYSTEM', '2022-10-31 14:31:38.813', '21', '2022-11-10 08:13:05.947', 'type_1');
INSERT INTO public.line_item (line_item_id, room_type, line_item_title, line_item_desc, unit_price, inserted_by, inserted_date, updated_by, updated_date, tax_type) VALUES (1, 'Bed Room', 'Line 1', 'Line Desc', 200.00, '21', '2022-11-10 08:15:14.487', NULL, NULL, 'type_1');


--
-- TOC entry 3734 (class 0 OID 16499)
-- Dependencies: 227
-- Data for Name: login; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.login (login_id, email, employee_id, password, inserted_by, inserted_date, updated_by, updated_date, acess) VALUES (0, 'System2@gmail.com', 2, '{}', 'SYSTEM', '2022-11-02 09:53:13.972-04', NULL, NULL, NULL);
INSERT INTO public.login (login_id, email, employee_id, password, inserted_by, inserted_date, updated_by, updated_date, acess) VALUES (1, 'System22@gmail.com', 3, '{}', 'SYSTEM', '2022-11-02 09:54:11.073-04', NULL, NULL, NULL);
INSERT INTO public.login (login_id, email, employee_id, password, inserted_by, inserted_date, updated_by, updated_date, acess) VALUES (2, 'System223@gmail.com', 4, '{}', 'SYSTEM', '2022-11-02 09:54:59.743-04', NULL, NULL, NULL);
INSERT INTO public.login (login_id, email, employee_id, password, inserted_by, inserted_date, updated_by, updated_date, acess) VALUES (3, 'System22322@gmail.com', 5, '{}', 'SYSTEM', '2022-11-02 09:55:47.168-04', NULL, NULL, NULL);
INSERT INTO public.login (login_id, email, employee_id, password, inserted_by, inserted_date, updated_by, updated_date, acess) VALUES (4, 'System223222@gmail.com', 6, '{}', 'SYSTEM', '2022-11-02 09:57:00.729-04', NULL, NULL, NULL);
INSERT INTO public.login (login_id, email, employee_id, password, inserted_by, inserted_date, updated_by, updated_date, acess) VALUES (5, 'System3222@gmail.com', 7, '{}', 'SYSTEM', '2022-11-02 10:00:05.614-04', NULL, NULL, NULL);
INSERT INTO public.login (login_id, email, employee_id, password, inserted_by, inserted_date, updated_by, updated_date, acess) VALUES (6, '12222S@gmail.com', 8, '{}', 'SYSTEM', '2022-11-02 10:03:43.997-04', NULL, NULL, NULL);
INSERT INTO public.login (login_id, email, employee_id, password, inserted_by, inserted_date, updated_by, updated_date, acess) VALUES (7, '1222www2S@gmail.com', 9, '{}', 'SYSTEM', '2022-11-02 10:08:50.974-04', NULL, NULL, NULL);
INSERT INTO public.login (login_id, email, employee_id, password, inserted_by, inserted_date, updated_by, updated_date, acess) VALUES (8, 'emp@gmail.com', 10, '[object Promise]', 'SYSTEM', '2022-11-02 10:29:42.315-04', NULL, NULL, NULL);
INSERT INTO public.login (login_id, email, employee_id, password, inserted_by, inserted_date, updated_by, updated_date, acess) VALUES (9, 'emp2@gmail.com', 11, '[object Promise]', 'SYSTEM', '2022-11-03 10:32:15.159-04', NULL, NULL, NULL);
INSERT INTO public.login (login_id, email, employee_id, password, inserted_by, inserted_date, updated_by, updated_date, acess) VALUES (10, 'emp22@gmail.com', 12, '[object Promise]', 'SYSTEM', '2022-11-03 10:32:53.922-04', NULL, NULL, NULL);
INSERT INTO public.login (login_id, email, employee_id, password, inserted_by, inserted_date, updated_by, updated_date, acess) VALUES (11, 'emps22@gmail.com', 13, '[object Promise]', 'SYSTEM', '2022-11-03 10:33:25.241-04', NULL, NULL, NULL);
INSERT INTO public.login (login_id, email, employee_id, password, inserted_by, inserted_date, updated_by, updated_date, acess) VALUES (12, 'empss22@gmail.com', 14, '{}', 'SYSTEM', '2022-11-03 11:20:52.254-04', NULL, NULL, NULL);
INSERT INTO public.login (login_id, email, employee_id, password, inserted_by, inserted_date, updated_by, updated_date, acess) VALUES (13, 'epss22@gmail.com', 15, '{}', 'SYSTEM', '2022-11-03 11:25:38.782-04', NULL, NULL, NULL);
INSERT INTO public.login (login_id, email, employee_id, password, inserted_by, inserted_date, updated_by, updated_date, acess) VALUES (14, 'eps22@gmail.com', 16, '{}', 'SYSTEM', '2022-11-03 11:27:31.515-04', NULL, NULL, NULL);
INSERT INTO public.login (login_id, email, employee_id, password, inserted_by, inserted_date, updated_by, updated_date, acess) VALUES (15, 'eps2@gmail.com', 17, '{}', 'SYSTEM', '2022-11-03 11:31:30.882-04', NULL, NULL, NULL);
INSERT INTO public.login (login_id, email, employee_id, password, inserted_by, inserted_date, updated_by, updated_date, acess) VALUES (16, 'ep2s2@gmail.com', 18, '{}', 'SYSTEM', '2022-11-03 11:32:19.628-04', NULL, NULL, NULL);
INSERT INTO public.login (login_id, email, employee_id, password, inserted_by, inserted_date, updated_by, updated_date, acess) VALUES (17, 'ep2sq2@gmail.com', 19, '{}', 'SYSTEM', '2022-11-03 11:32:51.94-04', NULL, NULL, NULL);
INSERT INTO public.login (login_id, email, employee_id, password, inserted_by, inserted_date, updated_by, updated_date, acess) VALUES (18, 'ep@gmail.com', 21, '$2a$06$ujO8aceoMbBkVt2Do2yNuuBr8yuNIM9HM7OBNr..KjZem/OT6L1te', 'SYSTEM', '2022-11-03 14:05:12.243-04', NULL, NULL, NULL);
INSERT INTO public.login (login_id, email, employee_id, password, inserted_by, inserted_date, updated_by, updated_date, acess) VALUES (19, 'full@gmail.com', 22, '$2a$06$2DXQfmBLQBVIwBizujFcTu.SGROtE4bWgPLjIX04oCOb583q4rgqq', '21', '2022-11-06 06:50:40.946-05', NULL, NULL, NULL);
INSERT INTO public.login (login_id, email, employee_id, password, inserted_by, inserted_date, updated_by, updated_date, acess) VALUES (20, 'fewfwfe', 23, '$2a$06$1v3Pl4OkvHPIkjiR62o7MuKbX1KVJzd9AzGUEdd8wtdxoi1yzyPCC', '21', '2022-11-06 06:51:48.175-05', NULL, NULL, NULL);
INSERT INTO public.login (login_id, email, employee_id, password, inserted_by, inserted_date, updated_by, updated_date, acess) VALUES (21, 'dwdwd', 24, '$2a$06$b616JOs9S0BKrOkYvkjVMeQ0K7UgHDLFkcK5ZRu1e21FUL6TPOmAS', '21', '2022-11-06 07:00:14.537-05', NULL, NULL, NULL);


--
-- TOC entry 3726 (class 0 OID 16419)
-- Dependencies: 219
-- Data for Name: main_item; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.main_item (main_item_id, room_type, main_item_title, main_item_desc, unit_price, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) VALUES (0, 'Bed Room1', 'Bed Room', 'Bed Room1', 2002.00, 'SYSTEM', '2022-10-31 14:22:37.479', '21', '2022-11-10 08:01:59.562', 200.00, 'type_1');
INSERT INTO public.main_item (main_item_id, room_type, main_item_title, main_item_desc, unit_price, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) VALUES (1, 'Bed Room', 'aza', 'zaaz', 111.00, '21', '2022-11-06 08:00:04.343', '21', '2022-11-10 08:02:13.197', 400.00, 'type_2');
INSERT INTO public.main_item (main_item_id, room_type, main_item_title, main_item_desc, unit_price, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) VALUES (2, 'Kitchen13', 'main Item 1', 'Main item desc', 200.00, '21', '2022-11-10 08:11:12.287', NULL, NULL, 200.00, 'type_1');


--
-- TOC entry 3731 (class 0 OID 16467)
-- Dependencies: 224
-- Data for Name: quotation; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (0, NULL, NULL, 'address_1', 'address_2', 'address_3', 'city', 'state', '2022-02-07', NULL, 1, 0, NULL, 111111111, 122334444, 'mail@gmail.com', NULL, '0', '2022-11-06 16:47:38.455', NULL, NULL, 0, 'customer_name', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (1, NULL, NULL, 'address_1', 'address_2', 'address_3', 'city', 'state', '2022-02-07', NULL, 1, 0, NULL, 111111111, 122334444, 'mail@gmail.com', NULL, '0', '2022-11-06 16:50:26.529', NULL, NULL, 0, 'customer_name', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (2, NULL, NULL, 'address_1', 'address_2', 'address_3', 'city', 'state', '2022-02-07', NULL, 1, 0, NULL, 111111111, 122334444, 'mail@gmail.com', NULL, '0', '2022-11-06 16:51:21.292', NULL, NULL, 0, 'customer_name', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (3, NULL, NULL, 'address_1', 'address_2', 'address_3', 'city', 'state', '2022-02-07', NULL, 1, 0, NULL, 111111111, 122334444, 'mail@gmail.com', NULL, '0', '2022-11-06 16:51:56.684', NULL, NULL, 0, 'customer_name', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (4, NULL, NULL, 'address_1', 'address_2', 'address_3', 'city', 'state', '2022-02-07', NULL, 1, 0, NULL, 111111111, 122334444, 'mail@gmail.com', NULL, '0', '2022-11-06 16:54:14.439', NULL, NULL, 0, 'customer_name', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (5, NULL, NULL, 'address_1', 'address_2', 'address_3', 'city', 'state', '2022-02-07', NULL, 1, 0, NULL, 111111111, 122334444, 'mail@gmail.com', NULL, '0', '2022-11-06 16:55:33.18', NULL, NULL, 0, 'customer_name', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (6, NULL, NULL, 'address_1', 'address_2', 'address_3', 'city', 'state', '2022-02-07', NULL, 1, 0, NULL, 111111111, 122334444, 'mail@gmail.com', NULL, '0', '2022-11-06 16:56:26.279', NULL, NULL, 0, 'customer_name', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (7, NULL, NULL, 'address_1', 'address_2', 'address_3', 'city', 'state', '2022-02-07', NULL, 1, 0, NULL, 111111111, 122334444, 'mail@gmail.com', NULL, '0', '2022-11-06 16:57:49.502', NULL, NULL, 0, 'customer_name', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (8, NULL, NULL, 'address_1', 'address_2', 'address_3', 'city', 'state', '2022-02-07', NULL, 1, 0, NULL, 111111111, 122334444, 'mail@gmail.com', NULL, '0', '2022-11-06 16:58:04.697', NULL, NULL, 0, 'customer_name', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (9, NULL, NULL, 'address_1', 'address_2', 'address_3', 'city', 'state', '2022-02-07', NULL, 1, 0, NULL, 111111111, 122334444, 'mail@gmail.com', NULL, '0', '2022-11-06 17:00:28.415', NULL, NULL, 0, 'customer_name', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (10, NULL, NULL, 'address_1', 'address_2', 'address_3', 'city', 'state', '2022-02-07', NULL, 1, 0, NULL, 111111111, 122334444, 'mail@gmail.com', NULL, '0', '2022-11-06 17:39:05.967', NULL, NULL, 0, 'customer_name', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (11, NULL, NULL, 'address_1', 'address_2', 'address_3', 'city', 'state', '2022-02-07', NULL, 1, 0, NULL, 111111111, 122334444, 'mail@gmail.com', NULL, '0', '2022-11-06 17:55:21.756', NULL, NULL, 0, 'customer_name', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (12, NULL, NULL, 'address_1', 'address_2', 'address_3', 'city', 'state', '2022-02-07', NULL, 1, 0, NULL, 111111111, 122334444, 'mail@gmail.com', NULL, '0', '2022-11-06 17:56:48.668', NULL, NULL, 0, 'customer_name', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (13, NULL, NULL, 'address_1', 'address_2', 'address_3', 'city', 'state', '2022-02-07', NULL, 1, 0, NULL, 111111111, 122334444, 'mail@gmail.com', 'Drafted', '0', '2022-11-06 21:34:57.16', NULL, NULL, 0, 'customer_name', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (14, NULL, NULL, 'address_1', 'address_2', 'raddress_3', 'city1222', 'state1', '2022-11-07', NULL, NULL, NULL, NULL, NULL, NULL, 'rcustomer_email', 'Drafted', NULL, '2022-11-07 00:23:27.137', NULL, NULL, 0, 'customer_name', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (15, NULL, NULL, 'address_1', 'address_2', 'raddress_3', 'city1222', 'state1', '2022-11-07', NULL, NULL, NULL, NULL, NULL, NULL, 'rcustomer_email', 'Drafted', NULL, '2022-11-07 00:23:57.269', NULL, NULL, 0, 'customer_name', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (16, NULL, NULL, 'address_1', 'address_2', 'address_3', 'city', 'state', '2022-02-07', NULL, 1, 0, NULL, 111111111, 122334444, 'mail@gmail.com', 'Drafted', '0', '2022-11-07 00:25:44.481', NULL, NULL, 0, 'customer_name', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (17, NULL, NULL, 'address_1', 'address_2', 'address_3', 'city', 'state', '2022-02-07', NULL, 1, 0, NULL, 111111111, 122334444, 'mail@gmail.com', 'Drafted', '0', '2022-11-07 00:26:42.996', NULL, NULL, 0, 'customer_name', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (18, NULL, NULL, 'KATIKI STREET', '', '', 'KASHINAGAR', 'Odisha', '2022-11-07', NULL, NULL, NULL, NULL, 9437658870, NULL, 'mediboina.vikash@gmail.com', 'Drafted', NULL, '2022-11-07 09:52:37.371', NULL, NULL, 0, 'customer_name', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (19, NULL, NULL, 'Pitapuram colony,9-40-1,surya residenciey', '', '', 'Visakhapatnam', 'Andhra Pradesh', '2022-11-07', NULL, NULL, NULL, NULL, 9437658870, NULL, 'vikash.mediboina@gmail.com', 'Drafted', NULL, '2022-11-07 10:24:40.061', NULL, NULL, 0, 'customer_name', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (20, NULL, NULL, 'Pitapuram colony,9-40-1,surya residenciey', '', '', 'Visakhapatnam', 'Andhra Pradesh', '2022-11-07', NULL, NULL, NULL, NULL, 9437658870, NULL, 'vikash.mediboina@gmail.com', 'Drafted', NULL, '2022-11-07 10:25:04.093', NULL, NULL, 0, 'customer_name', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (21, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'KASHINAGAR', 'Odisha', '2022-11-07', NULL, NULL, NULL, NULL, 9437658870, NULL, 'mediboina.vikash@gmail.com', 'Drafted', NULL, '2022-11-07 10:28:58.089', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (22, NULL, NULL, 'katiki street', '', '', 'Visakhapatnam', 'Andhra Pradesh', '2022-11-07', NULL, NULL, NULL, NULL, 111106, NULL, 'vikash.mediboina@gmail.com', 'Drafted', NULL, '2022-11-07 10:34:30.18', NULL, NULL, 0, 'customer_name', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (23, NULL, NULL, 'katiki street', '', '', 'kashinagar', 'odisha', '2022-11-07', NULL, NULL, NULL, NULL, 9100556285, NULL, 'vikash.mediboina2907@gmail.com', 'Drafted', NULL, '2022-11-07 10:36:24.55', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (24, NULL, NULL, 'katiki street', '', '', 'kashinagar', 'odisha', '2022-11-07', NULL, NULL, NULL, NULL, 9100556285, NULL, 'vikash.mediboina2907@gmail.com', 'Drafted', NULL, '2022-11-07 10:36:33.095', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (25, NULL, NULL, 'katiki street', '', '', 'kashinagar', 'odisha', '2022-11-07', NULL, NULL, NULL, NULL, 9100556285, NULL, 'vikash.mediboina2907@gmail.com', 'Drafted', NULL, '2022-11-07 10:36:45.268', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (26, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'KASHINAGAR', 'Odisha', '2022-11-07', NULL, NULL, NULL, NULL, 9437658870, NULL, 'mediboina.vikash@gmail.com', 'Drafted', NULL, '2022-11-07 11:28:58.742', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (27, NULL, NULL, 'Pitapuram colony,9-40-1,surya residenciey', '', '', 'Visakhapatnam', 'Andhra Pradesh', '2022-11-10', NULL, NULL, NULL, NULL, 9437658870, NULL, 'vikash.mediboina@gmail.com', 'Drafted', NULL, '2022-11-09 19:57:09.994', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (28, NULL, NULL, 'Pitapuram colony,9-40-1,surya residenciey', '', '', 'Visakhapatnam', 'Andhra Pradesh', '2022-11-10', NULL, NULL, NULL, NULL, 9437658870, NULL, 'vikash.mediboina@gmail.com', 'Drafted', NULL, '2022-11-09 19:57:56.345', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (29, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 437658870, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 01:13:37.89', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (30, NULL, NULL, 'katiki street', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 9100556285, NULL, 'vikash.mediboina2907@gmail.com', 'Drafted', NULL, '2022-11-10 01:15:57.805', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (31, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'Kashinagar', 'Odisha', '2022-11-10', NULL, NULL, NULL, NULL, 9437658870, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 01:16:58.928', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (32, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 437658870, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 01:18:42.245', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (33, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 437658870, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 01:19:41.418', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (34, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 437658870, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 01:20:32.971', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (35, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 437658870, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 01:22:08.653', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (36, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 437658870, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 01:26:24.078', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (37, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 437658870, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 01:27:25.779', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (38, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 437658870, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 01:28:28.749', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (39, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 437658870, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 01:29:00.641', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (40, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 437658870, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 01:49:13.48', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (41, NULL, NULL, 'katiki street', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 9100556285, NULL, 'vikash.mediboina2907@gmail.com', 'Drafted', NULL, '2022-11-10 01:50:04.125', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (42, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 437658870, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 06:34:51.726', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (43, NULL, NULL, 'katiki street', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 9100556285, NULL, 'vikash.mediboina2907@gmail.com', 'Drafted', NULL, '2022-11-10 07:02:00.554', NULL, NULL, 0, 'customer_name', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (44, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 437658870, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 07:06:54.081', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (45, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'Kashinagar', 'Odisha', '2022-11-10', NULL, NULL, NULL, NULL, 9100556285, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 07:09:04.827', NULL, NULL, 0, 'customer_name', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (46, NULL, NULL, 'katiki street', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 9100556285, NULL, 'vikash.mediboina2907@gmail.com', 'Drafted', NULL, '2022-11-10 07:10:48.627', NULL, NULL, 0, 'customer_name', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (47, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 437658870, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 07:14:29.597', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (48, NULL, NULL, 'katiki street', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 9100556285, NULL, 'vikash.mediboina2907@gmail.com', 'Drafted', NULL, '2022-11-10 07:18:00.175', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (49, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 437658870, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 07:19:22.87', NULL, NULL, 0, 'customer_name', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (50, NULL, NULL, 'katiki street', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 9100556285, NULL, 'vikash.mediboina2907@gmail.com', 'Drafted', NULL, '2022-11-10 07:57:10.263', NULL, NULL, 0, 'customer_name', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (51, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 437658870, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 13:41:44.302', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (52, NULL, NULL, 'katiki street', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 9100556285, NULL, 'vikash.mediboina2907@gmail.com', 'Drafted', NULL, '2022-11-10 13:42:44.333', NULL, NULL, 0, 'customer_name', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (53, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 437658870, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 13:48:26.444', NULL, NULL, 0, 'customer_name', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (54, NULL, NULL, 'katiki street', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 9100556285, NULL, 'vikash.mediboina2907@gmail.com', 'Drafted', NULL, '2022-11-10 13:54:04.212', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (55, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 437658870, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 14:00:43.875', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (56, NULL, NULL, 'katiki street', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 9100556285, NULL, 'vikash.mediboina2907@gmail.com', 'Drafted', NULL, '2022-11-10 14:02:27.693', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (57, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 437658870, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 14:05:41.493', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (58, NULL, NULL, 'katiki street', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 9100556285, NULL, 'vikash.mediboina2907@gmail.com', 'Drafted', NULL, '2022-11-10 14:08:31.957', NULL, NULL, 0, 'customer_name', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (59, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 437658870, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 14:29:05.485', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (60, NULL, NULL, 'katiki street', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 9100556285, NULL, 'vikash.mediboina2907@gmail.com', 'Drafted', NULL, '2022-11-10 14:39:31.44', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (61, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 437658870, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 14:40:05.374', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (62, NULL, NULL, 'katiki street', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 9100556285, NULL, 'vikash.mediboina2907@gmail.com', 'Drafted', NULL, '2022-11-10 14:46:02.577', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (63, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'Kashinagar', 'Andhra Pradesh', '2022-11-10', NULL, NULL, NULL, NULL, 11111111, NULL, 'vikash.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 15:12:29.577', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (64, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 437658870, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 15:13:56.062', NULL, NULL, 0, 'customer_name', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (65, NULL, NULL, 'katiki street', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 9100556285, NULL, 'vikash.mediboina2907@gmail.com', 'Drafted', NULL, '2022-11-10 15:14:49.582', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (66, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 437658870, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 15:15:54.635', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (67, NULL, NULL, 'katiki street', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 9100556285, NULL, 'vikash.mediboina2907@gmail.com', 'Drafted', NULL, '2022-11-10 15:19:03.512', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (68, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 437658870, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 15:21:20.481', NULL, NULL, 0, 'customer_name', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (69, NULL, NULL, 'katiki street', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 9100556285, NULL, 'vikash.mediboina2907@gmail.com', 'Drafted', NULL, '2022-11-10 15:23:56.245', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (70, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'Kashinagar', 'Andhra Pradesh', '2022-11-10', NULL, NULL, NULL, NULL, 11111111, NULL, 'vikash.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 15:27:33.085', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (71, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 437658870, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 15:48:19.02', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (72, NULL, NULL, 'katiki street', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 9100556285, NULL, 'vikash.mediboina2907@gmail.com', 'Drafted', NULL, '2022-11-10 15:49:30.969', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (73, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 437658870, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 15:51:35.763', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (74, NULL, NULL, 'katiki street', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 9100556285, NULL, 'vikash.mediboina2907@gmail.com', 'Drafted', NULL, '2022-11-10 15:53:04.492', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (75, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 437658870, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 15:54:43.555', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (76, NULL, NULL, 'katiki street', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 9100556285, NULL, 'vikash.mediboina2907@gmail.com', 'Drafted', NULL, '2022-11-10 15:59:41.631', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (77, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 437658870, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 16:03:06.416', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (78, NULL, NULL, 'katiki street', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 9100556285, NULL, 'vikash.mediboina2907@gmail.com', 'Drafted', NULL, '2022-11-10 16:19:46.121', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (79, NULL, NULL, 'KATIKI STREET', '', '', 'Kashinagar', 'Odisha', '2022-11-10', NULL, NULL, NULL, NULL, 9437658870, NULL, 'mediboina.vikash@gmail.com', 'Drafted', NULL, '2022-11-10 16:30:20.984', NULL, NULL, 0, 'customer_name', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (80, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 437658870, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 16:32:32.669', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (81, NULL, NULL, 'katiki street', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 9100556285, NULL, 'vikash.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 16:35:11.523', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (82, NULL, NULL, 'katiki street', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 9100556285, NULL, 'vikash.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 16:37:07.76', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (83, NULL, NULL, 'katiki street', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 9100556285, NULL, 'vikash.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 16:50:03.323', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (84, NULL, NULL, 'katiki street', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 9100556285, NULL, 'vikash.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 16:51:44.978', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (85, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 437658870, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 16:52:59.988', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (86, NULL, NULL, 'katiki street', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 9100556285, NULL, 'vikash.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 16:54:29.04', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (87, NULL, NULL, 'katiki street', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 9100556285, NULL, 'vikash.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 16:57:11.97', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (88, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 437658870, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 17:00:48.126', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (89, NULL, NULL, 'katiki street', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 9100556285, NULL, 'vikash.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 17:01:52.226', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (90, NULL, NULL, 'katiki street', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 9100556285, NULL, 'vikash.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 17:03:43.074', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (91, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 437658870, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 17:06:49.802', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (92, NULL, NULL, 'katiki street', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 9100556285, NULL, 'vikash.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 17:10:13.8', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (93, NULL, NULL, 'katiki street', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 9100556285, NULL, 'vikash.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 17:51:04.761', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (94, NULL, NULL, 'katiki street', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, NULL, NULL, 9100556285, NULL, 'vikash.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 17:53:22.188', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (95, NULL, NULL, 'katiki street', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, 10, NULL, 9100556285, NULL, 'vikash.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 17:54:38.494', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (96, NULL, NULL, 'katiki street', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, 11, NULL, 9100556285, NULL, 'vikash.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 17:57:31.5', NULL, NULL, 1, 'Vikash Mediboina', NULL, NULL);
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (97, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'kashinagar', 'odisha', '2022-11-10', NULL, NULL, 9, NULL, 437658870, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-10 18:02:09.175', NULL, NULL, 1, 'Vikash Mediboina', NULL, 'SYSTEM');
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (98, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'kashinagar', 'odisha', '2022-11-11', NULL, NULL, 12, NULL, 437658870, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-11 02:00:03.965', NULL, NULL, 1, 'Vikash Mediboina', NULL, 'SYSTEM');
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (99, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'Kashinagar', 'Odisha', '2022-11-11', NULL, NULL, 11, NULL, 9100556285, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-11 02:01:18.832', NULL, NULL, 1, 'Vikash Mediboina', NULL, 'SYSTEM');
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (100, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'Kashinagar', 'Odisha', '2022-11-11', NULL, NULL, 12, NULL, 9100556285, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-11 02:04:49.756', NULL, NULL, 1, 'Vikash Mediboina', NULL, 'SYSTEM');
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (101, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'Kashinagar', 'Odisha', '2022-11-11', NULL, NULL, 12, NULL, 9100556285, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-11 02:07:15.292', NULL, NULL, 1, 'Vikash Mediboina', NULL, 'SYSTEM');
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (102, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'Kashinagar', 'Odisha', '2022-11-11', NULL, NULL, 11, NULL, 9100556285, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-11 02:09:37.256', NULL, NULL, 1, 'Vikash Mediboina', NULL, 'SYSTEM');
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (103, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'Kashinagar', 'Odisha', '2022-11-11', NULL, NULL, 12, NULL, 9100556285, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-11 02:11:00.726', NULL, NULL, 1, 'Vikash Mediboina', NULL, 'SYSTEM');
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (104, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'Kashinagar', 'Odisha', '2022-11-11', NULL, NULL, 12, NULL, 9100556285, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-11 02:17:17.051', NULL, NULL, 1, 'Vikash Mediboina', NULL, 'SYSTEM');
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (105, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'Kashinagar', 'Odisha', '2022-11-11', NULL, NULL, 12, NULL, 9100556285, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-11 02:27:13.219', NULL, NULL, 1, 'Vikash Mediboina', NULL, 'SYSTEM');
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (106, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'Kashinagar', 'Odisha', '2022-11-11', NULL, NULL, 12, NULL, 9100556285, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-11 02:31:09.822', NULL, NULL, 0, 'customer_name', NULL, 'SYSTEM');
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (107, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'Kashinagar', 'Odisha', '2022-11-11', NULL, NULL, 12, NULL, 9100556285, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-11 02:33:21.686', NULL, NULL, 1, 'Vikash Mediboina', NULL, 'SYSTEM');
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (108, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'Kashinagar', 'Odisha', '2022-11-11', NULL, NULL, 13, NULL, 9100556285, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-11 02:36:16.828', NULL, NULL, 1, 'Vikash Mediboina', NULL, 'SYSTEM');
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (109, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'Kashinagar', 'Odisha', '2022-11-11', NULL, NULL, 13, NULL, 9100556285, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-11 02:37:47.372', NULL, NULL, 1, 'Vikash Mediboina', NULL, 'SYSTEM');
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (110, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'Kashinagar', 'Odisha', '2022-11-11', NULL, NULL, 11, NULL, 9100556285, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-11 02:48:23.24', NULL, NULL, 1, 'Vikash Mediboina', NULL, 'SYSTEM');
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (111, NULL, NULL, 'katiki street', '', '', 'kashinagar', 'odisha', '2022-11-11', NULL, NULL, 12, NULL, 9100556285, NULL, 'vikash.mediboina2907@gmail.com', 'Drafted', NULL, '2022-11-11 02:55:00.868', NULL, NULL, 1, 'Vikash Mediboina', NULL, 'SYSTEM');
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (112, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'Kashinagar', 'Odisha', '2022-11-11', NULL, NULL, 12, NULL, 9100556285, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-11 02:57:28.64', NULL, NULL, 1, 'Vikash Mediboina', NULL, 'SYSTEM');
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (113, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'Kashinagar', 'Odisha', '2022-11-11', NULL, NULL, 11, NULL, 9100556285, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-11 03:00:02.035', NULL, NULL, 1, 'Vikash Mediboina', NULL, 'SYSTEM');
INSERT INTO public.quotation (quotation_id, quotation_code, shop_detail_id, address_1, address_2, address_3, city, state, quotation_date, gene_by, shop_manager_id, lead_by, reference, mobile_1, mobile_2, mail_id, quot_status, inserted_by, inserted_date, updated_by, updated_date, customer_id, customer_name, pin_code, lead_by_name) VALUES (114, NULL, NULL, 'Katiki Street, Gajapathi District', '', '', 'kashinagar', 'odisha', '2022-11-11', NULL, NULL, 12, NULL, 437658870, NULL, 'kurma.mediboina@gmail.com', 'Drafted', NULL, '2022-11-11 03:03:20.857', NULL, NULL, 1, 'Vikash Mediboina', NULL, 'SYSTEM');


--
-- TOC entry 3727 (class 0 OID 16426)
-- Dependencies: 220
-- Data for Name: quotation_line_item; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.quotation_line_item (quotation_id, seq_no, line_seq_no, line_item_id, line_item_title, line_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, tax_type) VALUES (12, 1, 1, NULL, 'Bed Room', 'Bed Room', NULL, NULL, NULL, NULL, 1, NULL, 28.00, 28.00, NULL, NULL, 0.00, 0.00, 0.00, '0', '2022-11-06 22:56:48.683', NULL, NULL, NULL);
INSERT INTO public.quotation_line_item (quotation_id, seq_no, line_seq_no, line_item_id, line_item_title, line_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, tax_type) VALUES (13, 1, 1, NULL, 'Bed Room', 'Bed Room', NULL, NULL, NULL, NULL, 1, NULL, 28.00, 28.00, NULL, NULL, 0.00, 0.00, 0.00, '0', '2022-11-07 02:34:57.187', NULL, NULL, NULL);
INSERT INTO public.quotation_line_item (quotation_id, seq_no, line_seq_no, line_item_id, line_item_title, line_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, tax_type) VALUES (104, NULL, NULL, 1, 'Line 1', 'Line Desc', NULL, NULL, NULL, NULL, 1, 0.00, 200.00, 200.00, 0.00, 200.00, NULL, NULL, 0.00, '21', '2022-11-11 07:17:34.229', NULL, NULL, 'type_1');
INSERT INTO public.quotation_line_item (quotation_id, seq_no, line_seq_no, line_item_id, line_item_title, line_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, tax_type) VALUES (NULL, NULL, 0, 1, 'Line 1', 'Line Desc', NULL, NULL, NULL, NULL, 1, 0.00, 200.00, 200.00, 0.00, 200.00, NULL, NULL, 0.00, '21', '2022-11-11 07:27:30.725', NULL, NULL, 'type_1');
INSERT INTO public.quotation_line_item (quotation_id, seq_no, line_seq_no, line_item_id, line_item_title, line_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, tax_type) VALUES (NULL, NULL, 0, 1, 'Line 1', 'Line Desc', NULL, NULL, NULL, NULL, 1, 0.00, 200.00, 200.00, 0.00, 200.00, NULL, NULL, 0.00, '21', '2022-11-11 07:31:39.928', NULL, NULL, 'type_1');
INSERT INTO public.quotation_line_item (quotation_id, seq_no, line_seq_no, line_item_id, line_item_title, line_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, tax_type) VALUES (NULL, 0, 0, 1, 'Line 1', 'Line Desc', NULL, NULL, NULL, NULL, 1, 0.00, 200.00, 200.00, 0.00, 200.00, NULL, NULL, 0.00, '21', '2022-11-11 07:33:38.499', NULL, NULL, 'type_1');
INSERT INTO public.quotation_line_item (quotation_id, seq_no, line_seq_no, line_item_id, line_item_title, line_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, tax_type) VALUES (108, 0, 0, 0, 'Bed Room1', 'Bed Room', NULL, NULL, NULL, NULL, 1, 0.00, 2001.00, 2001.00, 0.00, 2001.00, NULL, NULL, 0.00, '21', '2022-11-11 07:36:33.946', NULL, NULL, 'type_1');
INSERT INTO public.quotation_line_item (quotation_id, seq_no, line_seq_no, line_item_id, line_item_title, line_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, tax_type) VALUES (109, 0, 0, 1, 'Line 1', 'Line Desc', NULL, NULL, NULL, NULL, 1, 0.00, 200.00, 200.00, 0.00, 200.00, NULL, NULL, 0.00, '21', '2022-11-11 07:38:03.779', NULL, NULL, 'type_1');
INSERT INTO public.quotation_line_item (quotation_id, seq_no, line_seq_no, line_item_id, line_item_title, line_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, tax_type) VALUES (110, 0, 0, 0, 'Bed Room1', 'Bed Room', NULL, NULL, NULL, NULL, 1, 0.00, 2001.00, 2001.00, 0.00, 2001.00, NULL, NULL, 0.00, '21', '2022-11-11 07:48:49.055', NULL, NULL, 'type_1');
INSERT INTO public.quotation_line_item (quotation_id, seq_no, line_seq_no, line_item_id, line_item_title, line_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, tax_type) VALUES (110, 0, 0, 0, 'Bed Room1', 'Bed Room', NULL, NULL, NULL, NULL, 1, 0.00, 2001.00, 2001.00, 0.00, 2001.00, NULL, NULL, 0.00, '21', '2022-11-11 07:48:57.941', NULL, NULL, 'type_1');
INSERT INTO public.quotation_line_item (quotation_id, seq_no, line_seq_no, line_item_id, line_item_title, line_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, tax_type) VALUES (110, 0, 0, 0, 'Bed Room1', 'Bed Room', NULL, NULL, NULL, NULL, 1, 0.00, 2001.00, 2001.00, 0.00, 2001.00, NULL, NULL, 0.00, '21', '2022-11-11 07:49:52.838', NULL, NULL, 'type_1');
INSERT INTO public.quotation_line_item (quotation_id, seq_no, line_seq_no, line_item_id, line_item_title, line_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, tax_type) VALUES (110, 0, 0, 0, 'Bed Room1', 'Bed Room', NULL, NULL, NULL, NULL, 1, 0.00, 2001.00, 2001.00, 0.00, 2001.00, NULL, NULL, 0.00, '21', '2022-11-11 07:50:11.788', NULL, NULL, 'type_1');
INSERT INTO public.quotation_line_item (quotation_id, seq_no, line_seq_no, line_item_id, line_item_title, line_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, tax_type) VALUES (111, 0, 0, 0, 'Bed Room1', 'Bed Room', NULL, NULL, NULL, NULL, 1, 0.00, 2001.00, 2001.00, 0.00, 2001.00, NULL, NULL, 0.00, '21', '2022-11-11 07:55:14.575', NULL, NULL, 'type_1');
INSERT INTO public.quotation_line_item (quotation_id, seq_no, line_seq_no, line_item_id, line_item_title, line_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, tax_type) VALUES (111, 0, 0, 0, 'Bed Room1', 'Bed Room', NULL, NULL, NULL, NULL, 1, 0.00, 2001.00, 2001.00, 0.00, 2001.00, NULL, NULL, 0.00, '21', '2022-11-11 07:55:31.454', NULL, NULL, 'type_1');
INSERT INTO public.quotation_line_item (quotation_id, seq_no, line_seq_no, line_item_id, line_item_title, line_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, tax_type) VALUES (113, 0, 0, 0, 'Bed Room1', 'Bed Room', NULL, NULL, NULL, NULL, 1, 0.00, 2001.00, 2001.00, 0.00, 2001.00, NULL, NULL, 0.00, '21', '2022-11-11 08:00:21.127', NULL, NULL, 'type_1');
INSERT INTO public.quotation_line_item (quotation_id, seq_no, line_seq_no, line_item_id, line_item_title, line_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, tax_type) VALUES (113, 1, 0, 1, 'Line 1', 'Line Desc', NULL, NULL, NULL, NULL, 1, 0.00, 200.00, 200.00, 0.00, 200.00, NULL, NULL, 0.00, '21', '2022-11-11 08:00:36.839', NULL, NULL, 'type_1');
INSERT INTO public.quotation_line_item (quotation_id, seq_no, line_seq_no, line_item_id, line_item_title, line_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, tax_type) VALUES (114, 0, 0, 0, 'Bed Room1', 'Bed Room', NULL, NULL, NULL, NULL, 1, 0.00, 2001.00, 2001.00, 0.00, 2001.00, NULL, NULL, 0.00, '21', '2022-11-11 08:03:35.412', NULL, NULL, 'type_1');


--
-- TOC entry 3728 (class 0 OID 16431)
-- Dependencies: 221
-- Data for Name: quotation_main_item; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.quotation_main_item (quotation_id, seq_no, main_item_id, room_type, main_item_title, main_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) VALUES (6, 1, 0, '0', 'Bed Room', 'Bed Room', 1.00, 2.00, 3.00, 6.00, 1, NULL, 12.00, 72.00, 0.00, 0.00, 2.00, 3.00, 0.00, '0', '2022-11-06 21:56:26.301', NULL, NULL, NULL, NULL);
INSERT INTO public.quotation_main_item (quotation_id, seq_no, main_item_id, room_type, main_item_title, main_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) VALUES (8, 1, 0, 'Bed Room', 'Bed Room', 'Bed Room', 1.00, 2.00, 3.00, 6.00, 1, NULL, 12.00, 72.00, 0.00, 0.00, 2.00, 3.00, 0.00, '0', '2022-11-06 21:58:04.713', NULL, NULL, NULL, NULL);
INSERT INTO public.quotation_main_item (quotation_id, seq_no, main_item_id, room_type, main_item_title, main_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) VALUES (9, 1, 0, 'Bed Room', 'Bed Room11', 'Bed Room1111', 1.00, 2.00, 3.00, 6.00, 1, NULL, 12.00, 72.00, 0.00, 0.00, 2.00, 3.00, 0.00, '0', '2022-11-06 22:00:28.432', NULL, NULL, NULL, NULL);
INSERT INTO public.quotation_main_item (quotation_id, seq_no, main_item_id, room_type, main_item_title, main_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) VALUES (10, 1, 0, 'Bed Room', 'Bed Room11', 'Bed Room1111', 1.00, 2.00, 3.00, 6.00, 1, NULL, 12.00, 72.00, 0.00, 0.00, 2.00, 3.00, 0.00, '0', '2022-11-06 22:39:05.979', NULL, NULL, NULL, NULL);
INSERT INTO public.quotation_main_item (quotation_id, seq_no, main_item_id, room_type, main_item_title, main_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) VALUES (11, 1, 0, 'Bed Room', 'Bed Room11', 'Bed Room1111', 1.00, 2.00, 3.00, 6.00, 1, NULL, 12.00, 72.00, 0.00, 0.00, 2.00, 3.00, 0.00, '0', '2022-11-06 22:55:21.777', NULL, NULL, NULL, NULL);
INSERT INTO public.quotation_main_item (quotation_id, seq_no, main_item_id, room_type, main_item_title, main_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) VALUES (12, 1, 0, 'Bed Room', 'Bed Room11', 'Bed Room1111', 1.00, 2.00, 3.00, 6.00, 1, NULL, 12.00, 72.00, 0.00, 0.00, 2.00, 3.00, 0.00, '0', '2022-11-06 22:56:48.68', NULL, NULL, NULL, NULL);
INSERT INTO public.quotation_main_item (quotation_id, seq_no, main_item_id, room_type, main_item_title, main_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) VALUES (13, 1, 0, 'Bed Room', 'Bed Room11', 'Bed Room1111', 1.00, 2.00, 3.00, 6.00, 1, NULL, 12.00, 72.00, 0.00, 0.00, 2.00, 3.00, 0.00, '0', '2022-11-07 02:34:57.186', NULL, NULL, NULL, NULL);
INSERT INTO public.quotation_main_item (quotation_id, seq_no, main_item_id, room_type, main_item_title, main_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) VALUES (77, 0, 1, 'Bed Room', NULL, 'zaaz', 1.00, NULL, 400.00, 1.00, 1, 0.00, 111.00, 111.00, 0.00, 111.00, NULL, NULL, 0.00, '21', '2022-11-10 21:05:37.521', NULL, NULL, 400.00, 'type_2');
INSERT INTO public.quotation_main_item (quotation_id, seq_no, main_item_id, room_type, main_item_title, main_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) VALUES (77, 1, 2, 'Kitchen13', NULL, 'Main item desc', 1.00, NULL, 200.00, 1.00, 1, 0.00, 200.00, 200.00, 0.00, 200.00, NULL, NULL, 0.00, '21', '2022-11-10 21:09:09.367', NULL, NULL, 200.00, 'type_1');
INSERT INTO public.quotation_main_item (quotation_id, seq_no, main_item_id, room_type, main_item_title, main_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) VALUES (81, 0, 1, 'Bed Room', NULL, 'zaaz', 1.00, NULL, 400.00, 1.00, 1, 0.00, 111.00, 111.00, 0.00, 111.00, NULL, NULL, 0.00, '21', '2022-11-10 21:35:26.998', NULL, NULL, 400.00, 'type_2');
INSERT INTO public.quotation_main_item (quotation_id, seq_no, main_item_id, room_type, main_item_title, main_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) VALUES (82, 0, 1, 'Bed Room', NULL, 'zaaz', 1.00, NULL, 400.00, 1.00, 1, 0.00, 111.00, 111.00, 0.00, 111.00, NULL, NULL, 0.00, '21', '2022-11-10 21:37:23.651', NULL, NULL, 400.00, 'type_2');
INSERT INTO public.quotation_main_item (quotation_id, seq_no, main_item_id, room_type, main_item_title, main_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) VALUES (83, 0, 1, 'Bed Room', NULL, 'zaaz', 1.00, NULL, 400.00, 1.00, 1, 0.00, 111.00, 111.00, 0.00, 111.00, NULL, NULL, 0.00, '21', '2022-11-10 21:50:20.556', NULL, NULL, 400.00, 'type_2');
INSERT INTO public.quotation_main_item (quotation_id, seq_no, main_item_id, room_type, main_item_title, main_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) VALUES (84, 0, 1, 'Bed Room', NULL, 'zaaz', 1.00, NULL, 400.00, 1.00, 1, 0.00, 111.00, 111.00, 0.00, 111.00, NULL, NULL, 0.00, '21', '2022-11-10 21:51:56.653', NULL, NULL, 400.00, 'type_2');
INSERT INTO public.quotation_main_item (quotation_id, seq_no, main_item_id, room_type, main_item_title, main_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) VALUES (85, 0, 1, 'Bed Room', NULL, 'zaaz', 1.00, NULL, 400.00, 1.00, 1, 0.00, 111.00, 111.00, 0.00, 111.00, NULL, NULL, 0.00, '21', '2022-11-10 21:53:10.046', NULL, NULL, 400.00, 'type_2');
INSERT INTO public.quotation_main_item (quotation_id, seq_no, main_item_id, room_type, main_item_title, main_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) VALUES (86, 0, 1, 'Bed Room', NULL, 'zaaz', 1.00, NULL, 400.00, 1.00, 1, 0.00, 111.00, 111.00, 0.00, 111.00, NULL, NULL, 0.00, '21', '2022-11-10 21:54:42.273', NULL, NULL, 400.00, 'type_2');
INSERT INTO public.quotation_main_item (quotation_id, seq_no, main_item_id, room_type, main_item_title, main_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) VALUES (87, 0, 1, 'Bed Room', NULL, 'zaaz', 1.00, NULL, 400.00, 1.00, 1, 0.00, 111.00, 111.00, 0.00, 111.00, NULL, NULL, 0.00, '21', '2022-11-10 21:57:21.628', NULL, NULL, 400.00, 'type_2');
INSERT INTO public.quotation_main_item (quotation_id, seq_no, main_item_id, room_type, main_item_title, main_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) VALUES (88, 0, 1, 'Bed Room', NULL, 'zaaz', 1.00, NULL, 400.00, 1.00, 1, 0.00, 111.00, 111.00, 0.00, 111.00, NULL, NULL, 0.00, '21', '2022-11-10 22:00:56.38', NULL, NULL, 400.00, 'type_2');
INSERT INTO public.quotation_main_item (quotation_id, seq_no, main_item_id, room_type, main_item_title, main_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) VALUES (89, 0, 1, 'Bed Room', NULL, 'zaaz', 1.00, NULL, 400.00, 1.00, 1, 0.00, 111.00, 111.00, 0.00, 111.00, NULL, NULL, 0.00, '21', '2022-11-10 22:02:03.92', NULL, NULL, 400.00, 'type_2');
INSERT INTO public.quotation_main_item (quotation_id, seq_no, main_item_id, room_type, main_item_title, main_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) VALUES (90, 0, 1, 'Bed Room', NULL, 'zaaz', 1.00, NULL, 400.00, 1.00, 1, 0.00, 111.00, 111.00, 0.00, 111.00, NULL, NULL, 0.00, '21', '2022-11-10 22:03:51.329', NULL, NULL, 400.00, 'type_2');
INSERT INTO public.quotation_main_item (quotation_id, seq_no, main_item_id, room_type, main_item_title, main_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) VALUES (91, 0, 1, 'Bed Room', 'aza', 'zaaz', 1.00, NULL, 400.00, 1.00, 1, 0.00, 111.00, 111.00, 0.00, 111.00, NULL, NULL, 0.00, '21', '2022-11-10 22:07:01.526', NULL, NULL, 400.00, 'type_2');
INSERT INTO public.quotation_main_item (quotation_id, seq_no, main_item_id, room_type, main_item_title, main_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) VALUES (92, 0, 1, 'Bed Room', 'aza', 'zaaz', 1.00, NULL, 400.00, 1.00, 1, 0.00, 111.00, 111.00, 0.00, 111.00, NULL, NULL, 0.00, '21', '2022-11-10 22:10:22.55', NULL, NULL, 400.00, 'type_2');
INSERT INTO public.quotation_main_item (quotation_id, seq_no, main_item_id, room_type, main_item_title, main_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) VALUES (92, 1, 2, 'Kitchen13', 'main Item 1', 'Main item desc', 1.00, NULL, 200.00, 1.00, 1, 0.00, 200.00, 200.00, 0.00, 200.00, NULL, NULL, 0.00, '21', '2022-11-10 22:10:29.433', NULL, NULL, 200.00, 'type_1');
INSERT INTO public.quotation_main_item (quotation_id, seq_no, main_item_id, room_type, main_item_title, main_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) VALUES (98, 0, 1, 'Bed Room', 'aza', 'zaaz', 1.00, NULL, 400.00, 1.00, 1, 0.00, 111.00, 111.00, 0.00, 111.00, NULL, NULL, 0.00, '21', '2022-11-11 07:00:17.508', NULL, NULL, 400.00, 'type_2');
INSERT INTO public.quotation_main_item (quotation_id, seq_no, main_item_id, room_type, main_item_title, main_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) VALUES (99, 0, 1, 'Bed Room', 'aza', 'zaaz', 1.00, NULL, 400.00, 1.00, 1, 0.00, 111.00, 111.00, 0.00, 111.00, NULL, NULL, 0.00, '21', '2022-11-11 07:01:29.87', NULL, NULL, 400.00, 'type_2');
INSERT INTO public.quotation_main_item (quotation_id, seq_no, main_item_id, room_type, main_item_title, main_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) VALUES (100, 0, 1, 'Bed Room', 'aza', 'zaaz', 1.00, NULL, 400.00, 1.00, 1, 0.00, 111.00, 111.00, 0.00, 111.00, NULL, NULL, 0.00, '21', '2022-11-11 07:04:59.271', NULL, NULL, 400.00, 'type_2');
INSERT INTO public.quotation_main_item (quotation_id, seq_no, main_item_id, room_type, main_item_title, main_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) VALUES (101, 0, 1, 'Bed Room', 'aza', 'zaaz', 1.00, NULL, 400.00, 1.00, 1, 0.00, 111.00, 111.00, 0.00, 111.00, NULL, NULL, 0.00, '21', '2022-11-11 07:07:24.191', NULL, NULL, 400.00, 'type_2');
INSERT INTO public.quotation_main_item (quotation_id, seq_no, main_item_id, room_type, main_item_title, main_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) VALUES (102, 0, 1, 'Bed Room', 'aza', 'zaaz', 1.00, NULL, 400.00, 1.00, 1, 0.00, 111.00, 111.00, 0.00, 111.00, NULL, NULL, 0.00, '21', '2022-11-11 07:09:44.835', NULL, NULL, 400.00, 'type_2');
INSERT INTO public.quotation_main_item (quotation_id, seq_no, main_item_id, room_type, main_item_title, main_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) VALUES (103, 0, 1, 'Bed Room', 'aza', 'zaaz', 1.00, NULL, 400.00, 1.00, 1, 0.00, 111.00, 111.00, 0.00, 111.00, NULL, NULL, 0.00, '21', '2022-11-11 07:11:10.625', NULL, NULL, 400.00, 'type_2');
INSERT INTO public.quotation_main_item (quotation_id, seq_no, main_item_id, room_type, main_item_title, main_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) VALUES (104, 0, 1, 'Bed Room', 'aza', 'zaaz', 1.00, NULL, 400.00, 1.00, 1, 0.00, 111.00, 111.00, 0.00, 111.00, NULL, NULL, 0.00, '21', '2022-11-11 07:17:25.375', NULL, NULL, 400.00, 'type_2');
INSERT INTO public.quotation_main_item (quotation_id, seq_no, main_item_id, room_type, main_item_title, main_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) VALUES (105, 0, 1, 'Bed Room', 'aza', 'zaaz', 1.00, NULL, 400.00, 1.00, 1, 0.00, 111.00, 111.00, 0.00, 111.00, NULL, NULL, 0.00, '21', '2022-11-11 07:27:23.444', NULL, NULL, 400.00, 'type_2');
INSERT INTO public.quotation_main_item (quotation_id, seq_no, main_item_id, room_type, main_item_title, main_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) VALUES (106, 0, 1, 'Bed Room', 'aza', 'zaaz', 1.00, NULL, 400.00, 1.00, 1, 0.00, 111.00, 111.00, 0.00, 111.00, NULL, NULL, 0.00, '21', '2022-11-11 07:31:19.315', NULL, NULL, 400.00, 'type_2');
INSERT INTO public.quotation_main_item (quotation_id, seq_no, main_item_id, room_type, main_item_title, main_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) VALUES (107, 0, 1, 'Bed Room', 'aza', 'zaaz', 1.00, NULL, 400.00, 1.00, 1, 0.00, 111.00, 111.00, 0.00, 111.00, NULL, NULL, 0.00, '21', '2022-11-11 07:33:31.35', NULL, NULL, 400.00, 'type_2');
INSERT INTO public.quotation_main_item (quotation_id, seq_no, main_item_id, room_type, main_item_title, main_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) VALUES (108, 0, 1, 'Bed Room', 'aza', 'zaaz', 1.00, NULL, 400.00, 1.00, 1, 0.00, 111.00, 111.00, 0.00, 111.00, NULL, NULL, 0.00, '21', '2022-11-11 07:36:26.077', NULL, NULL, 400.00, 'type_2');
INSERT INTO public.quotation_main_item (quotation_id, seq_no, main_item_id, room_type, main_item_title, main_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) VALUES (109, 0, 1, 'Bed Room', 'aza', 'zaaz', 1.00, NULL, 400.00, 1.00, 1, 0.00, 111.00, 111.00, 0.00, 111.00, NULL, NULL, 0.00, '21', '2022-11-11 07:37:55.469', NULL, NULL, 400.00, 'type_2');
INSERT INTO public.quotation_main_item (quotation_id, seq_no, main_item_id, room_type, main_item_title, main_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) VALUES (110, 0, 1, 'Bed Room', 'aza', 'zaaz', 1.00, NULL, 400.00, 1.00, 1, 0.00, 111.00, 111.00, 0.00, 111.00, NULL, NULL, 0.00, '21', '2022-11-11 07:48:31.686', NULL, NULL, 400.00, 'type_2');
INSERT INTO public.quotation_main_item (quotation_id, seq_no, main_item_id, room_type, main_item_title, main_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) VALUES (110, 1, 1, 'Bed Room', 'aza', 'zaaz', 1.00, NULL, 400.00, 1.00, 1, 0.00, 111.00, 111.00, 0.00, 111.00, NULL, NULL, 0.00, '21', '2022-11-11 07:48:41.444', NULL, NULL, 400.00, 'type_2');
INSERT INTO public.quotation_main_item (quotation_id, seq_no, main_item_id, room_type, main_item_title, main_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) VALUES (111, 0, 1, 'Bed Room', 'aza', 'zaaz', 1.00, NULL, 400.00, 1.00, 1, 0.00, 111.00, 111.00, 0.00, 111.00, NULL, NULL, 0.00, '21', '2022-11-11 07:55:07.382', NULL, NULL, 400.00, 'type_2');
INSERT INTO public.quotation_main_item (quotation_id, seq_no, main_item_id, room_type, main_item_title, main_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) VALUES (111, 1, 1, 'Bed Room', 'aza', 'zaaz', 1.00, NULL, 400.00, 1.00, 1, 0.00, 111.00, 111.00, 0.00, 111.00, NULL, NULL, 0.00, '21', '2022-11-11 07:55:24.665', NULL, NULL, 400.00, 'type_2');
INSERT INTO public.quotation_main_item (quotation_id, seq_no, main_item_id, room_type, main_item_title, main_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) VALUES (112, 0, 1, 'Bed Room', 'aza', 'zaaz', 1.00, NULL, 400.00, 1.00, 1, 0.00, 111.00, 111.00, 0.00, 111.00, NULL, NULL, 0.00, '21', '2022-11-11 07:57:40.687', NULL, NULL, 400.00, 'type_2');
INSERT INTO public.quotation_main_item (quotation_id, seq_no, main_item_id, room_type, main_item_title, main_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) VALUES (113, 0, 1, 'Bed Room', 'aza', 'zaaz', 1.00, NULL, 400.00, 1.00, 1, 0.00, 111.00, 111.00, 0.00, 111.00, NULL, NULL, 0.00, '21', '2022-11-11 08:00:12.635', NULL, NULL, 400.00, 'type_2');
INSERT INTO public.quotation_main_item (quotation_id, seq_no, main_item_id, room_type, main_item_title, main_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) VALUES (113, 1, 1, 'Bed Room', 'aza', 'zaaz', 1.00, NULL, 400.00, 1.00, 1, 0.00, 111.00, 111.00, 0.00, 111.00, NULL, NULL, 0.00, '21', '2022-11-11 08:00:27.797', NULL, NULL, 400.00, 'type_2');
INSERT INTO public.quotation_main_item (quotation_id, seq_no, main_item_id, room_type, main_item_title, main_item_desc, length, height, depth, tot_area, quantity, org_unit_price, unit_price, tot_price, disc_price, net_price, cgst, sgst, igst, inserted_by, inserted_date, updated_by, updated_date, main_item_depth, tax_type) VALUES (114, 0, 1, 'Bed Room', 'aza', 'zaaz', 1.00, NULL, 400.00, 1.00, 1, 0.00, 111.00, 111.00, 0.00, 111.00, NULL, NULL, 0.00, '21', '2022-11-11 08:03:29.358', NULL, NULL, 400.00, 'type_2');


--
-- TOC entry 3730 (class 0 OID 16455)
-- Dependencies: 223
-- Data for Name: shop_detail; Type: TABLE DATA; Schema: public; Owner: postgres
--



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


-- Completed on 2022-11-11 04:14:15 EST

--
-- PostgreSQL database dump complete
--

