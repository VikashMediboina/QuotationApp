--
-- PostgreSQL database dump
--

-- Dumped from database version 15.0
-- Dumped by pg_dump version 15.0

-- Started on 2022-11-06 23:51:28 EST
DROP DATABASE IF EXISTS "QuotationDB";

CREATE DATABASE "QuotationDB"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
	
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
-- TOC entry 3727 (class 0 OID 0)
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
    updated_date timestamp without time zone
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
    customer_name character varying
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


-- Completed on 2022-11-06 23:51:28 EST

--
-- PostgreSQL database dump complete
--

